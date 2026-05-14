import React from 'react';
import { MapPin, Phone, Mail, ShoppingCart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-dark-bg)] text-gray-400 pt-20 pb-8" style={{ borderTop: '1px solid rgba(139,26,26,0.15)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dedicated Logo Spot */}
        <div className="mb-20 flex justify-center">
          <div className="bg-[var(--color-cream)] rounded-xl py-8 px-12 md:py-10 md:px-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-b-4 border-[var(--color-primary)] inline-flex justify-center items-center relative overflow-hidden group" style={{ backgroundImage: "linear-gradient(to bottom, var(--color-cream), #eae1d3)" }}>
             <div className="absolute inset-0 opacity-20"></div>
            <img 
              src="https://i.ibb.co/jvytyfBF/Fiat-Logo-Banner-Links.png" 
              alt="Fiat 500 Dokter Logo" 
              className="max-w-[280px] md:max-w-[380px] w-full h-auto opacity-95 group-hover:scale-105 transition-transform duration-700 relative z-10 drop-shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://i.ibb.co/KpBMpnm1/Fiat-Logo-Banner-Links-1.png" 
                alt="Fiat 500 Dokter Logo" 
                className="h-[40px] w-auto opacity-90"
                referrerPolicy="no-referrer"
              />
              <span className="text-white font-logo font-bold uppercase text-xl tracking-wide hidden sm:block">De Fiat 500 Dokter</span>
            </div>
            <p className="mb-6 leading-relaxed text-sm font-body font-light">
              Dé specialist in reparatie, restauratie en onderdelen voor de Fiat 500 en Fiat 126. Uw klassieker in vertrouwde handen sinds 2009.
            </p>
            <p className="text-xs text-gray-500 font-subheading tracking-widest uppercase">KvK: 27135515</p>
          </div>
          
          {/* Col 2 */}
          <div>
            <h4 className="text-white font-heading uppercase tracking-wide text-2xl mb-6">Spreekuren</h4>
            <ul className="space-y-3 text-sm mb-6 font-body">
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Ma, Wo, Vr:</span> <span className="text-white">10:00 - 18:30</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Di, Do, Za, Zo:</span> <span>Gesloten</span></li>
            </ul>
            <p className="text-sm italic text-[var(--color-accent)] font-body">
              Bel altijd even van tevoren voor een afspraak.
            </p>
          </div>
          
          {/* Col 3 */}
          <div>
            <h4 className="text-white font-heading uppercase tracking-wide text-2xl mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-body">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                <span>Spaceshuttle 14H<br/>3824 ML Amersfoort</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[var(--color-primary)] flex-shrink-0" />
                <a href="tel:+31653613489" className="hover:text-white transition-colors">06 53 61 34 89</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--color-primary)] flex-shrink-0" />
                <a href="mailto:fiat500dokter@gmail.com" className="hover:text-white transition-colors">fiat500dokter@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <ShoppingCart size={16} className="text-[var(--color-accent)] flex-shrink-0" />
                <a href="https://www.fiat500doktershop.nl" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:text-white transition-colors font-medium">
                  Bezoek onze Webshop
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p>&copy; 2009 - {new Date().getFullYear()} Fiat 500 Dokter. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
            <img src="https://i.ibb.co/LDvMTHpg/Fiat-Pech-Rook-png.png" alt="Fiat Pech" className="h-6 opacity-30 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </footer>
  );
};
