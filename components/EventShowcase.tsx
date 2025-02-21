'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion'; 
import 'swiper/css';
import 'swiper/css/pagination';
import CorporateImage1 from '@/app/assets/corporate-events/image1.jpg';
import CorporateImage2 from '@/app/assets/corporate-events/image2.jpg';
import WeddingImage1 from '@/app/assets/marriage/image10.jpg';
import WeddingImage2 from '@/app/assets/marriage/image12.jpg';
import BirthdayImage1 from '@/app/assets/bday/image13.jpg';
import BirthdayImage2 from '@/app/assets/bday/image1.jpg';
import SpecialImage1 from '@/app/assets/bday/image11.jpg';
import SpecialImage2 from '@/app/assets/bday/image12.jpg';

const events = [
  {
    id: 1,
    type: 'Corporate',
    images: [CorporateImage1, CorporateImage2],
    description: 'Professional corporate events tailored to your business needs.',
  },
  {
    id: 2,
    type: 'Wedding',
    images: [WeddingImage1, WeddingImage2],
    description: 'Magical weddings that create lasting memories.',
  },
  {
    id: 3,
    type: 'Birthday',
    images: [BirthdayImage1, BirthdayImage2],
    description: 'Fun-filled birthday celebrations for all ages.',
  },
  {
    id: 4,
    type: 'Special Occasion',
    images: [SpecialImage1, SpecialImage2],
    description: 'Celebrate life’s milestones in style with our special occasion packages.',
  },
];

export default function EventShowcase() {
  const [activeEvent, setActiveEvent] = useState(events[0]);

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Events</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {events.map((event) => (
            <button
              key={event.id}
              onClick={() => setActiveEvent(event)}
              className={`px-4 py-2 rounded-full ${
                activeEvent.id === event.id
                  ? 'bg-[#0b0a46] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {event.type}
            </button>
          ))}
        </div>
        <motion.div
          key={activeEvent.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-full md:w-1/2">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              className="rounded-lg shadow-lg"
            >
              {activeEvent.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt={`${activeEvent.type} event ${index + 1}`}
                    className="rounded-lg"
                    layout="responsive"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">{activeEvent.type} Events</h3>
            <p className="text-gray-700">{activeEvent.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
