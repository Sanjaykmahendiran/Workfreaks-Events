'use client'

import { motion } from 'framer-motion'
import AboutStats from '@/components/about-stats'

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Innovators Inc.",
    quote: "Workfreaks Events made our company retreat unforgettable. Their attention to detail was impressive!",
    image: "/images/sarah.jpg"
  },
  {
    name: "Michael and Emily",
    company: "Newlyweds",
    quote: "Our wedding was a dream come true, thanks to the amazing team at Workfreaks Events.",
    image: "/images/michael-emily.jpg" 
  },
  {
    name: "David Lee",
    company: "Birthday Celebrant",
    quote: "The surprise party they organized for my 40th was beyond my wildest expectations. Truly remarkable!",
    image: "/images/david.jpg" 
  }
]

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12"
        >
          Workfreaks Events is a premier event management company specializing in creating memorable experiences. 
          With our expertise in corporate events, weddings, and birthdays, we bring your vision to life with 
          meticulous planning and flawless execution. Our team of dedicated professionals ensures that every 
          detail is perfect, making your special day truly unforgettable.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-bold text-center mb-8"
        >
          Happy Clients
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s testimonial`}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <AboutStats />
        </div>
      </div>
    </section>
  )
}
