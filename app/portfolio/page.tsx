import Image from 'next/image'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function Portfolio() {
  const projects = [
    {
      title: 'Andrisca Properties',
      category: 'Professional Building Services in Shropshire',
      description: 'Andrisca Properties wanted a clean, modern website that showed the quality of their building and renovation work. With over 35 years of experience across Shropshire, they needed a site that highlighted their kitchens, bathrooms, extensions, conversions and full property renovations.',
      results: 'The new website improved navigation, made it easier for customers to request quotes and increased visibility for local searches. After launch, the site saw a clear rise in enquiries and longer on-page viewing times thanks to the updated project gallery and simple layout.',
      color: 'teal',
      tags: ['WordPress', 'Web Design', 'Building Services'],
      image: '/logos/andrisca.png',
      url: 'https://andrisca.co.uk/',
      engagement: 85,
    },
    {
      title: 'HTR Autocentre',
      category: 'Garage Website with MOT Booking System',
      description: 'HTR Autocentre has served Telford since 1984 and needed a modern website that matched their reputation. We rebuilt the full site with clearer service pages, DVSA-approved MOT information and a simple online booking flow for MOTs, servicing and repairs.',
      results: 'The new layout helps customers find what they need quickly, and the garage now receives more online bookings than before. The improved structure also increased traffic from local search results and reduced calls about basic information, as visitors can now see everything clearly on the site.',
      color: 'hot-pink',
      tags: ['Web Development', 'Booking System', 'Automotive'],
      image: '/logos/HTR.png',
      url: 'https://htrautocentre.co.uk/',
      engagement: 92,
    },
    {
      title: 'Hello Restaurant',
      category: 'All-in-One Table Management Platform',
      description: 'Hello Restaurant was created to help UK restaurants move away from paper diaries and spreadsheets and manage bookings more efficiently. The platform gives front-of-house teams a clear, real-time view of table availability, upcoming reservations and customer details.',
      results: 'It helps reduce no-shows through better reminders and gives managers the control they need to maximise revenue by filling gaps during busy service. The interface is designed to be simple, fast and easy for staff to use on both desktop and tablet, making it a practical tool for restaurants of any size.',
      color: 'golden-yellow',
      tags: ['Web Development', 'Table Management', 'SaaS'],
      image: '/logos/hellorestaurant.png',
      url: 'https://hellorestaurant.co.uk/',
      engagement: 90,
    },
    {
      title: 'College Survey',
      category: 'Activism Ratings for American Colleges',
      description: 'The College Survey project needed a website that helped parents understand activism levels in American colleges during the application process. We built a clean information site that organises each college into three activism categories with clear explanations, policy summaries and student-support information.',
      results: 'The simple structure makes the data easy to explore, and families now spend more time on the pages due to the improved layout. The site has become a useful tool for parents looking for objective information before their children apply to university.',
      color: 'bright-red',
      tags: ['Web Design', 'Data Visualization', 'Education'],
      image: '/logos/College.png',
      url: 'https://college.genspect.org/',
      engagement: 78,
    },
    {
      title: 'HeySales CRM',
      category: 'CRM Website for Sales Teams',
      description: 'HeySales needed a modern website to introduce their CRM built for real buying journeys, not manual data entry. We designed a clean, fast site explaining the product, its co-pilot features, call analysis and forecasting tools.',
      results: 'The clear messaging and simple structure help visitors understand the platform quickly. The site improved sign-ups for the free trial and supports the sales team with clearer product explanations and better landing-page performance.',
      color: 'green',
      tags: ['React', 'CRM', 'SaaS'],
      image: '/logos/Heysales.png',
      url: 'https://www.heysales.co.uk/',
      engagement: 88,
    },
  ]

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-12 mb-16">
          <h1 className="section-title">
            Our <span className="text-hot-pink">Portfolio</span>
          </h1>
          <p className="section-subtitle">
            Showcasing our best work and client success stories
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => {
            const borderClasses = {
              'teal': 'border-teal',
              'hot-pink': 'border-hot-pink',
              'golden-yellow': 'border-golden-yellow',
              'bright-red': 'border-bright-red',
              'green': 'border-green',
            }[project.color] || 'border-teal'
            
            const textClasses = {
              'teal': 'text-teal',
              'hot-pink': 'text-hot-pink',
              'golden-yellow': 'text-golden-yellow',
              'bright-red': 'text-bright-red',
              'green': 'text-green',
            }[project.color] || 'text-teal'
            
            return (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden border-2 border-gray-800 bg-dark/50">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  {/* Engagement Percentage Overlay */}
                  <div className="absolute top-4 right-4 bg-dark/90 backdrop-blur-sm rounded-full px-6 py-4 border-2 border-white/20">
                    <div className="text-center">
                      <div className={`text-3xl font-bold ${textClasses} mb-1`}>
                        <AnimatedCounter value={project.engagement} />
                      </div>
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                        Engagement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`inline-block px-4 py-2 rounded-full border-2 ${borderClasses} mb-4`}>
                  <span className={`text-sm font-semibold ${textClasses}`}>
                    {project.category}
                  </span>
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${textClasses}`}>
                  {project.title}
                </h2>
                <div className="space-y-4 mb-6">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {project.results}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 rounded-full text-sm font-semibold border-2 ${borderClasses} ${textClasses} bg-dark/50`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 ${borderClasses} ${textClasses} bg-dark/50 hover:bg-opacity-20 transition-all duration-300 hover:scale-105`}
                >
                  Visit Website
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
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

