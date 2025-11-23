export default function Services() {
  const services = [
    {
      title: 'Website Design',
      description: 'We create visually stunning, user-friendly websites that not only look great but also drive conversions. Our design process focuses on understanding your brand, target audience, and business goals to deliver a website that truly represents your company.',
      features: [
        'Custom UI/UX Design',
        'Responsive Layouts',
        'Brand Identity Integration',
        'User Experience Optimization',
      ],
      color: 'teal',
      icon: '🎨',
    },
    {
      title: 'Web Development',
      description: 'Our development team builds fast, scalable, and secure websites using the latest technologies. From simple landing pages to complex web applications, we deliver solutions that perform.',
      features: [
        'Next.js & React Development',
        'E-Commerce Solutions',
        'API Integration',
        'Performance Optimization',
      ],
      color: 'hot-pink',
      icon: '💻',
    },
    {
      title: 'Social Media Marketing',
      description: 'Grow your online presence with strategic social media campaigns. We help you connect with your audience, build brand awareness, and drive engagement across all major platforms.',
      features: [
        'Content Strategy',
        'Community Management',
        'Paid Advertising',
        'Analytics & Reporting',
      ],
      color: 'golden-yellow',
      icon: '📱',
    },
  ]

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">
            Our <span className="text-teal">Services</span>
          </h1>
          <p className="section-subtitle">
            Comprehensive digital solutions to elevate your business
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => {
            const bgClasses = {
              'teal': 'bg-teal',
              'hot-pink': 'bg-hot-pink',
              'golden-yellow': 'bg-golden-yellow',
            }[service.color] || 'bg-teal'
            
            const textClasses = {
              'teal': 'text-teal',
              'hot-pink': 'text-hot-pink',
              'golden-yellow': 'text-golden-yellow',
            }[service.color] || 'text-teal'
            
            const gradientClasses = {
              'teal': 'bg-gradient-to-br from-teal to-teal/50',
              'hot-pink': 'bg-gradient-to-br from-hot-pink to-hot-pink/50',
              'golden-yellow': 'bg-gradient-to-br from-golden-yellow to-golden-yellow/50',
            }[service.color] || 'bg-gradient-to-br from-teal to-teal/50'
            
            return (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`inline-block p-4 rounded-2xl ${bgClasses} text-6xl mb-6`}>
                  {service.icon}
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${textClasses}`}>
                  {service.title}
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className={`${textClasses} mr-3 text-xl`}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`aspect-square rounded-2xl ${gradientClasses} flex items-center justify-center relative overflow-hidden`}>
                  <div className={`absolute inset-0 ${bgClasses} opacity-10`} />
                  <div className="text-9xl relative z-10">{service.icon}</div>
                </div>
              </div>
            </div>
            )
          })}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <a href="/contact" className="btn-teal">
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  )
}

