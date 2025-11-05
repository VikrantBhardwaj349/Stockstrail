import Layout from "../components/layout/Layout";
import { useEffect } from "react";

const SectionBlock = ({
  id,
  title,
  description,
  benefits,
  cta,
  reverse = false,
  imageSrc,
  imageAlt,
  ctaLink,
}: {
  id?: string;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  reverse?: boolean;
  imageSrc: string;
  imageAlt: string;
  ctaLink?: string;
}) => {
  return (
    <div id={id} className="grid grid-cols-1 gap-10 items-start group">
      {/* Image on top */}
      <div className="justify-self-center">
        <div className="w-full max-w-[420px] h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-lg border border-white/10 bg-white/5 group-hover:border-stockstrail-green-light group-hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
          <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
      </div>

      {/* Text below */}
      <div>
        <h3 className="text-stockstrail-green-light text-lg tracking-wide font-semibold mb-3 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed mb-5 max-w-4xl group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>
        <div className="mb-6">
          <p className="text-white/80 font-semibold mb-2 group-hover:text-white transition-colors duration-300">Benefits:</p>
          <ul className="space-y-2 text-white/80 list-disc pl-5 group-hover:text-white/90 transition-colors duration-300">
            {benefits.map((b, i) => (
              <li key={i} className="group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>{b}</li>
            ))}
          </ul>
        </div>
        {ctaLink ? (
          <a href={ctaLink} className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium text-sm sm:text-base group-hover:shadow-[0_0_20px_rgba(0,255,151,0.3)]">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            {cta}
          </a>
        ) : (
          <button className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium text-sm sm:text-base group-hover:shadow-[0_0_20px_rgba(0,255,151,0.3)]">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            {cta}
          </button>
        )}
      </div>
    </div>
  );
};

