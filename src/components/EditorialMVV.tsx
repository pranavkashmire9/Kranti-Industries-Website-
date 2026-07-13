'use client';

import React, { useEffect, useRef } from 'react';
import { CheckCircle2, Target, Lightbulb, ShieldCheck } from 'lucide-react';

export default function EditorialMVV() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple Intersection Observer to trigger reveal animation if needed.
    // The classes 'reveal' in globals.css handle the actual transition.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.2 });

    const revealElements = containerRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mvv-editorial-section" ref={containerRef}>
      
      {/* Block 1 — Our Mission */}
      <div className="mvv-block reveal">
        <div className="mvv-image-comp">
          <img 
            src="https://images.unsplash.com/photo-1541888086225-ee5938c94622?w=800&q=80" 
            alt="Highway construction" 
            className="mvv-img-main"
          />
          <img 
            src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500&q=80" 
            alt="Safety equipment" 
            className="mvv-img-float"
          />
        </div>
        <div className="mvv-content">
          <div className="mvv-header-wrap">
            <div className="mvv-header-icon icon-mission">
              <Target size={28} />
            </div>
            <h3>Our Mission</h3>
          </div>
          <p className="lead">
            At Kranti Industries, our aim is to be a leader in innovation and excellence in road safety and hygiene solutions.
          </p>
          <ul className="mvv-list">
            <li className="mvv-list-item">
              <div className="mvv-icon-wrap">
                <CheckCircle2 size={16} />
              </div>
              <div className="mvv-list-text">
                Enhance public safety through advanced infrastructure solutions.
              </div>
            </li>
            <li className="mvv-list-item">
              <div className="mvv-icon-wrap">
                <CheckCircle2 size={16} />
              </div>
              <div className="mvv-list-text">
                Deliver sustainable and highly durable products.
              </div>
            </li>
            <li className="mvv-list-item">
              <div className="mvv-icon-wrap">
                <CheckCircle2 size={16} />
              </div>
              <div className="mvv-list-text">
                Partner with communities to build reliable road networks.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Block 2 — Our Vision (Reverse) */}
      <div className="mvv-block reverse reveal">
        <div className="mvv-image-comp">
          <img 
            src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=800&q=80" 
            alt="City infrastructure planning" 
            className="mvv-img-main"
          />
          <img 
            src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=500&q=80" 
            alt="Road studs" 
            className="mvv-img-float"
          />
        </div>
        <div className="mvv-content">
          <div className="mvv-header-wrap">
            <div className="mvv-header-icon icon-vision">
              <Lightbulb size={28} />
            </div>
            <h3>Our Vision</h3>
          </div>
          <p className="lead">
            To set the global benchmark for safety solutions by continuously evolving and anticipating the needs of modern cities.
          </p>
          <ul className="mvv-list">
            <li className="mvv-list-item">
              <div className="mvv-icon-wrap">
                <CheckCircle2 size={16} />
              </div>
              <div className="mvv-list-text">
                Pioneering the future of smart, automated road safety.
              </div>
            </li>
            <li className="mvv-list-item">
              <div className="mvv-icon-wrap">
                <CheckCircle2 size={16} />
              </div>
              <div className="mvv-list-text">
                Expanding our footprint globally while staying locally rooted.
              </div>
            </li>
            <li className="mvv-list-item">
              <div className="mvv-icon-wrap">
                <CheckCircle2 size={16} />
              </div>
              <div className="mvv-list-text">
                Ensuring every journey is safe and every facility is hygienic.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Block 3 — Our Values */}
      <div className="mvv-block reveal">
        <div className="mvv-image-comp">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80" 
            alt="Engineering team" 
            className="mvv-img-main"
          />
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80" 
            alt="Precision manufacturing" 
            className="mvv-img-float"
          />
        </div>
        <div className="mvv-content">
          <div className="mvv-header-wrap">
            <div className="mvv-header-icon icon-values">
              <ShieldCheck size={28} />
            </div>
            <h3>Our Values</h3>
          </div>
          <p className="lead">
            We are driven by uncompromising quality, deep integrity, and a profound responsibility to the communities we serve.
          </p>
          <ul className="mvv-list">
            <li className="mvv-list-item">
              <div className="mvv-icon-wrap">
                <CheckCircle2 size={16} />
              </div>
              <div className="mvv-list-text">
                Integrity in every partnership and project.
              </div>
            </li>
            <li className="mvv-list-item">
              <div className="mvv-icon-wrap">
                <CheckCircle2 size={16} />
              </div>
              <div className="mvv-list-text">
                Innovation that directly improves human lives.
              </div>
            </li>
            <li className="mvv-list-item">
              <div className="mvv-icon-wrap">
                <CheckCircle2 size={16} />
              </div>
              <div className="mvv-list-text">
                Commitment to environmental sustainability.
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
