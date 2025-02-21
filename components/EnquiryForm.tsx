"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
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
  
    const phoneNumber = "+919500084522"; // WhatsApp number
  
    // Construct the WhatsApp message
    const message = `Hello, I would like to enquire about Big Events.:
    Name: ${formData.name}
    Email: ${formData.email}
    Mobile: ${formData.mobile}
    Message: ${formData.message}`;
  
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
  
    // Redirect to WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 space-y-12">
      <section className="py-20 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  Let's Plan Your Next Event
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Get in touch with our team to start planning your perfect
                  event. We're here to turn your vision into reality.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-[#0b0a46] mr-3" />
                    <span>Chennai, Tamilnadu</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-[#0b0a46] mr-3" />
                    <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                aria-label="Enquiry Form"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-[#4ead91] outline-none"
                  autoComplete="name"
                  required
                  aria-label="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-[#4ead91] outline-none"
                  autoComplete="email"
                  required
                  aria-label="Email Address"
                />
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-[#4ead91] outline-none"
                  autoComplete="tel"
                  required
                  pattern="[0-9]{10}"
                  title="Enter a valid 10-digit phone number"
                  aria-label="Mobile Number"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-[#4ead91] outline-none"
                  required
                  aria-label="Message"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0b0a46] text-white
  p-4 rounded-lg font-semibold flex items-center justify-center text-gray-700 hover:bg-gray-600"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnquiryForm;
