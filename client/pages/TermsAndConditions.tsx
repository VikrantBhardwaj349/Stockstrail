import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const TermsAndConditions = () => {
  return (
    <Layout>
      <SEO
        title="Terms and Conditions & Cancellation Policy | Stockstrail"
        description="Read Stockstrail's Terms and Conditions and Cancellation Policy for all financial services including mutual funds, fixed deposits, insurance, loans, and demat accounts."
        keywords="terms and conditions, cancellation policy, stockstrail, financial services"
        url="/terms-and-conditions"
      />
      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-4 font-product-sans">
              Terms and Conditions
            </h1>
            <p className="text-white/70 text-lg">
              Please read these terms carefully before using Stockstrail's services
            </p>
          </div>

          {/* Content */}
          <div className="bg-stockstrail-bg-light/30 rounded-2xl p-8 lg:p-12 backdrop-blur-sm border border-white/10 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Introduction
              </h2>
              <p className="text-white/80 leading-relaxed">
                Stockstrail (hereinafter referred to as "Platform" or "we" or "us" or "our") is a financial advisory and distribution platform that provides access to various financial products and services including Mutual Funds, Fixed Deposits, Insurance, Loans, Demat Accounts, and other investment solutions.
              </p>
              <p className="text-white/80 leading-relaxed mt-4">
                By accessing and using this Platform, you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you must not use this Platform.
              </p>
            </section>

            {/* Definitions */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Definitions
              </h2>
              <ul className="space-y-3 text-white/80">
                <li><strong className="text-white">"User"</strong> means any person who accesses or uses the Stockstrail Platform.</li>
                <li><strong className="text-white">"Services"</strong> means all financial services and products offered through the Platform including but not limited to mutual funds, fixed deposits, insurance, loans, and demat accounts.</li>
                <li><strong className="text-white">"Mutual Funds"</strong> means investment schemes managed by Asset Management Companies (AMCs) listed on BSE.</li>
                <li><strong className="text-white">"SIP"</strong> means Systematic Investment Plans for regular investment in mutual funds.</li>
                <li><strong className="text-white">"KYC"</strong> means Know Your Client verification as per SEBI guidelines.</li>
                <li><strong className="text-white">"Account"</strong> means the investment account opened by Users on the Platform.</li>
              </ul>
            </section>

            {/* Use of Platform */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Use of Platform
              </h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Users acknowledge that by accessing and using Stockstrail, they agree to the following terms:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Users must be at least 18 years of age and have the legal capacity to enter into binding agreements.</li>
                  <li>Login credentials must be kept safe and secure. Users are responsible for all activities on their account.</li>
                  <li>Users shall not use the Platform for any unlawful or prohibited purposes.</li>
                  <li>Users agree not to copy, reproduce, or distribute any content from the Platform without authorization.</li>
                  <li>Users shall not attempt to modify, disassemble, or reverse engineer the software underlying the Platform.</li>
                  <li>Users shall not use the Platform in any manner that could damage or impair its functionality.</li>
                </ul>
              </div>
            </section>

            {/* Registration and KYC */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Registration and KYC
              </h2>
              <div className="space-y-4 text-white/80">
                <p>
                  To use Stockstrail's Services, users must complete the following registration requirements:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide a valid phone number and create a secure password.</li>
                  <li>Submit PAN Card details and a copy of the PAN card.</li>
                  <li>Provide verified bank account details and a cancelled cheque leaf.</li>
                  <li>Submit address proof, photograph, and signature for KYC verification.</li>
                  <li>Complete Know Your Client (KYC) verification as per SEBI guidelines.</li>
                  <li>Users authorize Stockstrail to collect, process, and share KYC information with relevant authorities, RTAs, and AMCs as required by law.</li>
                </ul>
                <p className="mt-4">
                  Any discrepancies in submitted information may result in rejection of the application. Users are responsible for ensuring accuracy of all provided details.
                </p>
              </div>
            </section>

            {/* Investment Services */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Investment Services
              </h2>
              <div className="space-y-4 text-white/80">
                <p>
                  <strong className="text-white">Mutual Funds:</strong> Stockstrail is an AMFI-registered distributor enabling users to invest in mutual fund schemes. All investments are subject to market risks and scheme-specific terms. Users must read scheme-related documents before investing.
                </p>
                <p>
                  <strong className="text-white">Fixed Deposits:</strong> Users can avail fixed deposit services with guaranteed returns and flexible tenure options. Exit loads may apply based on scheme terms.
                </p>
                <p>
                  <strong className="text-white">Insurance:</strong> Stockstrail provides access to various insurance products. Users should review all policy documents and terms before purchase.
                </p>
                <p>
                  <strong className="text-white">Loans:</strong> Users can apply for personal, home, and business loans. Eligibility and approval are subject to lender criteria and verification.
                </p>
                <p>
                  <strong className="text-white">Demat Accounts:</strong> Users can open demat and trading accounts for stock market participation. All terms and conditions of the respective service providers apply.
                </p>
              </div>
            </section>

            {/* Transaction Processing */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Transaction Processing
              </h2>
              <div className="space-y-4 text-white/80">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Transactions placed on a business day will be processed on the next business day.</li>
                  <li>Units will be allotted at the NAV (Net Asset Value) applicable on the processing date.</li>
                  <li>Mutual fund units will be allotted only after sufficient funds are received by the AMC.</li>
                  <li>Users authorize Stockstrail to forward transaction requests to respective mutual funds and regulators.</li>
                  <li>Redemption settlements are typically processed within 3-4 business days.</li>
                  <li>Once placed, transactions cannot be cancelled but users can redeem units anytime.</li>
                </ul>
              </div>
            </section>

            {/* Fees and Charges */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Fees and Charges
              </h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Currently, Stockstrail's core services are free of transaction charges. However, Stockstrail reserves the right to implement fees in the future. Any changes will be communicated via email 30 days in advance and displayed on the Platform. Users will have the option to transfer assets without incurring Stockstrail charges.
                </p>
                <p>
                  Users understand that all charges levied by Stockstrail are in addition to fees charged by mutual funds, AMCs, and other financial institutions.
                </p>
              </div>
            </section>

            {/* Disclaimer and Limitation of Liability */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Disclaimer and Limitation of Liability
              </h2>
              <div className="space-y-4 text-white/80">
                <p>
                  <strong className="text-white">No Investment Advice:</strong> Information provided on Stockstrail shall not be construed as investment advice. All investment decisions are the responsibility of the user based on personal judgment.
                </p>
                <p>
                  <strong className="text-white">No Guarantees:</strong> Stockstrail does not guarantee:
                </p>
                <ul className="list-disc pl-6 space-y-1 ml-4">
                  <li>Payments on any units</li>
                  <li>Liquidity of any units</li>
                  <li>Redemption or repayment on maturity</li>
                  <li>Interest or dividend payments</li>
                  <li>Any specific returns or good delivery</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-white">Market Risks:</strong> All investments are subject to market risks, including possible loss of principal amount. Past performance is not a guarantee of future results.
                </p>
                <p>
                  <strong className="text-white">Limited Liability:</strong> Stockstrail shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-1 ml-4">
                  <li>Delays or failures by mutual funds, RTAs, or AMCs</li>
                  <li>System failures, network errors, or loss of data</li>
                  <li>Acts of God, natural disasters, or force majeure events</li>
                  <li>Fraudulent or unauthorized use of user credentials</li>
                  <li>Mechanical or technical failures in computer systems</li>
                  <li>Third-party services and content linked from the Platform</li>
                </ul>
              </div>
            </section>

            {/* Payment Gateway Terms */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Payment and Payment Gateway
              </h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Funds for investment are transferred through secure electronic payment gateways. Users are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keeping their net banking credentials secure and confidential.</li>
                  <li>Verifying all transaction details before completing payments.</li>
                  <li>Complying with all terms of their bank's net banking service.</li>
                </ul>
                <p className="mt-4">
                  Users acknowledge that payments are made at their own risk. Stockstrail is not responsible for internet frauds, hacking, or unauthorized access to user accounts. Transactions are subject to verification by Stockstrail, banks, and respective AMCs.
                </p>
              </div>
            </section>

            {/* Privacy and Data Sharing */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Privacy and Data Sharing
              </h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Stockstrail is committed to protecting user privacy. However, users authorize Stockstrail to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Share KYC and account information with regulatory authorities, mutual funds, and RTAs as required by law.</li>
                  <li>Share insurance policy and financial product details with users' financial advisors for personalized advice.</li>
                  <li>Use transaction data for improving services and customer experience.</li>
                  <li>Contact users regarding account services, special offers, and product recommendations (overriding DNC/NDNC registrations).</li>
                </ul>
                <p className="mt-4">
                  For detailed information on how personal data is handled, please refer to our Privacy Policy.
                </p>
              </div>
            </section>

            {/* Modification of Terms */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Modification of Terms
              </h2>
              <p className="text-white/80 leading-relaxed">
                Stockstrail reserves the right to modify, supplement, or amend these Terms and Conditions at any time without prior notice. Such amendments become effective immediately upon posting on the Platform. Users are responsible for reviewing these Terms periodically. Continued use of the Platform constitutes acceptance of any changes.
              </p>
            </section>

            {/* Termination of Services */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Termination of Services
              </h2>
              <p className="text-white/80 leading-relaxed">
                Stockstrail may terminate or suspend services by providing 90 days' written notice to users. However, users remain bound by their obligations under these Terms even after termination. Users can close their accounts at any time without penalty.
              </p>
            </section>

            {/* Cancellation Policy */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Cancellation Policy
              </h2>
              <div className="space-y-4 text-white/80">
                <p>
                  <strong className="text-white">Mutual Fund Investments:</strong> Once mutual fund units are purchased, they cannot be cancelled. However, users can redeem units anytime. Exit loads may apply as per the scheme's terms and conditions.
                </p>
                <p>
                  <strong className="text-white">Fixed Deposits:</strong> Premature withdrawal may be subject to penalties as per the deposit scheme terms. Users should review the scheme documents for exit load details.
                </p>
                <p>
                  <strong className="text-white">Insurance Policies:</strong> Cancellation terms vary by policy. Users should refer to their specific policy documents for cancellation procedures and timelines.
                </p>
                <p>
                  <strong className="text-white">Loans:</strong> Loan agreements have specific cancellation and prepayment terms. Users should contact the lender for details.
                </p>
                <p>
                  <strong className="text-white">SIP (Systematic Investment Plans):</strong> Users can stop SIPs anytime without penalty. However, units already purchased cannot be returned.
                </p>
                <p>
                  <strong className="text-white">Account Closure:</strong> Users can request account closure at any time. Positions must be liquidated before closure, and redemption timelines apply.
                </p>
              </div>
            </section>

            {/* User Information and Consent */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                User Information and Consent
              </h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Users agree to provide accurate and complete information as requested by Stockstrail, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Updated contact information and address details</li>
                  <li>Tax-related information for compliance with tax laws</li>
                  <li>Information required under KYC and other regulatory norms</li>
                  <li>Any changes to personal or financial circumstances</li>
                </ul>
                <p className="mt-4">
                  Failure to provide required information may result in ineligibility for certain services. Stockstrail shall not be liable for losses resulting from incomplete or inaccurate information provided by users.
                </p>
              </div>
            </section>

            {/* Complaints and Grievances */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Complaints and Grievances
              </h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Users can contact Stockstrail with complaints or grievances through the following channels:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: stockstrail@gmail.com</li>
                  <li>Phone: +91 97363-04663</li>
                  <li>Operating Hours: Mon-Fri 7 a.m. to 10 p.m., Sat-Sun 8 a.m. to 6 p.m.</li>
                </ul>
                <p className="mt-4">
                  Stockstrail will make efforts to resolve grievances promptly. If users have disputes regarding transaction accuracy, the transaction logs maintained by Stockstrail and the respective AMC will be the source of verification.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Governing Law and Jurisdiction
              </h2>
              <p className="text-white/80 leading-relaxed">
                These Terms and Conditions are governed by and construed in accordance with the laws of India. All disputes and differences arising out of or in connection with these Terms shall be within the exclusive jurisdiction of courts in Chennai. Users agree to submit to the jurisdiction of these courts for resolution of any disputes.
              </p>
            </section>

            {/* Regulatory Caution */}
            <section>
              <div className="bg-stockstrail-green-light/10 border-l-4 border-stockstrail-green-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 font-product-sans">
                  ⚠️ Regulatory Caution
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Mutual Fund investments are subject to market risks, read all scheme-related documents carefully before investing. The value of investments may rise or fall. Users may receive more or less than the amount invested depending on NAV at the time of redemption. Past performance is not indicative of future results.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-stockstrail-bg-light/50 p-6 rounded-lg border border-stockstrail-green-light/20">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Contact Us
              </h3>
              <div className="space-y-2 text-white/80">
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  <a href="mailto:stockstrail@gmail.com" className="text-stockstrail-green-light hover:underline">
                    stockstrail@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-white">Phone:</strong>{" "}
                  <a href="tel:+919736304663" className="text-stockstrail-green-light hover:underline">
                    +91 97363-04663
                  </a>
                </p>
                <p>
                  <strong className="text-white">Hours:</strong> Mon-Fri 7 a.m. to 10 p.m., Sat-Sun 8 a.m. to 6 p.m.
                </p>
              </div>
            </section>

            {/* Last Updated */}
            <div className="text-center text-white/60 text-sm pt-8">
              <p>Last Updated: November 2025</p>
              <p>© 2025 Stockstrail. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;
