import Image from "next/image";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07111f]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <div className="flex items-center">
        <Image
            src="/logo.svg"
            alt="ScaleSight"
            width={220}
            height={48}
            priority
        />
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#" className="text-[#A6B2C8] hover:text-white transition">
            Services
          </a>

          <a href="#" className="text-[#A6B2C8] hover:text-white transition">
            Process
          </a>

          <a href="#" className="text-[#A6B2C8] hover:text-white transition">
            Case Studies
          </a>
        </nav>

        <button
          className="
          rounded-full
          bg-gradient-to-r
          from-[#005EF0]
          to-[#04B4FD]
          px-6
          py-3
          font-medium
          text-white
          transition-all
          duration-300
          hover:shadow-[0_0_40px_rgba(4,180,253,0.35)]
          "
        >
          Book Call
        </button>

      </div>
    </header>
  );
}