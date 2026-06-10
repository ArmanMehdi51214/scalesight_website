const forecastBars = [52, 78, 60, 96, 88, 118, 104];
const heatmapRows = [
  [0.2, 0.35, 0.45, 0.65, 0.82, 0.55],
  [0.14, 0.28, 0.38, 0.55, 0.74, 0.9],
  [0.18, 0.32, 0.4, 0.48, 0.63, 0.76],
  [0.12, 0.24, 0.34, 0.52, 0.7, 0.84],
];

export default function DashboardGridShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <article className="dashboard-card">
        <div className="dashboard-card__header">
          <div>
            <p className="dashboard-card__title">Revenue Forecast</p>
            <p className="dashboard-card__subtle">13-week outlook</p>
          </div>
          <span className="dashboard-pill dashboard-pill--cyan">+12.4% QoQ</span>
        </div>

        <svg aria-hidden="true" className="mt-6 h-44 w-full" viewBox="0 0 480 176" fill="none">
          <path
            d="M0 138C37 132 61 129 87 120C110 112 132 95 156 89C187 80 210 92 236 75C269 53 296 61 325 47C351 34 373 42 397 31C425 18 447 22 480 11"
            stroke="rgba(4,180,253,0.92)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M0 149C49 136 88 132 119 122C147 114 171 111 196 104C225 95 255 88 282 77C311 65 336 58 363 53C395 48 432 40 480 28"
            stroke="rgba(128,149,255,0.42)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="10 12"
          />
        </svg>

        <div className="dashboard-card__footer">
          <span>$4.8M base plan</span>
          <span>$5.3M upside case</span>
        </div>
      </article>

      <article className="dashboard-card">
        <div className="dashboard-card__header">
          <div>
            <p className="dashboard-card__title">Inventory Health</p>
            <p className="dashboard-card__subtle">Status badges by category</p>
          </div>
          <span className="dashboard-pill dashboard-pill--violet">84% stable</span>
        </div>

        <div className="mt-6 grid gap-4">
          {[
            ["Core Basics", "Healthy", "emerald"],
            ["Seasonal Boost", "Watch", "amber"],
            ["Bundles", "At Risk", "rose"],
            ["Accessories", "Healthy", "emerald"],
          ].map(([label, status, tone]) => (
            <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-[rgba(255,255,255,0.04)] px-4 py-4">
              <span className="text-sm text-white">{label}</span>
              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  tone === "emerald"
                    ? "bg-emerald-400/12 text-emerald-300"
                    : tone === "amber"
                      ? "bg-amber-300/12 text-amber-200"
                      : "bg-rose-400/12 text-rose-200"
                }`}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
      </article>

      <article className="dashboard-card">
        <div className="dashboard-card__header">
          <div>
            <p className="dashboard-card__title">SKU Demand Forecast</p>
            <p className="dashboard-card__subtle">Heatmap by week and cohort</p>
          </div>
          <span className="dashboard-pill dashboard-pill--cyan">620 tracked SKUs</span>
        </div>

        <div className="mt-6 space-y-3">
          {heatmapRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-6 gap-3">
              {row.map((value, columnIndex) => (
                <div
                  key={`${rowIndex}-${columnIndex}`}
                  className="h-12 rounded-2xl border border-[rgba(255,255,255,0.06)]"
                  style={{
                    background: `linear-gradient(180deg, rgba(4,180,253,${value}), rgba(37,99,235,${Math.max(
                      value - 0.06,
                      0.1,
                    )}))`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </article>

      <article className="dashboard-card">
        <div className="dashboard-card__header">
          <div>
            <p className="dashboard-card__title">Operational Planning</p>
            <p className="dashboard-card__subtle">Gantt-style execution board</p>
          </div>
          <span className="dashboard-pill dashboard-pill--violet">6 workstreams</span>
        </div>

        <div className="mt-6 grid gap-4">
          {[
            { label: "Campaign lock", width: "68%", color: "#04b4fd" },
            { label: "PO release", width: "54%", color: "#3b82f6" },
            { label: "Inbound QA", width: "42%", color: "#60a5fa" },
            { label: "Merch review", width: "76%", color: "#7c95ff" },
          ].map((item) => (
            <div key={item.label} className="grid grid-cols-[110px_1fr] items-center gap-4">
              <span className="text-sm text-[var(--text-secondary)]">{item.label}</span>
              <div className="rounded-full bg-[rgba(255,255,255,0.06)] p-1">
                <div
                  className="h-4 rounded-full"
                  style={{
                    width: item.width,
                    background: `linear-gradient(90deg, ${item.color}, rgba(255,255,255,0.92))`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
          {forecastBars.map((_, index) => (
            <span key={index}>W{index + 1}</span>
          ))}
        </div>
      </article>
    </div>
  );
}
