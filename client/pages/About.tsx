import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us - Stockstrail | Not for Profit, for People"
        description="Learn about Stockstrail's mission to make investing simple and accessible for every Indian. We guide you step-by-step to build long-term financial security."
        keywords="about Stockstrail, financial advisor, investment guidance, financial planning, wealth management, mutual funds advisor"
        url="/about"
      />
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
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto mb-6">
            StocksTrail was created with a simple belief — every Indian deserves the chance to build wealth,
            not just the financially educated or the wealthy.
          </p>
          <p className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto mb-6">
            We guide you step-by-step, in simple language, so you can invest with confidence and build
            long-term financial security for yourself and your family.
          </p>
          <p className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto mb-8">
            Whether you are new to investing or already experienced, we are here to support you with clarity,
            discipline, and trust. No shortcuts. No hype. Only honest and long-term guidance.
          </p>
          <div className="inline-block px-6 py-3 bg-stockstrail-green-light/10 border border-stockstrail-green-light/30 rounded-full">
            <p className="text-stockstrail-green-light font-product-sans text-lg sm:text-xl font-medium">
              Not for Profit, for People
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[400px] bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
              <span className="text-white">What </span>
              <span className="gradient-text">We Do</span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              We help individuals and families invest wisely and build wealth with a clear plan and disciplined approach.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 hover:border-stockstrail-green-light transition-colors duration-300 mb-10">
            <h3 className="text-white text-xl font-product-sans mb-6 text-center">How we support you:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/80 leading-relaxed">Understand your financial goals</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/80 leading-relaxed">Help you start investing easily</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/80 leading-relaxed">Suggest mutual funds based on research and your needs</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/80 leading-relaxed">Set up SIPs and long-term plans</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/80 leading-relaxed">Review and rebalance your portfolio</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/80 leading-relaxed">Explain everything in simple language</p>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/80 leading-relaxed">Support you throughout your journey</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light transition-colors duration-300">
              <h2 className="text-2xl font-product-sans mb-4">
                <span className="text-white">Where We Are </span>
                <span className="gradient-text">Based</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                We are based in Himachal Pradesh and serve clients across India through a digital-first approach.
                No matter where you live — your growth matters.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light transition-colors duration-300">
              <h2 className="text-2xl font-product-sans mb-4">
                <span className="text-white">Our </span>
                <span className="gradient-text">Purpose</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                To make investing simple and accessible for every Indian — from students and middle-class
                families to business owners and high-net-worth individuals.
              </p>
            </div>
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
      <section className="px-4 sm:px-6 lg:px-8 py-16 text-center relative">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[300px] bg-stockstrail-bg-light blur-185 opacity-30" />
        </div>
        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
          <h3 className="text-2xl font-product-sans mb-4">
            <span className="text-white">Ready to get </span>
            <span className="gradient-text">started?</span>
          </h3>
          <p className="text-white/70 mb-6">Speak with us to plan your goals and build a disciplined investment strategy.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/lets-talk" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 font-work-sans font-medium group">
              <div className="w-2 h-2 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
              Let's Talk
            </a>
            <a href="/open-demat" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 font-work-sans font-medium group">
              <div className="w-2 h-2 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
              Open Demat
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;


