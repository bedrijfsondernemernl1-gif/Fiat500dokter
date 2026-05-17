import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

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

export const Terms: React.FC = () => {
  return (
    <div className="bg-[#0F0A09] pt-32 pb-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
              <FileText className="text-[var(--color-accent)]" size={24} />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight">
              Algemene <span className="text-[var(--color-accent)]">Voorwaarden</span>
            </h1>
          </div>
          
          <div className="glass-panel p-8 md:p-12 rounded-lg border border-white/5 space-y-8 font-body font-light text-gray-300 leading-relaxed shadow-2xl">
            <section>
              <h2 className="text-xl font-heading font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">1. Definities</h2>
              <p>In deze algemene voorwaarden wordt verstaan onder:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>De Fiat 500 Dokter:</strong> de gebruiker van deze algemene voorwaarden.</li>
                <li><strong>Klant:</strong> de natuurlijke of rechtspersoon die een overeenkomst sluit met De Fiat 500 Dokter.</li>
                <li><strong>Overeenkomst:</strong> de overeenkomst tussen de Klant en De Fiat 500 Dokter voor reparatie, restauratie of levering van onderdelen.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">2. Toepasselijkheid</h2>
              <p>
                Deze voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten van De Fiat 500 Dokter. Door gebruik te maken van onze diensten gaat u akkoord met deze voorwaarden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">3. Offertes en Prijzen</h2>
              <p>
                Alle prijsopgaven zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld. Restauratieprojecten kunnen variëren in kosten door onvoorziene defecten die pas tijdens demontage zichtbaar worden. In dergelijke gevallen wordt altijd overleg gevoerd met de Klant.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">4. Uitvoering en Garantie</h2>
              <p>
                De Fiat 500 Dokter voert de werkzaamheden naar best inzicht en vermogen uit, gebruikmakend van originele of hoogwaardige reproductie-onderdelen. De garantie op uitgevoerde reparaties bedraagt standaard 3 maanden, tenzij anders schriftelijk overeengekomen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">5. Aansprakelijkheid</h2>
              <p>
                De Fiat 500 Dokter is niet aansprakelijk voor schade aan voertuigen die langer dan 14 dagen na gereedmelding op het terrein verblijven, tenzij specifiek stalling is overeengekomen.
              </p>
            </section>
            
            <p className="pt-8 text-sm italic text-gray-500">Laatst bijgewerkt: Mei 2026</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
