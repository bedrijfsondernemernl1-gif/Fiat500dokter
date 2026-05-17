import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConcent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConcent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 right-0 z-[100] p-6 md:p-10 outline-none"
        >
          <div className="relative group max-w-[420px] bg-[#0F0A09]/95 backdrop-blur-2xl p-8 md:p-10 rounded-2xl border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
            {/* Premium Decorative Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1 bg-[var(--color-accent)] h-0 group-hover:h-full transition-all duration-700 ease-out"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-[var(--color-accent)]/30 transition-colors duration-500">
                  <ShieldCheck size={24} className="text-[var(--color-accent)]" />
                </div>
                <h4 className="text-2xl font-heading font-bold text-white uppercase tracking-[3px]">
                  Privacy <span className="text-gray-500 font-light">&</span> Care
                </h4>
              </div>
              
              <p className="text-gray-400 font-body text-sm md:text-base font-light leading-relaxed mb-8">
                Net zoals een klassieke motor optimale smering nodig heeft, gebruikt onze website <span className="text-white font-medium italic">essentiële cookies</span> om uw ervaring vlekkeloos te laten verlopen. 
                <br /><br />
                Door akkoord te gaan, stemt u in met ons vakmanschap en ons <Link to="/cookies" onClick={() => setIsVisible(false)} className="text-[var(--color-accent)] hover:text-white transition-colors underline underline-offset-4 decoration-[var(--color-accent)]/30">cookiebeleid</Link>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAccept}
                  className="flex-1 relative overflow-hidden group/btn px-8 py-4 bg-gradient-to-r from-[var(--color-accent)] to-[#f3d289] text-[#1a1210] font-subheading text-[13px] uppercase tracking-[2px] font-bold rounded shadow-[0_10px_30px_rgba(212,164,76,0.2)] hover:shadow-[0_20px_40px_rgba(212,164,76,0.4)] transition-all active:scale-95"
                >
                  <span className="relative z-10">Accepteren</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </button>
                
                <button
                  onClick={() => setIsVisible(false)}
                  className="px-8 py-4 bg-white/5 text-white font-subheading text-[13px] uppercase tracking-[2px] font-bold rounded border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
                >
                  Weigeren
                </button>
              </div>
            </div>

            {/* Subtle brand mark */}
            <div className="mt-8 flex justify-end opacity-20 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
               <img src="https://i.ibb.co/Ldq0gXv/output.png" alt="Fiat 500 Dokter Mark" className="h-4 w-auto" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