const PartnersBar = () => {
  const partners = [
    'ASSETPLUS',
    'HDFC SKY',
    'AngelOne',
    'aliceblue',
    'ZERODHA',
    'pbpartners',
  ];
  return (
    <section className="mt-20">
      <h3 className="text-center font-product-sans text-3xl sm:text-4xl text-white uppercase tracking-wide mb-8">
        OUR PARTNERS
      </h3>
      <div className="mx-auto max-w-6xl rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 py-6 px-6">
        <div className="flex flex-wrap items-center justify-between gap-8">
          {partners.map((p) => (
            <div key={p} className="text-white/90 font-medium tracking-wider uppercase opacity-80">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  // Scroll to section if URL contains a hash (on load and on hash changes)
  useEffect(() => {
    const headerOffset = 100; // account for fixed header height

    const scrollToHash = () => {
      if (typeof window === 'undefined') return;
      const { hash } = window.location;
      if (!hash) return;
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    // initial attempt after mount
    scrollToHash();
    // in case content paints slightly later
    const timeoutId = window.setTimeout(scrollToHash, 50);

    // listen for in-page hash changes
    window.addEventListener('hashchange', scrollToHash);
    return () => {
      window.removeEventListener('hashchange', scrollToHash);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text">Services</h1>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[500px] bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          <SectionBlock
            id="mutual-funds"
            title="Invest Smart, Invest Secure | MUTUAL FUNDS"
            description="Diversify your investment portfolio with our expertly managed mutual funds. Our professional fund managers help you build wealth through systematic investment plans (SIPs) or lump sum investments across various asset classes."
            benefits={[
              'Professional fund management with proven track records',
              'Diversification across multiple asset classes and sectors',
              'Systematic Investment Plans (SIP) starting from ₹500',
              'Tax-saving ELSS funds under Section 80C',
              'Regular portfolio reviews and rebalancing',
            ]}
            cta="APPLY MUTUAL FUNDS"
            ctaLink="/services/mutual-funds"
            imageSrc="/services/mf.jpg"
            imageAlt="Mutual Funds"
          />

          <SectionBlock
            id="fd"
            title="Secure Savings, Guaranteed Growth | FD"
            description="Secure your savings with guaranteed returns through our fixed deposit schemes. Enjoy competitive interest rates with flexible tenure options ranging from 7 days to 10 years, backed by trusted financial institutions."
            benefits={[
              '100% capital protection with guaranteed returns',
              'Competitive interest rates up to 7.5% per annum',
              'Flexible tenure from 7 days to 10 years',
              'Monthly, quarterly, or maturity interest payout options',
              'Tax-saving FD options under Section 80C',
            ]}
            cta="APPLY FIXED DEPOSIT"
            ctaLink="/services/fixed-deposit"
            imageSrc="/services/fd.jpg"
            imageAlt="Fixed Deposit"
          />

          <SectionBlock
            id="insurance"
            title="Comprehensive Coverage, Confident Living | Insurance"
            description="Protect yourself and your loved ones with our comprehensive insurance solutions. From life insurance to health coverage, we offer tailored plans that provide financial security and peace of mind for life's uncertainties."
            benefits={[
              'Comprehensive life and health insurance coverage',
              'Affordable premium plans with flexible payment options',
              'Quick and hassle-free claim settlement process',
              'Wide range of coverage options for individuals and families',
              'Expert guidance in choosing the right insurance plan',
            ]}
            cta="APPLY INSURANCE"
            ctaLink="/services/insurance"
            imageSrc="/services/insurance.jpg"
            imageAlt="Insurance"
          />

          <SectionBlock
            id="loan"
            title="Quick Approval, Flexible Terms | LOAN"
            description="Get access to personal loans, home loans, and business loans with competitive interest rates and flexible repayment options. Our streamlined process ensures quick approval and minimal documentation."
            benefits={[
              'Quick loan approval with minimal documentation',
              'Competitive interest rates and flexible terms',
              'Multiple loan options including personal, home, and business loans',
              'Dedicated relationship manager for personalized service',
            ]}
            cta="APPLY LOAN"
            ctaLink="/services/loan"
            imageSrc="/services/loan.jpg"
            imageAlt="Loan Services"
          />

          <SectionBlock
            id="demat"
            title="Your Gateway to Stock Market | DEMAT ACCOUNT"
            description="Open your Demat and Trading account to start your journey in the stock market. Trade stocks, mutual funds, ETFs, and more with our secure and user-friendly platform. Enjoy real-time market access with competitive brokerage charges."
            benefits={[
              '100% paperless account opening process',
              'Secure digital locker for your securities',
              'Real-time market access for buying and selling',
              'Competitive brokerage charges and zero AMC',
              'User-friendly mobile and desktop trading platforms',
              'Dedicated customer support and assistance',
            ]}
            cta="OPEN DEMAT ACCOUNT"
            ctaLink="/open-demat"
            imageSrc="/services/da.png"
            imageAlt="Demat Account"
          />

          <section className="mt-20 overflow-hidden">
            <h3 className="text-center font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-8">OUR PARTNERS</h3>
            <div className="w-full bg-[#0F2A2A] border-y border-[#1A3A3A] overflow-hidden">
              <div className="partners-track animate-scroll">
                {[
                  { name: "AngelOne", logo: "/logos/angelone.png" },
                  { name: "Alice Blue", logo: "/logos/aliceblue.png" },
                  { name: "HDFC SKY", logo: "/logos/hdfcsky.png" },
                  { name: "Zerodha", logo: "/logos/zerodha.png" },
                  { name: "AssetPlus", logo: "/logos/assetplus.png" },
                  { name: "PB Partners", logo: "/logos/pbpartners.png" },
                ].concat([
                  { name: "AngelOne", logo: "/logos/angelone.png" },
                  { name: "Alice Blue", logo: "/logos/aliceblue.png" },
                  { name: "HDFC SKY", logo: "/logos/hdfcsky.png" },
                  { name: "Zerodha", logo: "/logos/zerodha.png" },
                  { name: "AssetPlus", logo: "/logos/assetplus.png" },
                  { name: "PB Partners", logo: "/logos/pbpartners.png" },
                ]).map((partner, i) => (
                  <div key={`partner-${i}`} className="flex items-center justify-center px-4 sm:px-6 py-4 sm:py-4 min-w-[120px] sm:min-w-[200px] group">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-20 sm:h-24 w-auto object-contain group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
