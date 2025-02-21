'use client'

import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import EventShowcase from '@/components/EventShowcase'
import Header from '@/components/Header'
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-[58px]"> 
      {/* Updated Header Component */}
      <Header />
      
      <section id="hero"> 
        <Hero />
      </section>

      <section id="events">
        <EventShowcase />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      
      <Footer/>
    </main>
  )
}
