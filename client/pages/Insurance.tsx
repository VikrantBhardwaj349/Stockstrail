import Layout from "../components/layout/Layout";

const Insurance = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-4">Secure Your Family’s Future with Insurance</h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">Protection that gives you peace of mind.</p>
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
            <img src="/services/insurance.jpg" alt="Insurance" className="w-full h-[280px] sm:h-[360px] object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Copy */}
          <div>
            {/* Overview */}
            <h2 className="text-white text-2xl sm:text-3xl mb-3">Overview</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Life is unpredictable, but your family’s financial security shouldn’t be. The right insurance plan protects
              against uncertainties — from medical emergencies to loss of income — ensuring your loved ones remain secure and worry-free.
            </p>

            {/* Services */}
            <h3 className="text-white text-xl sm:text-2xl mb-2">Insurance Services We Currently Offer</h3>
            <div className="space-y-4 mb-6">
              {/* Health Insurance */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 group hover:border-stockstrail-green-light/60 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
                <div>
                  <div className="text-white text-lg sm:text-xl font-medium">🏥 Health Insurance</div>
                  <p className="text-white/80 mt-1">Stay worry-free about rising medical costs. Covers hospitalization, treatments, and emergencies.</p>
                </div>
                <a
                  href="https://insurance.assetplus.in/284122/health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white/20 text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300"
                >
                  🔗 Explore Health Insurance
                </a>
              </div>

              {/* Term Insurance */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 group hover:border-stockstrail-green-light/60 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
                <div>
                  <div className="text-white text-lg sm:text-xl font-medium">📑 Term Insurance</div>
                  <p className="text-white/80 mt-1">High coverage at low premiums — ideal for young professionals and growing families.</p>
                </div>
                <a
                  href="https://insurance.assetplus.in/284122/term"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white/20 text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300"
                >
                  🔗 Explore Term Insurance
                </a>
              </div>
            </div>

            {/* Why Choose Us */}
            <h3 className="text-white text-xl sm:text-2xl mb-2">Why choose our insurance services?</h3>
            <ul className="space-y-2 text-white/80 mb-6 list-disc pl-5">
              <li>Affordable premium options with wide coverage</li>
              <li>Hassle-free claims assistance and quick support</li>
              <li>Trusted partnerships with top insurers</li>
              <li>Plans tailored to your life stage and financial goals</li>
            </ul>

            {/* Example */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 mb-6">
              <p className="text-white/85">
                Example: For just ₹500/month, you can secure a ₹50 lakh term insurance cover — ensuring your family’s lifestyle,
                education, and future goals remain protected even in challenging times.
              </p>
            </div>

            {/* Explore More + CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans">
                <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                Get the right insurance plan
              </a>
              <a
                href=" https://insurance.assetplus.in/284122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans"
              >
                🔗 Visit Main Insurance Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insurance;



