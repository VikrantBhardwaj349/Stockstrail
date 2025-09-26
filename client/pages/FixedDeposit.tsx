import Layout from "../components/layout/Layout";

const FixedDeposit = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-4">Secure Your Savings with Fixed Deposits</h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">Guaranteed returns, flexible tenures, zero market risk.</p>
        </div>
      </section>

      {/* Content */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[500px] bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Visual */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 bg-white/5 group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
            <img src="/services/fd.jpg" alt="Fixed Deposit" className="w-full h-[280px] sm:h-[360px] object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Copy */}
          <div>
            {/* Overview */}
            <h2 className="text-white text-2xl sm:text-3xl mb-3">Overview</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Fixed Deposits (FDs) offer assured, fixed returns over a chosen tenure with minimal risk. You deposit a
              fixed amount for a set period, and earn interest at a guaranteed rate — ideal for conservative investors
              seeking stability and predictable income.
            </p>

            {/* Why People Prefer FDs */}
            <h3 className="text-white text-xl sm:text-2xl mb-2">Why people prefer FDs</h3>
            <ul className="space-y-2 text-white/80 mb-6 list-disc pl-5">
              <li>100% safety — insulated from market volatility.</li>
              <li>Guaranteed fixed returns for your tenure.</li>
              <li>Flexible tenure options from days to years.</li>
              <li>Premature withdrawal facility (nominal charges may apply).</li>
            </ul>

            {/* Why Choose Us */}
            <h3 className="text-white text-xl sm:text-2xl mb-2">Why choose our FD service?</h3>
            <ul className="space-y-2 text-white/80 mb-6 list-disc pl-5">
              <li>Attractive interest rates up to X% from reputed issuers.</li>
              <li>Monthly/Quarterly payout options for regular income.</li>
              <li>Tax-saving FD options under Section 80C.</li>
              <li>Quick, paperless application with assisted onboarding.</li>
            </ul>

            {/* Example */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 mb-6">
              <p className="text-white/85">
                Example: Deposit ₹1,00,000 in a 5-year FD at 7% — your maturity amount can be nearly ₹1,40,000.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a href="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans">
                <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                Apply for a Fixed Deposit
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FixedDeposit;



