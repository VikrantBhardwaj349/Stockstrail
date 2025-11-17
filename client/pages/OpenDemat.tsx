import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";

const brokers = [
  {
    name: "Angel One",
    key: "angelone",
    href: "https://www.angelone.in/open-demat-account",
    logoSrc: "/logos/angelone.png",
    highlight: true,
  },
  {
    name: "Alice Blue",
    key: "aliceblue",
    href: "https://aliceblueonline.com/open-an-account/",
    logoSrc: "/logos/aliceblue.png",
  },
  {
    name: "HDFC SKY",
    key: "hdfc-sky",
    href: "https://www.hdfcsky.com/open-demat-account",
    logoSrc: "/logos/hdfcsky.png",
  },
  {
    name: "Zerodha",
    key: "zerodha",
    href: "https://zerodha.com/open-account",
    logoSrc: "/logos/zerodha.png",
  },
  {
    name: "AssetPlus",
    key: "assetplus",
    href: "https://www.partners.assetplus.in/",
    logoSrc: "/logos/assetplus.png",
  },
  {
    name: "PB Partners",
    key: "pbpartners",
    href: "https://www.pbpartners.com/open-demat-account",
    logoSrc: "/logos/pbpartners.png",
  },
];

const Row = ({ name, href, logoSrc, highlight = false }: { name: string; href: string; logoSrc?: string; highlight?: boolean }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-4 sm:px-7 py-3 sm:py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:bg-white/[0.14] hover:border-stockstrail-green-light/50 hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] hover:scale-[1.02] transition-all duration-300"
    aria-label={`Open account with ${name}`}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="h-12 sm:h-16 w-36 sm:w-60 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group-hover:bg-white/10 group-hover:border-stockstrail-green-light/30 transition-all duration-300">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={`${name} logo`}
              className="h-full w-auto max-w-full object-contain px-1 sm:px-2 group-hover:scale-105 transition-transform duration-300"
            />
          ) : null}
          {!logoSrc && (
            <span className="text-white text-sm sm:text-base font-medium group-hover:text-stockstrail-green-light transition-colors duration-300">{name}</span>
          )}
        </div>
        <div className="text-white text-base sm:text-xl font-medium group-hover:text-stockstrail-green-light transition-colors duration-300">{name}</div>
      </div>
      <div
        className={
          `inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,255,151,0.4)] ${
            highlight
              ? 'bg-[radial-gradient(ellipse_at_center,_#00FF97_0%,_#007D42_100%)] group-hover:shadow-[0_0_25px_rgba(0,255,151,0.6)]'
              : 'bg-white/10 group-hover:bg-[radial-gradient(ellipse_at_center,_#00FF97_0%,_#007D42_100%)]'
          }`
        }
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform duration-300">
          <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </a>
);

