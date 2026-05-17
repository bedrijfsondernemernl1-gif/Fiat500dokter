import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export const Cookies: React.FC = () => {
  return (
    <div className="bg-[#0F0A09] pt-32 pb-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
              <ShieldCheck className="text-[var(--color-accent)]" size={24} />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight">
              Cookie <span className="text-[var(--color-accent)]">Beleid</span>
            </h1>
          </div>
          
          <div className="glass-panel p-8 md:p-12 rounded-lg border border-white/5 space-y-8 font-body font-light text-gray-300 leading-relaxed shadow-2xl">
            <section>
              <h2 className="text-xl font-heading font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Wat zijn cookies?</h2>
              <p>
                Cookies zijn kleine tekstbestanden die door uw browser op uw computer of mobiele apparaat worden opgeslagen wanneer u onze website bezoekt. Ze helpen ons om uw ervaring te verbeteren en te begrijpen hoe onze website wordt gebruikt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Welke cookies gebruiken wij?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">1. Functionele Cookies</h3>
                  <p>Deze cookies zijn essentieel voor de basisfunctionaliteit van de website, zoals navigatie en toegang tot beveiligde delen van de site. Zonder deze cookies kan de website niet naar behoren werken.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">2. Analytische Cookies</h3>
                  <p>Wij gebruiken beperkte analytische tools (zoals Google Analytics 4) om anonieme bezoekersstatistieken bij te houden. Dit helpt ons de prestaties van onze klassieke Fiat-restauratie showcase te analyseren en te verbeteren.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">3. Marketing Cookies</h3>
                  <p>Wij maken momenteel geen gebruik van tracking cookies voor gepersonaliseerde advertenties op externe platforms.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Cookies uitschakelen</h2>
              <p>
                U kunt uw cookies beheren via uw browserinstellingen. Houd er rekening mee dat het uitschakelen van functionele cookies de werking van deze en vele andere websites kan beïnvloeden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Privacystatements</h2>
              <p>
                Onze verwerking van persoonsgegevens is in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG). Wij delen uw gegevens nooit met derden voor commerciële doeleinden.
              </p>
            </section>
            
            <p className="pt-8 text-sm italic text-gray-500">Laatst bijgewerkt: Mei 2026</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
