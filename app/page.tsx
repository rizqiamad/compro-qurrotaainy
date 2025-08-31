import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProgramsSection } from "@/components/programs-section"
import { SchoolsSection } from "@/components/schools-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <ProgramsSection />
        <SchoolsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
