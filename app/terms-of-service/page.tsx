export default function TermsOfService() {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="section-title">
            Terms of <span className="text-teal">Service</span>
          </h1>
          <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using the JTS Digital website and services, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials on JTS Digital's website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              JTS Digital provides website design, development, and social media marketing services. All services are provided 
              subject to the terms and conditions set forth in individual service agreements or contracts.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">User Accounts</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
              You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You agree not to disclose your password to any third party and to take sole responsibility for any activities or 
              actions under your account, whether or not you have authorized such activities or actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              The website and its original content, features, and functionality are and will remain the exclusive property of 
              JTS Digital and its licensors. The website is protected by copyright, trademark, and other laws. Our trademarks 
              and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Payment terms for services will be specified in individual service agreements. Generally:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Payment is due according to the terms specified in your service agreement</li>
              <li>Late payments may incur additional fees</li>
              <li>All fees are non-refundable unless otherwise specified</li>
              <li>We reserve the right to suspend services for non-payment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall JTS Digital, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable 
              for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of 
              profits, data, use, goodwill, or other intangible losses, resulting from your use of the website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to defend, indemnify, and hold harmless JTS Digital and its licensee and licensors, and their employees, 
              contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, 
              liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use 
              the service will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which JTS Digital operates, without 
              regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be 
              considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
              we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will 
              be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              Email: <a href="mailto:legal@jtsdigital.com" className="text-teal hover:text-hot-pink transition-colors">legal@jtsdigital.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

