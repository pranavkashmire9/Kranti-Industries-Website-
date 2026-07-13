'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import MagneticButton from './MagneticButton';

const slides = [
  {
    headline: 'Embrace the Era of Smart Toilets',
    body: 'The perfect blend of innovation and practicality, transforming public hygiene into a sophisticated and eco-friendly experience.',
    cta: 'Explore Solutions',
    href: '/products#electronic-toilet',
  },
  {
    headline: 'Road Sign Boards Built to Last',
    body: 'Clear directions, vital information, and safety warnings — strategically placed and designed for maximum visibility on every highway.',
    cta: 'View Products',
    href: '/products#road-sign-boards',
  },
  {
    headline: 'Highway Crash Barriers That Protect',
    body: 'Robust barriers designed to absorb impact, redirect vehicles, and minimize damage during collisions. Trusted across India.',
    cta: 'Learn More',
    href: '/products#crash-barriers',
  },
  {
    headline: 'Precision Thermoplastic Road Marking',
    body: 'Long-lasting, highly visible road markings resistant to wear and weather. Clear guidance for safer roads nationwide.',
    cta: 'Discover More',
    href: '/products#thermo-plastic',
  },
];

// Split text into words for staggered animation
function SplitText({ text, className }: { text: string; className?: string }) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 30, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.06,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-screen min-h-[650px] max-h-[1000px] overflow-hidden bg-[var(--ink)]">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ambient gradient mesh blobs */}
        <motion.div
          className="blob blob-accent w-[600px] h-[600px] absolute top-1/4 -right-48"
          animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="blob blob-deep w-[500px] h-[500px] absolute bottom-1/3 -left-32"
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid pattern - drifts slower (parallax feel) */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container-inner">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              {/* Eyebrow with hazard underline */}
              <motion.div
                className="eyebrow-hazard mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <span className="eyebrow">Kranti Industries</span>
              </motion.div>

              {/* Split-text headline */}
              <h1 className="h1 text-white mb-6">
                <SplitText text={slides[current].headline} />
              </h1>

              {/* Body */}
              <motion.p
                className="text-white/50 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-normal"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {slides[current].body}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                <MagneticButton as="a" href={slides[current].href} className="btn-primary">
                  {slides[current].cta}
                  <ArrowRight size={16} />
                </MagneticButton>
                <MagneticButton as="a" href="/contact" className="btn-secondary">
                  Get a Quote
                </MagneticButton>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators — hazard-stripe active bar */}
          <div className="absolute bottom-24 left-0 right-0">
            <div className="container-inner flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-[3px] rounded-full transition-all duration-500"
                  style={{
                    width: i === current ? '48px' : '24px',
                    background: i === current ? 'var(--hazard-stripe)' : 'rgba(255,255,255,0.15)',
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
              <span className="ml-4 text-white/20 text-sm font-semibold tracking-wide">
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="eyebrow text-[10px] text-white/25">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
