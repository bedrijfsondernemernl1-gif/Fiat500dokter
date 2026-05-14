import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

let globalObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, () => void>();

function getGlobalObserver() {
  if (typeof window === 'undefined') return null;
  if (!globalObserver) {
    globalObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const callback = observerCallbacks.get(entry.target);
          if (callback) {
            callback();
            globalObserver?.unobserve(entry.target);
            observerCallbacks.delete(entry.target);
          }
        }
      });
    }, { rootMargin: '0px 0px -50px 0px' });
  }
  return globalObserver;
}

export const FadeIn = ({ children, className = "", delay }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getGlobalObserver();
    if (!observer) {
      setIsVisible(true);
      return;
    }

    observerCallbacks.set(el, () => setIsVisible(true));
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      observerCallbacks.delete(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-[opacity,transform] duration-700 ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      {children}
    </div>
  );
};

export const SectionHeader = ({ title }: { title: string }) => (
  <FadeIn>
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white">{title}</h2>
    </div>
  </FadeIn>
);

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-[var(--color-accent)] text-[var(--color-dark-bg)] rounded-sm shadow-lg shadow-[var(--color-accent)]/20 hover:shadow-[var(--color-accent)]/50 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center pointer-events-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Scroll naar boven"
    >
      <ArrowUp size={24} strokeWidth={2.5} />
    </button>
  );
};
