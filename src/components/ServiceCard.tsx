'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import TiltCard from './TiltCard';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  index: number;
}

export default function ServiceCard({ title, description, icon, href, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <TiltCard intensity={6}>
        <Link href={href} className="group block">
          <div className="relative overflow-hidden rounded-2xl bg-white border border-[var(--border-light)] p-8 h-full transition-shadow duration-400 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {/* Accent gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/[0.08] flex items-center justify-center mb-6 group-hover:bg-[var(--accent)]/[0.14] transition-colors duration-300">
                <div className="text-[var(--accent)]">{icon}</div>
              </div>

              {/* Title */}
              <h3 className="h3 text-[var(--ink)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                {title}
              </h3>

              {/* Description */}
              <p className="text-[var(--ink-soft)] text-[15px] leading-relaxed mb-6 line-clamp-3">
                {description}
              </p>

              {/* Arrow link */}
              <div className="flex items-center gap-2 text-[var(--accent)] text-sm font-bold tracking-wide">
                <span>Learn more</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  );
}
