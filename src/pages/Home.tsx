import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FadeIn, SectionHeader, ScrollToTop } from '../components/Shared';
import { Link } from 'react-router-dom';
import { HeartPulse, ClipboardCheck, Car, Wrench, Stethoscope, ShoppingCart, MapPin, Phone, Mail, Clock, X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { ContactForm } from '../components/ContactForm';
import { HeroAnimation } from '../components/HeroAnimation';

const projects = [
  { id: 1, name: 'Spekkie', category: 'wachtkamer', image: 'https://i.ibb.co/N26GXCgF/128.jpg', description: 'Wachtend op een volledige motorrevisie en een nieuw, op maat gemaakt interieur.' },
  { id: 2, name: 'Televisor', category: 'wachtkamer', image: 'https://i.ibb.co/R4gGv4VG/319.jpg', description: 'Klaar voor een grondige roestbehandeling en een verse laklaag in de originele fabriekskleur.' },
  { id: 3, name: 'Tinkerbell', category: 'wachtkamer', image: 'https://i.ibb.co/nNxgbWL4/226.jpg', description: 'Staat ingepland voor een complete remmen-upgrade en het vervangen van de ophanging.' },
  { id: 4, name: 'Snowflake', category: 'wachtkamer', image: 'https://i.ibb.co/Q7pTT8Zr/227.jpg', description: 'Wacht op zeldzame originele onderdelen uit Italië voor een authentieke restauratie.' },
  { id: 5, name: 'Edelweiss', category: 'wachtkamer', image: 'https://i.ibb.co/QvmqHvyw/228.jpg', description: 'Gepland voor een elektrische conversie met behoud van het klassieke uiterlijk.' },
  { id: 6, name: 'Das U Boot (Voor)', category: 'ok', image: 'https://i.ibb.co/xS4gkg2d/155.png', description: 'De patiënt bij binnenkomst. Veel laswerk nodig aan de bodemplaat en dorpels.' },
  { id: 7, name: 'Das U Boot (Tijdens)', category: 'ok', image: 'https://i.ibb.co/Ly614vH/44.png', description: 'Midden in de operatie. De carrosserie is volledig gestript en wordt momenteel strakgemaakt.' },
  { id: 8, name: 'Das U Boot (Motor)', category: 'ok', image: 'https://i.ibb.co/VWxxV2m2/73.png', description: 'Het kloppend hart ligt op de werkbank voor een complete revisie en tuning.' },
  { id: 9, name: 'Das U Boot', category: 'ontslagen', image: 'https://i.ibb.co/bMRy2WVR/666.png', description: 'Volledig hersteld en klaar voor vele veilige kilometers. Een prachtig eindresultaat.' },
  { id: 10, name: 'Rusty', category: 'ontslagen', image: 'https://i.ibb.co/W4NZY73C/38.png', description: 'Ondanks zijn naam is deze patiënt nu 100% roestvrij en voorzien van een prachtige patina-look.' },
  { id: 11, name: 'Blue Berry', category: 'ontslagen', image: 'https://i.ibb.co/PZxqxsvc/69.png', description: 'Een zeldzame kleur, volledig teruggebracht naar showroomstaat met originele details.' },
  { id: 12, name: 'Snow White', category: 'ontslagen', image: 'https://i.ibb.co/fYXFtbtT/289.jpg', description: 'Een smetteloze restauratie waarbij geen enkel detail over het hoofd is gezien.' },
  { id: 13, name: 'Oldie', category: 'ontslagen', image: 'https://i.ibb.co/XxT1G4gn/481.jpg', description: 'Een van onze oudste patiënten, nu weer in topconditie en klaar voor de zomer.' }
];

export const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Hide the animation area after it completes (8.2s = animation length)
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 8500); // slight buffer to ensure smooth disappearance
    return () => clearTimeout(timer);
  }, []);

  const shouldCollapse = isScrolled || animationDone;

  usePageMeta('Home', 'Specialist in reparatie en restauratie van Fiat 500 en 126 oldtimers. Uw klassieker in vertrouwde handen.');

  const [filter, setFilter] = useState('wachtkamer');
  const filteredProjects = projects.filter(p => p.category === filter);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentShowcaseIndex, setCurrentShowcaseIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setCurrentShowcaseIndex(0);
  }, [filter]);

  useEffect(() => {
    if (!modalOpen || filteredProjects.length === 0 || !isAutoplay) return;
    const timer = setInterval(() => {
      setCurrentShowcaseIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [modalOpen, filteredProjects.length, isAutoplay]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeProject = filteredProjects[currentShowcaseIndex];

  const currentDay = new Date().getDay();
  
  const openingHours = [
    { day: 'Maandag', time: '10:00 – 18:30', index: 1 },
    { day: 'Dinsdag', time: 'Gesloten', index: 2 },
    { day: 'Woensdag', time: '10:00 – 18:30', index: 3 },
    { day: 'Donderdag', time: 'Gesloten', index: 4 },
    { day: 'Vrijdag', time: '10:00 – 18:30', index: 5 },
    { day: 'Zaterdag', time: 'Gesloten', index: 6 },
    { day: 'Zondag', time: 'Gesloten', index: 0 }
  ];

  const services = [
    {
      icon: <HeartPulse size={36} className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-500" />,
      title: "Reparaties & Restauraties",
      desc: "Van kleine ingrepen tot een volledige 'openhartoperatie'. Wij verzorgen alle reparaties van A tot Z. Zelf een deel doen? In overleg is veel mogelijk op de OK."
    },
    {
      icon: <Car size={36} className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-500" />,
      title: "Onderdelen Levering",
      desc: "Zowel nieuw als gebruikt: sportvelgen, stoelen, plaatwerk, motoronderdelen, dynamo's, bumpers en meer. Alles om uw patiënt weer gezond te maken."
    }
  ];

  return (
    <>
      <section className="relative min-h-screen flex flex-col pt-0 overflow-hidden bg-[var(--color-dark-bg)]">
        {/* Parallax Background for Animation Area */}
        <div className={`absolute top-0 left-0 w-full z-0 overflow-hidden transition-[opacity,transform] duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${shouldCollapse ? 'opacity-0 -translate-y-full' : 'h-[250px] md:h-[350px] opacity-100 translate-y-0 origin-top'}`} style={{ willChange: 'opacity, transform' }}>
          <div className="fixed top-0 left-0 w-full h-[250px] md:h-[350px] z-0">
            {/* Gradient overlay voor een vloeiende cinematische blend naar de workshop sectie */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1210]/40 via-[#1a1210]/60 to-[#1a1210] z-10 pointer-events-none"></div>
            
            <img 
              src="https://i.ibb.co/KcFhP7Pb/Gemini-Generated-Image-nhzgi4nhzgi4nhzg.png" 
              alt="Landschap weg voor animatie"
              className="absolute inset-0 w-full h-full object-cover object-[center_60%] z-0 brightness-75 grayscale sepia-[.2]"
              referrerPolicy="no-referrer"
              fetchPriority="high"
            />
          </div>
          {/* Gradient fade to seamlessly blend into the hero background below */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a1210] to-transparent z-20 pointer-events-none"></div>
        </div>

        {/* Hero Background Image restricted to Text Area */}
        <div className={`absolute left-0 right-0 z-0 bg-[#1a1210] transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${shouldCollapse ? 'translate-y-0' : 'translate-y-[250px] md:translate-y-[350px]'} bottom-0 top-0`} style={{ willChange: 'transform' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1210] via-[#1a1210]/90 to-[#1a1210]/80 z-10 pointer-events-none"></div>
          
          <img 
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHudIWTrC1UL5uesIio1fcEpXQhgpikl3fZ5yYwe0matikApMpvNa2gQT7DRK4IeIxfCmDTSmLuZ3l4Q0UTzw4RMSA9dAUXA7WSAdcKcSti3DO29Jp7K6NpfVUuBStB65VJbLJdL31TovQS=s1360-w1360-h1020-rw" 
            alt="Fiat 500 Werkplaats" 
            className="w-full h-full object-cover object-center brightness-50 grayscale sepia-[.2]"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-texture z-10 pointer-events-none"></div>
          {/* Seamless transition gradient to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--color-dark-bg)] to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Animation Area: Top portion of the hero */}
        <div className={`absolute top-0 left-0 w-full z-20 pointer-events-none transition-[opacity,transform] duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${shouldCollapse ? 'opacity-0 -translate-y-full' : 'h-[250px] md:h-[350px] opacity-100 translate-y-0'}`} style={{ willChange: 'opacity, transform' }}>
          <HeroAnimation />
        </div>

        {/* Text Area: Bottom portion of the hero */}
        <div className={`relative z-20 flex-1 flex flex-col justify-center items-center py-12 md:py-16 transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] min-h-screen ${shouldCollapse ? 'translate-y-0' : 'translate-y-[250px] md:translate-y-[350px]'}`} style={{ willChange: 'transform' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-24 md:pt-32">
            <FadeIn>
              <div className="inline-flex items-center justify-center px-5 py-2 mb-8 rounded-full text-white font-subheading uppercase tracking-[2px] text-[13px] font-medium" style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                Amersfoort <span className="mx-3 opacity-50">•</span> Sinds 2009
              </div>
            <h1 className="mb-6 font-heading text-6xl md:text-8xl uppercase font-bold" style={{ textShadow: '0 4px 40px rgba(0,0,0,0.6)', letterSpacing: '0.03em' }}>
              <span className="text-white">UW KLASSIEKER</span><br/>
              <span className="text-[var(--color-accent)]">ONZE PASSIE</span>
            </h1>
            <p className="max-w-[600px] mx-auto mb-12 font-body text-xl" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
              Specialist in reparatie en restauratie van Fiat 500 en 126 oldtimers. Uw klassieker in vertrouwde handen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 w-full sm:w-auto">
              <a 
                href="#contact" 
                className="btn-shine w-full sm:w-auto px-10 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-dark-bg)] font-subheading text-[16px] uppercase tracking-[1px] font-bold rounded transition-all shadow-md hover:-translate-y-1 text-center"
              >
                Maak een Afspraak
              </a>
              <a 
                href="https://www.fiat500doktershop.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white font-subheading text-[16px] uppercase tracking-[1px] font-bold rounded transition-all hover:-translate-y-1 text-center"
              >
                Bekijk Webshop
              </a>
            </div>
            <div className="w-full max-w-2xl mx-auto border-t border-white/10 pt-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                <div className="flex-1 text-center">
                  <span className="font-subheading text-[13px] uppercase tracking-[2px]" style={{ color: 'rgba(255,255,255,0.6)' }}>Reparatie & Restauratie</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-white/20"></div>
                <div className="md:hidden w-12 h-px bg-white/10 my-2"></div>
                <div className="flex-1 text-center">
                  <span className="font-subheading text-[13px] uppercase tracking-[2px]" style={{ color: 'rgba(255,255,255,0.6)' }}>Onderdelen & Webshop</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[var(--color-dark-bg)] to-[#1a1210] text-white relative pt-0 -mt-1 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <SectionHeader title="Onze Diensten" />

          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="service-card h-full flex flex-col group cursor-default">
                  <div className="icon-circle mb-8 group-hover:bg-[var(--color-primary)]">
                    {service.icon}
                  </div>
                  <h3 className="mb-4 text-3xl font-heading font-bold uppercase tracking-wide text-white group-hover:text-[var(--color-accent)] transition-colors duration-500">{service.title}</h3>
                  <p className="text-gray-300 flex-grow leading-relaxed font-body text-lg">{service.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/diensten" className="inline-block px-8 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-dark-bg)] font-subheading uppercase tracking-widest font-bold rounded transition-all">
                Bekijk alle diensten
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Marquee Banner */}
        <div className="w-full bg-[var(--color-primary)] text-black overflow-hidden py-4 mt-24 flex whitespace-nowrap">
          <div className="animate-marquee font-heading font-bold italic uppercase text-2xl tracking-widest">
            SPECIALIST FIAT 500 &bull; 15+ JAAR ERVARING &bull; ONDERDELEN &bull; SINDS 2009 &bull; SPECIALIST FIAT 500 &bull; 15+ JAAR ERVARING &bull; ONDERDELEN &bull; SINDS 2009 &bull; 
          </div>
        </div>
      </section>

      <section id="ziekenboeg" className="py-24 bg-gradient-to-b from-[#1a1210] to-[#2a1616] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="De Ziekenboeg" />
          <FadeIn>
            <p className="max-w-2xl mx-auto text-center text-gray-300 leading-relaxed mb-12 font-body text-lg">
              Om onze ziekenboeg overzichtelijk te maken, hebben wij onze patiënten ingedeeld in drie afdelingen. 
              Kies een afdeling om de status van de klassiekers te bekijken.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button 
                onClick={() => setFilter('wachtkamer')}
                className={`cursor-pointer px-8 py-3 rounded-full font-subheading text-lg uppercase tracking-wider transition-opacity ${filter === 'wachtkamer' ? 'bg-[var(--color-primary)] text-white' : 'bg-transparent border border-white/20 text-white opacity-60 hover:opacity-100 object-cover'}`}
              >
                In de Wachtkamer
              </button>
              <button 
                onClick={() => setFilter('ok')}
                className={`cursor-pointer px-8 py-3 rounded-full font-subheading text-lg uppercase tracking-wider transition-opacity ${filter === 'ok' ? 'bg-[var(--color-primary)] text-white' : 'bg-transparent border border-white/20 text-white opacity-60 hover:opacity-100 object-cover'}`}
              >
                Op de OK
              </button>
              <button 
                onClick={() => setFilter('ontslagen')}
                className={`cursor-pointer px-8 py-3 rounded-full font-subheading text-lg uppercase tracking-wider transition-opacity ${filter === 'ontslagen' ? 'bg-[var(--color-primary)] text-white' : 'bg-transparent border border-white/20 text-white opacity-60 hover:opacity-100 object-cover'}`}
              >
                Ontslagen Patiënten
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {filteredProjects.map((project, idx) => {
                const rotation = ((project.id * 7) % 3) - 1.5;
                return (
                  <div key={project.id} className="polaroid-premium relative group cursor-pointer" style={{ transform: `rotate(${rotation}deg)` }} onClick={() => { setCurrentShowcaseIndex(idx); setModalOpen(true); }}>
                    <motion.div className="w-full h-full flex flex-col">
                      <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 relative premium-image-container">
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform"
                        />
                      </div>
                      <p className="font-script text-2xl text-center mt-6 text-[var(--color-charcoal)]">{project.name}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/projecten" className="inline-block px-8 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-dark-bg)] font-subheading uppercase tracking-widest font-bold rounded transition-colors">
                Bekijk alle projecten
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#2a1616] to-[var(--color-dark-bg)] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Over Ons" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.2}>
              <div className="space-y-6 text-gray-300 leading-relaxed font-body text-lg">
                <p>
                  De Fiat 500 Dokter is ontstaan uit pure passie voor klassieke Italiaanse schoonheid. Wat begon als een uit de hand gelopen hobby, is inmiddels uitgegroeid tot een gespecialiseerde 'kliniek' voor de Fiat 500 en 126.
                </p>
                <p>
                  Jarenlang werkte de oprichter als zelfstandig hovenier en boomverzorger. In de vrije uurtjes werd er met liefde gesleuteld aan oldtimers. Na een carrièreswitch in 2009 werden de rollen omgedraaid: het repareren en restaureren van deze iconische wagentjes werd het beroep, en het groenwerk de hobby.
                </p>
                
                <blockquote className="quote-block my-8 italic text-3xl font-logo text-white">
                  "Bij de Fiat 500 Dokter wordt elke oldtimer met liefde en vakmanschap behandeld. Het zijn geen auto's, het zijn patiënten die onze beste zorg verdienen."
                </blockquote>
                
                <div className="pt-4">
                  <Link to="/over-ons" className="inline-block px-8 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-dark-bg)] font-subheading uppercase tracking-widest font-bold rounded transition-all">
                    Lees ons hele verhaal
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="relative group premium-image-container">
                <div className="absolute inset-0 bg-[var(--color-primary)]/20 rounded-xl translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <div className="relative rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/10">
                  <img 
                    src="https://i.ibb.co/CsSD4Zfk/Robert-Bedrijfsauto-562x272png.png" 
                    alt="De Fiat 500 Dokter Bedrijfsauto" 
                    className="w-full h-auto object-cover premium-image-filter"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-br from-[var(--color-dark-bg)] via-[var(--color-charcoal)] to-[var(--color-primary-dark)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Contact & Afspraak" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[var(--color-dark-bg)] rounded-2xl shadow-xl overflow-hidden border border-white/5">
            
            {/* Contact Info */}
            <div className="bg-[var(--color-dark-bg)] border-l-4 border-[var(--color-primary)] text-white p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-5">
                <Stethoscope size={300} className="transform translate-x-1/4 -translate-y-1/4" />
              </div>
              
              <div className="relative z-10">
                <h3 className="font-heading text-4xl uppercase tracking-wide mb-8">Kliniek Gegevens</h3>
                
                <div className="space-y-6 mb-12">
                  <a href="tel:+31653613489" className="flex items-start gap-4 hover:text-[var(--color-accent)] transition-colors group cursor-pointer">
                    <div className="bg-white/5 p-3 rounded-full group-hover:bg-[var(--color-accent)] transition-colors">
                      <Phone size={24} className="text-[var(--color-accent)] group-hover:text-[var(--color-dark-bg)]" />
                    </div>
                    <div>
                      <p className="font-subheading text-sm uppercase tracking-widest text-gray-400 mb-1">Telefoon (Spoed & Afspraken)</p>
                      <p className="font-body text-xl font-medium">+31 (0)6 53 61 34 89</p>
                    </div>
                  </a>
                  
                  <a href="mailto:fiat500dokter@gmail.com" className="flex items-start gap-4 hover:text-[var(--color-accent)] transition-colors group cursor-pointer">
                    <div className="bg-white/5 p-3 rounded-full group-hover:bg-[var(--color-accent)] transition-colors">
                      <Mail size={24} className="text-[var(--color-accent)] group-hover:text-[var(--color-dark-bg)]" />
                    </div>
                    <div>
                      <p className="font-subheading text-sm uppercase tracking-widest text-gray-400 mb-1">E-mail</p>
                      <p className="font-body text-xl font-medium">fiat500dokter@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="https://maps.google.com/?q=Spaceshuttle+14H,+3824+ML+Amersfoort" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:text-[var(--color-accent)] transition-colors group cursor-pointer">
                    <div className="bg-white/5 p-3 rounded-full group-hover:bg-[var(--color-accent)] transition-colors">
                      <MapPin size={24} className="text-[var(--color-accent)] group-hover:text-[var(--color-dark-bg)]" />
                    </div>
                    <div>
                      <p className="font-subheading text-sm uppercase tracking-widest text-gray-400 mb-1">De Ziekenboeg</p>
                      <p className="font-body text-xl font-medium">Spaceshuttle 14H<br/>3824 ML Amersfoort</p>
                    </div>
                  </a>
                </div>

                <h4 className="font-heading text-3xl uppercase tracking-wide mb-6 flex items-center gap-2">
                  <Clock size={24} className="text-[var(--color-accent)]" /> 
                  Spreekuren
                </h4>
                
                <ul className="space-y-2 mb-8 font-body text-lg">
                  {openingHours.map((time, idx) => (
                    <li 
                      key={idx} 
                      className={`flex justify-between py-2 border-b border-white/10 ${currentDay === time.index ? 'text-[var(--color-accent)] font-bold' : 'text-gray-300'}`}
                    >
                      <span>{time.day}</span>
                      <span>{time.time}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-black/20 border border-white/10 p-4 rounded-lg flex items-start gap-3">
                  <HeartPulse size={24} className="text-[var(--color-accent)] flex-shrink-0 mt-1" />
                  <p className="font-body text-base leading-relaxed text-gray-300">
                    <strong>Let op:</strong> Bel altijd even van tevoren, het kan zijn dat de dokter een dame in nood een helpende hand toesteekt op locatie.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 lg:p-12 bg-[var(--color-charcoal)]">
              <h3 className="font-heading text-4xl uppercase tracking-wide mb-2 text-white">Stuur een bericht</h3>
              <p className="font-body text-lg text-gray-400 mb-8">Vul het formulier in voor een afspraak of vraag.</p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>


      {/* Lightbox Modal Carousel */}
      <AnimatePresence>
        {modalOpen && activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 cursor-pointer overflow-hidden origin-center perspective-[1000px]"
          >
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
            >
              <X size={40} />
            </button>
            
            <div 
              className="w-full max-w-6xl flex flex-col items-center justify-center relative cursor-default h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6 h-20 md:h-24 relative w-full overflow-hidden flex items-end justify-center shrink-0 z-10">
                 <AnimatePresence mode="popLayout">
                   <motion.h3 
                     key={`title-${activeProject.id}`}
                     initial={{ y: 50, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     exit={{ y: -50, opacity: 0 }}
                     transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                     className="text-4xl md:text-6xl font-heading uppercase tracking-wide text-white drop-shadow-xl absolute bottom-0"
                   >
                     {activeProject.name}
                   </motion.h3>
                 </AnimatePresence>
              </div>

              <div className="relative w-full aspect-[4/5] md:aspect-[21/9] flex items-center justify-center shrink-0">
                <AnimatePresence mode="popLayout">
                  {activeProject && (
                    <motion.div
                      key={`card-${activeProject.id}`}
                      initial={{ x: '100%', scale: 0.8, rotateY: isMobile ? 0 : -15, opacity: 0 }}
                      animate={{ x: 0, scale: 1, rotateY: 0, opacity: 1 }}
                      exit={{ x: '-100%', scale: 0.8, rotateY: isMobile ? 0 : 15, opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute inset-0 bg-[var(--color-dark-bg)] rounded-xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row"
                    >
                       <div className="w-full md:w-2/3 h-1/2 md:h-full relative shrink-0">
                         <img src={activeProject.image} alt={activeProject.name} className="w-full h-full object-cover" />
                       </div>
                       <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-center">
                         <p className="text-gray-300 leading-relaxed font-body text-base md:text-lg mb-6 line-clamp-4 md:line-clamp-none">
                           {activeProject.description}
                         </p>
                         <div className="flex items-center gap-3 font-subheading text-sm md:text-lg text-[var(--color-accent)] uppercase tracking-widest font-bold mt-auto">
                           <Wrench size={20} />
                           <span>{activeProject.category === 'wachtkamer' ? 'In de wachtkamer' : activeProject.category === 'ok' ? 'Op de OK' : 'Ontslagen'}</span>
                         </div>
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Indicators & Controls */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 md:mt-12 relative z-20">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => {
                      setIsAutoplay(false);
                      setCurrentShowcaseIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
                    }}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Vorige"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <button 
                    onClick={() => setIsAutoplay(!isAutoplay)}
                    className="p-3 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/80 text-white transition-colors"
                    aria-label={isAutoplay ? "Pauzeren" : "Afspelen"}
                  >
                    {isAutoplay ? <Pause size={24} /> : <Play size={24} />}
                  </button>

                  <button 
                    onClick={() => {
                      setIsAutoplay(false);
                      setCurrentShowcaseIndex((prev) => (prev + 1) % filteredProjects.length);
                    }}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Volgende"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                
                <div className="flex justify-center items-center gap-3">
                  {filteredProjects.map((proj, idx) => (
                    <button
                      key={'ind-'+proj.id}
                      onClick={() => {
                        setIsAutoplay(false);
                        setCurrentShowcaseIndex(idx);
                      }}
                      className={`rounded-full transition-all duration-300 ${idx === currentShowcaseIndex ? 'w-8 h-3 bg-[var(--color-primary)]' : 'w-3 h-3 bg-white/20 hover:bg-white/40'}`}
                      aria-label={`Ga naar project ${proj.name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollToTop />
    </>
  );
};
