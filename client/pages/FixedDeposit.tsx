import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";

const FixedDeposit = () => {
  return (
    <Layout>
      <SEO
        title="Fixed Deposits - Secure & Guaranteed Returns | Stockstrail"
        description="Invest in Fixed Deposits with guaranteed returns, flexible tenure, and zero market risk. Compare FD rates and grow your savings safely with Stockstrail."
        keywords="fixed deposit, FD investment, guaranteed returns, safe investment, savings account, interest rates"
        url="/services/fixed-deposit"
      />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-96 bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-6">
            Secure Your Savings with Fixed Deposits
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Guaranteed returns, flexible tenure, zero market risk. Build stable wealth with assured interest rates.
          </p>
        </div>
      </section>

      {/* What is Fixed Deposit */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
              <img 
                src="/services/fd2.png" 
                alt="What is Fixed Deposit" 
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold text-stockstrail-green-light mb-6">
                What is a Fixed Deposit?
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                A Fixed Deposit (FD) is a secure investment option where you deposit a fixed amount of money with a bank or financial institution for a specific period.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                In return, you receive a guaranteed interest rate. FDs are considered one of the safest investment choices and are suitable for individuals who want stability and predictable returns.
              </p>
              <p className="text-white/80 leading-relaxed">
                Whether you're planning for short-term goals or simply want to park surplus funds safely, Fixed Deposits offer peace of mind with assured returns independent of market fluctuations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest in Fixed Deposits */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Invest in Fixed Deposits?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">Guaranteed Returns</h3>
              <p className="text-white/80">FDs offer assured returns that do not change with market conditions. The interest rate remains constant throughout the tenure.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">Low Risk</h3>
              <p className="text-white/80">FDs are not impacted by stock market fluctuations. Your capital remains protected, making it ideal for risk-averse investors.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">Flexible Tenure</h3>
              <p className="text-white/80">Choose an FD duration ranging from a few days to several years, depending on your financial goals and needs.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">Easy to Understand</h3>
              <p className="text-white/80">FDs follow a simple structure: Deposit money → Earn interest → Receive maturity amount. No complex terms or market-linked risks.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">Multiple Use Cases</h3>
              <p className="text-white/80">Ideal for emergency funds, saving for upcoming expenses, or parking idle money safely with guaranteed returns.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">DEPOSIT Insurance</h3>
              <p className="text-white/80">Bank deposits are protected under DICGC insurance up to ₹5 lakh, providing additional security and peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Fixed Deposits */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Types of Fixed Deposits
          </h2>

          <div className="space-y-8">
            {/* Regular FD */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Regular Fixed Deposit</h3>
              <p className="text-white/80 mb-4">
                A standard FD where you invest a lump sum and receive interest at a fixed rate. The maturity amount is simply principal + accumulated interest.
              </p>
              <p className="text-white/70 text-sm">
                <strong>Suitable for:</strong> Individuals who want guaranteed, stable returns without the need for regular payments.
              </p>
            </div>

            {/* Tax-Saving FD */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Tax-Saving Fixed Deposit</h3>
              <p className="text-white/80 mb-4">
                This FD comes with a 5-year lock-in period and offers tax benefits under Section 80C (up to ₹1,50,000). Perfect for those looking to reduce tax liability while saving.
              </p>
              <p className="text-white/70 text-sm">
                <strong>Suitable for:</strong> Individuals in higher tax brackets looking to save tax while earning guaranteed returns.
              </p>
            </div>

            {/* Senior Citizen FD */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Senior Citizen Fixed Deposit</h3>
              <p className="text-white/80 mb-4">
                Banks offer higher interest rates to senior citizens, generally 0.25% to 0.75% more than standard FDs. An excellent option for retirement income.
              </p>
              <p className="text-white/70 text-sm">
                <strong>Suitable for:</strong> Retired individuals aged 60+ seeking steady income with higher returns.
              </p>
            </div>

            {/* Recurring Deposit */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Recurring Deposit (RD)</h3>
              <p className="text-white/80 mb-4">
                In an RD, you deposit a fixed amount every month, and the bank pays interest similar to FD rates. Great for building savings gradually.
              </p>
              <p className="text-white/70 text-sm">
                <strong>Suitable for:</strong> Salaried individuals and beginners who want to save systematically month after month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Fixed Deposits Work */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            How Fixed Deposits Work
          </h2>

          <div className="space-y-4">
            {[
              "Select the investment amount and tenure based on your financial goal.",
              "Deposit the money in the FD account (lump sum).",
              "The bank pays interest at a fixed rate throughout the tenure.",
              "At maturity, you receive the principal amount plus accumulated interest.",
              "You may choose to renew or withdraw the FD on maturity."
            ].map((step, index) => (
              <div key={index} className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-stockstrail-green-light rounded-full flex items-center justify-center text-black font-semibold">
                  {index + 1}
                </div>
                <p className="text-white/80 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Payout Options */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Interest Payout Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cumulative */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">Cumulative FD</h3>
              <p className="text-white/80 mb-4">
                Interest is added to the principal and paid at the end of the tenure. This helps the investment grow faster due to compounding effect.
              </p>
              <div className="bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 rounded-lg p-4">
                <p className="text-sm text-white/80">
                  <strong className="text-white">Best for:</strong> Long-term investors who want maximum growth through compounding.
                </p>
              </div>
            </div>

            {/* Non-Cumulative */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">Non-Cumulative FD</h3>
              <p className="text-white/80 mb-4">
                Interest is paid out periodically: Monthly, Quarterly, Half-yearly, or Annually. Choose the frequency that suits your income needs.
              </p>
              <div className="bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 rounded-lg p-4">
                <p className="text-sm text-white/80">
                  <strong className="text-white">Best for:</strong> Retirees and individuals who need regular income for their living expenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Calculations */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Example Calculations
          </h2>

          <div className="space-y-6">
            <div className="bg-stockstrail-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <p className="text-stockstrail-green-light font-semibold mb-2">Example 1: Basic FD</p>
              <p className="text-white/80">You invest ₹1,00,000 for 1 year at 7% interest. At maturity, you receive approximately <strong className="text-stockstrail-green-light">₹1,07,000</strong>.</p>
            </div>

            <div className="bg-stockstrail-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <p className="text-stockstrail-green-light font-semibold mb-2">Example 2: Long-Term FD with Compounding</p>
              <p className="text-white/80">You invest ₹5,00,000 for 3 years at 7.5% (cumulative). The maturity amount becomes approximately <strong className="text-stockstrail-green-light">₹6,24,000</strong>.</p>
            </div>

            <div className="bg-stockstrail-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <p className="text-stockstrail-green-light font-semibold mb-2">Example 3: Senior Citizen FD with Regular Income</p>
              <p className="text-white/80">A senior citizen invests ₹2,00,000 at a senior-citizen rate of 8%. Annual interest payout becomes <strong className="text-stockstrail-green-light">₹16,000</strong> (can be received monthly as ₹1,333).</p>
            </div>

            <div className="bg-stockstrail-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <p className="text-white font-semibold mb-2 text-sm">⚠️ Note:</p>
              <p className="text-white/70 text-sm">These are illustrative examples. Actual returns depend on the exact interest rates offered by banks and the frequency of compounding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premature Withdrawal */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Premature Withdrawal Rules
          </h2>

          <div className="space-y-4">
            {[
              "Most banks allow premature withdrawal with a small penalty (typically 0.5% to 1% interest reduction).",
              "If you break the FD before maturity, you may receive lower interest than promised.",
              "Premature withdrawal is subject to the bank's specific terms and conditions.",
              "Tax-saving FDs (5-year lock-in) cannot be withdrawn before 5 years without tax implications."
            ].map((point, index) => (
              <div key={index} className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <span className="text-yellow-500 font-bold">!</span>
                <p className="text-white/80">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Invest */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Who Should Consider Fixed Deposits?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Individuals who prefer safe, conservative investments",
              "Senior citizens looking for stable, regular income",
              "Parents saving for their children's short-term goals",
              "Investors with low risk tolerance",
              "Individuals who want guaranteed returns",
              "Anyone wanting to park surplus money safely",
              "People saving for specific future expenses",
              "Investors diversifying beyond volatile assets"
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
                <div className="text-stockstrail-green-light text-2xl font-bold">→</div>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Stockstrail */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Choose Stockstrail for Fixed Deposits?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Compare Rates", desc: "Easy comparison of FD rates across multiple banks and financial institutions." },
              { title: "Expert Guidance", desc: "Personalized recommendations based on your financial goals and tenure preferences." },
              { title: "Best Rates", desc: "Access to competitive FD rates from reputed banks offering up to 7.5%+ returns." },
              { title: "Flexible Tenure", desc: "Choose from a wide range of tenures from 7 days to 10+ years." },
              { title: "Paperless Process", desc: "Simple online application process with minimal documentation." },
              { title: "Renewal Reminders", desc: "Timely notifications for maturity and renewal, with reinvestment options." }
            ].map((item, index) => (
              <div key={index} className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300">
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            How to Start a Fixed Deposit
          </h2>

          <div className="space-y-4">
            {[
              "Decide on the deposit amount you want to invest.",
              "Select tenure based on your financial goal (3 months, 6 months, 1 year, 3 years, 5 years, etc.).",
              "Choose between cumulative or periodic interest payout options.",
              "Complete the FD application with guidance from Stockstrail experts.",
              "Receive the FD receipt, details, and maturity amount information."
            ].map((step, index) => (
              <div key={index} className="flex gap-4 items-start bg-stockstrail-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-stockstrail-green-light rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-white/80 pt-1">{step}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <a 
              href="/lets-talk" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 transition-all duration-300 font-work-sans font-medium group"
            >
              <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              Start Your Fixed Deposit Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FixedDeposit;



