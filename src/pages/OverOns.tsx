import React from 'react';
import { FadeIn } from '../components/Shared';
import { usePageMeta } from '../hooks/usePageMeta';

export const OverOns = () => {
  usePageMeta({
    title: 'Over De Fiat 500 Dokter | Uw Oldtimer Auto Expert',
    description: 'Ontmoet de gepassioneerde vakmensen achter De Fiat 500 Dokter. Al 15+ jaar uw vertrouwde specialist in Fiat 500 oldtimers en klassieke auto\'s.',
    keywords: 'fiat 500 garage, oldtimer garage, fiat 500 dokter, ervaren fiat 500 garage in nederland, fiat 500 dokter amersfoort',
    canonicalPath: '/over-ons',
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
          "name": "Over Ons",
          "item": "https://fiat500dokter.nl/over-ons"
        }]
      }
    ]
  });

  return (
    <div className="bg-[var(--color-dark-bg)] min-h-screen text-white">
      {/* Split Screen Hero */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 pt-32 lg:pt-24 z-10">
          <FadeIn className="max-w-xl">
            <p className="text-[var(--color-accent)] font-subheading tracking-[0.3em] uppercase text-sm mb-6">Het Verhaal</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight mb-8 leading-tight">
              Gedreven Door <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Passie</span>
            </h1>
            <div className="w-12 h-1 bg-[var(--color-primary)] mb-10"></div>
            <div className="space-y-6 text-gray-400 font-body text-lg font-light leading-relaxed">
              <p>
                Welkom in mijn kliniek! Ik ben Robert, en de Fiat 500 Dokter is ontstaan uit pure passie. Jarenlang werkte ik als zelfstandig hovenier en boomverzorger. In mijn vrije uurtjes was ik altijd te vinden in de garage, sleutelend aan oldtimers, met een speciale liefde voor de Fiat 500 en 126.
              </p>
              <p>
                Na een carrièreswitch besloot ik de rollen om te draaien. Wat ooit mijn hobby was, is nu mijn beroep: het professioneel repareren en restaureren van deze prachtige klassiekers. En het groenwerk? Dat is nu mijn hobby geworden.
              </p>
            </div>
          </FadeIn>
        </div>
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-bg)] to-transparent z-10 hidden lg:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-bg)] to-transparent z-10 block lg:hidden"></div>
          <img 
            src="https://i.ibb.co/7dgdXfkV/output.png" 
            alt="Robert Schelvis - passievolle Fiat 500 restauratie expert" 
            className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            fetchPriority="high"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-[var(--color-charcoal)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wide mb-6">Het Team</h2>
              <div className="w-12 h-1 bg-[var(--color-accent)] mx-auto"></div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { name: 'Robert Schelvis', role: 'Fiat 500 Dokter', img: 'https://i.ibb.co/7dgdXfkV/output.png', desc: 'De drijvende kracht en het gezicht van De Fiat 500 Dokter. Jarenlange ervaring in restauratie.' },
                { name: 'Yvonne Schelvis', role: 'Administratie', img: 'https://i.ibb.co/3y5VWWQ3/AIEnhancer-yvonne-kl-400x300.png', desc: 'Dé administratieve kracht die ervoor zorgt dat alles gesmeerd verloopt achter de schermen.' }
              ].map((member, idx) => (
                <div key={idx} className="group relative bg-[var(--color-dark-bg)] rounded-sm overflow-hidden h-full border border-white/5 hover:border-white/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--color-accent)]/10 transition-all duration-300">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={member.img} 
                      alt={"Klassieke Fiat 500 specialist: " + member.name} 
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                    />
                  </div>
                  <div className="p-8">
                    <p className="font-subheading text-[var(--color-accent)] uppercase tracking-widest text-xs font-bold mb-2">{member.role}</p>
                    <h3 className="font-heading text-2xl uppercase tracking-wide mb-4 text-white">{member.name}</h3>
                    <p className="text-gray-400 font-body text-sm leading-relaxed font-light">
                      {member.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
