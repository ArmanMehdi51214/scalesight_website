export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">

      <div className="mx-auto max-w-7xl px-6 text-center">

        <div
          className="
          mx-auto
          mb-8
          inline-flex
          items-center
          rounded-full
          border
          border-white/10
          bg-white/5
          px-5
          py-2
          text-sm
          text-[#B7C1D1]
          "
        >
          Forecasting & Operational Visibility for Scaling Ecommerce Brands
        </div>

        <h1
          className="
          mx-auto
          max-w-6xl
          text-6xl
          font-bold
          tracking-tight
          leading-[0.92]
          text-white
          md:text-8xl
          "
        >
          Plan Growth With
          <br />
          More Confidence.
        </h1>

        <p
          className="
          mx-auto
          mt-8
          max-w-3xl
          text-lg
          leading-relaxed
          text-[#B7C1D1]
          md:text-xl
          "
        >
          Turn sales, inventory, and customer data into
          clearer forecasts, smarter planning, and
          better business decisions.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">

          <button
            className="
            rounded-full
            bg-gradient-to-r
            from-[#005EF0]
            to-[#04B4FD]
            px-8
            py-4
            font-medium
            text-white
            transition-all
            duration-300
            hover:shadow-[0_0_40px_rgba(4,180,253,0.35)]
            "
          >
            Book a Strategy Call
          </button>

          <button
            className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-8
            py-4
            text-white
            transition
            hover:bg-white/10
            "
          >
            Watch 90-Second Walkthrough
          </button>

        </div>

      </div>
    </section>
  );
}