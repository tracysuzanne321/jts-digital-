import Link from 'next/link'
import GeometricShapes from './GeometricShapes'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <GeometricShapes />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight overflow-hidden">
          <span className="text-white inline-block animate-roll-down">Digital</span>{' '}
          <span className="text-teal inline-block animate-roll-down-delay-1">Excellence</span>{' '}
          <span className="text-hot-pink inline-block animate-roll-down-delay-2">Delivered</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up-delay-1">
          We create stunning websites and powerful social media strategies 
          that transform your brand and drive results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
          <Link href="/contact" className="btn-teal">
            Get Started
          </Link>
          <Link href="/portfolio" className="btn-pink">
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}

