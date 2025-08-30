import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { SchoolsSection } from "@/components/schools-section"
import { ProgramsSection } from "@/components/programs-section"
import { NewsSection } from "@/components/news-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <SchoolsSection />
        <ProgramsSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
