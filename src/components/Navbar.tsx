'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about#certifications', label: 'Certifications' },
  { href: '/clients', label: 'Clients' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Glassmorphism trigger
      setScrolled(currentY > 60);

      // Auto-hide on scroll-down, show on scroll-up
      if (currentY > 200) {
        if (currentY > lastScrollY.current + 5) {
          setHidden(true);
        } else if (currentY < lastScrollY.current - 5) {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className="fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out"
        style={{
          top: scrolled ? '12px' : '16px',
          maxWidth: scrolled ? '1120px' : '1280px',
          width: 'calc(100% - 32px)',
          borderRadius: '999px',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: hidden && !mobileOpen ? -120 : 0,
          opacity: hidden && !mobileOpen ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        <div
          className={`rounded-full transition-all duration-500 ${
            scrolled
              ? 'glass shadow-lg shadow-black/[0.04]'
              : 'bg-white/[0.02]'
          }`}
        >
          <div className="flex items-center justify-between h-[56px] lg:h-[60px] px-5 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent)' }}>
                <span className="text-white font-black text-sm">K</span>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={`text-[15px] font-black tracking-tight transition-colors duration-300 ${
                    scrolled ? 'text-[var(--ink)]' : 'text-white'
                  }`}
                >
                  KRANTI
                </span>
                <span
                  className={`text-[9px] font-semibold tracking-[0.14em] uppercase transition-colors duration-300 ${
                    scrolled ? 'text-[var(--ink-soft)]' : 'text-white/50'
                  }`}
                >
                  Industries
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden xl:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-semibold transition-all duration-300 relative group ${
                    scrolled
                      ? 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
                      : 'text-white/65 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full" style={{ background: 'var(--hazard-stripe)' }} />
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <MagneticButton
                as="a"
                href="/contact"
                className="btn-primary hidden sm:inline-flex text-[12px] py-2.5 px-5"
                strength={0.2}
              >
                Request a Quote
                <ArrowRight size={14} />
              </MagneticButton>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`xl:hidden p-2 rounded-full transition-colors duration-300 ${
                  scrolled ? 'text-[var(--ink)]' : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-[var(--ink)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white text-2xl font-black tracking-tight hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04, duration: 0.3 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary"
                >
                  Request a Quote
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
