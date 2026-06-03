import { Header } from "@/components/header"
import HeroSection from "@/components/hero-section"
import InfraestructuraSection from "@/components/services-section" 
import EmpatiaSection from "@/components/features-section" 
import CTASection from "@/components/cta-section"
import  PricingSection from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-[#427AA1]/20">
      <Header />
      <HeroSection />
      <EmpatiaSection /> {/* Las Bento boxes de hiper-localización */}
      <CTASection /> {/* Casos de ROI y Widget Interactivo */}
      <PricingSection /> {/* Los precios oscuros y demo inmersiva */}
      <FAQSection /> {/* Preguntas frecuentes */}
      <Footer />
    </main>
  )
}