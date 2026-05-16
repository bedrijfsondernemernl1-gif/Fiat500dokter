import React from 'react';
import { FadeIn } from '../components/Shared';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { ContactForm } from '../components/ContactForm';

export const Contact = () => {
  usePageMeta({
    title: 'Contact | Fiat 500 Dokter & Oldtimer Onderdelen',
    description: 'Neem contact op voor oldtimer restauratie, onderhoud aan uw Fiat 500 of exclusieve Fiat 500 velgenset & velgen. Wij helpen u graag op weg!',
    keywords: 'fiat 500 onderdelen, fiat 500 velgen, fiat 500 accessoires, fiat 500 oldtimer onderdelen bestellen, contact opnemen voor fiat 500 onderdelen',
    canonicalPath: '/contact',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://fiat500dokter.nl"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://fiat500dokter.nl/contact"
        }]
      }
    ]
  });

  return (
    <div className="bg-[var(--color-dark-bg)] min-h-screen text-white">
      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Huge Typography & Info */}
          <div className="lg:col-span-5 flex flex-col">
            <FadeIn>
              <p className="text-[var(--color-accent)] font-subheading tracking-[0.3em] uppercase text-sm mb-6">Neem Contact Op</p>
              <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase tracking-tight mb-12 leading-none">
                Let's<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Talk</span>
              </h1>
              <p className="text-gray-400 font-body text-lg font-light leading-relaxed mb-16 max-w-md">
                Heeft uw Fiat 500 een dokter nodig? Of bent u op zoek naar dat ene zeldzame onderdeel? Wij horen graag van u.
              </p>

              <div className="space-y-10">
                <a href="https://maps.google.com/?q=Spaceshuttle+14H,+3824+ML+Amersfoort" target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-colors shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-subheading uppercase tracking-widest text-sm text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">De Kliniek</h4>
                    <p className="text-gray-400 font-body font-light group-hover:text-gray-300 transition-colors">Spaceshuttle 14H<br />3824 ML Amersfoort</p>
                  </div>
                </a>

                <a href="tel:+31653613489" className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-colors shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-subheading uppercase tracking-widest text-sm text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">Telefoon</h4>
                    <p className="text-gray-400 font-body font-light group-hover:text-gray-300 transition-colors">06 53 61 34 89</p>
                  </div>
                </a>

                <a href="mailto:info@fiat500dokter.nl" className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-colors shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-subheading uppercase tracking-widest text-sm text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">E-mail</h4>
                    <p className="text-gray-400 font-body font-light group-hover:text-gray-300 transition-colors">info@fiat500dokter.nl</p>
                  </div>
                </a>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-colors shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-subheading uppercase tracking-widest text-sm text-white mb-2">Spreekuur</h4>
                    <p className="text-gray-400 font-body font-light">Maandag t/m Vrijdag: 09:00 - 17:00<br />Zaterdag: Op afspraak</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 lg:pl-12">
            <FadeIn>
              <div className="bg-[var(--color-charcoal)] p-8 md:p-12 rounded-sm border border-white/5 shadow-xl transition-shadow duration-300 relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-bl-full"></div>
                
                <h3 className="font-heading text-3xl uppercase tracking-wide mb-8 text-white relative z-10">Stuur een bericht</h3>
                
                <div className="relative z-10">
                  <ContactForm />
                </div>
              </div>
              
              {/* Map Widget (Same width as form) */}
              <div className="mt-8 w-full h-[300px] rounded-sm overflow-hidden shadow-lg border border-white/5 relative grayscale hover:grayscale-0 transition-all duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.330364235451!2d5.399948615793616!3d52.14652497974465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6441555555555%3A0x1234567890abcdef!2sSpaceshuttle%2014H%2C%203824%20ML%20Amersfoort!5e0!3m2!1snl!2snl!4v1620000000000!5m2!1snl!2snl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title="Locatie De Fiat 500 Dokter"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>
    </div>
  );
};
