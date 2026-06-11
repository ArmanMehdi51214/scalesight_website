export default function ShaderBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute bottom-[-16rem] left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(4,180,253,0.34),rgba(0,94,240,0.2),transparent_68%)] blur-3xl md:bottom-[-18rem] md:h-[48rem] md:w-[48rem] lg:h-[58rem] lg:w-[58rem]" />
      <div className="absolute bottom-[7rem] left-1/2 h-[18rem] w-[24rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(4,180,253,0.2),rgba(0,94,240,0.12),transparent_72%)] blur-3xl md:bottom-[8rem] md:h-[22rem] md:w-[32rem] lg:bottom-[9rem] lg:h-[28rem] lg:w-[40rem]" />
      <div className="absolute left-[-10rem] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.18),transparent_64%)] blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-6rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(65,124,255,0.14),transparent_60%)] blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0)_0%,rgba(7,17,31,0.32)_40%,rgba(7,17,31,0.82)_100%)]" />
    </div>
  );
}
