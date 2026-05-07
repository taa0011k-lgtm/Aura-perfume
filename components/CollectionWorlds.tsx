'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const worlds = [
  {
    title: 'THE NOCTURNAL',
    subtitle: 'After-hours essence.',
    image: 'https://images.pexels.com/photos/10838598/pexels-photo-10838598.jpeg',
  },
  {
    title: 'THE ELEMENTAL',
    subtitle: 'Raw nature distilled.',
    image: 'https://images.pexels.com/photos/11711813/pexels-photo-11711813.jpeg',
  },
  {
    title: 'THE ETHEREAL',
    subtitle: 'Beyond the horizon.',
    image: 'https://images.pexels.com/photos/10924522/pexels-photo-10924522.jpeg',
  }
];

export default function CollectionWorlds() {
  return (
    <section className="bg-black py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[70vh] min-h-[500px]">
          {worlds.map((world, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl cursor-pointer transform-gpu"
            >
              <Image
                src={world.image}
                alt={world.title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 brightness-75"
                loading="lazy"
                quality={45}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                 <span 
                   className="text-[10px] uppercase tracking-[1em] text-gold-500 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                 >
                   Explore Sphere
                 </span>
                 <h3 className="font-serif text-4xl md:text-5xl lg:text-3xl xl:text-5xl text-white tracking-tighter mb-2 group-hover:scale-105 transition-transform duration-500">
                   {world.title}
                 </h3>
                 <p className="text-xs uppercase tracking-[0.4em] text-neutral-400 font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                   {world.subtitle}
                 </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
