'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion";
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import EventShowcase from '@/components/EventShowcase'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <main className="min-h-screen flex flex-col pt-[58px]"> 
     <motion.header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0b0a46]/90 shadow-lg" : "bg-[#0b0a46]"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-white">
              Big Party
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {["About Us", "Events", "Enquiry"].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.p
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <a
                href="mailto:hello@bigparty.ai"
                className="bg-[#cc811d] p-2 text-[#0b0a46] hover:bg-white font-medium transition-all duration-300"
              >
                hello@bigparty.ai
              </a>
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#cc811d] p-2 text-[#0b0a46] hover:bg-white font-medium text-sm"
            >
              +91 98401 06797
            </motion.p>
          </div>

          <div className="md:hidden">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="ghost"
              className="bg-[#0b0a46]"
            >
              <motion.svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </motion.svg>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="md:hidden mt-4 space-y-4 text-center"
            >
              {["About Us", "Events", "Enquiry"].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="block py-2 text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <p>
                <a
                  href="mailto:hello@bigparty.ai"
                  className="text-blue-600 hover:text-blue-800"
                >
                  hello@bigparty.ai
                </a>
              </p>
              <p className="text-white">+91 98401 06797</p>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>

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
              <h3 className="text-lg font-semibold mb-2">Big Party</h3>
              <p className="text-sm">Creating Unforgettable Moments</p>
            </div>
            <div className="w-full md:w-1/3 text-center my-4 md:my-0">
              <ul className="inline-flex space-x-4">
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Big Party. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}