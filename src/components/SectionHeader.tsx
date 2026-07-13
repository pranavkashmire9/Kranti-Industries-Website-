'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  backdropText: string;
  eyebrowText: string;
  titleText: string;
  subtitleText?: string;
  dark?: boolean;
  align?: 'center' | 'left';
}

export default function SectionHeader({
  backdropText,
  eyebrowText,
  titleText,
  subtitleText,
  dark = false,
  align = 'center',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`relative flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} mb-16 md:mb-20 overflow-hidden py-4`}>
      {/* Giant Backdrop Text */}
      <div
        className={`absolute font-black select-none pointer-events-none tracking-widest leading-none ${
          isCenter ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : 'left-0 top-1/2 -translate-y-1/2'
        } ${dark ? 'text-white/[0.02]' : 'text-black/[0.03]'} text-[80px] sm:text-[120px] md:text-[140px] uppercase`}
        style={{ zIndex: 0 }}
      >
        {backdropText}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-inherit">
        {/* Eyebrow with Hazard Badge */}
        <div className="flex items-center gap-2.5 mb-4">
          <div
            className="w-7 h-3 rounded-[2px] shrink-0"
            style={{ background: 'var(--hazard-stripe)' }}
          />
          <span
            className={`font-semibold text-[11px] tracking-[0.16em] uppercase ${
              dark ? 'text-white/60' : 'text-[var(--accent-deep)]'
            }`}
          >
            {eyebrowText}
          </span>
        </div>

        {/* Title */}
        <h2 className={`h2 ${dark ? 'text-white' : 'text-[var(--ink)]'} mb-4`}>
          {titleText}
        </h2>

        {/* Optional Subtitle */}
        {subtitleText && (
          <p
            className={`text-base md:text-lg max-w-2xl font-normal leading-relaxed ${
              dark ? 'text-white/40' : 'text-[var(--ink-soft)]'
            }`}
          >
            {subtitleText}
          </p>
        )}
      </div>
    </div>
  );
}
