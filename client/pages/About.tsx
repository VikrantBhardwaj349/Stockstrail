import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[700px] h-[700px] bg-stockstrail-bg-light rounded-full blur-100 opacity-40 left-1/2 -translate-x-1/2 top-24" />
          <div className="absolute top-20 left-16 w-3 h-3 bg-stockstrail-green-light/30 rounded-full animate-ping" />
          <div className="absolute bottom-24 right-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full animate-bounce" />
          <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-4">About Us</h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto">
            We help individuals and businesses achieve financial independence with
            transparent guidance, modern tools, and a disciplined approach to
            investing.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[400px] bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light transition-colors duration-300">
            <h2 className="text-white text-2xl font-product-sans mb-4">What we do</h2>
            <p className="text-white/80 leading-relaxed">
              At StocksTrail, we guide you across every step of your financial
              journey—from goal planning and asset allocation to regular reviews
              and rebalancing. We combine expert insights with easy-to-use tools
              so you can invest with confidence.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light transition-colors duration-300">
            <h2 className="text-white text-2xl font-product-sans mb-4">Where we are based</h2>
            <p className="text-white/80 leading-relaxed">
              We are based in Himachal Pradesh, India, and support clients
              across the country through digital-first experiences and
              responsive assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase">
            <span className="text-white">Our </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/70 mt-4 max-w-3xl mx-auto">
            From long-term wealth creation to protection and liquidity, our
            offerings cover the essentials so your finances stay on track.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{
            title: "Mutual Funds",
            desc: "Goal-based investing via SIPs and diversified portfolios.",
            href: "/services/mutual-funds",
          },{
            title: "Fixed Deposit",
            desc: "Guaranteed returns with flexible tenures and payout options.",
            href: "/services/fixed-deposit",
          },{
            title: "Insurance",
            desc: "Comprehensive life and health coverage for your family.",
            href: "/services/insurance",
          },{
            title: "Loans",
            desc: "Personal, home and business loans with quick approvals.",
            href: "/services/loan",
          }].map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="block bg-[#012928] border-2 border-[#ffffff21] rounded-2xl p-6 text-left hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              <div className="text-white text-xl font-semibold mb-2">{s.title}</div>
              <div className="text-white/70 text-sm leading-relaxed">{s.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-white text-2xl font-product-sans mb-4">Ready to get started?</h3>
          <p className="text-white/70 mb-6">Speak with us to plan your goals and build a disciplined investment strategy.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 transition-all duration-300">
              Contact Us
            </a>
            <a href="/open-demat" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 transition-all duration-300">
              Open Demat
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;


