import Link from 'next/link';

export default function ClientsPage() {
  return (
    <>
      <header className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80')" }}
        />
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--color-accent)' }}>
            Trusted By
          </div>
          <h1>
            <span className="split-line">
              {"Municipal bodies & contractors across Maharashtra.".split(' ').map((word, i) => (
                <span key={i} className="split-word">{word}&nbsp;</span>
              ))}
            </span>
          </h1>
          <p>Placeholder client list below — replace with real logos and case studies before launch.</p>
        </div>
      </header>

      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="big-stamp" style={{ top: '40px', left: '50%', transform: 'translateX(-50%)' }}>
          PARTNERS
        </div>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Our Clients</div>
            <h2>Organizations we&apos;ve worked with</h2>
          </div>
          <div className="client-grid">
            <div className="client-logo reveal">Client Logo 1</div>
            <div className="client-logo reveal">Client Logo 2</div>
            <div className="client-logo reveal">Client Logo 3</div>
            <div className="client-logo reveal">Client Logo 4</div>
            <div className="client-logo reveal">Client Logo 5</div>
            <div className="client-logo reveal">Client Logo 6</div>
            <div className="client-logo reveal">Client Logo 7</div>
            <div className="client-logo reveal">Client Logo 8</div>
          </div>
        </div>
      </section>

      <div className="stripe-divider" />

      <section className="section-alt" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="big-stamp" style={{ top: '40px', left: '50%', transform: 'translateX(-50%)' }}>
          PROJECTS
        </div>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Global Reach</div>
            <h2>Case Studies</h2>
          </div>
          <div className="grid-3">
            <div className="card reveal">
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1600661653561-629509216228?w=700&q=80"
                  alt="Highway barrier project"
                />
              </div>
              <div className="card-body">
                <div className="globe-badge">🌐 National Project</div>
                <h3>NH-3 Barrier Rollout</h3>
                <p>250km of crash barrier installation along a major highway stretch, completed on schedule.</p>
              </div>
            </div>
            <div className="card reveal">
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=700&q=80"
                  alt="Signage project"
                />
              </div>
              <div className="card-body">
                <h3>Municipal Signage Overhaul</h3>
                <p>Full road signage replacement across a district municipal ward, improving safety compliance.</p>
              </div>
            </div>
            <div className="card reveal">
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=700&q=80"
                  alt="Smart toilet project"
                />
              </div>
              <div className="card-body">
                <div className="globe-badge">🌐 International Interest</div>
                <h3>Smart Toilet Pilot</h3>
                <p>
                  Deployment of electronic self-cleaning toilets at public transit hubs, with inquiries from overseas municipal bodies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
