import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";

const Insurance = () => {
  return (
    <Layout>
      <SEO
        title="Insurance — Term & Health Plans | Stockstrail"
        description="Compare term and health insurance plans, see real-life examples, and get tailored guidance to protect your family’s finances."
        keywords="term insurance, health insurance, life cover, family protection, Stockstrail insurance"
        url="/services/insurance"
      />

  {/* Hero */}
  <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-72 bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-6">
            Secure Your Family’s Future with Insurance
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Protection that gives you peace of mind — compare term and health plans, understand how they work, and get personalised
            recommendations from Stockstrail.
          </p>
        </div>
      </section>

      {/* Intro + Overview */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-product-sans text-white mb-4">Insurance — Complete Service Overview</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Insurance provides financial protection against unexpected events so your family, health, and finances remain secure.
              At Stockstrail we help you choose the right plans based on your needs, income, family size and long-term goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 bg-stockstrail-bg-light/30 border border-white/10">
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2">Term Insurance</h3>
                <p className="text-white/80 text-sm mb-4">High life cover at affordable premiums — pays a lump-sum (Sum Assured) to the nominee if the policyholder passes away during the policy term.</p>
                <a href="https://insurance.assetplus.in/284122/term" target="_blank" rel="noopener noreferrer" className="inline-block text-stockstrail-green-light text-sm hover:underline">Explore Term Insurance</a>
              </div>

              <div className="rounded-xl p-5 bg-stockstrail-bg-light/30 border border-white/10">
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2">Health Insurance</h3>
                <p className="text-white/80 text-sm mb-4">Covers medical expenses arising from illness, accidents, surgery or hospitalisation. Benefits include cashless treatment at network hospitals and family floater options.</p>
                <a href="https://insurance.assetplus.in/284122/health" target="_blank" rel="noopener noreferrer" className="inline-block text-stockstrail-green-light text-sm hover:underline">Explore Health Insurance</a>
              </div>

              <div className="rounded-xl p-5 bg-stockstrail-bg-light/30 border border-white/10">
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2">Guidance & Support</h3>
                <p className="text-white/80 text-sm">We compare plans across insurers, assist with purchase and claims, and provide transparent, unbiased recommendations tailored to you.</p>
              </div>

              <div className="rounded-xl p-5 bg-stockstrail-bg-light/30 border border-white/10">
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2">Claims Assistance</h3>
                <p className="text-white/80 text-sm">Hassle-free claims support and step-by-step help to simplify the process when you need it most.</p>
              </div>
            </div>
          </div>

          <aside className="rounded-2xl p-6 bg-stockstrail-bg-light/40 border border-white/10">
              <img src="/services/insurance2.webp" alt="Insurance overview" loading="lazy" width={480} height={320} className="w-full h-36 sm:h-44 md:h-56 object-contain rounded-lg mb-4 bg-white/5" />
              <h4 className="text-white font-semibold mb-3">Quick Example</h4>
              <p className="text-white/80 mb-2">For ~₹500/month you could secure a ₹50 lakh term insurance cover — protecting education, mortgage and lifestyle goals for your family.</p>
              <a href="https://insurance.assetplus.in/284122" aria-label="Get personalised insurance advice" className="mt-3 inline-block text-stockstrail-green-light underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stockstrail-green-light">Get personalised insurance advice</a>
          </aside>
        </div>
      </section>

      {/* Term Insurance Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="h-full flex items-center justify-center w-full">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 w-full max-w-md mx-auto group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.12)] transition-all duration-300">
                  <img
                    src="/services/insurance3.webp"
                    alt="Term Insurance"
                    loading="lazy"
                    width={520}
                    height={360}
                    className="w-full max-h-[240px] sm:max-h-[320px] md:max-h-[420px] object-contain group-hover:scale-105 transition-transform duration-300 bg-white/5"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl text-stockstrail-green-light font-semibold mb-4">Term Insurance — What &amp; Why</h2>
              <p className="text-white/80 mb-4">Term insurance gives a high life cover at low cost. It ensures your family can continue meeting goals and obligations if you are not there to provide for them.</p>

              <h4 className="text-white font-semibold mb-2">Why buy term insurance?</h4>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>High coverage at low premiums (e.g., ₹50L, ₹1Cr)</li>
                <li>Protect family against income loss and outstanding loans</li>
                <li>Simple structure — pay premiums, beneficiary receives sum assured on claim</li>
                <li>Affordable for young professionals and families</li>
              </ul>

              <h4 className="text-white font-semibold mt-6 mb-2">How it works</h4>
              <ol className="list-decimal list-inside text-white/80 space-y-2">
                <li>Choose sum assured (example: ₹1 crore).</li>
                <li>Select policy term (10–40 years) and premium frequency.</li>
                <li>Keep policy active by paying premiums.</li>
                <li>On insured’s death during term, nominee receives the sum assured.</li>
              </ol>

              <div className="rounded-2xl p-6 bg-stockstrail-bg-light/30 border border-white/10 mt-6">
                <h4 className="text-white font-semibold mb-3">Realistic Cases</h4>
                <div className="space-y-4 text-white/80">
                  <div>
                    <p className="font-semibold">Rahul — 35, family breadwinner</p>
                    <p>Buys ₹1 crore cover at ~₹12,000/year. On claim, family clears home loan, funds children’s education and maintains lifestyle.</p>
                  </div>

                  <div>
                    <p className="font-semibold">Pooja — 28, single earner for parents</p>
                    <p>Buys ₹50 lakh plan to secure parents’ finances in case of unexpected death.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a href="https://insurance.assetplus.in/284122/term" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-stockstrail-green-light rounded-full text-stockstrail-green-light hover:bg-stockstrail-green-light/10 transition-all duration-300 font-work-sans focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stockstrail-green-light">
                  Explore Term Insurance Plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Insurance Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:items-center">
          <div className="rounded-2xl p-6 bg-stockstrail-bg-light/30">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Health Insurance — What & Why</h2>
            <p className="text-white/80 mb-4">Health insurance protects you from high medical bills and lets you access cashless treatment at network hospitals. It preserves savings and provides financial resilience during medical emergencies.</p>

            <h4 className="text-white font-semibold mb-2">Key benefits</h4>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Cashless treatment at network hospitals</li>
              <li>Family floater options to cover spouse, children and parents</li>
              <li>Protection from rising healthcare costs</li>
              <li>Reimbursement or cashless claim settlement</li>
            </ul>

            <h4 className="text-white font-semibold mt-6 mb-2">How it works</h4>
            <ol className="list-decimal list-inside text-white/80 space-y-2">
              <li>Choose sum insured (₹3L, ₹5L, ₹10L, etc.).</li>
              <li>Pay annual premium (or as chosen).</li>
              <li>Use network hospitals for cashless claims or submit bills for reimbursement.</li>
            </ol>

            <div className="mt-6">
              <div className="rounded-2xl p-6 bg-stockstrail-bg-light/30 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Health — Real Cases</h4>
                <div className="space-y-4 text-white/80">
                  <div>
                    <p className="font-semibold">Mr. Sharma — Dengue hospitalisation</p>
                    <p>₹78,000 hospital bill covered fully by a ₹5 lakh policy with cashless settlement.</p>
                  </div>

                  <div>
                    <p className="font-semibold">Mrs. Kavita — Surgery</p>
                    <p>Gallbladder surgery costing ₹1.2 lakh covered by the policy without dipping into savings.</p>
                  </div>

                  <div>
                    <p className="font-semibold">Young family — Child treatment</p>
                    <p>Family floater of ₹10 lakh covered a ₹58,000 treatment cost with no out-of-pocket expense.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a href="https://insurance.assetplus.in/284122/health" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-stockstrail-green-light rounded-full text-stockstrail-green-light hover:bg-stockstrail-green-light/10 transition-all duration-300 font-work-sans focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stockstrail-green-light">
                Explore Health Insurance Plans
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
              <div className="h-full flex items-center justify-center w-full">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 w-full max-w-md mx-auto group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.12)] transition-all duration-300">
                  <img
                    src="/services/insurance4.webp"
                    alt="Health Insurance"
                    loading="lazy"
                    width={520}
                    height={360}
                    className="w-full max-h-[240px] sm:max-h-[320px] md:max-h-[420px] object-contain group-hover:scale-105 transition-transform duration-300 bg-white/5"
                  />
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-6 text-center">Health Insurance vs Term Insurance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="pb-3 text-white/80">Feature</th>
                  <th className="pb-3 text-white/80">Term Insurance</th>
                  <th className="pb-3 text-white/80">Health Insurance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Purpose", "Protects family after death", "Covers medical expenses during life"],
                  ["Payout", "Lump sum (Sum Assured)", "Covers hospital & treatment costs"],
                  ["Duration", "Long-term (10–40 years)", "Annual or multi-year renewals"],
                  ["Beneficiary", "Nominee/family", "Policyholder"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/6">
                    <td className="py-4 text-white/80 font-semibold">{row[0]}</td>
                    <td className="py-4 text-white/70">{row[1]}</td>
                    <td className="py-4 text-white/70">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-white/70 mt-6 text-sm">Both play different roles — term insurance protects family income after death while health insurance protects you and your savings during life. Many households choose both for comprehensive protection.</p>
        </div>
      </section>

      {/* Who should buy + CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-6 text-center">Who should consider insurance?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Individuals with dependents","Salaried employees with loans","Single earning members supporting family","Parents planning long-term safety","Working individuals","Families with children","Senior citizens","Individuals with a health history"].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-5 border border-white/10">
                <div className="text-stockstrail-green-light text-2xl font-bold">→</div>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>

         
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-white mb-3">Ready to protect what matters?</h3>
          <p className="text-white/80 mb-6">Share basic details and we’ll suggest the right term & health plans for your needs.</p>
        <a href="https://insurance.assetplus.in/284122" aria-label="Get personalised insurance advice" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 transition-all duration-300 font-work-sans focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stockstrail-green-light">
          Get personalised insurance advice
        </a>
      </div>
      </section>
    </Layout>
  );
};

export default Insurance;
