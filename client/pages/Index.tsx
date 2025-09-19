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
        
        <button className="inline-flex items-center gap-4 px-6 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-all duration-300 font-work-sans font-medium text-lg group">
          <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform"></div>
          Learn More
        </button>
      </div>
    </section>
  );
};

// Partner Logos Section
const PartnerLogosSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="relative z-10 max-w-6xl mx-auto">
        <h3 className="text-center font-product-sans text-3xl sm:text-4xl text-white uppercase tracking-wide mb-10">
          OUR PARTNERS
        </h3>
        <div className="rounded-xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F3e38ffd1ab414245b71fd905135cc72e%2Fd7513c097b2f4bc29cb549675182fd7f?format=webp&width=1200"
            alt="Partner logos"
            className="w-full h-24 object-contain"
            loading="lazy"
          />
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
              <div className="bg-stockstrail-bg border-2 border-white/13 rounded-[105px] p-8 flex items-center group hover:border-white/25 transition-all duration-300">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mr-8 flex-shrink-0">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                
                <div className="flex-grow text-center">
                  <h3 className="font-product-sans text-2xl font-normal uppercase text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/50 font-work-sans text-base leading-relaxed max-w-[662px] mx-auto">
                    {service.description}
                  </p>
                </div>
                
                <a href={getHref(service.title)} className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center ml-8 flex-shrink-0 group-hover:bg-stockstrail-gradient transition-all duration-300 cursor-pointer" aria-label={`${service.title} link`}>
                  <svg width="35" height="35" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      title: "Goal Planning",
      icon: (
        <svg width="64" height="64" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.5 35.4935V6.16016L53.8333 16.8268L32.5 27.4935" fill="url(#paint0_linear)" stroke="url(#paint1_linear)" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M55.3293 28.0854C56.7484 32.4591 56.8812 37.1484 55.7119 41.5954C54.5425 46.0424 52.1204 50.0599 48.7335 53.1699C45.3466 56.2799 41.1377 58.3515 36.6073 59.1383C32.077 59.9251 27.4159 59.3938 23.1788 57.6078C18.9417 55.8218 15.3068 52.8562 12.7066 49.0638C10.1064 45.2715 8.65042 40.812 8.51177 36.2159C8.37312 31.6198 9.55769 27.0807 11.9245 23.1385C14.2914 19.1962 17.7409 16.0169 21.8627 13.9788" stroke="url(#paint2_linear)" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear" x1="29.8186" y1="32.1738" x2="49.113" y2="16.5894" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FF97"/>
              <stop offset="1" stopColor="#007D42"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="29.8186" y1="32.1738" x2="49.113" y2="16.5894" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FF97"/>
              <stop offset="1" stopColor="#007D42"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="2.4678" y1="54.3414" x2="32.7112" y2="18.9177" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FF97"/>
              <stop offset="1" stopColor="#007D42"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: "Free Consultation",
      icon: (
        <svg width="64" height="64" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.5675 12.3093C36.6354 12.0554 36.7527 11.8175 36.9125 11.609C37.0724 11.4005 37.2718 11.2255 37.4993 11.0941C37.7269 10.9627 37.9781 10.8774 38.2385 10.8432C38.499 10.8089 38.7637 10.8262 39.0175 10.8943C42.7252 11.8616 46.108 13.7999 48.8174 16.5094C51.5269 19.2188 53.4651 22.6016 54.4325 26.3093C54.5006 26.563 54.5179 26.8277 54.4836 27.0882C54.4493 27.3487 54.3641 27.5999 54.2326 27.8274C54.1012 28.055 53.9263 28.2544 53.7178 28.4143C53.5093 28.5741 53.2713 28.6914 53.0175 28.7593C52.8486 28.8036 52.6747 28.8263 52.5 28.8268C52.0596 28.8269 51.6315 28.6817 51.2821 28.4136C50.9327 28.1456 50.6815 27.7697 50.5675 27.3443C49.7789 24.3171 48.1972 21.5551 45.9855 19.3429C43.7738 17.1307 41.012 15.5484 37.985 14.7593C37.731 14.6916 37.4928 14.5746 37.284 14.4148C37.0752 14.2551 36.9 14.0557 36.7683 13.8281C36.6367 13.6006 36.5512 13.3493 36.5167 13.0887C36.4823 12.8281 36.4995 12.5632 36.5675 12.3093Z" fill="url(#paint0_linear_phone)"/>
          <defs>
            <linearGradient id="paint0_linear_phone" x1="0.215617" y1="53.1683" x2="33.6718" y2="16.0114" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FF97"/>
              <stop offset="1" stopColor="#007D42"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: "Bank Level Security",
      icon: (
        <svg width="64" height="64" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M54.5 10.6533H10.5C9.43913 10.6533 8.42172 11.0747 7.67157 11.8249C6.92143 12.575 6.5 13.5925 6.5 14.6533V48.6533C6.5 49.7142 6.92143 50.7316 7.67157 51.4817C8.42172 52.2319 9.43913 52.6533 10.5 52.6533H14.5V56.6533C14.5 57.1838 14.7107 57.6925 15.0858 58.0675C15.4609 58.4426 15.9696 58.6533 16.5 58.6533C17.0304 58.6533 17.5391 58.4426 17.9142 58.0675C18.2893 57.6925 18.5 57.1838 18.5 56.6533V52.6533H46.5V56.6533C46.5 57.1838 46.7107 57.6925 47.0858 58.0675C47.4609 58.4426 47.9696 58.6533 48.5 58.6533C49.0304 58.6533 49.5391 58.4426 49.9142 58.0675C50.2893 57.6925 50.5 57.1838 50.5 56.6533V52.6533H54.5C55.5609 52.6533 56.5783 52.2319 57.3284 51.4817C58.0786 50.7316 58.5 49.7142 58.5 48.6533V14.6533C58.5 13.5925 58.0786 12.575 57.3284 11.8249C56.5783 11.0747 55.5609 10.6533 54.5 10.6533Z" fill="url(#paint0_linear_security)"/>
          <defs>
            <linearGradient id="paint0_linear_security" x1="-0.0358043" y1="53.2211" x2="31.7148" y2="15.02" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FF97"/>
              <stop offset="1" stopColor="#007D42"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: "Safe and Secure",
      icon: (
        <svg width="64" height="64" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M52.5 10.6533H12.5C11.4391 10.6533 10.4217 11.0747 9.67157 11.8249C8.92143 12.575 8.5 13.5925 8.5 14.6533V28.6533C8.5 41.8333 14.88 49.8208 20.2325 54.2008C25.9975 58.9158 31.7325 60.5158 31.9825 60.5833C32.3263 60.6768 32.6887 60.6768 33.0325 60.5833C33.2825 60.5158 39.01 58.9158 44.7825 54.2008C50.12 49.8208 56.5 41.8333 56.5 28.6533V14.6533C56.5 13.5925 56.0786 12.575 55.3284 11.8249C54.5783 11.0747 53.5609 10.6533 52.5 10.6533Z" fill="url(#paint0_linear_shield)"/>
          <defs>
            <linearGradient id="paint0_linear_shield" x1="2.46695" y1="54.9949" x2="36.0389" y2="19.201" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FF97"/>
              <stop offset="1" stopColor="#007D42"/>
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="w-[250px] h-[307px] mx-auto bg-stockstrail-bg border-2 border-white/13 rounded-[200px] backdrop-blur-[50px] flex flex-col items-center justify-center p-8 hover:border-white/25 transition-all duration-300">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-white font-work-sans text-xl font-normal uppercase text-center leading-[30px]">
                  {feature.title}
                </h3>
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
