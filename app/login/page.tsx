'use client';

import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Lock, Mail, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Option: automatically redirect to home or stay here with "Logout" view
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err: any) {
      console.error('Logout error:', err);
    }
  };

  if (user) {
    return (
      <main className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-30"
          >
            <source src="https://videos.pexels.com/video-files/30943121/30943121-uhd_2160_3840_24fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-md p-10 bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-3xl text-center"
        >
          <h1 className="font-serif text-4xl text-white mb-6 uppercase tracking-widest luxury-text-gradient">Welcome Back</h1>
          <p className="text-neutral-400 mb-10 text-sm tracking-widest font-light">
            You are currently signed in as <span className="text-gold-400 font-bold">{user.email}</span>
          </p>
          
          <div className="flex flex-col gap-4">
            <Link 
              href="/"
              className="w-full py-4 bg-gold-500 text-neutral-950 text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white transition-all duration-300 rounded-lg"
            >
              Enter The Reserve
            </Link>
            <button 
              onClick={handleLogout}
              className="w-full py-4 border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white/5 transition-all duration-300 rounded-lg"
            >
              Sign Out
            </button>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        >
          <source src="https://videos.pexels.com/video-files/30943121/30943121-uhd_2160_3840_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Link 
        href="/" 
        className="absolute top-10 left-10 z-20 flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Back to Gallery</span>
      </Link>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md mx-6"
      >
        <div className="p-10 md:p-14 bg-neutral-950/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-3xl rounded-full translate-x-10 -translate-y-10" />
          
          <div className="text-center mb-12">
            <div className="font-serif text-3xl md:text-5xl tracking-[0.2em] font-light luxury-text-gradient mb-2 uppercase">AETHERIA</div>
            <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-500 font-bold mb-8">Access the Reserve</p>
            <h2 className="text-white text-xl uppercase tracking-widest font-light">Member Login</h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-gold-500 transition-colors">
                  <Mail size={16} />
                </div>
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-4 py-4 rounded-xl outline-none focus:border-gold-500/50 focus:bg-white/10 transition-all duration-300 text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">Secure Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-gold-500 transition-colors">
                  <Lock size={16} />
                </div>
                <input 
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-4 py-4 rounded-xl outline-none focus:border-gold-500/50 focus:bg-white/10 transition-all duration-300 text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-400 text-xs text-center font-bold tracking-wider leading-relaxed"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              type="submit"
              disabled={loading}
              className="w-full relative py-5 bg-gold-500 text-neutral-950 text-[10px] uppercase tracking-[0.4em] font-black hover:bg-white transition-all duration-500 rounded-xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className={`flex items-center justify-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                Sign In
              </span>
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="animate-spin" size={20} />
                </div>
              )}
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-white/5 flex flex-col items-center gap-6">
            <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Forgot your credentials?</p>
            <button className="text-[10px] text-gold-400/60 uppercase tracking-widest font-bold hover:text-gold-400 transition-colors">Contact Concierge</button>
          </div>
        </div>
        
        <p className="mt-8 text-center text-neutral-600 text-[10px] uppercase tracking-[0.4em]">
          &copy; 2024 Aetheria Premium Reserve
        </p>
      </motion.div>
    </main>
  );
}
