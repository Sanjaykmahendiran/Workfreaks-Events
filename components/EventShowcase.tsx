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
import WeddingImage1 from '@/app/assets/marriage/image30.jpg';
import WeddingImage2 from '@/app/assets/marriage/image12.jpg';
import BirthdayImage1 from '@/app/assets/bday/image13.jpg';
import BirthdayImage2 from '@/app/assets/bday/image1.jpg';
import SpecialImage1 from '@/app/assets/special-occasion/image2.jpg';
import SpecialImage2 from '@/app/assets/special-occasion/image10.jpg';

const events = [
  {
    id: 1,
    type: 'Corporate',
    images: [CorporateImage1, CorporateImage2],
    description: 'Our corporate event services are designed to help businesses create impactful and memorable experiences. Whether it’s a high-profile conference, a product launch, a networking event, or a team-building retreat, we ensure a professional yet engaging atmosphere. With meticulous planning, seamless execution, and attention to detail, we provide everything from venue selection and audiovisual setup to catering and guest management. Our goal is to deliver a sophisticated and results-driven event that aligns perfectly with your company’s objectives.',
  },
  {
    id: 2,
    type: 'Wedding',
    images: [WeddingImage1, WeddingImage2],
    description: 'Your wedding day is one of the most significant moments of your life, and we are here to make it truly magical. From intimate ceremonies to grand celebrations, we offer personalized planning services that bring your vision to life. Our team takes care of every detail, including venue decoration, floral arrangements, lighting, entertainment, catering, and guest coordination. With a blend of creativity, elegance, and professionalism, we ensure a stress-free experience so you can cherish every moment of your special day.',
  },
  {
    id: 3,
    type: 'Birthday',
    images: [BirthdayImage1, BirthdayImage2],
    description: 'Make your birthday celebrations unforgettable with our expertly curated party planning services. Whether it’s a themed birthday bash for kids, a milestone celebration for adults, or a surprise party for a loved one, we handle everything to make the day extraordinary. Our services include venue setup, customized decorations, engaging activities, live entertainment, delicious catering, and personalized cake designs. Let us bring joy, excitement, and a touch of magic to your special day with our fun-filled and hassle-free planning.',
  },
  {
    id: 4,
    type: 'Special Occasion',
    images: [SpecialImage1, SpecialImage2],
    description: 'Life is full of milestones worth celebrating, and we are here to make those moments even more special. Whether you’re planning an anniversary party, a baby shower, a graduation celebration, or a festive holiday gathering, we create bespoke experiences tailored to your needs. Our expert team takes care of theme selection, décor, entertainment, catering, and logistics, ensuring a flawless event. With our personalized approach and attention to detail, we guarantee an unforgettable occasion filled with joy, laughter, and cherished memories.',
  },
];


export default function EventShowcase() {
  const [activeEvent, setActiveEvent] = useState(events[0]);

  return (
    <section id="events" className="py-16 px-4 md:px-8 lg:px-12">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Events</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {events.map((event) => (
          <button
            key={event.id}
            onClick={() => setActiveEvent(event)}
            className={`px-4 py-2 text-sm md:text-base rounded-full transition-all ${activeEvent.id === event.id
              ? 'bg-[#0b0a46] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {event.type}
          </button>
        ))}
      </div>
      <motion.div
        key={activeEvent.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row items-center gap-8"
      >
        <div className="w-full lg:w-1/2">
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
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">{activeEvent.type} Events</h3>
          <p className="text-gray-700 text-sm md:text-lg">{activeEvent.description}</p>
        </div>
      </motion.div>
    </div>
  </section>
  );
}
