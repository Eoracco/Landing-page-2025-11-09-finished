import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features'
import IntegrationsSection from '@/components/integrations-7'
import Pricing from '@/components/pricing'
import FooterSection from '@/components/footer'
import CallToAction from '@/components/call-to-action'
import StatsSection from '@/components/stats-2'



export const Route = createFileRoute('/')({ component: App })

function App() {
  
  return <><HeroSection />
    <FeaturesSection />
    <IntegrationsSection />
    <Pricing />
    <StatsSection/>
    <CallToAction />
    <FooterSection/>
    </>
}
