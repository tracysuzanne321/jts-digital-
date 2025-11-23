import Link from 'next/link'
import GeometricShapes from './GeometricShapes'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <GeometricShapes />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-white">Digital</span>{' '}
          <span className="text-teal">Excellence</span>{' '}
          <span className="text-hot-pink">Delivered</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto">
          We create stunning websites and powerful social media strategies 
          that transform your brand and drive results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

