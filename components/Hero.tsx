'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-yellow-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to Workfreaks Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Creating Unforgettable Moments
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#enquiry" className="bg-white text-purple-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  )
}

