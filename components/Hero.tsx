'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Importing images
import CorporateImage1 from '@/app/assets/corporate-events/image1.jpg';
import CorporateImage2 from '@/app/assets/corporate-events/image2.jpg';
import WeddingImage1 from '@/app/assets/marriage/image10.jpg';
import WeddingImage2 from '@/app/assets/marriage/image11.jpg';

export default function Hero() {

  const images = [CorporateImage1.src, CorporateImage2.src, WeddingImage1.src, WeddingImage2.src];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative text-white flex items-center"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
        minHeight: '70vh',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-6 text-center items-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to Big Party
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
         We specialize in crafting unforgettable experiences through meticulous planning and flawless execution of events that leave lasting impressions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#enquiry"
            className=" bg-[#0b0a46] py-2 px-6 rounded-full text-lg font-semibold hover:bg-white hover:text-[#0b0a46] transition duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
