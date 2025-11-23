import Hero from '@/components/Hero'
import ServicesPreview from '@/components/ServicesPreview'
import PortfolioPreview from '@/components/PortfolioPreview'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
    </div>
  )
}

