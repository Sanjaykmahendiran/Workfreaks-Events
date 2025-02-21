'use client'

import { motion } from 'framer-motion'
import AboutStats from '@/components/about-stats'

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Corporate Event Organizer",
    quote: "BIG PARTY handled our annual conference flawlessly. Their professionalism and attention to detail were unmatched!",
    image: "/images/sarah.jpg"
  },
  {
    name: "Michael and Emily",
    company: "Newlyweds",
    quote: "Our wedding was magical! BIG PARTY brought our dream celebration to life with their incredible planning.",
    image: "/images/michael-emily.jpg" 
  },
  {
    name: "David Lee",
    company: "Birthday Celebrant",
    quote: "The surprise party for my 40th birthday was beyond my wildest expectations. Truly unforgettable!",
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
          Welcome to BIG PARTY
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12"
        >
          BIG PARTY is your premier event management partner, dedicated to turning your vision into reality. 
          Whether you're hosting a corporate event, wedding, or grand celebration, our seasoned professionals ensure a flawless experience.
          With creativity, precision, and a passion for excellence, we craft events that leave a lasting impression.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-bold text-center mb-8"
        >
          Why Choose BIG PARTY?
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Expert Event Planning – Flawless execution from start to finish.",
            "Creative & Unique Concepts – Tailored to match your vision.",
            "End-to-End Service – Venue selection, catering, décor & more.",
            "Personalized Experience – Customized events that stand out.",
            "Strong Vendor Network – Quality services at the best rates.",
            "Proven Track Record – A history of successful events."
          ].map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md flex items-center"
            >
              <span className="text-lg text-gray-700">{point}</span>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl font-bold text-center mt-16 mb-8"
        >
          Happy Clients
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-lg text-gray-700">
            📞 9080069977 | ✉️ hello@bigparty.ai
          </p>
        </motion.div>

        <div className="mt-16">
          <AboutStats />
        </div>
      </div>
    </section>
  )
}
