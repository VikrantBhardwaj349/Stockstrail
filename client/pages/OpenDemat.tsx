import Layout from "../components/layout/Layout";

const brokers = [
  { name: "Angelone", key: "angelone", href: "#", highlight: true },
  { name: "Aliceblue", key: "aliceblue", href: "#" },
  { name: "HDFC SKY", key: "hdfc-sky", href: "#" },
  { name: "ZERODHA", key: "zerodha", href: "#" },
];

const Row = ({ name, href, highlight = false }: { name: string; href: string; highlight?: boolean }) => (
  <a
    href={href}
    className="group block rounded-[48px] border border-white/10 bg-white/[0.05] px-5 sm:px-7 py-4 sm:py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:bg-white/[0.07] transition-colors"
    aria-label={`Open account with ${name}`}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="h-10 sm:h-12 px-4 sm:px-5 rounded-full bg-white/10 flex items-center text-white/90 text-sm sm:text-base tracking-wide">
          {name}
        </div>
        <div className="text-white text-lg sm:text-xl font-medium">{name}</div>
      </div>
      <div
        className={
          `inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/10 shadow-md transition-colors ${
            highlight
              ? 'bg-[radial-gradient(ellipse_at_center,_#00FF97_0%,_#007D42_100%)]'
              : 'bg-white/10 group-hover:bg-[radial-gradient(ellipse_at_center,_#00FF97_0%,_#007D42_100%)]'
          }`
        }
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <Row key={b.key} name={b.name} href={b.href} highlight={Boolean(b.highlight)} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default OpenDemat;
