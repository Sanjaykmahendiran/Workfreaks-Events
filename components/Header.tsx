'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    router.push(href)
  }

  return (
    <header className="w-full fixed top-0 bg-[#0b0a45] shadow-md z-50">
      <nav className="container mx-auto px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-white">
            Big Party
          </Link>
        </motion.div>

        {/* Navigation Links and Contact Info - Right Side */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="/aboutus">About Us</NavLink>
          <NavLink href="/#events">Events</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/enquiry">Enquiry</NavLink>
          <a 
            href="mailto:hello@bigparty.ai" 
            className="bg-[#cc811d] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            hello@bigparty.ai
          </a>
          <span className="bg-[#cc811d] text-white px-4 py-2 rounded-md">
            +91 98401 06797
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0b0a45] text-white p-4">
          <button onClick={() => handleNavigation('/aboutus')} className="block py-2">About Us</button>
          <button onClick={() => handleNavigation('/#events')} className="block py-2">Events</button>
          <button onClick={() => handleNavigation('/gallery')} className="block py-2">Gallery</button>
          <button onClick={() => handleNavigation('/#enquiry')} className="block py-2">Enquiry</button>
          <div className="mt-4">
            <p>Email: <a href="mailto:hello@bigparty.ai" className="text-orange-400">hello@bigparty.ai</a></p>
            <p>Phone: +91 98401 06797</p>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white hover:text-gray-300">
      {children}
    </Link>
  )
}
