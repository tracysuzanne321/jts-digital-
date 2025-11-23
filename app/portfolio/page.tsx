export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern, fully-responsive e-commerce platform with seamless checkout experience, inventory management, and customer dashboard.',
      color: 'teal',
      tags: ['Next.js', 'E-Commerce', 'Payment Integration'],
    },
    {
      title: 'Brand Identity Redesign',
      category: 'Design & Marketing',
      description: 'Complete brand transformation including logo design, website redesign, and comprehensive social media strategy.',
      color: 'hot-pink',
      tags: ['Branding', 'Social Media', 'Web Design'],
    },
    {
      title: 'SaaS Analytics Dashboard',
      category: 'Web Development',
      description: 'Intuitive data analytics dashboard with real-time reporting, customizable widgets, and advanced filtering options.',
      color: 'golden-yellow',
      tags: ['React', 'Data Visualization', 'Dashboard'],
    },
    {
      title: 'Fashion Brand Website',
      category: 'Design & Marketing',
      description: 'Vibrant, visually stunning website for a fashion brand with integrated social media feeds and e-commerce functionality.',
      color: 'bright-red',
      tags: ['Web Design', 'E-Commerce', 'Social Integration'],
    },
    {
      title: 'Tech Startup Landing Page',
      category: 'Web Development',
      description: 'High-converting landing page with animated sections, lead capture forms, and seamless user experience.',
      color: 'teal',
      tags: ['Landing Page', 'Animation', 'Conversion'],
    },
    {
      title: 'Restaurant Digital Presence',
      category: 'Design & Marketing',
      description: 'Complete digital makeover including website, social media strategy, and online ordering system.',
      color: 'hot-pink',
      tags: ['Web Design', 'Social Media', 'Online Ordering'],
    },
  ]

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">
            Our <span className="text-hot-pink">Portfolio</span>
          </h1>
          <p className="section-subtitle">
            Showcasing our best work and client success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const gradientClasses = {
              'teal': 'bg-gradient-to-br from-teal to-teal/80',
              'hot-pink': 'bg-gradient-to-br from-hot-pink to-hot-pink/80',
              'golden-yellow': 'bg-gradient-to-br from-golden-yellow to-golden-yellow/80',
              'bright-red': 'bg-gradient-to-br from-bright-red to-bright-red/80',
            }[project.color] || 'bg-gradient-to-br from-teal to-teal/80'
            
            return (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${gradientClasses} p-8 min-h-[400px] flex flex-col justify-between transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <span className="text-sm font-semibold text-white/80 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            )
          })}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Have a Project in Mind?</h2>
          <a href="/contact" className="btn-teal">
            Let's Work Together
          </a>
        </div>
      </div>
    </div>
  )
}

