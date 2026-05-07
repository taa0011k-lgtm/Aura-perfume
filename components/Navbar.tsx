'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { LogOut, User } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 ${
        isScrolled ? 'py-4 bg-black/90 border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden lg:flex items-center gap-12">
          {['Collection', 'Notes', 'Philosophy'].map((item) => (
             <Link 
               key={item} 
               href={`/#${item.toLowerCase()}`} 
               className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400 hover:text-gold-400 transition-all duration-500 relative group"
             >
               {item}
               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 group-hover:w-full transition-all duration-500" />
             </Link>
          ))}
        </div>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group">
          <span className="font-serif text-2xl md:text-4xl tracking-[0.3em] font-light luxury-text-gradient group-hover:text-glow transition-all duration-700">AETHERIA</span>
          <span className="text-[8px] uppercase tracking-[0.8em] text-neutral-500 font-bold -mt-1 group-hover:text-white transition-colors duration-700">PREMIUM RESERVE</span>
        </Link>

        <div className="flex items-center gap-6 sm:gap-10">
          {user ? (
            <div className="flex items-center gap-4 sm:gap-8">
              <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold">
                {user.email?.split('@')[0]}
              </span>
              <button 
                onClick={handleLogout}
                className="text-neutral-400 hover:text-white transition-colors group flex items-center gap-2"
                title="Sign Out"
              >
                <LogOut size={16} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:block text-[10px] uppercase tracking-[0.4em] font-bold">Exit</span>
              </button>
            </div>
          ) : (
            <Link 
              href="/login" 
              className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400 hover:text-gold-400 transition-colors duration-500 flex items-center gap-2"
            >
              <User size={16} />
              <span className="hidden sm:block">Login</span>
            </Link>
          )}
          
          <button className="bg-gold-500 text-neutral-950 px-6 sm:px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white transition-all duration-500 flex items-center gap-3">
             <span>Reserve</span>
             <div className="w-1.5 h-1.5 rounded-full bg-neutral-950 animate-pulse" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
