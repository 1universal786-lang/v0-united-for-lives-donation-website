import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { HowItWorksSection } from '@/components/how-it-works'
import { TrustSection } from '@/components/trust-section'
import { StoriesSection } from '@/components/stories-section'
import { SubmitProblemSection } from '@/components/submit-problem'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <TrustSection />
      <StoriesSection />
      <SubmitProblemSection />
      <Footer />
    </main>
  )
}
