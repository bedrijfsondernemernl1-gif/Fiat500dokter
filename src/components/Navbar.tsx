import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Diensten', path: '/diensten' },
    { name: 'Projecten', path: '/projecten' },
    { name: 'Over Ons', path: '/over-ons' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'} ${scrolled && !isOpen ? 'bg-[var(--color-dark-bg)] shadow-md border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-12">
            <Link to="/" className="flex-shrink-0 flex items-center gap-4">
              <img 
                src="https://i.ibb.co/KpBMpnm1/Fiat-Logo-Banner-Links-1.png" 
                alt="Fiat 500 Dokter Logo" 
                className="h-[50px] w-auto object-contain"
                referrerPolicy="no-referrer"
                fetchPriority="high"
              />
              <span className="text-white font-logo font-bold uppercase text-3xl tracking-wide hidden lg:block">De Fiat 500 Dokter</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-8 whitespace-nowrap">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    className={`font-subheading text-[13px] uppercase tracking-[2px] font-medium transition-colors ${isActive(link.path) ? 'text-[var(--color-accent)] font-bold border-b-2 border-[var(--color-accent)] pb-1' : 'text-white/75 hover:text-white'}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pl-10 border-l border-white/15">
                <a 
                  href="https://www.fiat500doktershop.nl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-subheading text-[13px] uppercase tracking-[2px] font-medium text-white/90 hover:text-white border border-white/20 hover:border-white/40 px-6 py-3 rounded transition-all"
                >
                  Webshop
                </a>
                <Link 
                  to="/contact" 
                  className="font-subheading text-[12px] uppercase tracking-[2px] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-dark-bg)] px-6 py-3 rounded font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
                >
                  Afspraak Maken
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white hover:text-[var(--color-accent)] z-50 relative"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className={`font-subheading font-medium text-2xl uppercase tracking-[2px] transition-colors ${isActive(link.path) ? 'text-[var(--color-accent)] font-bold' : 'text-white hover:text-[var(--color-accent)]'}`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="w-full h-px bg-white/10 my-4"></div>
              
              <a 
                href="https://www.fiat500doktershop.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center font-subheading font-medium text-xl uppercase tracking-[2px] text-white border border-white/20 px-6 py-4 rounded transition-all hover:bg-white/5"
              >
                Webshop
              </a>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="w-full text-center font-subheading font-bold text-xl uppercase tracking-[2px] bg-[var(--color-accent)] text-[var(--color-dark-bg)] px-6 py-4 rounded transition-all"
              >
                Afspraak Maken
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
