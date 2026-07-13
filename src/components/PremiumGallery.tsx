'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { LayoutGrid, Shield, Droplets, Factory, Wrench } from 'lucide-react';
import PremiumLightbox from './PremiumLightbox';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
  category: string;
  span?: 'col-2' | 'row-2' | 'col-2 row-2' | '';
}

const CATEGORIES = [
  { id: 'all', label: 'All', icon: <LayoutGrid size={16} strokeWidth={2.5} /> },
  { id: 'road-safety', label: 'Road Safety', icon: <Shield size={16} strokeWidth={2.5} /> },
  { id: 'public-hygiene', label: 'Public Hygiene', icon: <Droplets size={16} strokeWidth={2.5} /> },
  { id: 'manufacturing', label: 'Manufacturing', icon: <Factory size={16} strokeWidth={2.5} /> },
  { id: 'installations', label: 'Installations', icon: <Wrench size={16} strokeWidth={2.5} /> }
];

interface PremiumGalleryProps {
  initialImages: GalleryImage[];
}

export default function PremiumGallery({ initialImages }: PremiumGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(initialImages);
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const gridRef = useRef<HTMLDivElement>(null);

  // Filter effect
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredImages(initialImages);
    } else {
      setFilteredImages(initialImages.filter(img => img.category === activeCategory));
    }
  }, [activeCategory, initialImages]);

  // Intersection Observer for scroll stagger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = gridRef.current?.querySelectorAll('.premium-gallery-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredImages]);

  // Lightbox Handlers
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

  // Keyboard Navigation for Lightbox
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

  // Swipe handlers for mobile lightbox
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextLightboxImage();
    if (distance < -minSwipeDistance) prevLightboxImage();
  };

  return (
    <>
      {/* Category Filter Bar */}
      <div className="premium-gallery-filters reveal">
        {CATEGORIES.map(cat => (
          <button 
            key={cat.id} 
            className={`premium-filter-chip ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            {cat.icon}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Dense Grid */}
      <div className="premium-gallery-grid reveal" ref={gridRef}>
        {filteredImages.map((img, idx) => (
          <div 
            key={`${activeCategory}-${img.id}`} 
            className={`premium-gallery-card ${img.span ? img.span : ''}`}
            onClick={(e) => openLightbox(e, idx)}
            style={{ transitionDelay: `${(idx % 10) * 0.05}s` }}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="premium-gallery-img"
              loading="lazy"
              decoding="async"
            />
            <div className="premium-card-overlay">
              <div className="premium-card-content">
                <span className="premium-card-cat">{CATEGORIES.find(c => c.id === img.category)?.label || img.category}</span>
                <h3 className="premium-card-title">{img.title}</h3>
                {img.description && <p className="premium-card-desc">{img.description}</p>}
              </div>
            </div>
          </div>
        ))}
        {filteredImages.length === 0 && (
          <div style={{ padding: '40px', gridColumn: '1 / -1', textAlign: 'center', color: 'var(--color-ink-soft)' }}>
            No images found for this category.
          </div>
        )}
      </div>

      <PremiumLightbox 
        isOpen={lightboxOpen} 
        onClose={closeLightbox} 
        images={filteredImages} 
        initialIndex={activeImageIndex} 
      />
    </>
  );
}
