"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Events Organized" },
  { number: "50k+", label: "Happy Attendees" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "15+", label: "Awards Won" }
];

export default function AboutStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}