'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const storyImages = [
  'https://images.pexels.com/photos/37127787/pexels-photo-37127787.jpeg',
  'https://images.pexels.com/photos/34642421/pexels-photo-34642421.jpeg',
  'https://images.pexels.com/photos/12495924/pexels-photo-12495924.jpeg',
  'https://images.pexels.com/photos/33711975/pexels-photo-33711975.jpeg',
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 bg-black overflow-hidden px-6">
      {/* Decorative background text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden select-none opacity-[0.02] flex items-center justify-center">
         <h2 className="text-[25vw] font-serif uppercase tracking-tighter">ARTISTRY</h2>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Editorial Asymmetrical Layout for Images */}
          <div className="relative grid grid-cols-12 grid-rows-12 gap-4 h-[600px] md:h-[800px]">
             {/* Large Main Image */}
             <div className="col-start-1 col-end-8 row-start-1 row-end-9 relative rounded-2xl overflow-hidden transform-gpu">
                <Image 
                  src={storyImages[0]} 
                  alt="Aetheria Craft" 
                  fill 
                  className="object-cover" 
                  loading="lazy"
                  quality={45}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
             </div>

             {/* Top Right Overlapping */}
             <div className="col-start-7 col-end-13 row-start-2 row-end-6 relative rounded-2xl overflow-hidden z-10 border border-white/10">
                <Image 
                  src={storyImages[1]} 
                  alt="Detail" 
                  fill 
                  className="object-cover" 
                  loading="lazy"
                  quality={45}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
             </div>

             {/* Bottom Left Small */}
             <div className="col-start-2 col-end-6 row-start-8 row-end-12 relative rounded-2xl overflow-hidden z-20 border border-white/10">
                <Image 
                  src={storyImages[2]} 
                  alt="Process" 
                  fill 
                  className="object-cover" 
                  loading="lazy"
                  quality={45}
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
             </div>

             {/* Bottom Right Vertical */}
             <div className="col-start-7 col-end-11 row-start-7 row-end-13 relative rounded-2xl overflow-hidden transform-gpu">
                <Image 
                  src={storyImages[3]} 
                  alt="Final Touch" 
                  fill 
                  className="object-cover" 
                  loading="lazy"
                  quality={45}
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
             </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start max-w-2xl relative z-30">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[10px] uppercase tracking-[0.8em] text-gold-500 mb-10 inline-block font-bold">The Legacy of Aetheria</span>
              <h2 className="font-serif text-7xl md:text-[6rem] mb-12 leading-[0.85] tracking-tighter">
                SILHOUETTES <br />
                OF THE <span className="italic luxury-text-gradient">SOUL.</span>
              </h2>
              
              <div className="space-y-10 text-neutral-300 font-light leading-[1.8] tracking-widest text-sm md:text-base border-l border-gold-500/20 pl-10 py-4 italic">
                <p>
                  We believe that fragrance is the shadow of the soul. At Aetheria, our philosophy is rooted in the intersection of dark cinema and classical perfumery—creating moments that are as visually evocative as they are olfactory.
                </p>
                <p>
                  Each edition is more than a blend—it is a cinematic experience frozen in crystal, designed for those who navigate the world with quiet, undeniable presence.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/10 pt-16 w-full">
                <div className="group">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 block mb-4 font-black">01 / ARTISANAL</span>
                  <p className="text-sm font-serif italic text-neutral-400 leading-relaxed">Hand-decanted in small batches of exactly 300 units.</p>
                </div>
                <div className="group">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 block mb-4 font-black">02 / PROVENANCE</span>
                  <p className="text-sm font-serif italic text-neutral-400 leading-relaxed">Sourcing the world’s most elusive botanical extracts.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
