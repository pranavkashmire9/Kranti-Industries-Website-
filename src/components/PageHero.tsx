'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-28 bg-[var(--ink)] overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob blob-accent w-[400px] h-[400px] absolute top-1/3 -right-32" />
        <div className="blob blob-deep w-[300px] h-[300px] absolute bottom-0 -left-20" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="container-inner relative z-10">
        {breadcrumb && (
          <motion.div
            className="eyebrow-hazard mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">{breadcrumb}</span>
          </motion.div>
        )}

        <motion.h1
          className="h1 text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-white/40 text-lg md:text-xl max-w-2xl font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bottom hazard stripe divider */}
      <div className="absolute bottom-0 left-0 right-0 hazard-stripe-thin" />
    </section>
  );
}
