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
    <div id={id} className="grid grid-cols-1 gap-10 items-start">
      {/* Image on top */}
      <div className="justify-self-center">
        <div className="w-full max-w-[420px] h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-lg border border-white/10 bg-white/5">
          <img src={imageSrc} alt={imageAlt} className="w-full h-full object-contain p-4 sm:p-6" />
        </div>
      </div>

      {/* Text below */}
      <div>
        <h3 className="text-stockstrail-green-light text-lg tracking-wide font-semibold mb-3">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed mb-5 max-w-4xl">
          {description}
        </p>
        <div className="mb-6">
          <p className="text-white/80 font-semibold mb-2">Benefits:</p>
          <ul className="space-y-2 text-white/80 list-disc pl-5">
            {benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
        {ctaLink ? (
          <a href={ctaLink} className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-colors font-work-sans font-medium text-sm sm:text-base">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full"></div>
            {cta}
          </a>
        ) : (
          <button className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-colors font-work-sans font-medium text-sm sm:text-base">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full"></div>
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
            imageSrc="/services/mutualfunds.svg"
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
            cta="OPEN FIXED DEPOSIT"
            imageSrc="/services/fd.svg"
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
            imageSrc="/services/insurance.svg"
            imageAlt="Insurance"
          />

          <section className="mt-20 overflow-hidden">
            <h3 className="text-center font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-8">OUR PARTNERS</h3>
            <div className="w-full bg-[#0F2A2A] border-y border-[#1A3A3A] overflow-hidden">
              <div className="flex animate-scroll">
                {/* First set of logos */}
                {[
                  { name: "AngelOne", logo: "/logos/angelone.png" },
                  { name: "Alice Blue", logo: "/logos/aliceblue.png" },
                  { name: "HDFC SKY", logo: "/logos/hdfcsky.png" },
                  { name: "Zerodha", logo: "/logos/zerodha.png" },
                  { name: "AssetPlus", logo: "/logos/assetplus.png" },
                  { name: "PB Partners", logo: "/logos/pbpartners.png" },
                ].map((partner) => (
                  <div key={`first-${partner.name}`} className="flex-shrink-0 flex items-center justify-center px-6 sm:px-12 py-6 sm:py-8 min-w-[120px] sm:min-w-[200px]">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-16 sm:h-20 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[
                  { name: "AngelOne", logo: "/logos/angelone.png" },
                  { name: "Alice Blue", logo: "/logos/aliceblue.png" },
                  { name: "HDFC SKY", logo: "/logos/hdfcsky.png" },
                  { name: "Zerodha", logo: "/logos/zerodha.png" },
                  { name: "AssetPlus", logo: "/logos/assetplus.png" },
                  { name: "PB Partners", logo: "/logos/pbpartners.png" },
                ].map((partner) => (
                  <div key={`second-${partner.name}`} className="flex-shrink-0 flex items-center justify-center px-6 sm:px-12 py-6 sm:py-8 min-w-[120px] sm:min-w-[200px]">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-16 sm:h-20 w-auto object-contain"
                      loading="lazy"
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
