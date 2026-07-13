import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, Globe, MessageSquare, Video, Camera } from 'lucide-react';
import MagneticButton from './MagneticButton';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/clients', label: 'Clients' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/faq', label: 'FAQ' },
];

const products = [
  { href: '/products#electronic-toilet', label: 'Electronic Toilets' },
  { href: '/products#road-sign-boards', label: 'Road Sign Boards' },
  { href: '/products#road-safety-boards', label: 'Road Safety Boards' },
  { href: '/products#thermo-plastic', label: 'Thermo Plastic Painting' },
  { href: '/products#crash-barriers', label: 'Crash Barriers' },
  { href: '/products#cat-eyes', label: 'Cat Eyes' },
];

const socials = [
  { href: '#', icon: Globe, label: 'Facebook' },
  { href: '#', icon: MessageSquare, label: 'Twitter' },
  { href: '#', icon: Video, label: 'YouTube' },
  { href: '#', icon: Camera, label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white">
      {/* Hazard stripe top */}
      <div className="hazard-stripe" />

      {/* CTA Strip */}
      <div className="border-b border-white/[0.06]">
        <div className="container-inner py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="h3 text-white mb-2">
              Ready to start your project?
            </h3>
            <p className="text-white/40 text-base font-normal">
              Get in touch with our team for a free consultation and quote.
            </p>
          </div>
          <MagneticButton as="a" href="/contact" className="btn-primary whitespace-nowrap">
            Request a Quote
            <ArrowRight size={16} />
          </MagneticButton>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-inner py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Blurb */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent)' }}>
                <span className="text-white font-black text-sm">K</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[15px] font-black tracking-tight">KRANTI</span>
                <span className="text-[9px] font-semibold tracking-[0.14em] uppercase text-white/40">Industries</span>
              </div>
            </div>
            <p className="text-white/40 text-[14px] leading-relaxed mb-6">
              Kranti Industries is a pioneering leader in road safety and hygiene solutions,
              founded by Mr. Nanasaheb D. Pawar in 2001. Over two decades of innovative,
              sustainable products.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="eyebrow text-[12px] text-white/60 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 text-[14px] hover:text-white hover:pl-2 transition-all duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="eyebrow text-[12px] text-white/60 mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 text-[14px] hover:text-white hover:pl-2 transition-all duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="eyebrow text-[12px] text-white/60 mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+919923818812" className="flex items-start gap-3 text-white/40 text-[14px] hover:text-white transition-colors duration-300">
                <Phone size={15} className="mt-0.5 shrink-0" />
                <span>+91-9923818812<br />+91-9158988812<br />+91-9175675514</span>
              </a>
              <a href="mailto:info@krantiindustries.co" className="flex items-start gap-3 text-white/40 text-[14px] hover:text-white transition-colors duration-300">
                <Mail size={15} className="mt-0.5 shrink-0" />
                <span>info@krantiindustries.co</span>
              </a>
              <div className="flex items-start gap-3 text-white/40 text-[14px]">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>F-44, MIDC, Satpur, Behind Sunil Transport, Nashik, Maharashtra 422007</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/[0.06]">
        <div className="container-inner py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-[13px]">
          <p>© {new Date().getFullYear()} Kranti Industries. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
