import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import './globals.css';
import BehaviorManager from '@/components/BehaviorManager';
import { ArrowRight } from 'lucide-react';
import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Kranti Industries | Road Safety & Hygiene Equipment, Nashik',
  description: 'Kranti Industries — Nashik-based manufacturer of road safety and public hygiene equipment since 2001. Road signage, crash barriers, thermoplastic marking, cat eyes, and electronic toilets.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Load GSAP CDN scripts before interactive */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <BehaviorManager />
        
        <div className="scroll-stripe"></div>
        <div className="grain"></div>
        <div className="cursor-glow"></div>

        {/* Utility bar */}
        <div className="utility-bar">
          <div className="container">
            <span>F-44, MIDC, Satpur, Nashik, Maharashtra 422007</span>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="tel:+919923818812">+91-9923818812</a>
              <a href="tel:+919158988812">+91-9158988812</a>
              <a href="tel:+919175675514">+91-9175675514</a>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar">
          <div className="container">
            <Link href="/" className="brand">
              <span className="brand-dot">KI</span>
              <span className="brand-text">KRANTI<span>.</span>INDUSTRIES</span>
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/products">Products</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/clients">Clients</Link>
              <Link href="/faq">FAQ</Link>
            </div>
            <Link href="/contact" className="btn btn-primary text-white">
              <span>Contact US</span>
              <span className="arrow-circle">
                <ArrowRight size={14} />
              </span>
            </Link>
            <div className="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></div>
          </div>
        </nav>

        {/* Mobile Nav Drawer */}
        <div className="mobile-drawer">
          <div className="mobile-drawer-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/clients">Clients</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact" className="mobile-cta">Contact US <ArrowRight size={16} /></Link>
          </div>
        </div>

        {children}

        {/* Footer */}
        <footer>
          <div className="container">
            <div className="footer-grid">
              <div>
                <div className="footer-brand"><span className="brand">KRANTI<span>.</span>INDUSTRIES</span></div>
                <p>A pioneering leader in road safety and hygiene solutions, founded by Mr. Nanasaheb D. Pawar in 2001. Over two decades of innovative, sustainable products enhancing public safety.</p>
              </div>
              <div>
                <h4>Explore</h4>
                <ul>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/products">Products</Link></li>
                  <li><Link href="/gallery">Gallery</Link></li>
                  <li><Link href="/clients">Clients</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4>Contact Us</h4>
                <p style={{ fontSize: '0.85em', opacity: 0.7, marginBottom: '16px' }}>Get quick response from our team.</p>
                <ul>
                  <li>F-44, MIDC, Satpur, Behind Sunil Transport, Nashik, Maharashtra 422007</li>
                  <li style={{ marginTop: '8px', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a href="tel:+919923818812">+91- 9923818812</a>
                      <a href="tel:+919158988812">+91- 9158988812</a>
                      <a href="tel:+919175675514">+91- 9175675514</a>
                    </div>
                  </li>
                  <li><a href="mailto:info@krantiindustries.co">info@krantiindustries.co</a></li>
                </ul>
              </div>
              <div>
                <h4>Legal</h4>
                <ul>
                  <li><Link href="/faq#terms">Terms &amp; Conditions</Link></li>
                  <li><Link href="/contact">Request a Quote</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© 2026 Kranti Industries. All rights reserved.</span>
              <div className="social-row">
                <a href="#" aria-label="Facebook"><FaFacebookF size={18} /></a>
                <a href="#" aria-label="Twitter"><FaXTwitter size={18} /></a>
                <a href="#" aria-label="YouTube"><FaYoutube size={18} /></a>
                <a href="#" aria-label="Instagram"><FaInstagram size={18} /></a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
