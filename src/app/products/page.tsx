import Link from 'next/link';
import ProductImageGallery from '@/components/ProductImageGallery';
import { ArrowRight } from 'lucide-react';
export default function ProductsPage() {
  return (
    <>
      <header className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?w=1600&q=80')" }}
        />
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--color-accent)' }}>
            Our Range
          </div>
          <h1>
            <span className="split-line">
              {"Products built for the road, and beyond.".split(' ').map((word, i) => (
                <span key={i} className="split-word">{word}&nbsp;</span>
              ))}
            </span>
          </h1>
          <p>Six product lines, each engineered for durability, visibility, and public safety. Spec sheets available on request.</p>
        </div>
      </header>

      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="big-stamp" style={{ top: '40px', left: '50%', transform: 'translateX(-50%)' }}>
          PRODUCTS
        </div>
        <div className="container">
          {/* 01 — Electronic Toilet */}
          <div className="product-detail reveal" id="electronic-toilet">
            <div className="product-img">
              <ProductImageGallery 
                altPrefix="Electronic Toilet"
                description="A self-cleaning electronic toilet is an advanced bathroom fixture that incorporates electronic and automated features to enhance hygiene and convenience — built for high-footfall public spaces."
                images={[
                  "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&q=80",
                  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
                  "https://images.unsplash.com/photo-1517594422361-5e18d04cfd8b?w=800&q=80"
                ]}
              />
            </div>
            <div>
              <div className="eyebrow">01 — Hygiene</div>
              <h2>Electronic Toilet</h2>
              <p style={{ marginTop: '16px' }}>
                A self-cleaning electronic toilet is an advanced bathroom fixture that incorporates electronic and automated features to enhance hygiene and convenience — built for high-footfall public spaces.
              </p>
              <ul className="spec-list">
                <li>Automated self-cleaning cycle</li>
                <li>Corrosion-resistant enclosure</li>
                <li>Low-maintenance servicing</li>
                <li>Suitable for public &amp; municipal installations</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '28px' }}>
                Request a Quote
              </Link>
            </div>
          </div>

          {/* 02 — Road Sign Board */}
          <div className="product-detail reveal" id="road-sign-boards">
            <div className="product-img">
              <ProductImageGallery 
                altPrefix="Road Sign Board"
                description="High-quality and durable sign boards that provide essential information and guidance to road users. Designed for maximum visibility and clarity, ensuring safe and efficient traffic management."
                images={[
                  "https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=800&q=80",
                  "https://images.unsplash.com/photo-1621617277800-475a89fb3607?w=800&q=80",
                  "https://images.unsplash.com/photo-1619441113264-b81b2a433606?w=800&q=80"
                ]}
              />
            </div>
            <div>
              <div className="eyebrow">02 — Signage</div>
              <h2>Road Sign Board</h2>
              <p style={{ marginTop: '16px' }}>
                High-quality and durable sign boards that provide essential information and guidance to road users. Designed for maximum visibility and clarity, ensuring safe and efficient traffic management.
              </p>
              <ul className="spec-list">
                <li>Reflective, weather-resistant surface</li>
                <li>Custom sizing per government spec</li>
                <li>Rust-proof mounting hardware</li>
                <li>Day and night visibility tested</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '28px' }}>
                Request a Quote
              </Link>
            </div>
          </div>

          {/* 03 — Road Safety Board */}
          <div className="product-detail reveal" id="road-safety-boards">
            <div className="product-img">
              <ProductImageGallery 
                altPrefix="Road Safety Boards"
                description="Informative boards that display critical information such as directions, distances, and points of interest — helping drivers navigate safely and efficiently, reducing confusion on the road."
                images={[
                  "https://images.unsplash.com/photo-1524015368236-2fb9342f0d84?w=800&q=80",
                  "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800&q=80",
                  "https://images.unsplash.com/photo-1506506306535-6f9479b18361?w=800&q=80"
                ]}
              />
            </div>
            <div>
              <div className="eyebrow">03 — Signage</div>
              <h2>Road Safety Boards</h2>
              <p style={{ marginTop: '16px' }}>
                Informative boards that display critical information such as directions, distances, and points of interest — helping drivers navigate safely and efficiently, reducing confusion on the road.
              </p>
              <ul className="spec-list">
                <li>High-contrast lettering for readability</li>
                <li>Aluminium composite panel construction</li>
                <li>UV-stable printing</li>
                <li>Bulk/tender order support</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '28px' }}>
                Request a Quote
              </Link>
            </div>
          </div>

          {/* 04 — Thermo Plastic Painting */}
          <div className="product-detail reveal" id="thermo-plastic">
            <div className="product-img">
              <ProductImageGallery 
                altPrefix="Thermo Plastic Painting"
                description="Long-lasting and highly visible road markings made from thermoplastic materials. These markings are resistant to wear and weather conditions, providing clear guidance for drivers."
                images={[
                  "https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?w=800&q=80",
                  "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&q=80",
                  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80"
                ]}
              />
            </div>
            <div>
              <div className="eyebrow">04 — Road Marking</div>
              <h2>Thermo Plastic Painting</h2>
              <p style={{ marginTop: '16px' }}>
                Long-lasting and highly visible road markings made from thermoplastic materials. These markings are resistant to wear and weather conditions, providing clear guidance for drivers.
              </p>
              <ul className="spec-list">
                <li>Hot-applied thermoplastic compound</li>
                <li>Skid-resistant, reflective finish</li>
                <li>Long service life vs. paint markings</li>
                <li>Lane, crosswalk &amp; symbol marking</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '28px' }}>
                Request a Quote
              </Link>
            </div>
          </div>

          {/* 05 — Crash Barriers */}
          <div className="product-detail reveal" id="crash-barriers">
            <div className="product-img">
              <ProductImageGallery 
                altPrefix="Crash Barriers"
                description="Robust and reliable crash barriers designed to absorb impact and minimize the severity of accidents. These barriers protect vehicles and passengers by preventing vehicles from veering off the road."
                images={[
                  "https://images.unsplash.com/photo-1600661653561-629509216228?w=800&q=80",
                  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
                  "https://images.unsplash.com/photo-1542385262-cdf06b2db16b?w=800&q=80"
                ]}
              />
            </div>
            <div>
              <div className="eyebrow">05 — Highway Safety</div>
              <h2>Crash Barriers</h2>
              <p style={{ marginTop: '16px' }}>
                Robust and reliable crash barriers designed to absorb impact and minimize the severity of accidents. These barriers protect vehicles and passengers by preventing vehicles from veering off the road.
              </p>
              <ul className="spec-list">
                <li>Galvanized steel construction</li>
                <li>W-beam and thrie-beam profiles</li>
                <li>Impact-tested design</li>
                <li>Highway &amp; bridge deployment</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '28px' }}>
                Request a Quote
              </Link>
            </div>
          </div>

          {/* 06 — Cat Eyes */}
          <div className="product-detail reveal" id="cat-eyes">
            <div className="product-img">
              <ProductImageGallery 
                altPrefix="Cat Eyes"
                description="Reflective road studs that enhance night-time visibility and road safety. Cat eyes are strategically placed to guide drivers in low-light conditions, ensuring safer driving at night."
                images={[
                  "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800&q=80",
                  "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&q=80",
                  "https://images.unsplash.com/photo-1473229606132-72049e7555df?w=800&q=80"
                ]}
              />
            </div>
            <div>
              <div className="eyebrow">06 — Road Marking</div>
              <h2>Cat Eyes</h2>
              <p style={{ marginTop: '16px' }}>
                Reflective road studs that enhance night-time visibility and road safety. Cat eyes are strategically placed to guide drivers in low-light conditions, ensuring safer driving at night.
              </p>
              <ul className="spec-list">
                <li>High-intensity glass bead reflectors</li>
                <li>Impact and load resistant casing</li>
                <li>Solar and passive-reflective variants</li>
                <li>Rapid installation, low upkeep</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '28px' }}>
                Request a Quote
              </Link>
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
          <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--color-accent)' }}>
            Need Specs?
          </div>
          <h2>Request our full product catalog.</h2>
          <p>Get detailed spec sheets, materials, and pricing for any product line — sent directly to your inbox.</p>
          <div className="cta-glass-actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}>
              Request Catalog <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
