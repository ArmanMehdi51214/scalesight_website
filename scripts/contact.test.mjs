import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, writeFile, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

test("enquiry validation and server-confirmed delivery", async (suite) => {
  const dir = await mkdtemp(join(tmpdir(), "scalesight-contact-"));
  const compile = (text) =>
    ts.transpileModule(text, {
      compilerOptions: {
        target: ts.ScriptTarget.ES2022,
        module: ts.ModuleKind.ES2022,
      },
    }).outputText;
  const validationPath = join(dir, "validation.mjs");
  await writeFile(
    validationPath,
    compile(await readFile("lib/contact-validation.ts", "utf8")),
  );
  const routeSource = (
    await readFile("app/api/contact/route.ts", "utf8")
  ).replace(
    '"@/lib/contact-validation"',
    JSON.stringify(pathToFileURL(validationPath).href),
  );
  const routePath = join(dir, "route.mjs");
  await writeFile(routePath, compile(routeSource));
  const { validateEnquiry } = await import(pathToFileURL(validationPath).href);
  const { POST } = await import(pathToFileURL(routePath).href);
  const good = {
    name: "Synthetic Test",
    email: "qa@example.test",
    company: "Test Fixture",
    website: "https://example.test",
    role: "Operations",
    channels: ["Retail"],
    decision: "Compare options for a test fixture.",
    intent: "pilot",
    companyContact: "",
  };
  const request = (payload = good, headers = {}) =>
    new Request("https://example.test/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        origin: "https://example.test",
        ...headers,
      },
      body: JSON.stringify(payload),
    });
  const keys = [
    "CONTACT_DELIVERY_URL",
    "CONTACT_DELIVERY_TOKEN",
    "CONTACT_DELIVERY_INBOX",
  ];
  const saved = keys.map((key) => process.env[key]);
  const originalFetch = globalThis.fetch;
  keys.forEach((key) => delete process.env[key]);
  try {
    await suite.test(
      "required fields, channels, URLs and lengths are validated",
      () => {
        assert.deepEqual(validateEnquiry(good).errors, {});
        const { errors } = validateEnquiry({
          ...good,
          name: "",
          email: "bad",
          company: "",
          website: "javascript:alert(1)",
          channels: ["Unknown"],
          decision: "x".repeat(3001),
        });
        for (const key of [
          "name",
          "email",
          "company",
          "website",
          "channels",
          "decision",
        ])
          assert.ok(errors[key]);
      },
    );
    await suite.test("cross-origin requests are rejected", async () =>
      assert.equal(
        (await POST(request(good, { origin: "https://other.test" }))).status,
        403,
      ),
    );
    await suite.test(
      "request host is respected behind the application server",
      async () =>
        assert.equal(
          (await POST(request(good, { host: "example.test" }))).status,
          503,
        ),
    );
    await suite.test("cross-site fetch metadata is rejected", async () =>
      assert.equal(
        (await POST(request(good, { "sec-fetch-site": "cross-site" }))).status,
        403,
      ),
    );
    await suite.test("unsupported content format is rejected", async () =>
      assert.equal(
        (await POST(request(good, { "Content-Type": "text/plain" }))).status,
        415,
      ),
    );
    await suite.test("oversized payload is rejected", async () =>
      assert.equal(
        (await POST(request({ ...good, decision: "x".repeat(17000) }))).status,
        413,
      ),
    );
    await suite.test("invalid JSON is rejected", async () =>
      assert.equal(
        (
          await POST(
            new Request("https://example.test/api/contact", {
              method: "POST",
              headers: {
                origin: "https://example.test",
                "Content-Type": "application/json",
              },
              body: "{",
            }),
          )
        ).status,
        400,
      ),
    );
    await suite.test("server returns field errors", async () => {
      const response = await POST(request({ ...good, name: "" }));
      assert.equal(response.status, 422);
      assert.ok((await response.json()).errors.name);
    });
    await suite.test("honeypot never creates a false success", async () =>
      assert.equal(
        (await POST(request({ ...good, companyContact: "bot" }))).status,
        400,
      ),
    );
    await suite.test("unconfigured delivery cannot claim receipt", async () => {
      const response = await POST(request());
      assert.equal(response.status, 503);
      assert.equal((await response.json()).received, undefined);
    });
    process.env.CONTACT_DELIVERY_URL = "https://adapter.example.test/receive";
    process.env.CONTACT_DELIVERY_TOKEN = "test-only-token";
    process.env.CONTACT_DELIVERY_INBOX = "fixture@example.test";
    await suite.test(
      "confirmed adapter receipt is required; no real message sent",
      async () => {
        let sent;
        globalThis.fetch = async (url, options) => {
          sent = { url, options };
          return Response.json({ accepted: true });
        };
        const response = await POST(request());
        assert.equal(response.status, 200);
        assert.equal((await response.json()).received, true);
        assert.equal(
          sent.options.headers.Authorization,
          "Bearer test-only-token",
        );
        const payload = JSON.parse(sent.options.body);
        assert.equal(payload.to, "fixture@example.test");
        assert.equal(payload.enquiry.intent, "pilot");
        assert.equal(payload.enquiry.companyContact, undefined);
      },
    );
    await suite.test(
      "an unconfirmed response cannot claim success",
      async () => {
        globalThis.fetch = async () => Response.json({ ok: true });
        assert.equal((await POST(request())).status, 502);
      },
    );
    await suite.test("provider failure cannot claim success", async () => {
      globalThis.fetch = async () => new Response("failed", { status: 500 });
      assert.equal((await POST(request())).status, 502);
    });
    await suite.test("network failure cannot claim success", async () => {
      globalThis.fetch = async () => {
        throw new Error("test failure");
      };
      assert.equal((await POST(request())).status, 502);
    });
  } finally {
    globalThis.fetch = originalFetch;
    keys.forEach((key, index) => {
      if (saved[index] === undefined) delete process.env[key];
      else process.env[key] = saved[index];
    });
    await rm(dir, { recursive: true, force: true });
  }
});
