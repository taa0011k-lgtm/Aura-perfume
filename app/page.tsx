import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Lazy load sections below the fold
const Philosophy = dynamic(() => import('@/components/Philosophy'));
const FragranceExperience = dynamic(() => import('@/components/FragranceExperience'));
const NotesExperience = dynamic(() => import('@/components/NotesExperience'));
const CollectionWorlds = dynamic(() => import('@/components/CollectionWorlds'));
const VisualReel = dynamic(() => import('@/components/VisualReel'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const MasonryGallery = dynamic(() => import('@/components/MasonryGallery'));
const SocialRow = dynamic(() => import('@/components/SocialRow'));
const LimitedEdition = dynamic(() => import('@/components/LimitedEdition'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen bg-black overflow-hidden selection:bg-gold-500/30 selection:text-white">
        <Navbar />
        <Hero />
        <Philosophy />
        <FragranceExperience />
        <NotesExperience />
        <CollectionWorlds />
        <VisualReel />
        <Testimonials />
        <MasonryGallery />
        <SocialRow />
        <LimitedEdition />
        <Footer />
      </main>
    </>
  );
}
