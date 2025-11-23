'use client'

import { useEffect, useRef, useState } from 'react'

export default function BackgroundWords() {
  const words = [
    'Design',
    'Development',
    'Branding',
    'Strategy',
    'Marketing',
    'Innovation',
    'Responsive',
    'Performance',
    'Modern',
    'Professional',
    'Creativity',
  ]

  const [wordConfigs] = useState(() => {
    // Generate configuration for each word with equal spacing
    return words.map((word, index) => {
      // Distribute scroll triggers evenly across the page (0 to 1)
      const scrollTrigger = (index / (words.length - 1)) * 0.8 + 0.1 // Start at 10%, end at 90%
      // Alternate sides to reduce overlap
      const side = index % 2 === 0 ? 'left' : 'right'
      // Calculate equal spacing: distribute from 10% to 90% with equal gaps
      const topPosition = 10 + (index / (words.length - 1)) * 80 // Equal spacing from 10% to 90%
      
      return {
        word,
        index,
        scrollTrigger,
        side,
        topPosition,
      }
    })
  })

  const [visibleWords, setVisibleWords] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = scrollPosition / (documentHeight - windowHeight)
      
      // Check each word's trigger point
      const newVisibleWords = new Set<number>()
      
      wordConfigs.forEach((config) => {
        if (scrollProgress >= config.scrollTrigger) {
          newVisibleWords.add(config.index)
        }
      })
      
      setVisibleWords(newVisibleWords)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [wordConfigs])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {wordConfigs.map((config) => {
        const isVisible = visibleWords.has(config.index)
        
        return (
          <div
            key={config.index}
            className={`absolute text-5xl md:text-7xl lg:text-8xl font-bold text-white/20 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-x-0 opacity-20' 
                : config.side === 'left'
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
            }`}
            style={{
              top: `${config.topPosition}%`,
              left: config.side === 'left' ? '0%' : 'auto',
              right: config.side === 'right' ? '0%' : 'auto',
            }}
          >
            {config.word}
          </div>
        )
      })}
    </div>
  )
}

