import { useMemo, useState } from "react";
import Layout from "../components/layout/Layout";

type Tab = "SIP" | "LUMPSUM" | "FD" | "RD";

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));

const ValueChip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-white/90 text-sm hover:bg-white/20 hover:scale-105 transition-all duration-300">
    {children}
  </span>
);


const Donut = ({ invested, returns }: { invested: number; returns: number }) => {
  const total = Math.max(1, invested + returns);
  const pct = (returns / total) * 100;
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 group">
      <div
        className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(0,255,151,0.3)]"
        style={{
          background: `conic-gradient(#00FF97 ${pct}%, rgba(255,255,255,0.12) 0)`
        }}
      >
        <div className="absolute inset-8 sm:inset-10 rounded-full bg-[#0A1E1A] group-hover:bg-[#0A1E1A]/90 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-white text-lg sm:text-xl font-semibold group-hover:text-stockstrail-green-light transition-colors duration-300">
              {pct.toFixed(1)}%
            </div>
            <div className="text-white/60 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-300">
              Returns
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/80">
        <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
          <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#00FF97] group-hover:shadow-[0_0_10px_rgba(0,255,151,0.5)] transition-all duration-300" />
          <span className="group-hover:text-white transition-colors duration-300">EST. RETURN</span>
        </div>
        <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
          <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300" />
          <span className="group-hover:text-white transition-colors duration-300">INVESTED AMOUNT</span>
        </div>
      </div>
    </div>
  );
};

const Calculators = () => {
  const [tab, setTab] = useState<Tab>("SIP");
  const [amount, setAmount] = useState(32500);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const months = years * 12;

  const sip = useMemo(() => {
    const i = rate / 100 / 12;
    const invested = amount * months;
    const value = i === 0 ? invested : amount * ((Math.pow(1 + i, months) - 1) * (1 + i)) / i;
    const returns = Math.max(0, value - invested);
    return { invested, returns, value };
  }, [amount, rate, months]);

  const lumpsum = useMemo(() => {
    const i = rate / 100;
    const principal = amount;
    const value = principal * Math.pow(1 + i, years);
    const invested = principal;
    const returns = Math.max(0, value - invested);
    return { invested, returns, value };
  }, [amount, rate, years]);

  const fd = useMemo(() => {
    const i = rate / 100;
    const principal = amount;
    const value = principal * Math.pow(1 + i / 4, 4 * years);
    const returns = Math.max(0, value - principal);
    return { invested: principal, returns, value };
  }, [amount, rate, years]);

  const rd = useMemo(() => {
    const i = rate / 100 / 12;
    const n = months;
    const m = amount;
    const value = i === 0 ? m * n : m * (Math.pow(1 + i, n) - 1) / i;
    const invested = m * n;
    const returns = Math.max(0, value - invested);
    return { invested, returns, value };
  }, [amount, rate, months]);

  const active = tab === "SIP" ? sip : tab === "LUMPSUM" ? lumpsum : tab === "FD" ? fd : rd;

  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-10">CALCULATORS</h1>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-10">
            <div className="flex flex-wrap gap-3 mb-8">
              {(["SIP","LUMPSUM","FD","RD"] as Tab[]).map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-1.5 rounded-full text-sm tracking-wide border transition-all duration-300 ${
                    tab===t
                      ?"bg-stockstrail-green-light/20 text-stockstrail-green-light border-stockstrail-green-light shadow-[0_0_15px_rgba(0,255,151,0.3)] scale-105"
                      :"text-white/70 border-transparent hover:border-stockstrail-green-light/50 hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-7">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-white/80">
                      <span className="uppercase tracking-wide text-xs sm:text-sm">TOTAL INVESTMENT</span>
                      <ValueChip>₹ {formatINR(amount)}</ValueChip>
                    </div>
                    <input type="range" min={1000} max={200000} step={500} value={amount} onChange={(e)=>setAmount(Number(e.target.value))} className="w-full accent-[#00FF97]" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-white/80">
                      <span className="uppercase tracking-wide text-xs sm:text-sm">EXPECTED RETURN RATE (P.A)</span>
                      <ValueChip>{rate} %</ValueChip>
                    </div>
                    <input type="range" min={1} max={24} step={1} value={rate} onChange={(e)=>setRate(Number(e.target.value))} className="w-full accent-[#00FF97]" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-white/80">
                      <span className="uppercase tracking-wide text-xs sm:text-sm">TIME PERIOD</span>
                      <ValueChip>{years} Yr</ValueChip>
                    </div>
                    <input type="range" min={1} max={30} step={1} value={years} onChange={(e)=>setYears(Number(e.target.value))} className="w-full accent-[#00FF97]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90">
                  <div className="rounded-lg bg-white/5 p-4 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.2)] transition-all duration-300 group cursor-pointer">
                    <div className="text-white/60 text-xs uppercase group-hover:text-white/80 transition-colors duration-300">Invested amount</div>
                    <div className="text-lg group-hover:text-stockstrail-green-light transition-colors duration-300">₹{formatINR(active.invested)}</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.2)] transition-all duration-300 group cursor-pointer">
                    <div className="text-white/60 text-xs uppercase group-hover:text-white/80 transition-colors duration-300">Est. returns</div>
                    <div className="text-lg group-hover:text-stockstrail-green-light transition-colors duration-300">₹{formatINR(active.returns)}</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.2)] transition-all duration-300 group cursor-pointer">
                    <div className="text-white/60 text-xs uppercase group-hover:text-white/80 transition-colors duration-300">Total value</div>
                    <div className="text-lg group-hover:text-stockstrail-green-light transition-colors duration-300">₹{formatINR(active.value)}</div>
                  </div>
                </div>

                <a href="#" className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white w-fit hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 text-sm sm:text-base group">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  INVEST NOW
                </a>
              </div>

              <div className="flex items-center justify-center">
                <Donut invested={active.invested} returns={active.returns} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Calculators;
