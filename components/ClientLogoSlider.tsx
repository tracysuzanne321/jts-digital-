'use client'

import Image from 'next/image'

export default function ClientLogoSlider() {
  // Add your SVG logo filenames here (they should be in /public/logos/)
  const clientLogos = [
    '/logos/andrisca.svg',
    '/logos/HTR Autocentre.svg',
    '/logos/BT Logo.svg',
    '/logos/College Survey Logo.svg',
    '/logos/Heysales.svg',
  ]

  // Duplicate the array for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
    <section className="py-12 bg-dark border-y border-gray-800 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
        
        {/* Animated slider */}
        <div className="flex animate-logo-scroll w-fit items-center">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 px-6 py-4 opacity-60 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <div className="w-32 h-16 flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={128}
                  height={64}
                  className="max-w-full max-h-full w-auto h-auto object-contain filter brightness-0 invert"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

