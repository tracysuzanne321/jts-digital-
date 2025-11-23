export default function CookiePolicy() {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12 mb-12">
          <h1 className="section-title">
            Cookie <span className="text-teal">Policy</span>
          </h1>
          <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              JTS Digital uses cookies to enhance your browsing experience and analyze website traffic. We use cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>To remember your preferences and settings</li>
              <li>To analyze website traffic and user behavior</li>
              <li>To improve website functionality and performance</li>
              <li>To provide personalized content and advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal mb-2">Essential Cookies</h3>
              <p className="text-gray-300 leading-relaxed">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation 
                and access to secure areas of the website. The website cannot function properly without these cookies.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal mb-2">Analytics Cookies</h3>
              <p className="text-gray-300 leading-relaxed">
                These cookies help us understand how visitors interact with our website by collecting and reporting information 
                anonymously. This helps us improve the way our website works.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal mb-2">Marketing Cookies</h3>
              <p className="text-gray-300 leading-relaxed">
                These cookies are used to track visitors across websites. The intention is to display ads that are relevant and 
                engaging for the individual user.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can 
              impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Most browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies 
              if you prefer. You can also delete cookies that have already been set.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the 
              website and deliver advertisements on and through the website. These third-party cookies may be placed on your 
              device by third-party services that appear on our pages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
              legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              Email: <a href="mailto:privacy@jtsdigital.com" className="text-teal hover:text-hot-pink transition-colors">privacy@jtsdigital.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

