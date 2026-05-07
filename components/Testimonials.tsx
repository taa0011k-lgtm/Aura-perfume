'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Elena Vance',
    role: 'Editorial Director',
    quote: 'Aetheria is not just a fragrance, it is a statement of intent. The depth is unparalleled.',
    image: 'https://images.pexels.com/photos/20899855/pexels-photo-20899855.jpeg',
  },
  {
    name: 'Julian Thorne',
    role: 'Olfactory Collector',
    quote: 'I have traveled the world seeking unique acords. Aetheria is the first to truly capture the cinematic noir aesthetic.',
    image: 'https://images.pexels.com/photos/28606657/pexels-photo-28606657.jpeg',
  },
  {
    name: 'Sasha Meyer',
    role: 'Fragrance Ethicist',
    quote: 'The provenance of their ingredients is visible in every drop. Clean luxury at its peak.',
    image: 'https://images.pexels.com/photos/26924213/pexels-photo-26924213.jpeg',
  },
  {
    name: 'Marcus Gray',
    role: 'Architect',
    quote: 'The bottle design alone is a masterpiece. The scent is a bridge between worlds.',
    image: 'https://images.pexels.com/photos/15007551/pexels-photo-15007551.jpeg',
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-black py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center">
           {/* Active Image */}
           <div className="relative w-full md:w-1/2 aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 transform-gpu">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={45}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </motion.div>
              ))}
           </div>

           {/* Content */}
           <div className="w-full md:w-1/2 flex flex-col items-start">
              <span className="text-[10px] uppercase tracking-[0.8em] text-gold-500 mb-10 font-bold block">Reflections of Presence</span>
              <div className="relative h-64 md:h-80 w-full mb-12">
                 {testimonials.map((t, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ 
                       opacity: active === i ? 1 : 0, 
                       x: active === i ? 0 : 20,
                       pointerEvents: active === i ? 'auto' : 'none'
                     }}
                     transition={{ duration: 0.8 }}
                     className="absolute inset-0"
                   >
                     <p className="font-serif text-3xl md:text-5xl italic text-neutral-200 leading-tight mb-8">
                       &quot;{t.quote}&quot;
                     </p>
                     <div className="flex flex-col">
                        <span className="text-xl font-serif text-gold-400 mb-1">{t.name}</span>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold">{t.role}</span>
                     </div>
                   </motion.div>
                 ))}
              </div>

              {/* Slider Nav */}
              <div className="flex gap-4">
                 {testimonials.map((_, i) => (
                   <button
                     key={i}
                     onClick={() => setActive(i)}
                     className={`h-1.5 transition-all duration-500 rounded-full ${
                       active === i ? 'w-12 bg-gold-500' : 'w-6 bg-white/10'
                     }`}
                   />
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
