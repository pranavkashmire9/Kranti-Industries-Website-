'use client';

import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const certifications = [
  {
    id: 1,
    name: 'OHSAS Certificate',
    org: 'Occupational Health & Safety',
    description: 'Our manufacturing facilities maintain the highest standards of occupational health and safety, ensuring a secure and supportive environment for all our workers.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'BS EN Certificate',
    org: 'European Standard Compliance',
    description: 'Certified to meet rigorous European standards for structural integrity, durability, and safety across our entire line of road safety products.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'ISO 9001:2015',
    org: 'Quality Management System',
    description: 'An internationally recognized quality management system certification that ensures our products consistently meet customer and regulatory requirements.',
    image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'ISO 14001:2015',
    org: 'Environmental Management',
    description: 'Demonstrating our commitment to sustainable operations and minimizing our environmental footprint through responsible manufacturing practices.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800'
  }
];

export default function CertificationsShowcase() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  const openModal = (cert: typeof certifications[0]) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <div className="cert-grid-2 mobile-swipe-row">
        {certifications.map((cert) => (
          <div 
            key={cert.id} 
            className="premium-cert-card reveal"
            onClick={() => openModal(cert)}
          >
            <div 
              className="premium-cert-bg"
              style={{ backgroundImage: `url('${cert.image}')` }}
            />
            <div className="premium-cert-overlay">
              <div className="premium-cert-content">
                <h4>{cert.name}</h4>
                <p>{cert.org}</p>
                <div className="premium-cert-action">
                  View Certificate <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      <div 
        className={`cert-modal-backdrop ${selectedCert ? 'active' : ''}`}
        onClick={closeModal}
      >
        <div 
          className="cert-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          {selectedCert && (
            <>
              <div className="cert-modal-image">
                <img src={selectedCert.image} alt={selectedCert.name} />
              </div>
              <div className="cert-modal-details">
                <button className="cert-modal-close" onClick={closeModal} aria-label="Close modal">
                  <X size={20} />
                </button>
                <div className="org">{selectedCert.org}</div>
                <h3>{selectedCert.name}</h3>
                <p>{selectedCert.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
