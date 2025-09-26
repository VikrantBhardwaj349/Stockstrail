import Layout from "../components/layout/Layout";

const StockstrailLogoBW = () => (
  <div className="flex items-center gap-4 sm:gap-8 group">
    <svg
      width="192"
      height="208"
      viewBox="0 0 32 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24 sm:w-48 sm:h-48 group-hover:scale-110 transition-transform duration-500"
    >
      <rect x="3.74097" y="16.0264" width="20.8942" height="3.71985" fill="#ffffff" className="group-hover:fill-stockstrail-green-light transition-colors duration-500" />
      <path d="M1.15294 18.553C0.922293 18.3223 0.923909 17.9479 1.15654 17.7192L15.5948 3.52791C16.0954 3.03584 16.8991 3.0393 17.3955 3.53568L18.6805 4.82068C19.183 5.32315 19.1794 6.13889 18.6726 6.63701L6.52575 18.5761C5.032 20.0444 2.63398 20.034 1.15294 18.553Z" fill="#ffffff" className="group-hover:fill-stockstrail-green-light transition-colors duration-500" />
      <path d="M20.498 0.96257C20.9132 0.86584 21.2857 1.23841 21.189 1.65361L19.7088 8.0073C19.6064 8.447 19.0607 8.6029 18.7414 8.2837L13.868 3.41016C13.5487 3.09092 13.7046 2.54519 14.1443 2.44276L20.498 0.96257Z" fill="#ffffff" className="group-hover:fill-stockstrail-green-light transition-colors duration-500" />
      <path d="M30.5214 17.0648C30.6657 17.209 30.6647 17.4433 30.5192 17.5863L15.742 32.1108C15.3414 32.5044 14.6985 32.5017 14.3014 32.1046L12.6547 30.4578C12.2527 30.0559 12.2555 29.4033 12.6609 29.0048L24.8337 17.0402C26.415 15.4859 28.9536 15.4969 30.5214 17.0648Z" fill="#ffffff" className="group-hover:fill-stockstrail-green-light transition-colors duration-500" />
      <path d="M11.0196 34.4984C10.6044 34.5951 10.2318 34.2225 10.3286 33.8073L11.8087 27.4536C11.9112 27.0139 12.4569 26.858 12.7761 27.1773L17.6496 32.0508C17.9688 32.37 17.8129 32.9157 17.3733 33.0182L11.0196 34.4984Z" fill="#ffffff" className="group-hover:fill-stockstrail-green-light transition-colors duration-500" />
    </svg>
    <div className="flex items-baseline">
      <span className="text-white font-product-sans text-4xl sm:text-7xl font-normal group-hover:text-stockstrail-green-light transition-colors duration-500">Stocks</span>
      <span className="text-white font-product-sans text-4xl sm:text-7xl font-normal group-hover:text-stockstrail-green-light transition-colors duration-500">trail</span>
    </div>
  </div>
);

