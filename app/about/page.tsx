export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of the curve with the latest technologies and design trends.',
      color: 'teal',
      icon: '🚀',
    },
    {
      title: 'Quality',
      description: 'Every project is crafted with attention to detail and excellence in mind.',
      color: 'hot-pink',
      icon: '⭐',
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their vision and goals.',
      color: 'golden-yellow',
      icon: '🤝',
    },
    {
      title: 'Results',
      description: 'We measure success by the impact we create for your business.',
      color: 'bright-red',
      icon: '📈',
    },
  ]

  const team = [
    {
      name: 'Alex Thompson',
      role: 'Creative Director',
      color: 'teal',
    },
    {
      name: 'Jordan Martinez',
      role: 'Lead Developer',
      color: 'hot-pink',
    },
    {
      name: 'Taylor Kim',
      role: 'Marketing Strategist',
      color: 'golden-yellow',
    },
  ]

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">
            About <span className="text-teal">JTS Digital</span>
          </h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            We're a passionate team of designers, developers, and marketers 
            dedicated to creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-teal">Our Story</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between creativity and technology, 
              JTS Digital has been helping businesses transform their digital presence 
              since our inception.
            </p>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              We believe that every brand has a unique story to tell, and we're here 
              to help you tell it in the most compelling way possible. Through innovative 
              design, cutting-edge development, and strategic marketing, we create 
              digital solutions that drive real results.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our team combines years of experience with fresh perspectives, ensuring 
              that every project we deliver is both timeless and forward-thinking.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal to-hot-pink flex items-center justify-center">
              <div className="text-9xl">💡</div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-hot-pink">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const borderClasses = {
                'teal': 'border-teal',
                'hot-pink': 'border-hot-pink',
                'golden-yellow': 'border-golden-yellow',
                'bright-red': 'border-bright-red',
              }[value.color] || 'border-teal'
              
              const bgClasses = {
                'teal': 'bg-teal',
                'hot-pink': 'bg-hot-pink',
                'golden-yellow': 'bg-golden-yellow',
                'bright-red': 'bg-bright-red',
              }[value.color] || 'bg-teal'
              
              const textClasses = {
                'teal': 'text-teal',
                'hot-pink': 'text-hot-pink',
                'golden-yellow': 'text-golden-yellow',
                'bright-red': 'text-bright-red',
              }[value.color] || 'text-teal'
              
              return (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 ${borderClasses} bg-dark/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center`}
              >
                <div className={`text-6xl mb-4 inline-block p-4 rounded-full ${bgClasses} bg-opacity-20`}>
                  {value.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${textClasses}`}>
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
              )
            })}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">
            Meet the <span className="text-golden-yellow">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => {
              const gradientClasses = {
                'teal': 'bg-gradient-to-br from-teal to-teal/50',
                'hot-pink': 'bg-gradient-to-br from-hot-pink to-hot-pink/50',
                'golden-yellow': 'bg-gradient-to-br from-golden-yellow to-golden-yellow/50',
              }[member.color] || 'bg-gradient-to-br from-teal to-teal/50'
              
              return (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl ${gradientClasses}`}
              >
                <div className={`w-32 h-32 rounded-full bg-white/20 mx-auto mb-6 flex items-center justify-center text-5xl`}>
                  👤
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-white/80">{member.role}</p>
              </div>
              )
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Want to Work With Us?</h2>
          <a href="/contact" className="btn-teal">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}

