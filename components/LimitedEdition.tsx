'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function LimitedEdition() {
  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-black group">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/14736080/pexels-photo-14736080.jpeg"
          alt="Limited Edition"
          fill
          className="object-cover contrast-125"
          priority
          quality={45}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black" />
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl transform-gpu"
        >
          <span className="text-[12px] md:text-[14px] uppercase tracking-[1em] text-gold-400 mb-10 block font-bold">The Ultra-Limited Sequence</span>
          <h2 className="font-serif text-6xl md:text-9xl mb-12 tracking-tighter luxury-text-gradient">
            OBSIDIAN <br /> RESERVE
          </h2>
          <p className="text-neutral-300 text-sm md:text-xl font-light tracking-[0.2em] max-w-2xl mx-auto mb-16 leading-relaxed italic">
            &quot;Only 50 units will ever exist. A scent for those whom the shadows whisper back to.&quot;
          </p>
          <div className="flex flex-wrap justify-center gap-10">
             <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gold-500 text-neutral-900 uppercase tracking-[0.4em] font-black text-[10px] transition-all duration-300"
             >
                Request Invitation
             </motion.button>
             <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border border-white/20 text-white uppercase tracking-[0.4em] font-bold text-[10px] hover:bg-white/5 transition-all duration-300"
             >
                View Dossier
             </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Side metadata filler */}
      <div className="absolute bottom-20 left-12 hidden lg:flex flex-col gap-2">
         <span className="text-[10px] uppercase tracking-[0.5em] text-gold-500 font-black">BATCH NO. 000/050</span>
         <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">PRIVATE ARCHIVE RELEASE</span>
      </div>
    </section>
  );
}
