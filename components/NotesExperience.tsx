'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const notes = [
  { name: 'Rare Saffron', origin: 'Kashmir Ridge', image: 'https://images.pexels.com/photos/30238398/pexels-photo-30238398.jpeg' },
  { name: 'Dark Amber', origin: 'Baltic Shores', image: 'https://images.pexels.com/photos/10947340/pexels-photo-10947340.jpeg' },
  { name: 'Incense Smoke', origin: 'Oman Valley', image: 'https://images.pexels.com/photos/36834222/pexels-photo-36834222.jpeg' },
  { name: 'Damask Rose', origin: 'Bulgarian Soil', image: 'https://images.pexels.com/photos/7270666/pexels-photo-7270666.jpeg' },
  { name: 'Velvet Oud', origin: 'Assam Forest', image: 'https://images.pexels.com/photos/12053223/pexels-photo-12053223.jpeg' },
  { name: 'White Musk', origin: 'Highland Mist', image: 'https://images.pexels.com/photos/11295329/pexels-photo-11295329.jpeg' }
];

export default function NotesExperience() {
  return (
    <section id="notes" className="relative py-32 bg-black overflow-hidden px-6">
      <div className="container mx-auto">
        {/* Subtle background text as filler */}
        <div className="absolute top-20 left-0 text-[15vw] font-serif uppercase tracking-tighter whitespace-nowrap opacity-[0.01] select-none pointer-events-none text-white">THE VOCABULARY</div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10 relative z-10">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.6em] text-gold-500 mb-6 block font-bold">The Lexicon of Scent</span>
            <h2 className="font-serif text-6xl md:text-[5.5rem] leading-[0.9] tracking-tighter luxury-text-gradient">WRITTEN <br />IN THE AIR</h2>
          </div>
          <p className="text-neutral-500 text-[10px] max-w-xs mb-4 leading-relaxed font-black uppercase tracking-[0.3em] border-t border-gold-500/20 pt-8">
            Each ingredient is hand-selected from its place of origin, preserving its raw emotional frequency and spiritual resonance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
          {notes.map((note) => (
            <div
              key={note.name}
              className="group relative transform-gpu"
            >
              <div className="relative mb-10 overflow-hidden aspect-square border border-white/5 rounded-full transition-shadow duration-300">
                 <Image 
                    src={note.image}
                    alt={note.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                    quality={45}
                    sizes="(max-width: 768px) 100vw, 33vw"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500" />
              </div>
              
              <div className="text-center flex flex-col items-center">
                <h3 className="font-serif text-3xl mb-3 text-neutral-100 group-hover:text-gold-400 transition-colors duration-300 uppercase tracking-widest">{note.name}</h3>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-black italic">{note.origin}</span>
                <div className="w-12 h-[1px] bg-white/10 mt-6 group-hover:w-24 group-hover:bg-gold-500 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
