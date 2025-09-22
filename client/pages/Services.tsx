import Layout from "../components/layout/Layout";

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
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium text-sm sm:text-base group-hover:shadow-[0_0_20px_rgba(0,255,151,0.3)]">
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
            description="We work with a network of sustainable event suppliers to help you find the perfect vendors for your event. We also handle all the logistics of booking and managing your suppliers, so you can focus on your guests."
            benefits={[
              'Save time and money by letting us do the hard work for you',
              'Get access to a wide range of sustainable event suppliers',
              'Be confident that your suppliers are vetted and reliable',
              'Enjoy peace of mind knowing that your suppliers are managed by a team of experts',
            ]}
            cta="OPEN DEMAT ACCOUNT"
            ctaLink="/open-demat"
            imageSrc="/services/mf.jpg"
            imageAlt="Mutual Funds"
          />

          <SectionBlock
            id="fd"
            title="Secure Savings, Guaranteed Growth | FD"
            description="Our event-secondary sustainable marketplace allows you to buy, sell, and hire sustainable equipment and products for your event. This is a great way to save money and reduce your environmental impact."
            benefits={[
              'Save money on event equipment and products',
              'Reduce your environmental impact by buying and selling used items',
              'Support sustainable businesses and organizations',
              'Find a wide range of event equipment and products, from furniture to décor to catering',
            ]}
            cta="APPLY FIXED DEPOSIT"
            ctaLink="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            imageSrc="/services/fd.jpg"
            imageAlt="Fixed Deposit"
          />

          <SectionBlock
            id="insurance"
            title="Comprehensive Coverage, Confident Living | Insurance"
            description="We work with a network of sustainable event suppliers to help you find the perfect vendors for your event. We also handle all the logistics of booking and managing your suppliers, so you can focus on your guests."
            benefits={[
              'Save time and money by letting us do the hard work for you',
              'Get access to a wide range of sustainable event suppliers',
              'Be confident that your suppliers are vetted and reliable',
              'Enjoy peace of mind knowing that your suppliers are managed by a team of experts',
            ]}
            cta="APPLY INSURANCE"
            ctaLink="https://www.pbpartners.com/v2/partner/vikrant-bhardwaj-una-K2g"
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
            ctaLink="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            imageSrc="/services/loan.jpg"
            imageAlt="Loan Services"
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
