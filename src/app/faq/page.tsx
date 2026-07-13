export default function FAQPage() {
  return (
    <>
      <header className="page-hero" style={{ minHeight: '30vh' }}>
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80')" }}
        />
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--color-accent)' }}>
            Have Questions?
          </div>
          <h1>
            <span className="split-line">
              {"Frequently Asked Questions".split(' ').map((word, i) => (
                <span key={i} className="split-word">{word}&nbsp;</span>
              ))}
            </span>
          </h1>
        </div>
      </header>

      <section style={{ paddingTop: '48px' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          {/* FAQ 1 */}
          <div className="faq-item reveal">
            <div className="faq-q">
              <span>Can products be customized to our project specifications?</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>
                Yes. Most of our road safety and signage products can be manufactured to custom dimensions, materials, and regulatory specifications required by your municipal or government tender.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="faq-item reveal">
            <div className="faq-q">
              <span>What are typical delivery timelines?</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>
                Delivery timelines vary by product and order volume. Standard signage orders typically ship faster than bulk crash barrier or electronic toilet installations — contact us with your quantities for an accurate estimate.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="faq-item reveal">
            <div className="faq-q">
              <span>Do you provide installation support?</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>
                Yes, our team can support on-site installation for crash barriers, signage, and road marking projects, and provide setup guidance for electronic toilet units.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="faq-item reveal">
            <div className="faq-q">
              <span>What warranty do your products carry?</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>
                Warranty terms vary by product line. Reach out to our team with the specific product for detailed warranty and service terms.
              </p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="faq-item reveal">
            <div className="faq-q">
              <span>Can you fulfill large government or tender orders?</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>
                Yes — we regularly supply municipal corporations and government contractors, and can scale manufacturing for large tender-based orders.
              </p>
            </div>
          </div>

          {/* FAQ 6 */}
          <div className="faq-item reveal">
            <div className="faq-q">
              <span>What after-sales support is available?</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>
                We offer ongoing after-sales support including maintenance guidance, spare parts, and servicing for electronic toilet units and other equipment.
              </p>
            </div>
          </div>

          {/* FAQ 7 */}
          <div className="faq-item reveal">
            <div className="faq-q">
              <span>Are your products certified?</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>
                Yes, Kranti Industries holds OHSAS, BS EN, and ISO certifications. See our About page for full certification details.
              </p>
            </div>
          </div>

          {/* FAQ 8 */}
          <div className="faq-item reveal">
            <div className="faq-q">
              <span>How do I request a quote?</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>
                Use the quote form on our Contact page, or call/email our team directly with your product interest and quantities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section id="terms" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="eyebrow" style={{ color: 'var(--color-accent)' }}>
            Legal Information
          </div>
          <h2 style={{ marginBottom: '40px' }}>Terms &amp; Conditions</h2>
          
          <p style={{ marginBottom: '30px', color: 'var(--color-ink-soft)' }}>
            This is placeholder terms &amp; conditions content for Kranti Industries. Replace with legally reviewed terms before launch, covering the following areas at minimum:
          </p>

          <div className="faq-item reveal">
            <div className="faq-q">
              <span>Quote Requests &amp; Order Acceptance</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>Terms governing quote requests and order acceptance.</p>
            </div>
          </div>

          <div className="faq-item reveal">
            <div className="faq-q">
              <span>Payment Terms, Cancellations &amp; Refunds</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>Payment terms, cancellations, and refund policy for orders.</p>
            </div>
          </div>

          <div className="faq-item reveal">
            <div className="faq-q">
              <span>Warranty &amp; Liability Limitations</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>Product warranty terms and limitations of liability.</p>
            </div>
          </div>

          <div className="faq-item reveal">
            <div className="faq-q">
              <span>Intellectual Property Rights</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>Intellectual property rights over site content, logos, and product designs.</p>
            </div>
          </div>

          <div className="faq-item reveal">
            <div className="faq-q">
              <span>Governing Law &amp; Jurisdiction</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>Governing law and jurisdiction (Nashik, Maharashtra, India).</p>
            </div>
          </div>

          <div className="faq-item reveal">
            <div className="faq-q">
              <span>Contact for Queries</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>Contact details for terms-related queries: info@krantiindustries.co</p>
            </div>
          </div>
          
          <p style={{ marginTop: '30px', fontSize: '0.85rem', color: 'var(--color-ink-faint)' }}>
            Last updated: 2026.
          </p>
        </div>
      </section>
    </>
  );
}
