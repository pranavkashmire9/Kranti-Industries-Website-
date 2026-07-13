'use client';

import { Phone, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full bg-[var(--ink)] text-[var(--ink-soft)] text-[12px] py-2 z-50 hidden md:block">
      <div className="container-inner flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:+919923818812" className="flex items-center gap-2 hover:text-white transition-colors duration-300">
            <Phone size={12} />
            <span>+91-9923818812</span>
          </a>
          <a href="tel:+919158988812" className="flex items-center gap-2 hover:text-white transition-colors duration-300">
            <Phone size={12} />
            <span>+91-9158988812</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={12} />
          <span>F-44, MIDC, Satpur, Nashik, Maharashtra 422007</span>
        </div>
      </div>
    </div>
  );
}
