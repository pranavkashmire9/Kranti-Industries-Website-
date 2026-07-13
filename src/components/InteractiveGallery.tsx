'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

type Category = 'all' | 'signage' | 'barriers' | 'hygiene' | 'marking';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Category;
  size?: 'wide' | 'tall' | 'wide tall' | '';
}

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'signage', label: 'Signage' },
  { id: 'barriers', label: 'Barriers' },
  { id: 'hygiene', label: 'Hygiene' },
  { id: 'marking', label: 'Road Marking' },
];

interface InteractiveGalleryProps {
  initialImages: GalleryImage[];
}

export default function InteractiveGallery({ initialImages }: InteractiveGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(initialImages);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Smooth filter effect
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredImages(initialImages);
    } else {
      setFilteredImages(initialImages.filter(img => img.category === activeCategory));
    }
  }, [activeCategory, initialImages]);

  // Lightbox handlers
  const openLightbox = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setActiveImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  const nextLightboxImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveImageIndex(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  }, [filteredImages.length]);

  const prevLightboxImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveImageIndex(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  }, [filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextLightboxImage, prevLightboxImage]);

  return (
    <>
      {/* Category Filters */}
      <div className="gallery-tag reveal">
        {CATEGORIES.map(cat => (
          <button 
            key={cat.id} 
            className={activeCategory === cat.id ? 'active' : ''}
            onClick={() => setActiveCategory(cat.id as Category)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="gallery-grid reveal">
        {filteredImages.map((img, idx) => (
          <a 
            href="#" 
            key={`${activeCategory}-${img.id}`} // Force re-render for animation on filter
            className={`gallery-item ${img.size || ''}`}
            onClick={(e) => openLightbox(e, idx)}
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-item-overlay">
              <div className="expand-icon">
                <Maximize2 size={24} />
              </div>
            </div>
          </a>
        ))}
        {filteredImages.length === 0 && (
          <div style={{ padding: '40px', gridColumn: '1 / -1', textAlign: 'center', color: 'var(--color-text-mut)' }}>
            No images found in this category.
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox */}
      <div className={`gallery-lightbox ${lightboxOpen ? 'active' : ''}`} onClick={closeLightbox}>
        {lightboxOpen && filteredImages[activeImageIndex] && (
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <X size={28} />
            </button>
            
            {filteredImages.length > 1 && (
              <>
                <button className="lightbox-nav prev" onClick={prevLightboxImage} aria-label="Previous">
                  <ChevronLeft size={36} />
                </button>
                <button className="lightbox-nav next" onClick={nextLightboxImage} aria-label="Next">
                  <ChevronRight size={36} />
                </button>
              </>
            )}
            
            <div className="lightbox-image-container">
              <img 
                src={filteredImages[activeImageIndex].src.replace('w=600', 'w=1600').replace('w=900', 'w=1600')} 
                alt={filteredImages[activeImageIndex].alt} 
                className="lightbox-image"
              />
            </div>
            
            <div className="lightbox-caption">
              {filteredImages[activeImageIndex].alt}
              <span className="lightbox-counter">
                {activeImageIndex + 1} / {filteredImages.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
