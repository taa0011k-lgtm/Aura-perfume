'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const socialImages = [
  'https://images.pexels.com/photos/29903863/pexels-photo-29903863.jpeg',
  'https://images.pexels.com/photos/32816851/pexels-photo-32816851.jpeg',
  'https://images.pexels.com/photos/11027941/pexels-photo-11027941.jpeg',
  'https://images.pexels.com/photos/18031843/pexels-photo-18031843.jpeg',
  'https://images.pexels.com/photos/29821897/pexels-photo-29821897.jpeg',
  'https://images.pexels.com/photos/11678206/pexels-photo-11678206.jpeg',
];

export default function SocialRow() {
  return (
    <section className="bg-black py-20 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
         <div>
            <span className="text-[10px] uppercase tracking-[0.8em] text-gold-500 mb-4 block font-bold">Connect with the Reserve</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white tracking-widest">@AETHERIA_OFFICIAL</h2>
         </div>
      </div>

      <div className="relative overflow-x-auto no-scrollbar scroll-smooth flex gap-6 px-6 pb-4 snap-x snap-mandatory">
          {socialImages.map((src, i) => (
            <div key={i} className="relative flex-none w-64 md:w-80 aspect-square rounded-2xl overflow-hidden border border-white/5 transform-gpu outline-none snap-center">
              <Image
                src={src}
                alt={`Social ${i}`}
                fill
                className="object-cover"
                loading="lazy"
                quality={40}
                sizes="(max-width: 768px) 256px, 320px"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
      </div>
    </section>
  );
}
