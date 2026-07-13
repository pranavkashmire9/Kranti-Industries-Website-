'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PremiumLightbox, { LightboxImage } from './PremiumLightbox';

interface ProductImageGalleryProps {
  images: string[];
  altPrefix: string;
  description?: string;
}

export default function ProductImageGallery({ images, altPrefix, description }: ProductImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Swipe state for inline gallery
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  // --- Inline Gallery Navigation ---
  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

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
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  // --- Lightbox Integration ---
  const openLightbox = () => {
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  // Convert raw strings to LightboxImage format
  const lightboxImages: LightboxImage[] = images.map((src, idx) => ({
    src,
    alt: `${altPrefix} - Image ${idx + 1}`,
    title: altPrefix,
    description: description,
  }));

  return (
    <>
      <div 
        className="product-gallery-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={openLightbox}
      >
        <div 
          className="product-gallery-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="product-gallery-slide">
              <img 
                src={src} 
                alt={`${altPrefix} - Image ${index + 1}`} 
                loading={index === 0 ? "eager" : "lazy"} 
                decoding="async" 
              />
            </div>
          ))}
        </div>
        
        {/* Hover Overlay */}
        <div className="product-image-overlay" />

        {images.length > 1 && (
          <>
            <button 
              className="gallery-nav-btn prev" 
              onClick={prevSlide}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="gallery-nav-btn next" 
              onClick={nextSlide}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Premium Image Counter */}
            <div className="product-image-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      <PremiumLightbox 
        isOpen={lightboxOpen} 
        onClose={closeLightbox} 
        images={lightboxImages} 
        initialIndex={currentIndex} 
      />
    </>
  );
}
