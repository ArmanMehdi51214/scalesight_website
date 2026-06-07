import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">

      <Navbar />

      <Hero />

      <section className="border-y border-white/5 py-10">
        <div className="mx-auto max-w-6xl px-6">

          <p className="text-center text-sm uppercase tracking-[0.2em] text-[#7f8ca3]">
            Trusted by scaling ecommerce brands
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-12 text-[#A6B2C8]">
            <span>SHOPIFY</span>
            <span>DTC BRANDS</span>
            <span>OPERATIONS</span>
            <span>INVENTORY</span>
            <span>GROWTH TEAMS</span>
          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div
          className="
          rounded-3xl
          border
          border-[rgba(255,255,255,0.08)]
          bg-[#0c1727]
          p-8
          "
        >

          <div className="flex h-[550px] items-center justify-center rounded-2xl border border-white/5">

            <p className="text-[#7f8ca3] text-lg">
              Premium Dashboard Visual Coming Next
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}