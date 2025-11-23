import Link from 'next/link'

export default function PortfolioPreview() {
  const projects = [
    {
      title: 'Andrisca Properties',
      category: 'Professional Building Services in Shropshire',
      color: 'teal',
      description: 'A modern website for a long-established building company with over 35 years of experience. The site showcases kitchens, bathrooms, extensions and full property renovations.',
      url: 'https://andrisca.co.uk/',
    },
    {
      title: 'HTR Autocentre',
      category: 'MOT Testing, Car Servicing & Repairs in Telford',
      color: 'hot-pink',
      description: 'A full rebuild for a family-run garage, with DVSA-approved MOT information, clear pricing, and an easy online booking system.',
      url: 'https://htrautocentre.co.uk/',
    },
    {
      title: 'College Survey',
      category: 'Activism in American Colleges',
      color: 'golden-yellow',
      description: 'A clear, easy-to-use guide for parents researching activism levels across US colleges, with simple ratings and category filters.',
      url: 'https://college.genspect.org/',
    },
    {
      title: 'HeySales CRM',
      category: 'A CRM Built for Buying Journeys',
      color: 'bright-red',
      description: 'A fast, modern site for a new CRM that automates admin, analyses calls and helps sales teams close more revenue.',
      url: 'https://www.heysales.co.uk/',
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
                <p className="text-white/90 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <Link 
                    href="/portfolio" 
                    className="text-white/80 font-semibold hover:text-white hover:underline inline-flex items-center"
                  >
                    View Details →
                  </Link>
                </div>
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

