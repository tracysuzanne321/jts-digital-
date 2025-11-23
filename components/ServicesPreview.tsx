import Link from 'next/link'

export default function ServicesPreview() {
  const services = [
    {
      title: 'Website Design',
      description: 'Beautiful, user-friendly designs that captivate your audience and convert visitors into customers.',
      color: 'teal',
      icon: '🎨',
    },
    {
      title: 'Web Development',
      description: 'Fast, responsive, and scalable websites built with the latest technologies and best practices.',
      color: 'hot-pink',
      icon: '💻',
    },
    {
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns that grow your audience and boost engagement.',
      color: 'golden-yellow',
      icon: '📱',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Our <span className="text-teal">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClasses = {
              'teal': 'bg-teal',
              'hot-pink': 'bg-hot-pink',
              'golden-yellow': 'bg-golden-yellow',
            }[service.color] || 'bg-teal'
            
            return (
            <div
              key={index}
              className={`color-block ${colorClasses} text-dark relative overflow-hidden group`}
            >
              <div className="absolute top-4 right-4 text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                {service.icon}
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-lg mb-6">{service.description}</p>
                <Link 
                  href="/services" 
                  className="text-dark font-semibold hover:underline inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="btn-yellow">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

