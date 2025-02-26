"use client";

import React, { useState, ChangeEvent } from "react";
import { MapPin, Clock, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    const phoneNumber = "+919840106797";
    const message = `Hello, I would like to enquire about Workfreaks Events & Shows:\nName: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nMessage: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

    setTimeout(() => {
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white pt-10 space-y-12">
      <section className="py-10 w-full mx-auto px-4">
        <div className="bg-white rounded-2xl p-6 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                Let&apos;s Plan Your Next Event
              </h2>
              <p className="text-gray-600 text-lg mb-6 text-center md:text-left">
                Get in touch with our team to start planning your perfect event.
              </p>
              <div className="space-y-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-6 h-6 text-[#0b0a46] mr-3" />
                  <span>Chennai, Tamilnadu</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Clock className="w-6 h-6 text-[#0b0a46] mr-3" />
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 text-lg rounded-lg bg-white border border-gray-300 focus:border-[#4ead91] outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-4 text-lg rounded-lg bg-white border border-gray-300 focus:border-[#4ead91] outline-none"
                required
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full p-4 text-lg rounded-lg bg-white border border-gray-300 focus:border-[#4ead91] outline-none"
                required
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit phone number"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your event"
                rows={4}
                className="w-full p-4 text-lg rounded-lg bg-white border border-gray-300 focus:border-[#4ead91] outline-none"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0b0a46] text-white p-4 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-600 transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnquiryForm;