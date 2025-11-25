import Hero from '@/components/ui/Hero'
import AboutSection from '@/components/sections/AboutSection'
import ProcessingSection from '@/components/sections/ProcessingSection'
import ProductsSection from '@/components/sections/ProductsSection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProcessingSection />
      <ProductsSection />
    </>
  )
}