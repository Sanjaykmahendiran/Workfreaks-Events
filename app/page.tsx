'use client'

import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import EventShowcase from '@/components/EventShowcase'
import Header from '@/components/Header'
import Footer from "@/components/Footer"
import AboutStats from '@/components/about-stats'
import EnquiryForm from '@/components/EnquiryForm'
import { TestimonialsSection } from '@/components/testimonials-section'
import WhatsAppChatButton from '@/components/whatsappChat'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-[58px]">
      {/* Updated Header Component */}
      <Header />

      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="events">
        <EventShowcase />
      </section>


      <div>
        <TestimonialsSection />
      </div>
      <div className="mt-16">
        <AboutStats />
      </div>

      <EnquiryForm />
      <WhatsAppChatButton/>
      <Footer />
    </main>
  )
}
