import Link from 'next/link';
import CertificationsShowcase from '@/components/CertificationsShowcase';
import EditorialMVV from '@/components/EditorialMVV';

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80')" }}
        />
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--color-accent)' }}>
            About Kranti Industries
          </div>
          <h1>
            <span className="split-line">
              {"25 years of engineering trust into every road.".split(' ').map((word, i) => (
                <span key={i} className="split-word">{word}&nbsp;</span>
              ))}
            </span>
          </h1>
          <p>From a single Nashik workshop in 2001 to a name municipal corporations and contractors rely on across Maharashtra.</p>
        </div>
      </header>

      {/* History */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="big-stamp" style={{ top: '40px', left: '-2%' }}>
          STORY
        </div>
        <div className="container about-grid">
          <div className="reveal">
            <div className="eyebrow">Our Story</div>
            <h2>Welcome to Kranti Industries</h2>
            <p style={{ marginTop: '20px' }}>
              Kranti Industries was established in 2001 by the visionary Mr. Nanasaheb D. Pawar and has been a pioneer in Nashik&apos;s road safety and hygiene equipment industries. With over 20 years of expertise, we have established a solid reputation as a dependable business dedicated to improving public safety and environmental sustainability.
            </p>
            <p style={{ marginTop: '14px' }}>
              We uphold ethical business practices while offering our clients excellent products and reliable after-sale support. Our innovative products are made to satisfy our clients&apos; changing needs while guaranteeing maximum performance and security. We are proud of our hardworking staff, whose knowledge and devotion are the main factors in our success.
            </p>
            <div className="stat-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <div className="stat">
                <div className="num">25</div>
                <div className="label">Years of Expertise</div>
              </div>
              <div className="stat">
                <div className="num">1st</div>
                <div className="label">Trusted Safety Partner</div>
              </div>
              <div className="stat">
                <div className="num">100%</div>
                <div className="label">Complete Satisfaction</div>
              </div>
              <div className="stat">
                <div className="num">50+</div>
                <div className="label">Skilled Professionals</div>
              </div>
            </div>
          </div>
          <div className="about-images reveal">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80" alt="Kranti Industries facility" />
            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80" alt="Manufacturing" />
            <img src="https://images.unsplash.com/photo-1581092160607-ee22731c9c04?w=600&q=80" alt="Team at work" />
          </div>
        </div>
      </section>

      <div className="stripe-divider" />

      {/* Mission Vision Values */}
      <section className="section-alt" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="big-stamp" style={{ top: '40px', left: '50%', transform: 'translateX(-50%)' }}>
          VISION
        </div>
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              What Drives Us
            </div>
            <h2>Mission, Vision &amp; Values</h2>
          </div>
          <EditorialMVV />
        </div>
      </section>

      {/* Founders */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="big-stamp" style={{ top: '40px', left: '50%', transform: 'translateX(-50%)' }}>
          LEADERS
        </div>
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              Leadership
            </div>
            <h2>Meet the Founders</h2>
            <p style={{ marginTop: '12px' }}>Placeholder profiles shown below — to be replaced with real bios and photography before launch.</p>
          </div>
          <div className="grid-3 mobile-swipe-row">
            <div className="founder-card reveal">
              <div className="founder-photo">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80" alt="Mr. Nanasaheb D. Pawar" />
              </div>
              <div className="founder-role">Founder &amp; Chairman</div>
              <h3>Mr. Nanasaheb D. Pawar</h3>
              <p style={{ marginTop: '8px' }}>
                Founded Kranti Industries in 2001 with a vision to transform road safety and public hygiene standards across Nashik.
              </p>
            </div>
            <div className="founder-card reveal">
              <div className="founder-photo">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80" alt="Managing Director" />
              </div>
              <div className="founder-role">Managing Director</div>
              <h3>[Dummy Name 1]</h3>
              <p style={{ marginTop: '8px' }}>
                Oversees daily operations, manufacturing quality, and client relationships across all product lines.
              </p>
            </div>
            <div className="founder-card reveal">
              <div className="founder-photo">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80" alt="Director Business Development" />
              </div>
              <div className="founder-role">Director, Business Development</div>
              <h3>[Dummy Name 2]</h3>
              <p style={{ marginTop: '8px' }}>
                Leads expansion into new markets and government partnerships with a focus on sustainable innovation.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Certifications */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="big-stamp" style={{ top: '40px', left: '50%', transform: 'translateX(-50%)' }}>
          QUALITY
        </div>
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              Accreditation
            </div>
            <h2>Certifications</h2>
            <p style={{ marginTop: '12px' }}>Certificate numbers and scanned copies to be added — client confirmed 2 active ISO certifications.</p>
          </div>
          <CertificationsShowcase />
        </div>
      </section>

      {/* Stats */}
      <div className="stat-band">
        <div className="container">
          <div className="grid-4">
            <div>
              <div className="num" data-count="2489" data-suffix="+">
                0
              </div>
              <div className="label">Happy Customers</div>
            </div>
            <div>
              <div className="num" data-count="254" data-suffix="+">
                0
              </div>
              <div className="label">Project Complete</div>
            </div>
            <div>
              <div className="num" data-count="2" data-suffix="M+">
                0
              </div>
              <div className="label">Registered Member</div>
            </div>
            <div>
              <div className="num" data-count="578">
                0
              </div>
              <div className="label">Awards Winning</div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Reviews */}
      <section className="section-alt" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="big-stamp" style={{ top: '40px', left: '50%', transform: 'translateX(-50%)' }}>
          REVIEWS
        </div>
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              Client Voices
            </div>
            <h2>Google Reviews</h2>
            <p style={{ marginTop: '12px' }}>Live review widget to be embedded here once the client&apos;s Google Business Profile link is provided.</p>
          </div>
          <div className="grid-3">
            <div className="card reveal">
              <div className="card-body">
                <div style={{ color: 'var(--color-accent)', marginBottom: '10px' }}>★★★★★</div>
                <p>&quot;Reliable delivery and solid build quality on the crash barriers we ordered for our highway stretch.&quot;</p>
                <p style={{ marginTop: '14px', fontWeight: 600, color: 'var(--color-ink)' }}>— Placeholder Reviewer</p>
              </div>
            </div>
            <div className="card reveal">
              <div className="card-body">
                <div style={{ color: 'var(--color-accent)', marginBottom: '10px' }}>★★★★★</div>
                <p>&quot;Their team supported us through the entire installation of road signage across our municipal ward.&quot;</p>
                <p style={{ marginTop: '14px', fontWeight: 600, color: 'var(--color-ink)' }}>— Placeholder Reviewer</p>
              </div>
            </div>
            <div className="card reveal">
              <div className="card-body">
                <div style={{ color: 'var(--color-accent)', marginBottom: '10px' }}>★★★★★</div>
                <p>&quot;Good after-sales support on the electronic toilet units we installed at our facility.&quot;</p>
                <p style={{ marginTop: '14px', fontWeight: 600, color: 'var(--color-ink)' }}>— Placeholder Reviewer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
