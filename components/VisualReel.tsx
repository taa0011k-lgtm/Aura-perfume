'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function VisualReel() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="bg-black py-40 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-32">
          <span className="text-[10px] uppercase tracking-[1em] text-gold-500 mb-8 block font-bold">The Sensory Immersion</span>
          <h2 className="font-serif text-6xl md:text-[8rem] text-center leading-[0.8] tracking-tighter luxury-text-gradient">
            WHERE <br />
            VISION<span className="italic">MEETS </span><br />
            SCENT.
          </h2>
        </div>

        <div className="relative h-[80vh] md:h-[120vh] flex items-center justify-center">
            {/* Main Center Image */}
            <div className="relative w-full max-w-4xl h-[60vh] md:h-[80vh] rounded-[4rem] overflow-hidden border border-white/5 z-20 transform-gpu">
              <Image
                src="https://images.pexels.com/photos/7947731/pexels-photo-7947731.jpeg"
                alt="Immersive Vision"
                fill
                className="object-cover contrast-125"
                loading="lazy"
                quality={45}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>

            {/* Layered Accent Image */}
            <div className="absolute top-0 left-0 w-64 md:w-[35vw] h-80 md:h-[50vh] rounded-3xl overflow-hidden z-30 border border-white/10 hidden md:block">
               <Image
                src="https://images.pexels.com/photos/13767417/pexels-photo-13767417.jpeg"
                alt="Detail Overlay"
                fill
                className="object-cover"
                loading="lazy"
                quality={45}
                sizes="50vw"
              />
            </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 relative z-20">
          <div className="flex flex-col gap-8 border-l border-gold-500/30 pl-8">
             <span className="text-[10px] uppercase tracking-[0.4em] text-white font-black italic">PROXIMITY</span>
             <p className="text-neutral-400 font-light italic leading-relaxed text-sm tracking-widest">A fragrance that adjusts its frequency based on skin temperature, creating a bespoke aura.</p>
          </div>
          <div className="flex flex-col gap-8 border-l border-gold-500/30 pl-8">
             <span className="text-[10px] uppercase tracking-[0.4em] text-white font-black italic">RESONANCE</span>
             <p className="text-neutral-400 font-light italic leading-relaxed text-sm tracking-widest">Designed for high-contrast environments—from the frost of the Alps to the heat of the desert.</p>
          </div>
          <div className="flex flex-col gap-8 border-l border-gold-500/30 pl-8">
             <span className="text-[10px] uppercase tracking-[0.4em] text-white font-black italic">ENDURANCE</span>
             <p className="text-neutral-400 font-light italic leading-relaxed text-sm tracking-widest">Distilled for up to 14 hours of persistent, evolving olfactory narrative.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
