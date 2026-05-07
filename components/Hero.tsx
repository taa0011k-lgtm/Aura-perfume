'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-black transform-gpu">
      {/* Cinematic Background Image */}
      <Image
        src="https://images.pexels.com/photos/32630388/pexels-photo-32630388.jpeg"
        alt="Obsidian Reserve Hero"
        fill
        priority
        className="object-cover"
        quality={45}
        sizes="100vw"
      />
      
      {/* Video Overlay (Optimized) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
      >
        <source src="https://videos.pexels.com/video-files/30943121/30943121-uhd_2160_3840_24fps.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Content - Central & Bold */}
      <div className="relative z-20 w-full min-h-screen flex items-center justify-center py-20 px-6">
        <div className="relative z-30 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center will-change-transform">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-[1px] bg-gold-400 opacity-50" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-gold-300 font-bold">L&apos;Essence de L&apos;Avenir</span>
            <div className="w-16 h-[1px] bg-gold-400 opacity-50" />
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-7xl md:text-9xl lg:text-[12rem] xl:text-[14rem] mb-12 leading-[0.85] tracking-tight group text-white transform-gpu"
          >
            CRAFTED <br />
            <span className="italic luxury-text-gradient">FOR PRESENCE</span>
          </motion.h1>
          
          <p className="text-neutral-300 text-sm md:text-lg lg:text-xl max-w-2xl mb-14 leading-relaxed font-light tracking-[0.1em]">
            Luxury fragrances designed to leave an unforgettable signature. 
            An immersive sensory journey through the notes of the unseen.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gold-500 text-neutral-950 text-xs uppercase tracking-[0.3em] font-bold overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Explore the Reserve</span>
              <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 group-hover:translate-y-0 opacity-20" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border border-white/20 text-white text-xs uppercase tracking-[0.3em] font-medium hover:bg-white/5 transition-all duration-300 relative group overflow-hidden"
            >
              <span className="relative z-10">Watch the Film</span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-20 bg-linear-to-b from-gold-500 to-transparent" />
      </div>
    </section>
  );
}
