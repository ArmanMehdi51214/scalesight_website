function MiniBars() {
  return (
    <div className="mt-5 flex h-28 items-end gap-3">
      {[40, 58, 48, 80, 72].map((height, index) => (
        <div key={height} className="flex-1">
          <div
            className={`rounded-t-[18px] ${
              index === 3 ? "bg-[#04b4fd]" : "bg-[#2563eb]"
            }`}
            style={{ height }}
          />
        </div>
      ))}
    </div>
  );
}

function MiniLines() {
  return (
    <svg aria-hidden="true" className="mt-5 h-24 w-full" viewBox="0 0 240 96" fill="none">
      <path
        d="M0 84C22 74 42 70 57 59C73 47 92 55 109 42C126 30 142 38 157 31C176 22 194 27 210 20C221 15 231 13 240 12"
        stroke="rgba(4,180,253,0.9)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M0 90C23 82 45 79 62 75C78 70 99 70 116 63C135 55 150 52 168 45C189 38 212 35 240 26"
        stroke="rgba(120,149,255,0.38)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
    </svg>
  );
}

function FanPanel({
  title,
  subtitle,
  className,
  children,
}: {
  title: string;
  subtitle: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`fan-panel absolute top-0 w-[70%] rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,23,39,0.97),rgba(8,16,27,0.92))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.36)] ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-white">{title}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
            {subtitle}
          </p>
        </div>
        <span className="rounded-full border border-white/8 bg-[rgba(255,255,255,0.06)] px-3 py-1 text-[11px] text-[var(--text-secondary)]">
          Updated now
        </span>
      </div>

      {children}
    </article>
  );
}

export default function PerspectiveShowcase() {
  return (
    <div className="relative h-[34rem] perspective-[1800px]">
      <div className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_center,rgba(4,180,253,0.18),transparent_58%)] blur-3xl" />

      <FanPanel
        title="Executive Decision Dashboard"
        subtitle="Margin and growth view"
        className="left-0 top-16 origin-left -rotate-[9deg] scale-[0.9]"
      >
        <MiniLines />
        <div className="mt-5 space-y-3">
          {[
            ["Gross margin", "+2.1 pts"],
            ["Demand confidence", "Strong"],
            ["Cash exposure", "Moderate"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between text-sm">
              <span className="text-[var(--text-secondary)]">{label}</span>
              <span className="text-white">{value}</span>
            </div>
          ))}
        </div>
      </FanPanel>

      <FanPanel
        title="Weekly Planning Dashboard"
        subtitle="Central command layer"
        className="left-1/2 z-20 h-[26rem] -translate-x-1/2"
      >
        <MiniBars />
        <div className="mt-6 rounded-[22px] border border-white/8 bg-[#0b1625] p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[var(--text-secondary)]">Weekly priorities</p>
            <p className="text-sm text-white">5 active tracks</p>
          </div>

          <div className="mt-4 space-y-4">
            {[
              { label: "Promo readiness", width: "74%" },
              { label: "PO coverage", width: "58%" },
              { label: "Inventory rebalancing", width: "83%" },
            ].map((item) => (
              <div key={item.label} className="grid grid-cols-[132px_1fr] items-center gap-3">
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {item.label}
                </span>
                <div className="rounded-full bg-white/8 p-1">
                  <div
                    className="h-3 rounded-full bg-[linear-gradient(90deg,#04b4fd,#7c95ff)]"
                    style={{ width: item.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </FanPanel>

      <FanPanel
        title="Scenario Planning Dashboard"
        subtitle="What-if simulation"
        className="right-0 top-[4.5rem] origin-right rotate-[10deg] scale-[0.9]"
      >
        <div className="mt-5 grid grid-cols-2 gap-3">
          {[
            ["Promo lift", "+14%"],
            ["Stock risk", "-9%"],
            ["Lead time", "Stable"],
            ["Coverage", "11.2 wks"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[18px] border border-white/8 bg-[rgba(255,255,255,0.04)] p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                {label}
              </p>
              <p className="mt-3 text-lg font-medium text-white">{value}</p>
            </div>
          ))}
        </div>
      </FanPanel>
    </div>
  );
}
