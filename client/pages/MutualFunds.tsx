import Layout from "../components/layout/Layout";

const MutualFunds = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-4">Invest Smarter with Mutual Funds</h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">Grow your wealth steadily with expert-managed portfolios.</p>
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
            <img src="/services/mf2.png" alt="Mutual Funds" className="w-full h-[280px] sm:h-[360px] object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Copy */}
          <div>
            {/* Overview */}
            <h2 className="text-white text-2xl sm:text-3xl mb-3">Overview</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Mutual Funds are a convenient way to invest across a diversified basket of assets like stocks, bonds, and other
              securities. By spreading investments across sectors and instruments, they reduce risk and help build wealth steadily
              over time without the need to track markets daily.
            </p>

            {/* How It Works */}
            <h3 className="text-white text-xl sm:text-2xl mb-2">How it works</h3>
            <ol className="list-decimal pl-5 space-y-2 text-white/80 mb-6">
              <li>Invest a fixed amount via monthly SIP or deploy a lump sum.</li>
              <li>Expert fund managers allocate your money across suitable assets.</li>
              <li>Benefit from market growth and compounding over the long term.</li>
            </ol>

            {/* Why Choose Us */}
            <h3 className="text-white text-xl sm:text-2xl mb-2">Why choose Mutual Funds with us?</h3>
            <ul className="space-y-2 text-white/80 mb-6 list-disc pl-5">
              <li>Wide range of schemes: Equity (growth), Debt (stability), Hybrid (balance), ELSS (tax-saving).</li>
              <li>SIP starting from as low as ₹500/month.</li>
              <li>Transparent portfolio tracking with timely reviews.</li>
              <li>Expert-curated recommendations aligned to your goals and risk profile.</li>
            </ul>

            {/* Example */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 mb-6">
              <p className="text-white/85">
                Example: Start a ₹2,000 monthly SIP today — over 10 years, the power of compounding can help you build a sizeable
                corpus, bringing long-term goals within reach.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a href="https://www.assetplus.in/mfd/ARN-284122" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans">
                <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                Start your mutual fund journey
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MutualFunds;



