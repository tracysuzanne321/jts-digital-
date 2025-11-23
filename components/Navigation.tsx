'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Rocket } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="group flex items-center gap-2 text-2xl font-bold transition-all duration-300">
            <Rocket className="w-6 h-6 text-teal group-hover:text-hot-pink group-hover:-translate-y-2 group-hover:rotate-12 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,79,163,0.6)] transition-all duration-300 ease-out" />
            <span className="text-white group-hover:text-hot-pink group-hover:scale-105 transition-all duration-300">JTS</span>
            <span className="text-teal group-hover:text-hot-pink group-hover:scale-105 transition-all duration-300">Digital</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-teal transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-teal transition-colors font-medium">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-teal transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-teal transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-teal transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-teal transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link href="/" className="block text-gray-300 hover:text-teal transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="block text-gray-300 hover:text-teal transition-colors font-medium">
              Services
            </Link>
            <Link href="/portfolio" className="block text-gray-300 hover:text-teal transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/about" className="block text-gray-300 hover:text-teal transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="block text-gray-300 hover:text-teal transition-colors font-medium">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

