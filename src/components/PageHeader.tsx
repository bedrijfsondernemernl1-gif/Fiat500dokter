import React from 'react';
import { FadeIn } from './Shared';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export const PageHeader = ({ title, subtitle, breadcrumb }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--color-charcoal)]">
      <div className="absolute inset-0 bg-texture opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-dark-bg)] to-transparent z-10 pointer-events-none"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-2 mb-8 font-subheading text-[13px] uppercase tracking-[2px] font-medium text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[var(--color-accent)]">{breadcrumb}</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h1 className="mb-6 font-heading text-5xl md:text-7xl uppercase font-bold text-white" style={{ textShadow: '0 4px 40px rgba(0,0,0,0.6)', letterSpacing: '0.03em' }}>
            {title}
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="max-w-[600px] mx-auto font-body text-xl" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
            {subtitle}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
