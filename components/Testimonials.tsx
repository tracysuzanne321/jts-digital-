export default function Testimonials() {
  const testimonials = [
    {
      name: 'Dan Thomas',
      role: 'Andrisca Properties',
      content: "JTS Digital built our new website for Andrisca Properties and we're really pleased with it. It looks modern, runs smoothly and shows our building work clearly. They understood what we wanted straight away and made the whole process easy from start to finish. I'd happily recommend them.",
      color: 'teal',
    },
    {
      name: 'Dave Smith',
      role: 'HTR Autocentre',
      content: "Our old garage website was outdated, but JTS Digital rebuilt it and it now looks professional and is much easier for customers to use. The booking system works brilliantly and we've already noticed more enquiries. Great communication and fast turnaround.",
      color: 'hot-pink',
    },
    {
      name: 'Libby Brown',
      role: 'HeySales CRM',
      content: 'JTS Digital created the website for our HeySales CRM platform and did an excellent job. They understood the product, explained things clearly and produced a clean, fast site that helps us show the system to clients. Reliable, skilled and very easy to work with.',
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

