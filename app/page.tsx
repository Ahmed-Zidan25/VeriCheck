import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import VisionMission from '@/components/sections/VisionMission'
import ServicesGrid from '@/components/sections/ServicesGrid'
import IndustryVerticals from '@/components/sections/IndustryVerticals'
import SuggestedTopics from '@/components/sections/SuggestedTopics'
import EgyptAdvantage from '@/components/sections/EgyptAdvantage'
import ContactForm from '@/components/sections/ContactForm'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-vericheck-white">
      <Header />
      <HeroSection />
	    <VisionMission />
      <ServicesGrid />
      <IndustryVerticals />
      <SuggestedTopics />
      <EgyptAdvantage />
      <ContactForm />
      <Footer />
    </main>
  )
}
