'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-20 px-6 overflow-hidden relative">
      {/* Footer Backdrop Texture */}
      <div className="absolute inset-0 grainy-bg opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 mb-32">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-10 items-start">
            <div className="flex flex-col items-start group">
               <span className="font-serif text-4xl md:text-5xl tracking-[0.4em] font-light luxury-text-gradient block group-hover:text-glow transition-all duration-700">AETHERIA</span>
               <span className="text-[9px] uppercase tracking-[0.8em] text-neutral-500 font-black mt-1">THE PRIVATE RESERVE</span>
            </div>
            <p className="text-neutral-500 text-sm md:text-base font-light italic leading-relaxed tracking-widest max-w-sm">
              Distilling the essence of presence into olfactory masterpieces. Handcrafted in Grasse, designed for the global silhouette.
            </p>
            <div className="flex gap-8 border-t border-white/10 pt-8 w-full max-w-xs">
               <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-black mb-1 italic">V.014</span>
                  <span className="text-[9px] uppercase tracking-[0.1em] text-neutral-600">Edition Sequence</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-black mb-1 italic">300/UNITS</span>
                  <span className="text-[9px] uppercase tracking-[0.1em] text-neutral-600">Batch Limitation</span>
               </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.6em] text-gold-500 mb-12 block font-black border-b border-gold-500/10 pb-4">Spheres</span>
            <ul className="space-y-6">
              {['Collection', 'Olfactory Journey', 'The Philosophy', 'Film Gallery', 'Bespoke Reserve'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 hover:text-white transition-all duration-500 flex items-center gap-4 group">
                    <span className="w-0 h-[1px] bg-gold-400 group-hover:w-6 transition-all duration-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.6em] text-gold-500 mb-12 block font-black border-b border-gold-500/10 pb-4">Protocol</span>
            <ul className="space-y-6">
              {['Privacy Policy', 'Service Terms', 'Sourcing Ethics', 'Press Inquiry', 'Shipping & Duty'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 hover:text-white transition-all duration-500 flex items-center gap-4 group">
                    <span className="w-0 h-[1px] bg-gold-400 group-hover:w-6 transition-all duration-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Global Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-white/5 gap-8">
          <p className="text-[9px] uppercase tracking-[0.6em] text-neutral-600 font-black">
            © {new Date().getFullYear()} AETHERIA PRIVATE RESERVE. ALL RIGHTS RESERVED IN PERPETUITY.
          </p>
          <div className="flex gap-12 items-center">
             <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-600 font-bold italic">MADE IN GRASSE</span>
             <div className="w-[1px] h-4 bg-white/10" />
             <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-600 font-bold italic">DISTILLED FOR PRESENCE</span>
          </div>
        </div>
      </div>
      
      {/* Large Bottom Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.02]">
         <h2 className="text-[25vw] font-serif uppercase tracking-tighter leading-none whitespace-nowrap translate-y-1/2">AETHERIA</h2>
      </div>
    </footer>
  );
}
