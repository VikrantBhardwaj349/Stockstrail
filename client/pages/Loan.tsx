import Layout from "../components/layout/Layout";

const Loan = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-4">Quick Loans to Fulfill Your Dreams</h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">Simple process, affordable rates, fast approvals.</p>
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
            <img src="/services/loan.jpg" alt="Loan Services" className="w-full h-[280px] sm:h-[360px] object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Copy */}
          <div>
            {/* Overview */}
            <h2 className="text-white text-2xl sm:text-3xl mb-3">Overview</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Loans help you achieve goals without waiting years to save. Whether for a home, education, business expansion,
              or emergencies, our curated loan options provide the flexibility and speed you need to move ahead.
            </p>

            {/* Types of Loans */}
            <h3 className="text-white text-xl sm:text-2xl mb-2">Types of loans we offer</h3>
            <ul className="space-y-2 text-white/80 mb-6 list-disc pl-5">
              <li><span className="text-white">Personal Loans:</span> For medical needs, weddings, travel, or emergencies.</li>
              <li><span className="text-white">Home Loans:</span> Buy, build, or renovate your dream house.</li>
              <li><span className="text-white">Business Loans:</span> Expand operations, purchase equipment, manage working capital.</li>
              <li><span className="text-white">Education Loans:</span> Pursue higher studies with flexible repayment options.</li>
            </ul>

            {/* Why Choose Us */}
            <h3 className="text-white text-xl sm:text-2xl mb-2">Why borrow from us?</h3>
            <ul className="space-y-2 text-white/80 mb-6 list-disc pl-5">
              <li>Lowest possible interest rates across lenders.</li>
              <li>Minimal documentation and transparent processing.</li>
              <li>Flexible EMIs and repayment periods tailored to you.</li>
              <li>Instant approvals with quick disbursal.</li>
              <li>100% transparent — no hidden charges.</li>
            </ul>

            {/* Example */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 mb-6">
              <p className="text-white/85">
                Example: A ₹5,00,000 personal loan at 11% p.a. can have EMIs starting nearly ₹10,000/month — subject to tenure and profile.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a href="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans">
                <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                Apply for a Loan
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Loan;