const Contact = () => {
  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-stockstrail-green-light/30 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-stockstrail-green-accent/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 right-10 w-5 h-5 bg-stockstrail-green-light/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-5 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/3 right-5 w-4 h-4 bg-white/10 rounded-full animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* Mobile Layout - Stacked vertically */}
          <div className="lg:hidden space-y-12">
            {/* Address and Email */}
            <div className="space-y-6 text-white/90">
              <div className="group">
                <h2 className="text-white text-sm uppercase tracking-widest mb-2 group-hover:text-stockstrail-green-light transition-colors duration-300">Address</h2>
                <a 
                  href="https://maps.google.com/maps?q=Near+Punjab+And+Sind+Bank,+V.P.O.+Chintpurni+Teh:Amb,+Distt.-+Una,+Himachal+Pradesh+177110" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-stockstrail-green-light hover:scale-105 transition-all duration-300 cursor-pointer block p-3 rounded-lg hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,255,151,0.2)]"
                >
                  Near Punjab And Sind Bank ,<br/> V.P.O. Chintpurni Teh:Amb ,<br/> Distt.- Una , Himachal Pradesh (177110)
                </a>
              </div>
              <div className="group">
                <h2 className="text-white text-sm uppercase tracking-widest mb-2 group-hover:text-stockstrail-green-light transition-colors duration-300">Email</h2>
                <a 
                  className="underline hover:text-stockstrail-green-light hover:scale-105 transition-all duration-300 block p-3 rounded-lg hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,255,151,0.2)]" 
                  href="mailto:stockstrail@gmail.com"
                >
                  stockstrail@gmail.com
                </a>
              </div>
            </div>

            {/* Logo and Content - Center */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 hover:scale-105 transition-transform duration-500">
                <StockstrailLogoBW />
              </div>
              <div className="group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-white/80 text-xl mb-4 group-hover:text-stockstrail-green-light transition-colors duration-300">Get in touch</h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">We welcome your inquiries by phone or e-mail</p>
              </div>
            </div>

            {/* Call Us and WhatsApp */}
            <div className="space-y-6 text-white/90">
              <div className="group">
                <h2 className="text-white text-sm uppercase tracking-widest mb-2 group-hover:text-stockstrail-green-light transition-colors duration-300">Call Us</h2>
                <div className="space-y-2">
                  <p>
                    <a 
                      href="tel:+919779994858" 
                      className="text-white hover:text-stockstrail-green-light hover:scale-105 transition-all duration-300 block p-2 rounded-lg hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,255,151,0.2)]"
                    >
                      +91 97799-94858
                    </a>
                  </p>
                  <p>
                    <a 
                      href="tel:+919736304663" 
                      className="text-white hover:text-stockstrail-green-light hover:scale-105 transition-all duration-300 block p-2 rounded-lg hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,255,151,0.2)]"
                    >
                      +91 97363-04663
                    </a>
                  </p>
                </div>
              </div>
              <div className="group">
                <h2 className="text-white text-sm uppercase tracking-widest mb-2 group-hover:text-stockstrail-green-light transition-colors duration-300">WhatsApp</h2>
                <div className="space-y-2">
                  <p>
                    <a 
                      href="https://wa.me/919779994858" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-stockstrail-green-light hover:scale-105 transition-all duration-300 block p-2 rounded-lg hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,255,151,0.2)]"
                    >
                      +91 97799-94858
                    </a>
                  </p>
                  <p>
                    <a 
                      href="https://wa.me/919736304663" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-stockstrail-green-light hover:scale-105 transition-all duration-300 block p-2 rounded-lg hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,255,151,0.2)]"
                    >
                      +91 97363-04663
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Absolute positioning */}
          <div className="hidden lg:block relative min-h-[480px]">
            {/* Top Left - Address and Email */}
            <div className="absolute top-0 left-0 space-y-6 text-white/90 max-w-sm">
              <div className="group">
                <h2 className="text-white text-sm uppercase tracking-widest mb-2 group-hover:text-stockstrail-green-light transition-colors duration-300">Address</h2>
                <a 
                  href="https://maps.google.com/maps?q=Near+Punjab+And+Sind+Bank,+V.P.O.+Chintpurni+Teh:Amb,+Distt.-+Una,+Himachal+Pradesh+177110" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-stockstrail-green-light hover:scale-105 transition-all duration-300 cursor-pointer block p-3 rounded-lg hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,255,151,0.2)]"
                >
                  Near Punjab And Sind Bank ,<br/> V.P.O. Chintpurni Teh:Amb ,<br/> Distt.- Una , Himachal Pradesh (177110)
                </a>
              </div>
              <div className="group">
                <h2 className="text-white text-sm uppercase tracking-widest mb-2 group-hover:text-stockstrail-green-light transition-colors duration-300">Email</h2>
                <a 
                  className="underline hover:text-stockstrail-green-light hover:scale-105 transition-all duration-300 block p-3 rounded-lg hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,255,151,0.2)]" 
                  href="mailto:stockstrail@gmail.com"
                >
                  stockstrail@gmail.com
                </a>
              </div>
            </div>

            {/* Center - Logo and Content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-16 flex flex-col items-center text-center group">
              <div className="mb-6 hover:scale-105 transition-transform duration-500">
                <StockstrailLogoBW />
              </div>
              <div className="group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-white/80 text-xl mb-4 group-hover:text-stockstrail-green-light transition-colors duration-300">Get in touch</h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">We welcome your inquiries by phone or e-mail</p>
              </div>
            </div>

            {/* Bottom Right - Call Us and WhatsApp */}
            <div className="absolute bottom-0 right-0 space-y-6 text-white/90 max-w-sm">
              <div className="group">
                <h2 className="text-white text-sm uppercase tracking-widest mb-2 group-hover:text-stockstrail-green-light transition-colors duration-300 text-left">Call Us</h2>
                <div className="space-y-2 text-right">
                  <p>
                    <a 
                      href="tel:+919779994858" 
                      className="text-white hover:text-stockstrail-green-light hover:scale-105 transition-all duration-300 block p-2 rounded-lg hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,255,151,0.2)]"
                    >
                      +91 97799-94858
                    </a>
                  </p>
                  <p>
                    <a 
                      href="tel:+919736304663" 
                      className="text-white hover:text-stockstrail-green-light hover:scale-105 transition-all duration-300 block p-2 rounded-lg hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,255,151,0.2)]"
                    >
                      +91 97363-04663
                    </a>
                  </p>
                </div>
              </div>
              <div className="group">
                <h2 className="text-white text-sm uppercase tracking-widest mb-2 group-hover:text-stockstrail-green-light transition-colors duration-300 text-left">WhatsApp</h2>
                <div className="space-y-2 text-right">
                  <p>
                    <a 
                      href="https://wa.me/919779994858" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-stockstrail-green-light hover:scale-105 transition-all duration-300 block p-2 rounded-lg hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,255,151,0.2)]"
                    >
                      +91 97799-94858
                    </a>
                  </p>
                  <p>
                    <a 
                      href="https://wa.me/919736304663" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-stockstrail-green-light hover:scale-105 transition-all duration-300 block p-2 rounded-lg hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,255,151,0.2)]"
                    >
                      +91 97363-04663
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
