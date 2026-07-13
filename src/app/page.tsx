import Link from 'next/link';
import HeroShader from '@/components/HeroShader';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero with Shaders */}
      <header className="hero" style={{ background: '#EFEFEF', position: 'relative', overflow: 'hidden' }}>
        <HeroShader />

        <div className="hero-badges desktop-only">
          <div className="floating-chip">
            <span className="dot" /> ISO Certified Manufacturing
          </div>
          <div className="floating-chip">
            <span className="dot" /> 25 Years in Road Safety
          </div>
        </div>

        <div className="hero-content" style={{ zIndex: 10, position: 'relative' }}>
          <div className="eyebrow" style={{ color: 'var(--color-accent)' }}>Since 2001 · Nashik, Maharashtra</div>
          <h1 style={{ color: 'var(--color-ink)' }}>
            <span className="split-line">
              {"Engineering safer roads".split(' ').map((word, i) => (
                <span key={i} className="split-word">{word}&nbsp;</span>
              ))}
            </span>
            <span className="split-line">
              {"& smarter hygiene.".split(' ').map((word, i) => (
                <span key={i} className="split-word">{word}&nbsp;</span>
              ))}
            </span>
          </h1>
          <p style={{ color: 'var(--color-ink-soft)', marginTop: '20px' }}>
            Kranti Industries designs and manufactures road safety and public hygiene equipment trusted by municipal bodies and contractors across Maharashtra for over two decades.
          </p>
          <div className="hero-actions flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-12 items-start">
            <Link href="/products" className="btn btn-primary text-white" style={{ borderRadius: '8px' }}>
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn btn-primary text-white" style={{ borderRadius: '8px' }}>
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>

          <div className="hero-badges mobile-only" style={{ marginTop: '32px' }}>
            <div className="floating-chip">
              <span className="dot" /> ISO Certified Manufacturing
            </div>
            <div className="floating-chip">
              <span className="dot" /> 25 Years in Road Safety
            </div>
          </div>
        </div>

        <div className="scroll-cue">Scroll</div>
      </header>

      {/* Marquee */}
      <div className="marquee-wrap" style={{ background: 'var(--color-ink)', padding: '22px 0' }}>
        <div className="marquee-track">
          <span>Nashik Municipal Corporation</span><span>◆</span>
          <span>PWD Maharashtra</span><span>◆</span>
          <span>NHAI Contractors</span><span>◆</span>
          <span>Smart City Mission</span><span>◆</span>
          <span>District Panchayat Projects</span><span>◆</span>
          <span>Nashik Municipal Corporation</span><span>◆</span>
          <span>PWD Maharashtra</span><span>◆</span>
          <span>NHAI Contractors</span><span>◆</span>
          <span>Smart City Mission</span><span>◆</span>
          <span>District Panchayat Projects</span><span>◆</span>
        </div>
      </div>

      {/* About preview */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="big-stamp" style={{ top: '40px', left: '-2%' }}>
          ABOUT
        </div>
        <div className="container about-grid">
          <div className="reveal">
            <div className="eyebrow">Who We Are</div>
            <h2>Welcome to Kranti Industries</h2>
            <p style={{ marginTop: '20px' }}>
              Kranti Industries was established in 2001 by the visionary Mr. Nanasaheb D. Pawar and has been a pioneer in Nashik&apos;s road safety and hygiene equipment industries. With over 20 years of expertise, we&apos;ve built a solid reputation as a dependable business dedicated to improving public safety and environmental sustainability.
            </p>
            <p style={{ marginTop: '14px' }}>
              We uphold ethical business practices while offering our clients excellent products and reliable after-sale support — building lasting relationships through quality, trust, and excellence.
            </p>
            <Link href="/about" className="btn btn-ghost" style={{ marginTop: '28px', borderColor: 'var(--color-line)' }}>
              Learn Our Story →
            </Link>

            <div className="stat-row">
              <div className="stat">
                <div className="num" data-count="2489" data-suffix="+">
                  0
                </div>
                <div className="label">Happy Customers</div>
              </div>
              <div className="stat">
                <div className="num" data-count="254" data-suffix="+">
                  0
                </div>
                <div className="label">Projects Complete</div>
              </div>
              <div className="stat">
                <div className="num" data-count="2" data-suffix="M+">
                  0
                </div>
                <div className="label">Registered Members</div>
              </div>
              <div className="stat">
                <div className="num" data-count="578">
                  0
                </div>
                <div className="label">Awards Won</div>
              </div>
            </div>
          </div>
          <div className="about-images reveal">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80"
              alt="Kranti Industries manufacturing facility"
            />
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
              alt="Road safety equipment installation"
            />
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"
              alt="Quality control process"
            />
          </div>
        </div>
      </section>

      <div className="stripe-divider" />

      {/* Services */}
      <section className="section-luxury services-pin-section">
        <div className="big-stamp" style={{ top: '20px', left: '50%', transform: 'translateX(-50%)', opacity: 0.03 }}>
          SOLUTIONS
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="luxury-header">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Services</div>
            <h2>Solutions Designed<br />For Growth</h2>
            <p className="luxury-desc">
              From road safety equipment to advanced electronic public hygiene systems, we build durable infrastructure solutions that help cities operate safer and smarter.
            </p>
            <Link href="/services" className="luxury-cta-btn">
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="services-h-wrapper">
          <div className="services-h-scroll">
            <div className="luxury-card luxury-card-anim">
              <div className="luxury-card-bg">
                <img src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&q=80" alt="Electronic Toilets" />
              </div>
              <div className="luxury-card-overlay"></div>
              <div className="luxury-card-top"><ArrowRight size={20} /></div>
              <div className="luxury-card-content">
                <h3>Electronic Toilets</h3>
                <p>Advanced, self-cleaning public hygiene solutions with automated features.</p>
              </div>
            </div>

            <div className="luxury-card luxury-card-anim">
              <div className="luxury-card-bg">
                <img src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=800&q=80" alt="Road Sign Boards" />
              </div>
              <div className="luxury-card-overlay"></div>
              <div className="luxury-card-top"><ArrowRight size={20} /></div>
              <div className="luxury-card-content">
                <h3>Road Sign Boards</h3>
                <p>High-visibility, durable sign boards ensuring clear communication on roads.</p>
              </div>
            </div>

            <div className="luxury-card luxury-card-anim">
              <div className="luxury-card-bg">
                <img src="https://images.unsplash.com/photo-1524015368236-2fb9342f0d84?w=800&q=80" alt="Road Safety Boards" />
              </div>
              <div className="luxury-card-overlay"></div>
              <div className="luxury-card-top"><ArrowRight size={20} /></div>
              <div className="luxury-card-content">
                <h3>Road Safety Boards</h3>
                <p>Informative safety boards minimizing confusion and protecting drivers.</p>
              </div>
            </div>

            <div className="luxury-card luxury-card-anim">
              <div className="luxury-card-bg">
                <img src="https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?w=800&q=80" alt="Thermo Plastic Painting" />
              </div>
              <div className="luxury-card-overlay"></div>
              <div className="luxury-card-top"><ArrowRight size={20} /></div>
              <div className="luxury-card-content">
                <h3>Thermo Plastic Painting</h3>
                <p>Weather-resistant, long-lasting road markings for optimal lane visibility.</p>
              </div>
            </div>

            <div className="luxury-card luxury-card-anim">
              <div className="luxury-card-bg">
                <img src="https://images.unsplash.com/photo-1600661653561-629509216228?w=800&q=80" alt="Crash Barriers" />
              </div>
              <div className="luxury-card-overlay"></div>
              <div className="luxury-card-top"><ArrowRight size={20} /></div>
              <div className="luxury-card-content">
                <h3>Crash Barriers</h3>
                <p>Robust barriers designed to absorb high impacts and minimize accident severity.</p>
              </div>
            </div>

            <div className="luxury-card luxury-card-anim">
              <div className="luxury-card-bg">
                <img src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800&q=80" alt="Cat Eyes" />
              </div>
              <div className="luxury-card-overlay"></div>
              <div className="luxury-card-top"><ArrowRight size={20} /></div>
              <div className="luxury-card-content">
                <h3>Cat Eyes</h3>
                <p>Reflective road studs that guide vehicles safely in low-light conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="big-stamp" style={{ top: '40px', left: '50%', transform: 'translateX(-50%)' }}>
          WHY US
        </div>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Why Kranti</div>
            <h2>Built on quality, trust, and expertise.</h2>
          </div>
          <div className="grid-3 mobile-swipe-row">
            <div className="why-card reveal">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                </svg>
              </div>
              <h3>Commitment to Quality</h3>
              <p>
                Manufactured with the highest quality materials, undergoing stringent quality control to ensure performance and durability.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18M7 14l4-4 3 3 5-6" />
                </svg>
              </div>
              <h3>Proven Track Record</h3>
              <p>
                Over two decades of successful projects and satisfied clients across Maharashtra&apos;s public infrastructure sector.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21v-1a8 8 0 0116 0v1" />
                </svg>
              </div>
              <h3>Expertise &amp; Skill</h3>
              <p>
                Our teams undergo rigorous training to stay equipped with the latest techniques in road safety and hygiene solutions.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
                </svg>
              </div>
              <h3>Innovative Solutions</h3>
              <p>
                Continual R&amp;D investment to create cutting-edge products designed for modern-day infrastructure challenges.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z" />
                </svg>
              </div>
              <h3>Sustainability Focus</h3>
              <p>
                Products engineered to minimize environmental impact and support recycling and sustainable practices.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3>Exceptional Service</h3>
              <p>
                Dedicated support from initial consultation through after-sales service, ensuring your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* CTA Band - Glassmorphism */}
      <section className="section-cta-glass">
        <div className="cta-orb cta-orb-1" />
        <div className="cta-orb cta-orb-2" />
        <div className="cta-orb cta-orb-3" />
        <div className="cta-glass-card reveal">
          <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--color-accent)' }}>Get Started</div>
          <h2>Ready to make your<br />project safer?</h2>
          <p>Tell us what you&apos;re building &mdash; we&apos;ll help you spec the right road safety or hygiene equipment for it.</p>
          <div className="cta-glass-actions">
            <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}>Request a Quote <ArrowRight size={16} /></Link>
            <Link href="/products" className="btn btn-ghost cta-ghost-btn">Explore Products <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
