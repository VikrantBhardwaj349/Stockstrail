import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";

const Loan = () => {
  return (
    <Layout>
      <SEO
        title="Loans — LAMF, Business & Home Loans | Stockstrail"
        description="Explore Loan Against Mutual Funds, business loans, and home loans with expert guidance, minimal documentation, and competitive rates from Stockstrail."
        keywords="loan against mutual funds, LAMF, business loan, home loan, personal loan, Stockstrail loans"
        url="/services/loan"
      />

      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-72 bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-6">
            Smart Loans for Your Financial Goals
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Access funds without disrupting your investments — explore LAMF, business loans, and home loans with minimal documentation and transparent guidance from Stockstrail.
          </p>
        </div>
      </section>

      {/* Intro + Overview */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-product-sans text-white mb-4">Loans — Complete Service Overview</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Financial needs can arise at any stage of life — whether expanding a business, buying a home, or managing urgent personal expenses. Instead of breaking your long-term investments or compromising your financial goals, the right loan solution provides immediate support with structured repayment options.
            </p>
            <p className="text-white/80 mb-4 leading-relaxed">
              Stockstrail offers carefully selected loan services designed to be simple, transparent, and suitable for different financial requirements. Our focus is to ensure clients get access to funds with minimal documentation, faster approval, competitive interest rates, and professional guidance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 bg-stockstrail-bg-light/30 border border-white/10">
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2">Loan Against Mutual Funds (LAMF)</h3>
                <p className="text-white/80 text-sm mb-4">Pledge your mutual fund units to access liquidity without selling your investments — intelligent borrowing for wealth builders.</p>
                <a href="/lets-talk" rel="noopener noreferrer" className="inline-block text-stockstrail-green-light text-sm hover:underline">Explore LAMF</a>
              </div>

              <div className="rounded-xl p-5 bg-stockstrail-bg-light/30 border border-white/10">
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2">Business Loans</h3>
                <p className="text-white/80 text-sm mb-4">Flexible funding for working capital, expansion, inventory, and business growth — tailored to entrepreneur needs.</p>
                <a href="/lets-talk" rel="noopener noreferrer" className="inline-block text-stockstrail-green-light text-sm hover:underline">Explore Business Loans</a>
              </div>

              <div className="rounded-xl p-5 bg-stockstrail-bg-light/30 border border-white/10">
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2">Home Loans</h3>
                <p className="text-white/80 text-sm mb-4">Purchase, build, or renovate your dream property with long-term tenure and reasonable interest rates.</p>
                <a href="/lets-talk" rel="noopener noreferrer" className="inline-block text-stockstrail-green-light text-sm hover:underline">Explore Home Loans</a>
              </div>

              <div className="rounded-xl p-5 bg-stockstrail-bg-light/30 border border-white/10">
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2">Expert Guidance & Support</h3>
                <p className="text-white/80 text-sm">We compare lenders, assist with documentation, explain terms transparently, and ensure you get the right loan for your goals.</p>
              </div>
            </div>
          </div>

          <aside className="rounded-2xl p-6 bg-stockstrail-bg-light/40 border border-white/10">
            <img src="/services/loan2.webp" alt="Loan overview" loading="lazy" width={480} height={320} className="w-full h-36 sm:h-44 md:h-56 object-contain rounded-lg mb-4 bg-white/5" />
            <h4 className="text-white font-semibold mb-3">Quick Example</h4>
            <p className="text-white/80 mb-2">A ₹50 lakh mutual fund portfolio can secure a LAMF of up to ₹25–30 lakh at ~7–8% interest — while your investments continue to grow.</p>
            <a href="/contact" aria-label="Get personalised loan advice" className="mt-3 inline-block text-stockstrail-green-light underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stockstrail-green-light">Get personalised loan advice</a>
          </aside>
        </div>
      </section>

      {/* LAMF Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="h-full flex items-center justify-center w-full">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 w-full max-w-md mx-auto group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.12)] transition-all duration-300">
                  <img
                    src="/services/loan4.webp"
                    alt="Loan Against Mutual Funds"
                    loading="lazy"
                    className="w-full max-h-[240px] sm:max-h-[320px] md:max-h-[420px] object-contain group-hover:scale-105 transition-transform duration-300 bg-white/5"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl text-stockstrail-green-light font-semibold mb-4">Loan Against Mutual Funds — What &amp; Why</h2>
              <p className="text-white/80 mb-4">LAMF allows you to borrow money by pledging your existing mutual fund units as collateral. You do not have to sell your investments. Your mutual funds continue to remain invested and may continue to grow while you receive liquidity in the form of a loan — an intelligent borrowing option without disrupting your wealth-building strategy.</p>

              <h4 className="text-white font-semibold mb-2">Key Advantages of LAMF</h4>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>No need to redeem investments — SIPs and long-term plans remain intact</li>
                <li>Lower interest rates due to secured collateral (typically 7–9% vs 12%+ for personal loans)</li>
                <li>Quick approval with minimal documentation and fast fund transfer</li>
                <li>Flexible loan value — typically 50–60% for equity funds, higher for debt funds</li>
                <li>Continued market participation — your investments stay active and earn returns</li>
              </ul>

              <h4 className="text-white font-semibold mt-6 mb-2">How LAMF Works</h4>
              <ol className="list-decimal list-inside text-white/80 space-y-2">
                <li>Pledge your mutual fund units to the lender online or offline.</li>
                <li>Lender reviews the current portfolio value and approves a loan limit.</li>
                <li>Funds are transferred to your bank account quickly.</li>
                <li>Repay through flexible EMIs or lump sum based on your cash flow.</li>
                <li>Once loan is closed, mutual funds are unpledged and returned to your portfolio.</li>
              </ol>

              <div className="rounded-2xl p-6 bg-stockstrail-bg-light/30 border border-white/10 mt-6">
                <h4 className="text-white font-semibold mb-3">Realistic LAMF Cases</h4>
                <div className="space-y-4 text-white/80">
                  <div>
                    <p className="font-semibold">Professional — Urgent personal requirement</p>
                    <p>Has ₹8 lakh in mutual funds but needs ₹3–4 lakh urgently. Instead of redeeming, pledges funds, gets loan in days, repays in months without affecting his SIPs.</p>
                  </div>

                  <div>
                    <p className="font-semibold">Shop owner — Business working capital</p>
                    <p>Has ₹12 lakh invested. Needs ₹5 lakh for inventory. Uses LAMF instead of high-interest unsecured loan. Investments stay active, business grows, loan repaid as cash flow improves.</p>
                  </div>

                  <div>
                    <p className="font-semibold">Investor — Opportunity-based borrowing</p>
                    <p>Identifies a short-term profitable opportunity. Uses LAMF for quick liquidity instead of selling long-term funds. Maintains portfolio while exploring short-term gains.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business & Home Loans Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:items-center">
          <div className="rounded-2xl p-6 bg-stockstrail-bg-light/30">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Business & Home Loans — What & Why</h2>
            
            <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2 mt-4">Business Loans</h3>
            <p className="text-white/80 mb-3">Provide entrepreneurs and business owners with funds for working capital, expansion, inventory procurement, machinery, or managing seasonal cash flow challenges. Available for both new and established businesses with flexible EMI options.</p>

            <h4 className="text-white font-semibold mb-2">How Business Loans Work</h4>
            <ol className="list-decimal list-inside text-white/80 space-y-2 mb-4">
              <li>Submit basic business and financial documents.</li>
              <li>Lender evaluates credit score, turnover, and business stability.</li>
              <li>Loan amount approved based on eligibility and cash flow.</li>
              <li>Funds disbursed to business account; repay through fixed or flexible EMIs.</li>
            </ol>

            <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2 mt-6">Home Loans</h3>
            <p className="text-white/80 mb-3">Help you buy, build, or renovate a residential property. One of the most common long-term secured loans with lower interest rates, long repayment tenure, and tax benefits on principal and interest.</p>

            <h4 className="text-white font-semibold mb-2">How Home Loans Work</h4>
            <ol className="list-decimal list-inside text-white/80 space-y-2">
              <li>Submit financial, income, and property documents for review.</li>
              <li>Lender checks eligibility and conducts property valuation.</li>
              <li>Loan amount and EMI structure finalised based on profile.</li>
              <li>Amount disbursed for property purchase or construction.</li>
            </ol>

            <div className="mt-6">
              <div className="rounded-2xl p-6 bg-stockstrail-bg-light/30 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Real-Life Examples</h4>
                <div className="space-y-4 text-white/80">
                  <div>
                    <p className="font-semibold">Wholesale trader — Business loan</p>
                    <p>Needs ₹3 lakh before festive season for inventory. Secures business loan, stocks up, increases sales significantly. Repays comfortably over 12 months.</p>
                  </div>

                  <div>
                    <p className="font-semibold">Young family — Home loan</p>
                    <p>Identifies ₹50 lakh property. Makes 20% down payment; finances rest through home loan. With long tenure and reasonable rate, manages EMIs without stress and achieves home ownership dream.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="h-full flex items-center justify-center w-full">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 w-full max-w-md mx-auto">
                <img src="/services/loan3.webp" alt="Business and Home Loans" loading="lazy" width={520} height={360} className="w-full max-h-[240px] sm:max-h-[320px] md:max-h-[420px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Choose */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-6 text-center">Who Should Consider Loans?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Investors with mutual fund portfolios seeking liquidity",
              "Business owners requiring working capital or expansion funds",
              "Entrepreneurs needing quick approval and flexible repayment",
              "Individuals seeking lower interest rates than personal loans",
              "Property buyers looking for long-term home financing",
              "Professionals facing unexpected financial needs",
              "Business owners managing seasonal cash flow challenges",
              "People wanting continued investment growth while borrowing"
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-5 border border-white/10">
                <div className="text-stockstrail-green-light text-2xl font-bold">→</div>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Stockstrail */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-6 text-center">Why Choose Stockstrail for Loan Assistance?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Expert Guidance", desc: "We help you choose the right loan type based on your financial goals and repayment capacity." },
              { title: "Lender Comparison", desc: "We compare multiple lenders and interest rates to get you the best terms and lowest EMI." },
              { title: "Documentation Support", desc: "Complete assistance with documentation and application process for hassle-free approval." },
              { title: "Transparent Explanations", desc: "Clear understanding of all terms, conditions, and charges — no hidden surprises." },
              { title: "Personalised Recommendations", desc: "Tailored suggestions based on your profile, investments, and financial goals." },
              { title: "End-to-End Support", desc: "We stay with you until loan approval, disbursement, and help with repayment guidance." }
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl p-6 bg-stockstrail-bg-light/30 border border-white/10 text-center">
                <h3 className="text-white font-semibold mb-2 text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-8 text-center">How to Get Started with a Loan</h2>

          <div className="space-y-6">
            {[
              { step: "1", title: "Discuss Your Requirement", desc: "Share your financial need and timeline with our loan specialists." },
              { step: "2", title: "Select the Right Loan Type", desc: "Based on your goals, choose between LAMF, business loan, or home loan." },
              { step: "3", title: "Submit Required Documents", desc: "We'll guide you on the specific documents needed for your loan type." },
              { step: "4", title: "Application Processing", desc: "We submit your application through trusted lenders and track progress." },
              { step: "5", title: "Receive Funds & Guidance", desc: "Once approved, funds are disbursed and we provide repayment guidance." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-2xl bg-stockstrail-green-light text-black font-semibold">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-white mb-3">Ready to access funds without disrupting your investments?</h3>
          <p className="text-white/80 mb-6">Let us help you find the right loan solution with minimal documentation and competitive rates.</p>
          <a href="/contact" aria-label="Get personalised loan advice" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 transition-all duration-300 font-work-sans focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stockstrail-green-light">
            Get personalised loan advice
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Loan;



