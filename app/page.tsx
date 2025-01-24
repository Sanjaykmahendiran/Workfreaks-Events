'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import EventShowcase from '@/components/EventShowcase'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="min-h-screen flex flex-col pt-[58px]"> 
      <header className="w-full fixed top-0 left-0 bg-[#0b0a46] shadow-md z-50"> 
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-2xl font-bold text-white">
                Workfreaks Events
              </Link>
            </motion.div>
            <div className="hidden md:flex flex justify-center items-center space-x-4"> 
              <Link href="#about" className="text-white hover:text-gray-600">About Us</Link>
              <Link href="#events" className="text-white hover:text-gray-600">Events</Link>
              <Link href="#enquiry" className="text-white hover:text-gray-600">Enquiry</Link>
              <p><a href="mailto:info@workfreaksevents.com" className="bg-[#cc811d] p-2 text-[#0b0a46] hover:bg-white font-medium">info@workfreaksevents.com</a></p>
              <p className="bg-[#cc811d] p-2 text-[#0b0a46] hover:bg-white font-medium text-sm  ">+91 90800 69977</p>
            </div>

            <div className="md:hidden">
              <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" className="bg-[#0b0a46]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <Link href="#about" className="block py-2 text-white hover:text-gray-600">About Us</Link>
              <Link href="#events" className="block py-2 text-white hover:text-gray-600">Events</Link>
              <Link href="#enquiry" className="block py-2 text-white hover:text-gray-600">Enquiry</Link>
              <p><a href="mailto:info@workfreaksevents.com" className="text-blue-600 hover:text-blue-800">info@workfreaksevents.com</a></p>
              <p>+91 90800 69977</p>
            </div>
          )}
        </nav>
      </header>

      <section id="hero"> 
        <Hero />
      </section>

      <section id="events">
        <EventShowcase />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <footer className="bg-[#0b0a46] text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2">Workfreaks Events</h3>
              <p className="text-sm">Creating Unforgettable Moments</p>
            </div>
            <div className="w-full md:w-1/3 text-center my-4 md:my-0">
              <ul className="inline-flex space-x-4">
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Workfreaks Events. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}