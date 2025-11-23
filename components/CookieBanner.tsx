'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="bg-dark border-2 border-teal rounded-lg shadow-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Cookie <span className="text-teal">Preferences</span>
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies.{' '}
                <Link href="/cookie-policy" className="text-teal hover:text-hot-pink underline transition-colors">
                  Learn more
                </Link>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="px-6 py-3 rounded-lg font-semibold text-white bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 transition-all duration-300 hover:scale-105"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-lg font-semibold text-white bg-teal hover:bg-teal/90 border-2 border-teal transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

