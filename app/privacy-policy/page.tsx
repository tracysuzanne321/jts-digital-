export default function PrivacyPolicy() {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="section-title">
            Privacy <span className="text-teal">Policy</span>
          </h1>
          <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              JTS Digital ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal mb-2">Personal Information</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Register for an account</li>
                <li>Fill out a contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Request information about our services</li>
                <li>Communicate with us via email or phone</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-2">
                This information may include your name, email address, phone number, company name, and any other information 
                you choose to provide.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal mb-2">Automatically Collected Information</h3>
              <p className="text-gray-300 leading-relaxed">
                When you visit our website, we automatically collect certain information about your device, including information 
                about your web browser, IP address, time zone, and some of the cookies that are installed on your device. We also 
                collect information about the individual web pages that you view and how you interact with our website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions and send you related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Personalize and improve your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the 
              following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform 
              services on our behalf, such as hosting, analytics, and customer service.</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with any merger, 
              sale of company assets, or acquisition.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response 
              to valid requests by public authorities.</li>
              <li><strong>Protection of Rights:</strong> We may disclose your information to protect and defend our rights or 
              property, or the safety of our users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or 
              electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights and Choices</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to rectify or update your personal information</li>
              <li>The right to erase your personal information</li>
              <li>The right to restrict or object to our processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your 
              personal information, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information 
              from children. If you become aware that a child has provided us with personal information, please contact us, and 
              we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Your information may be transferred to and maintained on computers located outside of your state, province, country, 
              or other governmental jurisdiction where data protection laws may differ. By using our services, you consent to the 
              transfer of your information to these facilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
              Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically 
              for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 text-gray-300 space-y-2">
              <p>
                Email: <a href="mailto:privacy@jtsdigital.com" className="text-teal hover:text-hot-pink transition-colors">privacy@jtsdigital.com</a>
              </p>
              <p>
                Address: 123 Digital Street, Tech City, TC 12345
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

