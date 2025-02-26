'use client'

import { useCallback, useEffect } from 'react'
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
      name: "Aarav Sharma - COO",
      quote: "Our annual conference was handled with meticulous attention to detail. Every department was taken care of, from transportation and check-in to the entire event and departure. Well done team .",
      avatar: men,
      rating: 4
    },
    {
      name: "Rajesh",
      quote: "Our wedding was an absolute fairytale! It was beyond magical, and Events & Shows turned our dream celebration into a breathtaking reality. Every single detail was flawlessly crafted, from start to finish, with their incredible planning. The day surpassed every expectation we had and created memories we will cherish forever. It was truly an unforgettable experience!",
      avatar: men,
      rating: 5
    },
    {
      name: "DR .Vikram Iyer",
      quote: "The surprise party for my 40th birthday was absolutely off the charts! The decorations were stunning, with vibrant colors, elegant floral arrangements, and intricate lighting that created the perfect atmosphere. Every detail was thought out, from the custom-themed décor to the beautifully arranged party favors. The organization was flawless—every element, from the smooth flow of activities to the seamless coordination of guests, made the day feel effortless. It went beyond my wildest expectations, and I couldn’t have asked for a more unforgettable celebration. It was filled with laughter, joy, and memories that will last a lifetime!",
      avatar: men,
      rating: 4
    },
    {
      name: "Neha Patel- Fashion Designer ",
      quote: "The product launch event exceeded all expectations! The meticulous planning and hard work behind every detail truly paid off. The venue decoration was nothing short of breathtaking, with every corner thoughtfully designed to reflect the essence of the product. The timing was flawless, with each segment perfectly executed to keep the energy high and the audience engaged. From coordinating logistics to ensuring every team member was in sync, the behind-the-scenes effort was exceptional. It was a smooth, seamless event that left a lasting impression on everyone involved!",
      avatar: men,
      rating: 5
    },
    {
      name: "Sandeep Verma",
      quote: "Events & Shows played an instrumental role in helping us raise record donations with their expertly planned charity gala. From the elegant décor to the seamless flow of the evening, every detail was meticulously organized to create an unforgettable experience. Their dedication and professionalism were evident in how they engaged our guests, encouraged generosity, and created an atmosphere of warmth and giving. The result was beyond our expectations, with an overwhelming amount of support for the cause. Outstanding service that truly made a difference!",
      avatar: men,
      rating: 4
    },
    {
      name: "Ananya Reddy",
      quote: "From stage design to crowd management, every aspect of our event featuring the social celebrity was handled with the utmost professionalism. The stage was beautifully designed to highlight the celebrity's presence, creating an unforgettable visual impact. Crowd management was seamless, ensuring everyone had the best experience without any hiccups. The event flowed smoothly, thanks to the attention to detail and the careful coordination behind the scenes. Events & Shows proved to be the best event partner ever, making the entire experience effortless and extraordinary!",
      avatar: men,
      rating: 5
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
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-justify">{testimonial.quote}</p>
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