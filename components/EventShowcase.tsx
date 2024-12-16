'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const events = [
  { id: 1, type: 'Corporate', image: '/placeholder.svg?height=400&width=600', description: 'Professional corporate events tailored to your business needs.' },
  { id: 2, type: 'Wedding', image: '/placeholder.svg?height=400&width=600', description: 'Magical weddings that create lasting memories.' },
  { id: 3, type: 'Birthday', image: '/placeholder.svg?height=400&width=600', description: 'Fun-filled birthday celebrations for all ages.' },
  { id: 4, type: 'Special Occasion', image: '/placeholder.svg?height=400&width=600', description: 'Fun-filled birthday celebrations for all ages.' },
]

export default function EventShowcase() {
  const [activeEvent, setActiveEvent] = useState(events[0])

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Events</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {events.map((event) => (
            <button
              key={event.id}
              onClick={() => setActiveEvent(event)}
              className={`px-4 py-2 rounded-full ${
                activeEvent.id === event.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {event.type}
            </button>
          ))}
        </div>
        <motion.div
          key={activeEvent.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-full md:w-1/2">
            <Image
              src={activeEvent.image}
              alt={activeEvent.type}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">{activeEvent.type} Events</h3>
            <p className="text-gray-700">{activeEvent.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