const OpenDemat = () => {
  return (
    <Layout>
      <SEO
        title="Open Demat Account | Stock Market Trading Platform | Stockstrail"
        description="Open your Demat account with top brokers. Trade stocks, mutual funds, and ETFs with ease. 100% paperless process, secure, and beginner-friendly."
        keywords="Demat account, stock market, trading, investment, online trading, securities, Zerodha, Angel One, HDFC Sky"
        url="/services/others#demat"
      />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-96 bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-6">
            Your Gateway to Stock Market Trading
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Open a Demat account and start trading stocks, mutual funds, and ETFs. Fast, secure, and completely paperless process.
          </p>
        </div>
      </section>

      {/* What is Demat Account */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
              <img 
                src="/services/da2.png" 
                alt="What is Demat Account" 
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold text-stockstrail-green-light mb-6">
                What is a Demat Account?
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                A Demat account (Dematerialized Securities Account) is a digital locker that safely holds your shares, bonds, ETFs, and other securities in electronic form instead of physical certificates.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                When you buy or sell stocks or mutual funds, the securities are credited or debited from your Demat account. It acts as a bridge between your trading account and the stock exchange.
              </p>
              <p className="text-white/80 leading-relaxed">
                Without a Demat account, you cannot buy or sell stocks on the stock market. It's a mandatory requirement for anyone looking to invest in equities, bonds, or ETFs directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Open a Demat Account */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Open a Demat Account?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">100% Paperless Process</h3>
              <p className="text-white/80">Open your account online in minutes without visiting a branch or submitting physical documents.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">Secure & Safe</h3>
              <p className="text-white/80">Your securities are stored electronically with top-tier encryption and regulatory oversight by SEBI.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">Easy Trading</h3>
              <p className="text-white/80">Buy and sell stocks instantly during market hours through your broker's mobile app or website.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">Real-Time Updates</h3>
              <p className="text-white/80">Track your portfolio in real-time and receive instant notifications about your holdings and trades.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">Low Charges</h3>
              <p className="text-white/80">Competitive annual maintenance fees and brokerage charges from leading brokers in the industry.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">Access Multiple Markets</h3>
              <p className="text-white/80">Trade equities, derivatives, mutual funds, bonds, and ETFs all through a single Demat account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Demat Account Works */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            How Does a Demat Account Work?
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Open Account",
                desc: "Choose a broker and complete the online account opening process with KYC verification (Aadhaar, PAN)."
              },
              {
                step: "2",
                title: "Link Bank Account",
                desc: "Link your bank account to your trading account for seamless fund transfers and dividend deposits."
              },
              {
                step: "3",
                title: "Deposit Funds",
                desc: "Transfer money from your bank account to your trading account to start buying securities."
              },
              {
                step: "4",
                title: "Place Orders",
                desc: "Use your broker's platform to search for stocks or mutual funds and place buy or sell orders during market hours."
              },
              {
                step: "5",
                title: "Settlement",
                desc: "After T+1 or T+2 days, the securities are credited to your Demat account and become yours to hold or sell."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-5 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-stockstrail-green-light rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Demat Accounts */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Types of Demat Accounts
          </h2>

          <div className="space-y-8">
            {/* Standard Account */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Standard Demat Account</h3>
              <p className="text-white/80 mb-4">
                The most common type, used for buying and holding equity shares, bonds, government securities, and mutual funds.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white font-semibold mb-2">Features:</p>
                  <ul className="text-white/70 space-y-1">
                    <li>• Suitable for all individuals</li>
                    <li>• Long-term investment focus</li>
                    <li>• Minimal fees and charges</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Best For:</p>
                  <p className="text-white/70">Individual investors, long-term wealth creation, and beginners.</p>
                </div>
              </div>
            </div>

            {/* Margin/Collateral Account */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Margin/Collateral Demat Account</h3>
              <p className="text-white/80 mb-4">
                Allows you to use your holdings as collateral to borrow funds for additional trading or investing activities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white font-semibold mb-2">Features:</p>
                  <ul className="text-white/70 space-y-1">
                    <li>• Borrow against holdings</li>
                    <li>• Increased leverage for trading</li>
                    <li>• Higher interest charges apply</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Best For:</p>
                  <p className="text-white/70">Active traders and investors seeking leverage opportunities.</p>
                </div>
              </div>
            </div>

            {/* Repatriable Account */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Repatriable Demat Account</h3>
              <p className="text-white/80 mb-4">
                For NRIs (Non-Resident Indians) to invest in Indian securities and repatriate funds back to their home country.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white font-semibold mb-2">Features:</p>
                  <ul className="text-white/70 space-y-1">
                    <li>• Special compliance requirements</li>
                    <li>• Ability to repatriate funds</li>
                    <li>• FEMA regulations apply</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Best For:</p>
                  <p className="text-white/70">NRIs wanting to invest in Indian markets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Broker */}
      <section id="brokers" className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-4">
              Choose Your Preferred Broker
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Select from India's leading brokers with competitive fees, excellent trading platforms, and trusted customer support.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {brokers.map((b) => (
              <Row key={b.key} name={b.name} href={b.href} logoSrc={(b as any).logoSrc} highlight={Boolean((b as any).highlight)} />
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Open Demat */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Who Should Open a Demat Account?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Beginners looking to start stock market investing",
              "Active traders buying and selling securities regularly",
              "Long-term investors building wealth through equities",
              "Mutual fund investors tracking and managing holdings",
              "Individuals interested in IPOs and bond investments",
              "Business owners diversifying their investment portfolio",
              "Retirement planners seeking equity exposure",
              "NRIs wanting to invest in Indian securities"
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-5 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
                <div className="text-stockstrail-green-light text-2xl font-bold flex-shrink-0">→</div>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Stockstrail */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Open Your Demat Account with Stockstrail?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Expert Guidance", desc: "Our specialists help you choose the right broker based on your trading style and investment goals." },
              { title: "Broker Comparison", desc: "We compare fees, features, and platforms to help you find the best fit for your needs." },
              { title: "Paperless Process", desc: "Complete account opening in minutes with 100% digital documentation through our partners." },
              { title: "24/7 Support", desc: "Get assistance with account setup, trading queries, and technical issues at any time." },
              { title: "Transparent Information", desc: "No hidden charges. We explain everything clearly so you know exactly what you're paying for." },
              { title: "Integrated Services", desc: "Combine your Demat account with our mutual fund and insurance services for complete financial management." }
            ].map((item, idx) => (
              <div key={idx} className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-white/80 text-sm group-hover:text-white/90 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold text-white mb-4">
            Start Your Stock Market Journey Today
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Choose your broker from above and open your Demat account in minutes. Our team is here to guide you every step of the way.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 transition-all duration-300 font-work-sans focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stockstrail-green-light">
            Get Expert Guidance
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default OpenDemat;
