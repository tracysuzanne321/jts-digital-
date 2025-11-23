export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'JTS Digital transformed our online presence. Our website traffic increased by 300% and our social media engagement is through the roof!',
      color: 'teal',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Creative Studio',
      content: 'The team at JTS Digital is incredibly talented. They understood our vision and brought it to life in ways we never imagined.',
      color: 'hot-pink',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, Fashion Co.',
      content: 'Working with JTS Digital was a game-changer. Their social media strategy helped us reach a whole new audience and boost sales significantly.',
      color: 'golden-yellow',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Client <span className="text-golden-yellow">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What our clients say about working with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const borderClasses = {
              'teal': 'border-teal',
              'hot-pink': 'border-hot-pink',
              'golden-yellow': 'border-golden-yellow',
            }[testimonial.color] || 'border-teal'
            
            const bgClasses = {
              'teal': 'bg-teal',
              'hot-pink': 'bg-hot-pink',
              'golden-yellow': 'bg-golden-yellow',
            }[testimonial.color] || 'bg-teal'
            
            return (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 ${borderClasses} bg-dark/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
            >
              <div className={`absolute top-0 left-8 -translate-y-1/2 ${bgClasses} w-12 h-12 rounded-full flex items-center justify-center text-2xl`}>
                "
              </div>
              <p className="text-gray-300 mb-6 mt-4 text-lg leading-relaxed">
                {testimonial.content}
              </p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

