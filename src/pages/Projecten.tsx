import React, { useState } from 'react';
import { FadeIn, ScrollToTop } from '../components/Shared';
import { X, ArrowRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const projects = [
  { id: 1, name: 'Spekkie', category: 'wachtkamer', image: 'https://i.ibb.co/N26GXCgF/128.jpg', description: 'Wachtend op een volledige motorrevisie en een nieuw, op maat gemaakt interieur.', gallery: ['https://i.ibb.co/N26GXCgF/128.jpg', 'https://i.ibb.co/9m0Jbwjg/136.jpg', 'https://i.ibb.co/pBJTH08Q/219.jpg', 'https://i.ibb.co/BHbHfNhJ/318.jpg'] },
  { id: 2, name: 'Televisor', category: 'wachtkamer', image: 'https://i.ibb.co/R4gGv4VG/319.jpg', description: 'Klaar voor een grondige roestbehandeling en een verse laklaag in de originele fabriekskleur.', gallery: ['https://i.ibb.co/R4gGv4VG/319.jpg', 'https://i.ibb.co/5xkVdLd8/414.jpg', 'https://i.ibb.co/DDTXFqDd/513.jpg', 'https://i.ibb.co/5gctvZJg/612.jpg'] },
  { id: 3, name: 'Tinkerbell', category: 'wachtkamer', image: 'https://i.ibb.co/nNxgbWL4/226.jpg', description: 'Staat ingepland voor een complete remmen-upgrade en het vervangen van de ophanging.', gallery: ['https://i.ibb.co/nNxgbWL4/226.jpg', 'https://i.ibb.co/ZzZfQLkY/320.jpg', 'https://i.ibb.co/JF09C1mr/415.jpg', 'https://i.ibb.co/Q72kczK3/514.jpg'] },
  { id: 4, name: 'Snowflake', category: 'wachtkamer', image: 'https://i.ibb.co/Q7pTT8Zr/227.jpg', description: 'Wacht op zeldzame originele onderdelen uit Italië voor een authentieke restauratie.', gallery: ['https://i.ibb.co/Q7pTT8Zr/227.jpg', 'https://i.ibb.co/Rrj5tM0/325.jpg', 'https://i.ibb.co/yFq7qdK0/416.jpg', 'https://i.ibb.co/wZ1wghzB/137.jpg'] },
  { id: 5, name: 'Edelweiss', category: 'wachtkamer', image: 'https://i.ibb.co/QvmqHvyw/228.jpg', description: 'Gepland voor een elektrische conversie met behoud van het klassieke uiterlijk.', gallery: ['https://i.ibb.co/QvmqHvyw/228.jpg', 'https://i.ibb.co/23br2dwc/326.jpg', 'https://i.ibb.co/5x2ftCfz/515.jpg', 'https://i.ibb.co/HLpvr2m3/205.jpg'] },
  
  { id: 6, name: 'Tweety', category: 'ok', image: 'https://i.ibb.co/q3WN93Sy/114.png', description: 'Ondergaat momenteel een uitgebreide motorrevisie.', gallery: ['https://i.ibb.co/q3WN93Sy/114.png', 'https://i.ibb.co/6R1MhbPc/210.png', 'https://i.ibb.co/qMJS7HbB/312.png', 'https://i.ibb.co/4ngvWNrw/45.png'] },
  { id: 7, name: 'Droppie', category: 'ok', image: 'https://i.ibb.co/SXQXLSLP/104.jpg', description: 'Wordt voorzien van nieuw plaatwerk en een verse laklaag.', gallery: ['https://i.ibb.co/SXQXLSLP/104.jpg', 'https://i.ibb.co/dsS3JY9Z/120.jpg', 'https://i.ibb.co/fTd8y6c/213.jpg', 'https://i.ibb.co/Mk9WDRYf/313.jpg'] },
  { id: 8, name: 'Eliza', category: 'ok', image: 'https://i.ibb.co/PZvFDDD5/20140622-101640-resized.png', description: 'Volledige interieur vernieuwing en dashboard restauratie.', gallery: ['https://i.ibb.co/PZvFDDD5/20140622-101640-resized.png', 'https://i.ibb.co/rfRkQ4cw/20140622-101700-resized.png', 'https://i.ibb.co/m5wRvsJQ/20140622-101720-resized.png'] },
  { id: 9, name: 'Ladybug', category: 'ok', image: 'https://i.ibb.co/Z6zHF35k/591.jpg', description: 'Elektrische storingen worden verholpen en de kabelboom wordt vernieuwd.', gallery: ['https://i.ibb.co/Z6zHF35k/591.jpg', 'https://i.ibb.co/1kzftDw/238.jpg', 'https://i.ibb.co/Q3zpK51L/1114.jpg', 'https://i.ibb.co/tP2mr8xz/915.jpg'] },
  { id: 10, name: 'Dusty', category: 'ok', image: 'https://i.ibb.co/WhdY61M/814.jpg', description: 'Remmen en ophanging worden compleet gereviseerd voor optimaal rijplezier.', gallery: ['https://i.ibb.co/WhdY61M/814.jpg', 'https://i.ibb.co/21WgBZ1C/333pg.jpg', 'https://i.ibb.co/tpKkvTf8/1pg.jpg', 'https://i.ibb.co/60f9Kcms/4pg.jpg'] },
  { id: 11, name: 'Transformer', category: 'ok', image: 'https://i.ibb.co/gZ940YLH/442.jpg', description: 'Ondergaat een transformatie met originele Abarth onderdelen.', gallery: ['https://i.ibb.co/gZ940YLH/442.jpg', 'https://i.ibb.co/Xr31JR7v/140.jpg', 'https://i.ibb.co/WNHWngsY/236.jpg', 'https://i.ibb.co/nN0phH99/328.jpg'] },
  { id: 12, name: 'Poison', category: 'ok', image: 'https://i.ibb.co/G3kPjh9J/471.jpg', description: 'Wordt voorbereid op een nieuwe, opvallende kleur.', gallery: ['https://i.ibb.co/G3kPjh9J/471.jpg', 'https://i.ibb.co/gF4CbSwg/197.jpg', 'https://i.ibb.co/6G4ZVRv/254.jpg', 'https://i.ibb.co/xtvjb4RP/912.jpg'] },
  { id: 13, name: 'Liza', category: 'ok', image: 'https://i.ibb.co/GvR0mxn4/DSCN0315-640x480.png', description: 'Algemeen onderhoud en afstellen van de carburateur.', gallery: ['https://i.ibb.co/GvR0mxn4/DSCN0315-640x480.png', 'https://i.ibb.co/8Dggcws7/DSCN0316-640x480.png', 'https://i.ibb.co/nMRC9TYg/DSCN0317-640x480.png', 'https://i.ibb.co/d0rKj2JK/DSCN0318-640x480.png'] },

  { id: 14, name: 'Das "U" Boot', category: 'ontslagen', image: 'https://i.ibb.co/bMRy2WVR/666.png', description: 'Volledig hersteld en klaar voor vele veilige kilometers. Een prachtig eindresultaat.', gallery: ['https://i.ibb.co/bMRy2WVR/666.png', 'https://i.ibb.co/zHV9H0S5/113.png', 'https://i.ibb.co/Ly614vH/44.png', 'https://i.ibb.co/DDcb3ksr/55.png'] },
  { id: 15, name: 'Rusty', category: 'ontslagen', image: 'https://i.ibb.co/W4NZY73C/38.png', description: 'Ondanks zijn naam is deze patiënt nu 100% roestvrij en voorzien van een prachtige patina-look.', gallery: ['https://i.ibb.co/W4NZY73C/38.png', 'https://i.ibb.co/1YJvshzV/110.png', 'https://i.ibb.co/MymgLR5z/23.png', 'https://i.ibb.co/QBrPzP8/33.png'] },
  { id: 16, name: 'Blue Berry', category: 'ontslagen', image: 'https://i.ibb.co/PZxqxsvc/69.png', description: 'Een zeldzame kleur, volledig teruggebracht naar showroomstaat met originele details.', gallery: ['https://i.ibb.co/PZxqxsvc/69.png', 'https://i.ibb.co/rKGmmmYf/21.png', 'https://i.ibb.co/0RQNxw3P/31.png', 'https://i.ibb.co/MkT8G35y/41.png'] },
  { id: 17, name: 'Snow White', category: 'ontslagen', image: 'https://i.ibb.co/fYXFtbtT/289.jpg', description: 'Een smetteloze restauratie waarbij geen enkel detail over het hoofd is gezien.', gallery: ['https://i.ibb.co/fYXFtbtT/289.jpg', 'https://i.ibb.co/WNtW9Lcd/1912.jpg', 'https://i.ibb.co/0RNBKRVH/1812.jpg', 'https://i.ibb.co/PZ9C5QBV/1710.jpg'] },
  { id: 18, name: 'Forgotten', category: 'ontslagen', image: 'https://i.ibb.co/27VrfZJz/592.jpg', description: 'Van een vergeten schuurvondst tot een stralende klassieker op de weg.', gallery: ['https://i.ibb.co/27VrfZJz/592.jpg', 'https://i.ibb.co/9mHxT7qB/523.jpg', 'https://i.ibb.co/ZRmtKV9L/620.jpg', 'https://i.ibb.co/qY4nFJHY/716.jpg'] },
  { id: 19, name: 'Oldie', category: 'ontslagen', image: 'https://i.ibb.co/XxT1G4gn/481.jpg', description: 'Een van onze oudste patiënten, nu weer in topconditie en klaar voor de zomer.', gallery: ['https://i.ibb.co/XxT1G4gn/481.jpg', 'https://i.ibb.co/jv1f09gw/917.jpg', 'https://i.ibb.co/mCYFD7Ps/108.jpg', 'https://i.ibb.co/k2BpgfWx/1117.jpg'] },
  { id: 20, name: 'Black Women', category: 'ontslagen', image: 'https://i.ibb.co/Sw2Twfb0/350.jpg', description: 'Een stoere, donkere verschijning met een compleet gereviseerde motor.', gallery: ['https://i.ibb.co/Sw2Twfb0/350.jpg', 'https://i.ibb.co/Ps77Dxv4/435.jpg', 'https://i.ibb.co/Fkh0Lbsw/526.jpg', 'https://i.ibb.co/zhW5RJ0r/625.jpg'] },
  { id: 21, name: 'Champignon', category: 'ontslagen', image: 'https://i.ibb.co/9HShGq0x/160.jpg', description: 'Een frisse restauratie met oog voor originele details en afwerking.', gallery: ['https://i.ibb.co/9HShGq0x/160.jpg', 'https://i.ibb.co/7JCbhb58/349.jpg'] },

  { id: 22, name: 'Dodge WC54', category: 'oldfellows', image: 'https://i.ibb.co/BKNkkjpr/DSC09135.jpg', description: 'Een indrukwekkende Amerikaanse klassieker, met liefde onderhouden.', gallery: ['https://i.ibb.co/BKNkkjpr/DSC09135.jpg', 'https://i.ibb.co/0pmnPMJ6/DSC09146.jpg', 'https://i.ibb.co/7dky2QyP/DSC09139.jpg', 'https://i.ibb.co/tMTFv1jx/DSC09143.jpg'] },
  { id: 23, name: 'Chevrolet Apache Flatbed', category: 'oldfellows', image: 'https://i.ibb.co/3mgYjR4b/58chevy1-360x270.jpg', description: 'Een stoere werkpaard uit de jaren 50, nog steeds in topvorm.', gallery: ['https://i.ibb.co/3mgYjR4b/58chevy1-360x270.jpg', 'https://i.ibb.co/qwS0pHy/140118-0001-1.jpg', 'https://i.ibb.co/s9XG7bpR/chevy-fladbed.jpg', 'https://i.ibb.co/qFNkQ8SJ/58chevy2.jpg'] }
];

export const Projecten = () => {
  usePageMeta('Projecten', 'Bekijk onze patiënten in de ziekenboeg. Van wachtkamer tot ontslagen patiënten, zie de transformatie van de Fiat 500.');

  const [filter, setFilter] = useState('wachtkamer');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = projects.filter(p => p.category === filter);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  const openLightbox = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <div className="bg-[var(--color-dark-bg)] min-h-screen text-white">
      {/* Premium Header */}
      <header className="pt-32 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight mb-4">
              De <span className="text-[var(--color-accent)]">Ziekenboeg</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-400 font-body font-light mb-6">
              Een overzicht van onze patiënten. Van de wachtkamer tot volledig ontslagen en hersteld.
            </p>
          </FadeIn>
          
          {/* Ultra-Premium Filters */}
          <div className="w-full flex justify-center mb-0 mt-2">
            <div className="relative flex flex-wrap items-center justify-center p-1.5 bg-[var(--color-charcoal)] border border-white/10 rounded-full shadow-lg max-w-fit">
              {[
                { id: 'wachtkamer', label: 'Wachtkamer' },
                { id: 'ok', label: 'Op de OK' },
                { id: 'ontslagen', label: 'Ontslagen' },
                { id: 'oldfellows', label: 'Old Fellows' }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`relative px-6 py-3 text-[13px] rounded-full uppercase tracking-[0.2em] font-subheading font-medium transition-colors duration-300 z-10 ${
                    filter === f.id 
                      ? 'bg-[var(--color-accent)] text-[var(--color-dark-bg)]' 
                      : 'text-gray-400 hover:text-white bg-transparent'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Staggered Grid Gallery */}
      <div className="pb-32 pt-8 mt-0 w-full">
        <div className="w-full mx-auto bg-[var(--color-charcoal)] py-6 px-4 sm:px-8 lg:px-12 border-y border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3] bg-black"
                onClick={() => openLightbox(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Text Content overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-10">
                  <p className="text-[var(--color-accent)] font-subheading text-xs uppercase tracking-widest mb-1.5 font-bold shadow-black/50">
                    {project.category === 'ontslagen' ? 'Hersteld' : project.category === 'wachtkamer' ? 'Wachtend' : project.category === 'oldfellows' ? 'Klassieker' : 'In Behandeling'}
                  </p>
                  <h3 className="text-2xl font-heading font-bold uppercase tracking-wide text-white drop-shadow-md">{project.name}</h3>
                </div>
                
                {/* Read more indicator */}
                <div className="absolute right-4 top-4 w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                  <ArrowRight size={18} className="text-[var(--color-charcoal)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sleek Lightbox Modal */}
      <>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2"
            >
              <X size={32} />
            </button>
            
            <div 
              className="w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row gap-8 overflow-y-auto hide-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-2/3 relative group">
                <img 
                  src={selectedProject.gallery[currentImageIndex]} 
                  alt={selectedProject.name} 
                  loading="lazy"
                  className="w-full h-auto max-h-[70vh] object-contain rounded-sm"
                />
                
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ArrowRight size={24} className="rotate-180" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ArrowRight size={24} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-1 rounded-full text-white text-sm font-subheading tracking-widest">
                      {currentImageIndex + 1} / {selectedProject.gallery.length}
                    </div>
                  </>
                )}
                
                {selectedProject.gallery.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto pb-2 hide-scrollbar">
                    {selectedProject.gallery.map((img, i) => (
                      <img 
                        key={i} 
                        src={img} 
                        alt={`Thumbnail ${i+1}`} 
                        onClick={() => setCurrentImageIndex(i)}
                        className={`h-20 w-auto object-cover rounded-sm cursor-pointer transition-all ${currentImageIndex === i ? 'border-2 border-[var(--color-accent)] opacity-100' : 'opacity-50 hover:opacity-100'}`} 
                      />
                    ))}
                  </div>
                )}
              </div>
              
              <div className="w-full md:w-1/3 flex flex-col justify-center">
                <p className="text-[var(--color-accent)] font-subheading text-sm uppercase tracking-widest mb-4">
                  Dossier: {selectedProject.category}
                </p>
                <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wide mb-6 text-white">
                  {selectedProject.name}
                </h2>
                <div className="w-12 h-1 bg-[var(--color-primary)] mb-8"></div>
                <p className="text-gray-400 font-body text-lg leading-relaxed font-light">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </>
      <ScrollToTop />
    </div>
  );
};
