'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const galleryImages = [
  'https://images.pexels.com/photos/7400855/pexels-photo-7400855.jpeg',
  'https://images.pexels.com/photos/12053220/pexels-photo-12053220.jpeg',
  'https://images.pexels.com/photos/36459921/pexels-photo-36459921.jpeg',
  'https://images.pexels.com/photos/17427499/pexels-photo-17427499.jpeg',
  'https://images.pexels.com/photos/5206893/pexels-photo-5206893.jpeg',
  'https://images.pexels.com/photos/7247803/pexels-photo-7247803.jpeg',
  'https://images.pexels.com/photos/4110349/pexels-photo-4110349.jpeg',
  'https://images.pexels.com/photos/7702669/pexels-photo-7702669.jpeg',
  'https://images.pexels.com/photos/29638622/pexels-photo-29638622.jpeg',
  'https://images.pexels.com/photos/36295148/pexels-photo-36295148.jpeg',
  'https://images.pexels.com/photos/29986516/pexels-photo-29986516.jpeg',
  'https://images.pexels.com/photos/10191848/pexels-photo-10191848.jpeg',
  'https://images.pexels.com/photos/10768740/pexels-photo-10768740.jpeg',
];

export default function MasonryGallery() {
  return (
    <section className="bg-black py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
           <span className="text-[10px] uppercase tracking-[0.8em] text-gold-500 mb-6 block font-bold">The Abstract Archive</span>
           <h2 className="font-serif text-5xl md:text-7xl luxury-text-gradient">VISUAL RESONANCE</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden border border-white/5 break-inside-avoid group transform-gpu"
            >
              <Image
                src={src}
                alt={`Archive ${index}`}
                width={400}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500"
                loading="lazy"
                quality={45}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <span className="text-[10px] uppercase tracking-[0.6em] text-white border border-white/20 px-6 py-2 rounded-full">Aetheria v.{index + 10}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
