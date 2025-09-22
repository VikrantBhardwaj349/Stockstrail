import Layout from "../components/layout/Layout";

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        {/* Main animated blur circle */}
        <div className="absolute w-[871px] h-[887px] bg-stockstrail-bg-light rounded-full blur-100 opacity-60 left-1/2 top-20 transform -translate-x-1/2 animate-pulse-glow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-stockstrail-green-light/40 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-stockstrail-green-light/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-stockstrail-green-accent/40 rounded-full animate-bounce-gentle"></div>
        
        {/* Gradient mesh background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-stockstrail-green-light/20 via-transparent to-stockstrail-green-accent/10"></div>
        </div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,255,151,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
      </div>

      {/* Content with advanced animations */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="animate-slide-in-from-top">
          <h1 className="font-product-sans text-4xl sm:text-5xl lg:text-7xl font-normal leading-tight lg:leading-[80px] mb-8 group">
            <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500">Embark on Your</span>
            <br />
            <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500">Journey to </span>
            <span className="gradient-text group-hover:scale-105 transition-transform duration-500 inline-block">Financial Freedom</span>
          </h1>
        </div>
        
        <div className="animate-slide-in-from-top" style={{ animationDelay: '200ms' }}>
          <p className="text-white/50 text-lg sm:text-xl font-work-sans leading-relaxed max-w-[881px] mx-auto mb-12 group-hover:text-white/70 transition-colors duration-500">
            Achieve financial independence with Stockstrail. Our expert guidance and innovative tools help you navigate investing and reach your long-term goals. Whether you're a beginner or experienced investor, stay ahead and attain financial freedom with us.
          </p>
        </div>
        
        <div className="animate-slide-in-from-top" style={{ animationDelay: '400ms' }}>
          <a href="/services" className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium text-base sm:text-lg group">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
            Learn More
          </a>
        </div>
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
    <section className="py-16 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-4 h-4 bg-stockstrail-green-light/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/4 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative z-10">
        <div className="animate-slide-in-from-top">
          <h3 className="text-center font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-10 px-4 sm:px-6 lg:px-8 group hover:scale-105 transition-transform duration-500">
            OUR PARTNERS
          </h3>
        </div>
        <div className="w-full bg-[#0F2A2A] border-y border-[#1A3A3A] overflow-hidden hover:border-stockstrail-green-light/30 transition-colors duration-500">
          <div className="partners-track animate-scroll">
            {partners.concat(partners).map((partner, i) => (
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
      title: "FIXED DEPOSIT",
      description: "Secure your savings with guaranteed returns through our fixed deposit schemes, offering competitive interest rates and flexible tenure options.",
      icon: "💰"
    },
    {
      title: "INSURANCE",
      description: "Protect yourself and your loved ones from life's uncertainties with our comprehensive insurance plans.",
      icon: "📄"
    },
    {
      title: "LOAN",
      description: "Get quick approval for personal, home, and business loans with competitive interest rates and flexible repayment terms.",
      icon: "🏠"
    },
    {
      title: "OTHERS",
      description: "In addition to our core financial services, we also offer a range of other solutions to support your financial well-being.",
      icon: "➕"
    }
  ];

  const getHref = (title: string) => {
    if (title.includes("MUTUAL FUNDS")) return "/services#mutual-funds";
    if (title.includes("FIXED DEPOSIT")) return "/services#fd";
    if (title.includes("INSURANCE")) return "/services#insurance";
    if (title.includes("LOAN")) return "/services#loan";
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
              <div className="bg-stockstrail-bg border-2 border-white/13 rounded-[105px] p-4 sm:p-8 flex flex-col sm:flex-row items-center group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-8 flex-shrink-0 group-hover:scale-110 group-hover:bg-stockstrail-green-light/20 transition-all duration-300">
                  <span className="text-2xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                </div>
                
                <div className="flex-grow text-center">
                  <h3 className="font-product-sans text-xl sm:text-2xl font-normal uppercase text-white mb-4 group-hover:text-stockstrail-green-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/50 font-work-sans text-sm sm:text-base leading-relaxed max-w-[662px] mx-auto group-hover:text-white/70 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                <a href={getHref(service.title)} className="w-16 h-16 sm:w-24 sm:h-24 bg-white/20 rounded-full flex items-center justify-center mt-4 sm:mt-0 sm:ml-8 flex-shrink-0 group-hover:bg-stockstrail-gradient group-hover:scale-110 transition-all duration-300 cursor-pointer" aria-label={`${service.title} link`}>
                  <svg width="24" height="24" className="sm:w-[35px] sm:h-[35px] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.44141 28.6037L29.0414 7.00366M29.0414 7.00366H12.8414M29.0414 7.00366V23.2037" stroke="white" strokeWidth="2.16" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/services" className="inline-flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium group">
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
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
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-4 h-4 bg-stockstrail-green-light/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-slide-in-from-top">
          <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal uppercase mb-16 group">
            <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500">What our </span>
            <span className="gradient-text group-hover:scale-105 transition-transform duration-500 inline-block">client</span>
            <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500"> says</span>
          </h2>
        </div>
        
        <div className="animate-slide-in-from-top" style={{ animationDelay: '200ms' }}>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto group hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,151,0.2)] transition-all duration-500">
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-stockstrail-green-light group-hover:scale-110 transition-transform duration-300">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20" style={{ animationDelay: `${i * 100}ms` }}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
            
            <blockquote className="text-white text-lg leading-relaxed mb-6 group-hover:text-stockstrail-green-light transition-colors duration-500">
              "One of the best investment firms in Sydney with highly knowledgeable, professional and friendly staff."
            </blockquote>
            
            <div className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-500">
              Nominated by hundreds of clients and always rated as one of the region's top-rated advisors.
            </div>
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
      {/* Enhanced background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-stockstrail-green-light/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-5 h-5 bg-stockstrail-green-light/10 rounded-full animate-bounce-gentle"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-slide-in-from-top">
          <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal uppercase mb-8 group">
            <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500">About </span>
            <span className="gradient-text group-hover:scale-105 transition-transform duration-500 inline-block">StocksTrail</span>
          </h2>
        </div>
        
        <div className="animate-slide-in-from-top" style={{ animationDelay: '200ms' }}>
          <p className="text-white font-work-sans text-2xl font-light leading-relaxed max-w-5xl mx-auto mb-12 group-hover:text-stockstrail-green-light transition-colors duration-500">
            We ensure a secure and safe mutual fund investment platform through a structured and disciplined approach. We offer a wide range of services, including Mutual Funds, Insurance, Fixed Deposits, and more, combining top-tier proprietary and third-party products.
          </p>
        </div>
        
        <div className="animate-slide-in-from-top" style={{ animationDelay: '400ms' }}>
          <p className="text-white font-work-sans text-2xl font-light leading-relaxed max-w-5xl mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
            Our goal is to provide quick transaction services tailored to your profile and risk appetite. Partner with us to develop a savings and investment habit, along with a protection plan that helps you achieve your investment goals according to your specific needs. Our advice ensures you choose the best schemes under the SEBI-defined riskometer.
          </p>
        </div>
        
        <div className="mt-16">
          <a 
            href="/contact" 
            className="inline-flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium text-lg group relative z-20 cursor-pointer"
            style={{ pointerEvents: 'auto' }}
          >
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-4 h-4 bg-stockstrail-green-light/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-slide-in-from-top">
          <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal uppercase mb-8 text-white group hover:scale-105 transition-transform duration-500">
            DISCLAIMER
          </h2>
        </div>
        
        <div className="space-y-8 text-center">
          <div className="animate-slide-in-from-top" style={{ animationDelay: '200ms' }}>
            <p className="text-white font-work-sans text-2xl font-light leading-relaxed max-w-5xl mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
              <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500">www.stockstrail.in is an online website of </span>
              <span className="gradient-text group-hover:scale-105 transition-transform duration-500 inline-block">Vikrant Bhardwaj </span>
              <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500">who is registered vide </span>
              <span className="gradient-text group-hover:scale-105 transition-transform duration-500 inline-block">ARN-284122</span>
              <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500"> as a AMFI Registered Mutual Fund Distributor. The said website is intends to provide educative and informative details related to investments and also provide online transaction facility in Mutual Funds.</span>
            </p>
          </div>
          
          <div className="animate-slide-in-from-top" style={{ animationDelay: '400ms' }}>
            <p className="text-white font-work-sans text-2xl font-light leading-relaxed max-w-5xl mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
              We do not charge any fees for these calculators and information, because we earn our commissions from the Mutual Fund companies. The website does not guarantee any returns or financial goal success by any means.
            </p>
          </div>
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
