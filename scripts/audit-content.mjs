import { readdir, readFile } from "node:fs/promises";
import { join, extname } from "node:path";
const forbidden =
  /Shopify|handover|24\/7|monitoring|white[ -]label|revenue thresholds|dashboard we build|Fishwife|Alec|free trial|sign up|create account/i;
const sourceExtensions = new Set([
  ".ts",
  ".tsx",
  ".css",
  ".json",
  ".svg",
  ".txt",
]);
const buildExtensions = new Set([".html", ".rsc", ".body", ".meta"]);
const hits = [];
const permitted = [];
async function walk(dir, built = false) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const file = join(dir, entry.name);
    if (forbidden.test(entry.name))
      hits.push({ file, reason: "forbidden filename" });
    if (entry.isDirectory()) {
      await walk(file, built);
      continue;
    }
    if (!(built ? buildExtensions : sourceExtensions).has(extname(file)))
      continue;
    const text = await readFile(file, "utf8");
    text.split("\n").forEach((line, index) => {
      if (forbidden.test(line))
        hits.push({ file, line: index + 1, match: line.match(forbidden)[0] });
      if (/\blive\b/i.test(line))
        permitted.push({
          file,
          line: index + 1,
          reason: /aria-live/.test(line)
            ? "Accessible announcement region"
            : "Explicit synthetic/no-client-integration disclosure or framework serialization; inspect in context",
        });
    });
  }
}
for (const dir of ["app", "components", "content", "lib", "public"])
  await walk(dir);
await walk(".next/server/app", true);
console.log(
  JSON.stringify(
    {
      staleContentHits: hits,
      permittedLiveContexts: permitted,
      scope:
        "Active source, public asset names/SVG text, rendered HTML/RSC/build metadata. Source PDFs, historical audit, private original pixels and vendor runtime are excluded; pixels require visual review.",
    },
    null,
    2,
  ),
);
if (hits.length) process.exitCode = 1;
