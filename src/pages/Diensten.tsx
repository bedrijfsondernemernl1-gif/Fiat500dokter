import React, { useState } from 'react';
import { FadeIn, ScrollToTop } from '../components/Shared';
import { CheckCircle2, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export const Diensten = () => {
  usePageMeta({
    title: 'Onderhoud Fiat 500 & Oldtimer Restauratie Diensten',
    description: 'Ontdek onze deskundige diensten voor oldtimers: van betrouwbaar onderhoud voor de Fiat 500 tot complete vintage cars reparaties en APK-keuringen.',
    keywords: 'fiat 500 restauratie, fiat 500 onderhoud, fiat 500 motor revisie, fiat 500 reparatie, wat kost een fiat 500 restauratie, oldtimer onderhoud fiat 500',
    canonicalPath: '/diensten',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Fiat500dokter"
        },
        "serviceType": ["Oldtimer restauratie", "Onderhoud Fiat 500", "Fiat 500 velgenset montage"],
        "areaServed": "NL"
      },
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
          "name": "Diensten",
          "item": "https://fiat500dokter.nl/diensten"
        }]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": "Doen jullie ook volledige body-off restauraties voor de Fiat 500?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wij bieden volledige body-off restauraties aan. De gehele auto wordt gestript, roest wordt verwijderd en de auto wordt in nieuwstaat opgebouwd met originele of hoogwaardige reproductie onderdelen."
          }
        }, {
          "@type": "Question",
          "name": "Kan ik mijn eigen oldtimer onderdelen meenemen voor onderhoud?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In overleg is het mogelijk om zelf onderdelen aan te leveren. We raden echter aan om onderdelen via ons te betrekken om garantie op de passing en kwaliteit te kunnen waarborgen."
          }
        }, {
          "@type": "Question",
          "name": "Monteren jullie ook Fiat 500 velgensets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jazeker! We hebben diverse vintage en sportieve velgensets voor de Fiat 500 op voorraad en we kunnen deze direct balanceren en monteren onder uw klassieker."
          }
        }, {
          "@type": "Question",
          "name": "Hoe lang duurt een reguliere onderhoudsbeurt voor mijn Fiat 500?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Een standaard (kleine of grote) onderhoudsbeurt duurt doorgaans 1 tot 2 werkdagen, mits er geen onverwachte grote reparaties nodig blijken te zijn."
          }
        }, {
          "@type": "Question",
          "name": "Kan ik tijdens de restauratie langskomen om te kijken?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absoluut, sterker nog, we houden u graag via Whatsapp op de hoogte met foto's en video's en u bent altijd welkom in de kliniek om de voortgang van uw patiënt te bekijken!"
          }
        }]
      }
    ]
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-[var(--color-dark-bg)] min-h-screen text-white">
      {/* Premium Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Neutrale donkere overlay met rode tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1210]/60 via-[#2a1616]/60 to-[#1a1210]/80 z-10"></div>
          <img 
            src="https://i.ibb.co/H60d55j/image.jpg" 
            alt="Vakman aan de slag met klassieke Fiat 500 restauratie in de werkplaats" 
            className="w-full h-full object-cover object-center premium-hover"
            style={{ filter: 'brightness(0.5) grayscale(30%) contrast(1.1)' }}
            fetchPriority="high"
            width="1920"
            height="1080"
            decoding="async"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-20 w-full pt-16 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-6 text-white">
              Vakmanschap<br />
              <span className="text-[var(--color-accent)]">Tot In Detail</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-200 font-body font-light leading-relaxed">
              Van een kleine beurt tot een complete body-off restauratie. Wij behandelen elke Fiat 500 met de precisie en passie die het verdient.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service 01: Reparaties & Restauraties */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="relative">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wide mb-6">Reparaties &<br />Restauraties</h2>
                <div className="w-12 h-1 bg-[var(--color-accent)] mb-8"></div>
                <p className="text-gray-400 leading-relaxed font-body text-lg mb-8 font-light">
                  Alle reparaties van A tot Z. Van een kleine beurt tot een complete restauratie. Klanten die zelf ook graag sleutelen kunnen een deel van het werk zelf doen, in overleg kijken we naar de mogelijkheden.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Complete restauraties', 'Deelrestauraties', 'In overleg zelf meewerken'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg font-body text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="group inline-flex items-center gap-3 text-[var(--color-accent)] font-subheading uppercase tracking-widest text-sm hover:text-white transition-colors">
                  Offerte Aanvragen
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <img 
                  src="https://i.ibb.co/Ly614vH/44.png" 
                  alt="Complete oldtimer restauratie van een Fiat 500 door specialisten" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  loading="lazy"
                  width="800"
                  height="600"
                  decoding="async"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service 02: Onderdelen */}
      <section className="py-32 relative overflow-hidden bg-[var(--color-charcoal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 relative">
            <FadeIn className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wide mb-6">Onderdelen Levering</h2>
              <div className="w-12 h-1 bg-[var(--color-accent)] mx-auto mb-8"></div>
              <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed font-body text-lg font-light">
                Alle onderdelen, nieuw en gebruikt. Sportvelgen, sportstoelen, stuurwielen, banden, deuren, uitlaten, onderhoudsmiddelen, stuurinrichting, ruitenwisserinstallaties, dynamo's, bumpers, plaatwerk, motoronderdelen en meer.
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { img: 'https://i.ibb.co/MyQztBhf/119-thumb-220x164.jpg', title: 'Stoelensets' },
                { img: 'https://i.ibb.co/pvPwR1ZW/613-thumb-220x164.jpg', title: 'Velgensets' },
                { img: 'https://i.ibb.co/HT1dGr5r/366-thumb-220x164.jpg', title: 'Plaatwerk' },
                { img: 'https://i.ibb.co/xqTtpyTB/Cilinderkop-220x164.jpg', title: 'Motoronderdelen' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="group relative aspect-square overflow-hidden rounded-sm bg-[var(--color-charcoal)] cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-accent)]/20 transition-all duration-300"
                  onClick={() => setSelectedImage(item.img)}
                >
                  <img 
                    src={item.img} 
                    alt={item.title + " - hoogwaardige oldtimer onderdelen voor klassieke Fiat 500"} 
                    loading="lazy" 
                    decoding="async" 
                    width="220"
                    height="164"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h4 className="font-subheading uppercase tracking-widest text-sm text-white group-hover:text-[var(--color-accent)] transition-colors">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="text-center">
            <FadeIn delay={0.5}>
              <a href="https://www.fiat500doktershop.nl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-4 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-dark-bg)] font-subheading uppercase tracking-widest font-bold rounded-sm transition-all duration-300">
                Bezoek de Webshop
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <>
        {selectedImage && (
          <div 
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 cursor-pointer"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10 p-2"
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Vergrote weergave van authentiek oldtimer onderdeel voor Fiat 500" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </>
      <ScrollToTop />
    </div>
  );
};
