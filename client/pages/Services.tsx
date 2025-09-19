import Layout from "../components/layout/Layout";
import placeholder from "../../public/placeholder.svg";

const SectionBlock = ({
  id,
  title,
  description,
  benefits,
  cta,
  reverse = false,
}: {
  id?: string;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  reverse?: boolean;
}) => {
  return (
    <div id={id} className="grid grid-cols-1 gap-10 items-start">
      {/* Image on top */}
      <div className="justify-self-center">
        <div className="w-[420px] h-[300px] rounded-xl overflow-hidden shadow-lg border border-white/10 bg-white/5">
          <img src={placeholder} alt="service" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Text below */}
      <div>
        <h3 className="text-stockstrail-green-light text-lg tracking-wide font-semibold mb-3">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed mb-5 max-w-xl">
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
        <button className="inline-flex items-center gap-4 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-colors font-work-sans font-medium">
          <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full"></div>
          {cta}
        </button>
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
          />

          <section className="mt-20">
            <h3 className="text-center font-product-sans text-3xl sm:text-4xl text-white uppercase tracking-wide mb-8">OUR PARTNERS</h3>
            <div className="mx-auto max-w-6xl rounded-xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F3e38ffd1ab414245b71fd905135cc72e%2Fd7513c097b2f4bc29cb549675182fd7f?format=webp&width=1200"
                alt="Partner logos"
                className="w-full h-24 object-contain"
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
