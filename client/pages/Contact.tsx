import Layout from "../components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="space-y-6 text-white/90">
            <div>
              <h2 className="text-white text-sm uppercase tracking-widest mb-2">Address</h2>
              <p>Near Punjab And Sind Bank ,<br/> V.P.O. Chintpurni Teh:Amb ,<br/> Distt.- Una , Himachal Pradesh (177110)</p>
            </div>
            <div>
              <h2 className="text-white text-sm uppercase tracking-widest mb-2">Call Us</h2>
              <p>+91 97799-94858</p>
              <p>+91 97363-04663</p>
            </div>
            <div>
              <h2 className="text-white text-sm uppercase tracking-widest mb-2">Email</h2>
              <a className="underline" href="mailto:stockstrail@gmail.com">stockstrail@gmail.com</a>
            </div>
          </div>

          <div className="col-span-2 flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 8L12 4L18 8M6 16L12 20L18 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-white/80">Get in touch</h3>
              <a className="text-white text-xl underline" href="mailto:stockstrail@gmail.com">stockstrail@gmail.com</a>
              <p className="text-white/60 mt-6">We welcome your inquiries by phone or e-mail</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
