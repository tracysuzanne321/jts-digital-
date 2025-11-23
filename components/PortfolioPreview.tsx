import Link from 'next/link'

export default function PortfolioPreview() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      color: 'teal',
      description: 'Modern e-commerce solution with seamless checkout experience',
    },
    {
      title: 'Brand Identity',
      category: 'Design & Marketing',
      color: 'hot-pink',
      description: 'Complete brand transformation with social media strategy',
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Development',
      color: 'golden-yellow',
      description: 'Intuitive dashboard for data analytics platform',
    },
    {
      title: 'Fashion Brand',
      category: 'Design & Marketing',
      color: 'bright-red',
      description: 'Vibrant website and social media presence for fashion brand',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="text-hot-pink">Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Showcasing our best work and client success stories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              className={`group relative overflow-hidden rounded-2xl ${gradientClasses} p-8 min-h-[300px] flex flex-col justify-end transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <span className="text-sm font-semibold text-white/80 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/90 mb-4">
                  {project.description}
                </p>
                <Link 
                  href="/portfolio" 
                  className="text-white font-semibold hover:underline inline-flex items-center"
                >
                  View Project →
                </Link>
              </div>
            </div>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn-red">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}

