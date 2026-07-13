import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';

export default function ContactPage() {
  return (
    <>
      <header className="page-hero" style={{ minHeight: '34vh' }}>
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')" }}
        />
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--color-accent)' }}>
            Get In Touch
          </div>
          <h1>Contact Us</h1>
          <p>Get a quick response from our team.</p>
        </div>
      </header>

      <section>
        <div className="container contact-grid">
          <div className="reveal">
            <div className="eyebrow">Request a Quote</div>
            <h2>Tell us about your project</h2>
            <form id="quoteForm" style={{ marginTop: '32px' }}>
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required placeholder="Your name" />
              </div>
              <div className="form-field">
                <label htmlFor="company">Company / Organization</label>
                <input type="text" id="company" placeholder="Municipal corporation, contractor, etc." />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" required placeholder="+91" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required placeholder="you@company.com" />
              </div>
              <div className="form-field">
                <label htmlFor="product">Product Interest</label>
                <select id="product">
                  <option>Electronic Toilet</option>
                  <option>Road Sign Board</option>
                  <option>Road Safety Boards</option>
                  <option>Thermo Plastic Painting</option>
                  <option>Crash Barriers</option>
                  <option>Cat Eyes</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="Tell us about quantities, timelines, or specs needed" />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message
              </button>
            </form>
          </div>

          <div className="reveal">
            <div className="contact-info-card">
              <h3>Kranti Industries</h3>
              <div className="contact-row">
                <span className="ic">☎</span>
                <div>
                  <a href="tel:+919923818812">+91-9923818812</a>
                  <br />
                  <a href="tel:+919158988812">+91-9158988812</a>
                  <br />
                  <a href="tel:+919175675514">+91-9175675514</a>
                </div>
              </div>
              <div className="contact-row">
                <span className="ic">✉</span>
                <a href="mailto:info@krantiindustries.co">info@krantiindustries.co</a>
              </div>
              <div className="contact-row">
                <span className="ic">📍</span>
                <span>F-44, MIDC, Satpur, Behind Sunil Transport, Nashik, Maharashtra 422007, India</span>
              </div>

              <div className="social-row">
                <a href="#" aria-label="Facebook"><FaFacebookF size={18} /></a>
                <a href="#" aria-label="Twitter"><FaXTwitter size={18} /></a>
                <a href="#" aria-label="YouTube"><FaYoutube size={18} /></a>
                <a href="#" aria-label="Instagram"><FaInstagram size={18} /></a>
              </div>

              <div className="map-embed">
                <iframe
                  src="https://maps.google.com/maps?q=MIDC%20Satpur%20Nashik&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Kranti Industries Google Maps Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
