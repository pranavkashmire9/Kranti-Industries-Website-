'use client';

import React, { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface LightboxImage {
  src: string;
  alt: string;
  title: string;
  description?: string;
}

interface PremiumLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImage[];
  initialIndex?: number;
}

export default function PremiumLightbox({
  isOpen,
  onClose,
  images,
  initialIndex = 0
}: PremiumLightboxProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  // Sync internal state with external prop if it changes when opening
  useEffect(() => {
    if (isOpen) {
      setActiveIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Swipe handlers for mobile lightbox
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const nextLightboxImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevLightboxImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Keyboard Navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, nextLightboxImage, prevLightboxImage]);

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

  if (!isOpen) return null;

  const lightboxContent = (
    <div 
      className={`premium-lightbox ${isOpen ? 'active' : ''}`} 
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {images[activeIndex] && (
        <div className="lightbox-content" onClick={e => e.stopPropagation()}>
          <span className="lightbox-counter-badge">
            {activeIndex + 1} / {images.length}
          </span>
          
          <button className="lightbox-close-btn" onClick={onClose} aria-label="Close">
            <X size={28} />
          </button>
          
          {images.length > 1 && (
            <>
              <button className="lightbox-nav-btn prev" onClick={prevLightboxImage} aria-label="Previous">
                <ChevronLeft size={36} />
              </button>
              <button className="lightbox-nav-btn next" onClick={nextLightboxImage} aria-label="Next">
                <ChevronRight size={36} />
              </button>
            </>
          )}
          
          <div className="lightbox-img-wrapper">
            <img 
              src={images[activeIndex].src.replace('w=600', 'w=1600').replace('w=800', 'w=1600').replace('w=900', 'w=1600')} 
              alt={images[activeIndex].alt} 
              className="lightbox-main-img"
            />
            <div className="lightbox-caption-box">
              <h3>{images[activeIndex].title}</h3>
              {images[activeIndex].description && (
                <p>{images[activeIndex].description}</p>
              )}
            </div>
          </div>
          
        </div>
      )}
    </div>
  );

  // Use createPortal if document is defined (to avoid SSR issues)
  if (typeof document !== 'undefined') {
    return createPortal(lightboxContent, document.body);
  }

  return lightboxContent;
}
