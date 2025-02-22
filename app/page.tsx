import { CTASection } from "./components/cta-section"
import { FeaturesSection } from "./components/features-section"
import { HeroSection } from "./components/hero-section"
import { HowItWorksSection } from "./components/how-it-works-section"
import { SiteFooter } from "./components/site-footer"
import { SiteHeader } from "./components/site-header"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}

