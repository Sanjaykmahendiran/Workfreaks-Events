'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from "next/image";
import logo from "@/app/assets/logo.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (href: string) => {
    setIsOpen(false) // Close menu after clicking
    router.push(href)
  }

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Image
              src={logo}
              alt="Events & Shows"
              width={120}
              height={40}
              className="h-16 w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/aboutus">About Us</NavLink>
          <NavLink href="/#events">Events</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/enquiry">Enquiry</NavLink>
          <span className="bg-[#0b0a45] text-white px-4 py-2 rounded-md">
            +91 98401 06797
          </span>
          <a
            href="mailto:events@workfreaks.app"
            className="bg-[#0b0a45] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            events@workfreaks.app
          </a>
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

      {/* Mobile Menu - Fixed Positioning Fix */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#0b0a45] text-white p-4 z-50 shadow-lg"
          >
            <button onClick={() => handleNavigation('/')} className="block py-2">Home</button>
            <button onClick={() => handleNavigation('/aboutus')} className="block py-2">About Us</button>
            <button onClick={() => handleNavigation('/#events')} className="block py-2">Events</button>
            <button onClick={() => handleNavigation('/gallery')} className="block py-2">Gallery</button>
            <button onClick={() => handleNavigation('/enquiry')} className="block py-2">Enquiry</button>
            <div className="mt-4 text-sm">
              <p>Email: <a href="mailto:events@workfreaks.app" className="text-orange-400">events@workfreaks.app</a></p>
              <p>Phone: +91 98401 06797</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-#0b0a45 hover:text-gray-300 font-bold">
      {children}
    </Link>
  )
}
