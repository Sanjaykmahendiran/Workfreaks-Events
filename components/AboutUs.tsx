"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import AboutStats from "@/components/about-stats";
import { TestimonialsSection } from "@/components/testimonials-section";
import EnquiryForm from "@/components/EnquiryForm";

export default function AboutUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  }

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
          turning your vision into reality. Whether you're hosting a corporate
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Expert Event Planning – Flawless execution from start to finish.",
            "Creative & Unique Concepts – Tailored to match your vision.",
            "End-to-End Service – Venue selection, catering, décor & more.",
            "Personalized Experience – Customized events that stand out.",
            "Strong Vendor Network – Quality services at the best rates.",
            "Proven Track Record – A history of successful events.",
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
      </div>
    </section>
  );
}
