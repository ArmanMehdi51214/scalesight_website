export default function ShaderBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(4,180,253,0.22),transparent_62%)] blur-3xl" />
      <div className="absolute left-[-10rem] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.18),transparent_64%)] blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-6rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(65,124,255,0.14),transparent_60%)] blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0)_0%,rgba(7,17,31,0.32)_40%,rgba(7,17,31,0.82)_100%)]" />
    </div>
  );
}
