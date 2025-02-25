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
    <section className="relative flex items-center justify-center text-white min-h-screen md:min-h-[80vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          Welcome to Workfreaks Events & Shows
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0"
        >
          We craft unforgettable experiences with meticulous planning and flawless execution to leave lasting impressions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="/enquiry"
            className="bg-[#0b0a46] py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-[#0b0a46] transition duration-300 shadow-lg"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
