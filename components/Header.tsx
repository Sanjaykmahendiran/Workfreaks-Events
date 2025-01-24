'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className=" w-full fixed bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Workfreaks Events
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-4">
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#events">Events</NavLink>
            <NavLink href="#enquiry">Enquiry</NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <NavLink href="#about" mobile>About Us</NavLink>
            <NavLink href="#events" mobile>Events</NavLink>
            <NavLink href="#enquiry" mobile>Enquiry</NavLink>

            {/* Add email and mobile number */}
            <div className="mt-4 text-gray-700">
              <p>Email: <a href="mailto:info@workfreaksevents.com" className="text-blue-600 hover:text-blue-800">info@workfreaksevents.com</a></p>
              <p>Mobile No.: <span className="text-gray-800">+1 234 567 890</span></p>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

function NavLink({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  return (
    <Link href={href} className={`${mobile ? 'block py-2' : ''} text-gray-700 hover:text-gray-900`}>
      {children}
    </Link>
  )
}

