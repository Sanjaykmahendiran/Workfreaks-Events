'use client'

import {  useCallback, useEffect } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import men from "@/app/assets/Men.webp"

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

  const onSelect = useCallback(() => {
    if (!emblaApi) return
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)

    // Auto-scroll functionality
    const autoScroll = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, 3000) // Adjust timing (3000ms = 3s)

    return () => clearInterval(autoScroll) // Cleanup interval on unmount
  }, [emblaApi, onSelect])

  const testimonials = [
    {
      name: "Aarav Sharma",
      quote: "Events & Shows handled our annual conference flawlessly. Their professionalism and attention to detail were unmatched!",
      avatar: men
    },
    {
      name: "Rajesh",
      quote: "Our wedding was magical! Events & Shows brought our dream celebration to life with their incredible planning.",
      avatar: men
    },
    {
      name: "Vikram Iyer",
      quote: "The surprise party for my 40th birthday was beyond my wildest expectations. Truly unforgettable!",
      avatar: men
    },
    {
      name: "Neha Patel",
      quote: "The product launch event exceeded all expectations. The venue decoration and timing were perfect!",
      avatar: men
    },
    {
      name: "Sandeep Verma",
      quote: "Events & Shows helped us raise record donations with their expertly planned charity gala. Outstanding service!",
      avatar: men
    },
    {
      name: "Ananya Reddy",
      quote: "From stage design to crowd management, every aspect was handled professionally. Best event partner ever!",
      avatar: men
    }
  ];

  return (
    <section className="pt-16 md:pt-18 pb-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                  <div className="bg-white p-6 rounded-xl h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600">{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}