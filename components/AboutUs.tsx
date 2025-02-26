"use client";

import { motion } from "framer-motion";
import { Calendar, Palette, Package, UserCircle, Users, Trophy } from "lucide-react"

const services = [
  {
    text: "Expert Event Planning – Flawless execution from start to finish.",
    icon: Calendar,
  },
  {
    text: "Creative & Unique Concepts – Tailored to match your vision.",
    icon: Palette,
  },
  {
    text: "End-to-End Service – Venue selection, catering, décor & more.",
    icon: Package,
  },
  {
    text: "Personalized Experience – Customized events that stand out.",
    icon: UserCircle,
  },
  {
    text: "Strong Vendor Network – Quality services at the best rates.",
    icon: Users,
  },
  {
    text: "Proven Track Record – A history of successful events.",
    icon: Trophy,
  },
]

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Welcome to Workfreaks Events & Shows
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12"
        >
          Events & Shows is your premier event management partner, dedicated to
          turning your vision into reality. Whether you&apos;re hosting a corporate
          event, wedding, or grand celebration, our seasoned professionals
          ensure a flawless experience.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-bold text-center mb-8"
        >
          Why Choose Us?
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-br from-[#f6e27a] via-[#cb9b51] to-[#f6e27a] p-6 rounded-lg shadow-lg flex items-center space-x-4 group hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="w-8 h-8 text-[#45371D] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-lg text-[#45371D] font-medium">{service.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
