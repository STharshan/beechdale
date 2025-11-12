import CareMeaningSection from "./components/CareMeaningSection"
import CareTypesSection from "./components/CareSection"
import FindCareSection from "./components/FindCareSection"
import FooterSection from "./components/Footer"
import HeroSection from "./components/Herosection"
import LifeAtHomesSection from "./components/LifeAtHomesSection"
import Navbar from "./components/Navbar"
import StatsSection from "./components/StatsSection"
import TestimonialsSection from "./components/TestimonialsSection"
import WelcomeSection from "./components/WelcomeSection"


function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CareTypesSection />
      <CareMeaningSection />
      <LifeAtHomesSection />
      <TestimonialsSection />
      <WelcomeSection />
      <FindCareSection />
      <FooterSection />
    </>
  )
}

export default App
