import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProgramsSection from "@/components/programs-section"
import TestimonialsSection from "@/components/testimonials-section"
import VolunteerSection from "@/components/volunteer-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <TestimonialsSection />
        <VolunteerSection />
        <ContactSection />
        <Footer />
      </div>
      <BackToTop />
    </main>
  )
}
