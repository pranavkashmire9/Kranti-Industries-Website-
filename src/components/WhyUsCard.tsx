'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

interface WhyUsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function WhyUsCard({ icon, title, description, index }: WhyUsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <TiltCard intensity={5}>
        <div className="relative p-8 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:border-[var(--accent)]/20 hover:bg-white/[0.07] transition-all duration-500 h-full">
          {/* Glow effect */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--accent)]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/[0.1] flex items-center justify-center mb-5 text-[var(--accent)] group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>

          {/* Title */}
          <h3 className="h3 text-lg text-white mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/50 text-[14px] leading-relaxed">
            {description}
          </p>
        </div>
      </TiltCard>
    </motion.div>
  );
}
