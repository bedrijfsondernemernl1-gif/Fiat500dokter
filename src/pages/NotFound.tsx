import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0F0A09] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[120px] md:text-[180px] font-heading font-extrabold leading-none text-white/5 select-none absolute -top-24 md:-top-32 left-1/2 -translate-x-1/2 w-full">
            404
          </h1>
          
          <div className="relative pt-8 md:pt-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-6">
              Verkeerde <span className="text-[var(--color-accent)]">Afslag</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl font-body font-light mb-12 leading-relaxed">
              Oeps! Het lijkt erop dat je een foute route hebt genomen. De pagina die je zoekt is waarschijnlijk gerestaureerd, verplaatst of bestaat simpelweg niet.
            </p>

            <div className="flex items-center justify-center gap-6">
              <Link 
                to="/" 
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[var(--color-accent)] to-[#f3d289] text-[#1a1210] font-subheading text-[16px] uppercase tracking-[2px] font-bold rounded transition-all shadow-[0_10px_30px_rgba(212,164,76,0.3)] hover:shadow-[0_15px_40px_rgba(212,164,76,0.5)] hover:-translate-y-1 text-center inline-flex items-center justify-center gap-3"
              >
                <Home size={20} />
                Terug naar Home
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Animated quote or subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-gray-500 font-body italic text-sm"
        >
          "Zelfs de beste Fiat 500 heeft wel eens een duwtje in de juiste richting nodig."
        </motion.p>
      </div>
    </div>
  );
};
