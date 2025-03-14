"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { number: 500, label: "Events Organized" },
  { number: 50000, label: "Happy Attendees" },
  { number: 100, label: "Client Satisfaction" },
  { number: 15, label: "Awards Won" }
];

export default function AboutStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4 md:px-8 lg:px-16 mb-12">
      {stats.map((stat, index) => (
        <StatItem key={index} number={stat.number} label={stat.label} delay={index * 0.1} />
      ))}
    </div>
  );
}

// Define TypeScript types for props
interface StatItemProps {
  number: number;
  label: string;
  delay: number;
}

function StatItem({ number, label, delay }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0b0a46] via-[#f60505] to-[#cc811d] bg-clip-text text-transparent mb-2">
        {count}+
      </h3>
      <div className="text-base sm:text-lg text-muted-foreground">{label}</div>
    </motion.div>
  );
}
