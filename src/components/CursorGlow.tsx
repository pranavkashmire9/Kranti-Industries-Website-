'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReduced.matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    let raf: number;
    
    // Check if device has a fine pointer (desktop)
    const isDesktop = window.matchMedia('(pointer: fine)').matches;

    if (isDesktop) {
      let targetX = window.innerWidth / 2;
      let targetY = window.innerHeight / 2;
      let currentX = targetX;
      let currentY = targetY;

      const onMove = (e: MouseEvent) => {
        targetX = e.clientX;
        targetY = e.clientY;
      };

      const animate = () => {
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;
        glow.style.left = `${currentX}px`;
        glow.style.top = `${currentY}px`;
        raf = requestAnimationFrame(animate);
      };

      window.addEventListener('mousemove', onMove, { passive: true });
      raf = requestAnimationFrame(animate);

      return () => {
        window.removeEventListener('mousemove', onMove);
        cancelAnimationFrame(raf);
      };
    } else {
      // Mobile logic: Automatically wander around the screen
      let time = 0;
      
      const animateMobile = () => {
        time += 0.015; // Animation speed
        const w = window.innerWidth;
        const h = window.innerHeight;
        
        // Gentle lissajous curve to simulate floating
        const x = w / 2 + (w / 3.5) * Math.sin(time);
        const y = h / 2 + (h / 4) * Math.cos(time * 0.8);
        
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
        raf = requestAnimationFrame(animateMobile);
      };
      
      raf = requestAnimationFrame(animateMobile);
      
      return () => {
        cancelAnimationFrame(raf);
      };
    }
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
