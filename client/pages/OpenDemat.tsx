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
];

const Row = ({ name, href, logoSrc, highlight = false }: { name: string; href: string; logoSrc?: string; highlight?: boolean }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-4 sm:px-7 py-3 sm:py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:bg-white/[0.14] transition-colors"
    aria-label={`Open account with ${name}`}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="h-12 sm:h-16 w-36 sm:w-60 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={`${name} logo`}
              className="h-full w-auto max-w-full object-contain px-1 sm:px-2"
            />
          ) : null}
          {!logoSrc && (
            <span className="text-white text-sm sm:text-base font-medium">{name}</span>
          )}
        </div>
        <div className="text-white text-base sm:text-xl font-medium">{name}</div>
      </div>
      <div
        className={
          `inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 shadow-md transition-colors ${
            highlight
              ? 'bg-[radial-gradient(ellipse_at_center,_#00FF97_0%,_#007D42_100%)]'
              : 'bg-white/10 group-hover:bg-[radial-gradient(ellipse_at_center,_#00FF97_0%,_#007D42_100%)]'
          }`
        }
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[18px] sm:h-[18px]">
          <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </a>
);

const OpenDemat = () => {
  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="mx-auto max-w-5xl h-[80%] mt-10 rounded-[40px] bg-gradient-to-b from-white/5 to-white/0 blur-[60px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text">OPEN DEMAT ACCOUNT</h1>
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
