import Layout from "../components/layout/Layout";

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Main blur circle */}
        <div className="absolute w-[871px] h-[887px] bg-stockstrail-bg-light rounded-full blur-100 opacity-60 left-1/2 top-20 transform -translate-x-1/2"></div>
        
        {/* Background pattern/texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-stockstrail-green-light/10 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="font-product-sans text-4xl sm:text-5xl lg:text-7xl font-normal leading-tight lg:leading-[80px] mb-8">
          <span className="text-white">Embark on Your</span>
          <br />
          <span className="text-white">Journey to </span>
          <span className="gradient-text">Financial Freedom</span>
        </h1>
        
        <p className="text-white/50 text-lg sm:text-xl font-work-sans leading-relaxed max-w-[881px] mx-auto mb-12">
          Achieve financial independence with Stockstrail. Our expert guidance and innovative tools help you navigate investing and reach your long-term goals. Whether you're a beginner or experienced investor, stay ahead and attain financial freedom with us.
        </p>
        
        <button className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-all duration-300 font-work-sans font-medium text-base sm:text-lg group">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform"></div>
          Learn More
        </button>
      </div>
    </section>
  );
};

// Partner Logos Section
const PartnerLogosSection = () => {
  const partners = [
    { name: "AngelOne", logo: "/logos/angelone.png" },
    { name: "Alice Blue", logo: "/logos/aliceblue.png" },
    { name: "HDFC SKY", logo: "/logos/hdfcsky.png" },
    { name: "Zerodha", logo: "/logos/zerodha.png" },
    { name: "AssetPlus", logo: "/logos/assetplus.png" },
    { name: "PB Partners", logo: "/logos/pbpartners.png" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-center font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-10 px-4 sm:px-6 lg:px-8">
          OUR PARTNERS
        </h3>
        <div className="w-full bg-[#0F2A2A] border-y border-[#1A3A3A] overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {partners.map((partner) => (
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
            {partners.map((partner) => (
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
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      title: "MUTUAL FUNDS",
      description: "Our expertly managed funds offer a convenient way to grow your wealth over time, with the potential for long-term returns and minimal risk.",
      icon: "🏦"
    },
    {
      title: "DEMAT ACCOUNT",
      description: "With a Demat account, you can buy, sell, and transfer securities quickly and efficiently, providing you with greater control and flexibility over your investments.",
      icon: "💰"
    },
    {
      title: "INSURANCE",
      description: "Protect yourself and your loved ones from life's uncertainties with our comprehensive insurance plans.",
      icon: "📄"
    },
    {
      title: "OTHERS",
      description: "In addition to our core financial services, we also offer a range of other solutions to support your financial well-being.",
      icon: "➕"
    }
  ];

  const getHref = (title: string) => {
    if (title.includes("MUTUAL FUNDS")) return "/services#mutual-funds";
    if (title.includes("DEMAT ACCOUNT")) return "/open-demat";
    if (title.includes("INSURANCE")) return "/services#insurance";
    return "/services#others";
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="w-full h-96 bg-stockstrail-bg-light blur-185 opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal uppercase mb-8">
            <span className="text-white">Invest your </span>
            <span className="gradient-text">money</span>
            <span className="text-white"> on the go</span>
          </h2>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <div className="bg-stockstrail-bg border-2 border-white/13 rounded-[105px] p-4 sm:p-8 flex flex-col sm:flex-row items-center group hover:border-white/25 transition-all duration-300">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-8 flex-shrink-0">
                  <span className="text-2xl sm:text-4xl">{service.icon}</span>
                </div>
                
                <div className="flex-grow text-center">
                  <h3 className="font-product-sans text-xl sm:text-2xl font-normal uppercase text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/50 font-work-sans text-sm sm:text-base leading-relaxed max-w-[662px] mx-auto">
                    {service.description}
                  </p>
                </div>
                
                <a href={getHref(service.title)} className="w-16 h-16 sm:w-24 sm:h-24 bg-white/20 rounded-full flex items-center justify-center mt-4 sm:mt-0 sm:ml-8 flex-shrink-0 group-hover:bg-stockstrail-gradient transition-all duration-300 cursor-pointer" aria-label={`${service.title} link`}>
                  <svg width="24" height="24" className="sm:w-[35px] sm:h-[35px]" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.44141 28.6037L29.0414 7.00366M29.0414 7.00366H12.8414M29.0414 7.00366V23.2037" stroke="white" strokeWidth="2.16" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/services" className="inline-flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-colors font-work-sans font-medium">
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full"></div>
            All Services
          </a>
        </div>
      </div>
    </section>
  );
};

// Why Choose Section
const WhyChooseSection = () => {
  const features = [
    {
      icon: "https://c.animaapp.com/mfilofkpBLsyal/img/frame-3.svg",
      title: "GOAL PLANNING",
      delay: "0ms",
    },
    {
      icon: "https://c.animaapp.com/mfilofkpBLsyal/img/frame-4.svg",
      title: "FREE CONSULTATION",
      delay: "200ms",
    },
    {
      icon: "https://c.animaapp.com/mfilofkpBLsyal/img/frame-2.svg",
      title: "BANK LEVEL\nSECURITY",
      delay: "400ms",
    },
    {
      icon: "https://c.animaapp.com/mfilofkpBLsyal/img/frame-1.svg",
      title: "SAFE AND\nSECURE",
      delay: "600ms",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="w-full h-96 bg-stockstrail-bg-light blur-185 opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal uppercase">
            <span className="text-white">Why Choose </span>
            <span className="gradient-text">StocksTrail</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="translate-y-[-1rem] animate-fade-in opacity-0 bg-[#012928] border-2 border-[#ffffff21] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] rounded-[100px] md:rounded-[200px] h-[250px] md:h-[307px] w-full max-w-[250px] mx-auto transition-all duration-300 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-white/20 hover:scale-105 group cursor-pointer"
              style={
                { "--animation-delay": feature.delay } as React.CSSProperties
              }
            >
              <div className="flex flex-col items-center justify-center gap-4 md:gap-5 h-full p-6 md:p-8">
                <img
                  className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(0,255,151,0.5)]"
                  alt="Feature icon"
                  src={feature.icon}
                />
                <div className="[font-family:'Work_Sans',Helvetica] font-normal text-white text-lg md:text-xl text-center tracking-[0] leading-[26px] md:leading-[30px] whitespace-pre-line transition-all duration-300 group-hover:text-[#00FF97] group-hover:drop-shadow-[0_0_10px_rgba(0,255,151,0.3)]">
                  {feature.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal uppercase mb-16">
          <span className="text-white">What our </span>
          <span className="gradient-text">client</span>
          <span className="text-white"> says</span>
        </h2>
        
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="flex text-stockstrail-green-light">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
          </div>
          
          <blockquote className="text-white text-lg leading-relaxed mb-6">
            "One of the best investment firms in Sydney with highly knowledgeable, professional and friendly staff."
          </blockquote>
          
          <div className="text-white/70 text-sm">
            Nominated by hundreds of clients and always rated as one of the region's top-rated advisors.
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal uppercase mb-8">
          <span className="text-white">About </span>
          <span className="gradient-text">StocksTrail</span>
        </h2>
        
        <p className="text-white font-work-sans text-2xl font-light leading-relaxed max-w-5xl mx-auto mb-12">
          We ensure a secure and safe mutual fund investment platform through a structured and disciplined approach. We offer a wide range of services, including Mutual Funds, Insurance, Fixed Deposits, and more, combining top-tier proprietary and third-party products.
        </p>
        
        <p className="text-white font-work-sans text-2xl font-light leading-relaxed max-w-5xl mx-auto">
          Our goal is to provide quick transaction services tailored to your profile and risk appetite. Partner with us to develop a savings and investment habit, along with a protection plan that helps you achieve your investment goals according to your specific needs. Our advice ensures you choose the best schemes under the SEBI-defined riskometer.
        </p>
        
        <div className="mt-16">
          <a href="/contact" className="inline-flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-colors font-work-sans font-medium text-lg">
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full"></div>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

// Disclaimer Section
const DisclaimerSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal uppercase mb-8 text-white">
          DISCLAIMER
        </h2>
        
        <div className="space-y-8 text-center">
          <p className="text-white font-work-sans text-2xl font-light leading-relaxed max-w-5xl mx-auto">
            <span className="text-white">www.stockstrail.in is an online website of </span>
            <span className="gradient-text">Vikrant Bhardwaj </span>
            <span className="text-white">who is registered vide </span>
            <span className="gradient-text">ARN-284122</span>
            <span className="text-white"> as a AMFI Registered Mutual Fund Distributor. The said website is intends to provide educative and informative details related to investments and also provide online transaction facility in Mutual Funds.</span>
          </p>
          
          <p className="text-white font-work-sans text-2xl font-light leading-relaxed max-w-5xl mx-auto">
            We do not charge any fees for these calculators and information, because we earn our commissions from the Mutual Fund companies. The website does not guarantee any returns or financial goal success by any means.
          </p>
        </div>
      </div>
    </section>
  );
};

// Main Index Component
const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PartnerLogosSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <AboutSection />
      <DisclaimerSection />
    </Layout>
  );
};

export default Index;
