import Layout from "../components/layout/Layout";

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
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="absolute inset-0 -z-10">
          <div className="mx-auto max-w-5xl h-[80%] mt-10 rounded-[40px] bg-gradient-to-b from-white/5 to-white/0 blur-[60px]" />
        </div>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-4">Your Gateway to Stock Market Investments</h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">Trade, invest, and grow – all in one secure platform.</p>
        </div>
      </section>

      {/* Overview + Benefits */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Visual */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 bg-white/5 group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
            <img src="/services/da2.png" alt="Investing" className="w-full h-[260px] sm:h-[340px] object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          {/* Copy */}
          <div>
            <h2 className="text-white text-2xl sm:text-3xl mb-3">Overview</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              To buy and sell stocks or mutual funds, you need a Demat & Trading account. Think of it as a secure digital locker
              that safely stores your shares, bonds, ETFs, and mutual funds in electronic form.
            </p>
            <h3 className="text-white text-xl sm:text-2xl mb-2">Benefits of opening with us</h3>
            <ul className="space-y-2 text-white/80 mb-6 list-disc pl-5">
              <li>100% paperless process — open in minutes</li>
              <li>Secure & reliable platform with top-notch encryption</li>
              <li>Real-time market access for buying and selling</li>
              <li>Competitive brokerage charges</li>
              <li>User-friendly mobile and desktop trading apps</li>
            </ul>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 mb-6">
              <p className="text-white/85">
                Example: Invest ₹10,000 in blue-chip stocks today and track them live on your trading app — all securely held in your
                Demat account.
              </p>
            </div> 
          </div>
        </div>
      </section>

      {/* Broker list */}
      <section id="brokers" className="relative px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <h2 className="text-white text-3xl sm:text-4xl">Choose your preferred platform</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {brokers.map((b) => (
            <Row key={b.key} name={b.name} href={b.href} logoSrc={(b as any).logoSrc} highlight={Boolean((b as any).highlight)} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default OpenDemat;
