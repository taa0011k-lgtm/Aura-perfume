'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const fragrances = [
  {
    id: '01',
    name: 'Nuit Solaire',
    tagline: 'Warmth of a dying sun.',
    notes: 'Amber, Oud, Saffron',
    image: 'https://images.pexels.com/photos/13767417/pexels-photo-13767417.jpeg',
  },
  {
    id: '02',
    name: 'Oud Mystique',
    tagline: 'Whispers of the forest.',
    notes: 'Agarwood, Smoke, Leather',
    image: 'https://images.pexels.com/photos/11711830/pexels-photo-11711830.jpeg',
  },
  {
    id: '03',
    name: 'Rose Éternelle',
    tagline: 'Frost-kissed botanicals.',
    notes: 'Damask Rose, Musk',
    image: 'https://images.pexels.com/photos/31022285/pexels-photo-31022285.jpeg',
  },
  {
    id: '04',
    name: 'Ciel Obscur',
    tagline: 'The weight of starlight.',
    notes: 'Bergamot, Incense',
    image: 'https://images.pexels.com/photos/32816851/pexels-photo-32816851.jpeg',
  },
  {
    id: '05',
    name: 'Ambre Rare',
    tagline: 'A liquid gold dream.',
    notes: 'Vanilla, Labdanum',
    image: 'https://images.pexels.com/photos/22589377/pexels-photo-22589377.jpeg',
  },
  {
    id: '06',
    name: 'Vétiver Noir',
    tagline: 'Earthy, raw, eternal.',
    notes: 'Haitian Vétiver, Cedar',
    image: 'https://images.pexels.com/photos/26838653/pexels-photo-26838653.jpeg',
  }
];

export default function FragranceExperience() {
  return (
    <section id="collection" className="bg-black py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
           <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.8em] text-gold-500 mb-6 block font-bold">The Signature Library</span>
              <h2 className="font-serif text-5xl md:text-8xl leading-none luxury-text-gradient">THE PRIVATE <br />RESERVE</h2>
           </div>
           <p className="text-neutral-500 text-sm md:text-base font-light italic leading-relaxed tracking-widest max-w-xs text-right">
              Six definitive olfactory statements. Hand-selected, masterfully blended, and strictly limited.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {fragrances.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer transform-gpu"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 mb-8 transition-colors duration-300 group-hover:border-gold-500/30">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  quality={45}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                {/* ID Tag */}
                <div className="absolute top-6 left-6 px-4 py-1.5 border border-white/20 rounded-full bg-black/40 z-10">
                   <span className="text-[10px] font-bold tracking-widest text-white/80">{item.id}</span>
                </div>
              </div>

              <div className="flex flex-col items-start px-2">
                 <h3 className="font-serif text-2xl mb-2 text-white group-hover:text-gold-400 transition-colors duration-300 uppercase tracking-widest">{item.name}</h3>
                 <p className="text-xs text-gold-500/60 font-bold uppercase tracking-[0.3em] mb-4">{item.tagline}</p>
                 <div className="w-0 h-[1px] bg-gold-500 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
