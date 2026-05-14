import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, Wrench, CheckCircle } from 'lucide-react';

export const HeroAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    
    if (containerRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (observer) observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setHasFinished(true);
      }, 8200); // 8 seconds animation + tiny buffer
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (hasFinished) return null;

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-hidden"
    >
      <style>{`
        @keyframes vanRescueSequence {
          0%, 10% { transform: translate(-150vw, 0) translateZ(0); opacity: 1; }
          35%, 62.5% { transform: translate(0, 0) translateZ(0); opacity: 1; }
          87.5% { transform: translate(150vw, 0) translateZ(0); opacity: 1; }
          88%, 100% { transform: translate(150vw, 0) translateZ(0); opacity: 0; }
        }
        @keyframes vanBrakeTilt {
          0%, 32% { transform: rotate(0deg) translateZ(0); }
          35% { transform: rotate(-2deg) translateZ(0); }
          38% { transform: rotate(1deg) translateZ(0); }
          41%, 100% { transform: rotate(0deg) translateZ(0); }
        }
        @keyframes fiatRescueSequence {
          0%, 62.5% { transform: translate(0, 0) translateZ(0); opacity: 1; }
          87.5% { transform: translate(150vw, 0) translateZ(0); opacity: 1; }
          88%, 100% { transform: translate(150vw, 0) translateZ(0); opacity: 0; }
        }
        @keyframes blueFiatShake {
          0%, 3% { transform: translate(0, 0) translateZ(0); }
          4%, 8%, 12%, 16%, 20%, 24%, 28%, 32%, 36% { transform: translate(0, -2px) rotate(-1deg) translateZ(0); }
          6%, 10%, 14%, 18%, 22%, 26%, 30%, 34% { transform: translate(0, 2px) rotate(1deg) translateZ(0); }
          38%, 100% { transform: translate(0, 0) rotate(0) translateZ(0); }
        }
        @keyframes rescueExclamation {
          0%, 12.5% { opacity: 0; transform: scale(0) translateZ(0); }
          15%, 35% { opacity: 1; transform: scale(1) translateZ(0); } 
          37.5%, 100% { opacity: 0; transform: scale(0) translateZ(0); }
        }
        @keyframes rescuePulse {
          0%, 100% { transform: scale(1) translateZ(0); }
          50% { transform: scale(1.2) translateZ(0); }
        }
        @keyframes rescueWrench {
          0%, 36% { opacity: 0; transform: scale(0) rotate(-45deg) translateZ(0); }
          37.5% { opacity: 1; transform: scale(1) rotate(0deg) translateZ(0); }
          40% { transform: scale(1) rotate(45deg) translateZ(0); }
          43% { transform: scale(1) rotate(-15deg) translateZ(0); }
          46% { transform: scale(1) rotate(20deg) translateZ(0); }
          50%, 100% { opacity: 0; transform: scale(0) translateZ(0); }
        }
        @keyframes rescueCheck {
          0%, 48% { opacity: 0; transform: scale(0) translateZ(0); }
          50% { opacity: 1; transform: scale(1.2) translateZ(0); }
          53%, 62.5% { opacity: 1; transform: scale(1) translateZ(0); }
          64%, 100% { opacity: 0; transform: scale(0) translateZ(0); }
        }
        @keyframes rescueSmokeWrapper {
          0%, 37.5% { opacity: 1; }
          40%, 100% { opacity: 0; }
        }
        @keyframes smokeParticle {
          0% { opacity: 0; transform: translate(0, 0) scale(0.5) translateZ(0); }
          20% { opacity: 0.8; transform: translate(-5px, -10px) scale(1.2) translateZ(0); }
          60% { opacity: 0.5; transform: translate(-15px, -30px) scale(2) translateZ(0); }
          100% { opacity: 0; transform: translate(-25px, -50px) scale(3) translateZ(0); }
        }
        @keyframes rescueGlint {
          0%, 48% { transform: translate(-100%, 0) skewX(30deg); opacity: 0; }
          50% { transform: translate(-100%, 0) skewX(30deg); opacity: 1; }
          56% { transform: translate(250%, 0) skewX(30deg); opacity: 1; }
          57%, 100% { transform: translate(250%, 0) skewX(30deg); opacity: 0; }
        }
        
        .rescue-van-vehicle { animation: vanRescueSequence 8s 1 forwards ease-in-out; }
        .rescue-van-tilt { animation: vanBrakeTilt 8s 1 forwards ease-in-out; }
        .rescue-fiat-vehicle { animation: fiatRescueSequence 8s 1 forwards ease-in-out; }
        .rescue-fiat-shake { animation: blueFiatShake 8s 1 forwards ease-in-out; }
        .rescue-exclamation { animation: rescueExclamation 8s 1 forwards ease-in-out; }
        .rescue-exclamation-inner { animation: rescuePulse 0.5s infinite ease-in-out; }
        .rescue-wrench { animation: rescueWrench 8s 1 forwards ease-in-out; }
        .rescue-check { animation: rescueCheck 8s 1 forwards ease-in-out; }
        .rescue-smoke-wrapper { animation: rescueSmokeWrapper 8s 1 forwards ease-in-out; }
        .rescue-glint { animation: rescueGlint 8s 1 forwards ease-in-out; }
      `}</style>

      {/* De Fiat 500 Dokter Bus */}
      <div 
        className={`absolute bottom-[15%] md:bottom-[25%] left-[10%] md:left-[15%] w-[170px] md:w-[260px] translate-y-2 origin-bottom will-change-transform ${isVisible ? 'rescue-van-vehicle' : 'opacity-0'}`}
      >
        <div className="w-full h-full rescue-van-tilt origin-bottom will-change-transform">
          <img 
            src="https://i.ibb.co/CsSD4Zfk/Robert-Bedrijfsauto-562x272png.png" 
            alt="De Fiat 500 Dokter Bedrijfsauto"
            className="w-full object-contain -scale-x-100"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Blauwe Fiat (Gestrand) */}
      <div className={`absolute bottom-[15%] md:bottom-[25%] left-[45%] md:left-[45%] w-[130px] md:w-[180px] translate-y-3 will-change-transform ${isVisible ? 'rescue-fiat-vehicle' : 'opacity-0'}`}>
        
        {/* Icons Boven Auto */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12">
          <div className="absolute rescue-exclamation flex items-center justify-center will-change-transform">
            <AlertCircle className="w-8 h-8 text-red-500 rescue-exclamation-inner" strokeWidth={3} />
          </div>
          <div className="absolute rescue-wrench flex items-center justify-center will-change-transform">
            <Wrench className="w-8 h-8 text-blue-400" strokeWidth={2.5} />
          </div>
          <div className="absolute rescue-check flex items-center justify-center will-change-transform">
            <CheckCircle className="w-10 h-10 text-green-400 bg-black/20 rounded-full" strokeWidth={3} />
          </div>
        </div>

        {/* Fiat Image & Effects */}
        <div className="relative w-full rescue-fiat-shake will-change-transform">
          <img 
            src="https://i.ibb.co/LDvMTHpg/Fiat-Pech-Rook-png.png" 
            alt="Gestande blauwe Fiat 500"
            className="w-full object-contain -scale-x-100"
            fetchPriority="high"
          />
          
          {/* Glans Effect */}
          <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none rounded-[30%] opacity-20">
            <div className="absolute top-0 bottom-0 left-0 w-[50%] bg-gradient-to-r from-transparent via-white to-transparent rescue-glint"></div>
          </div>
          
          {/* Rookwolkjes */}
          <div className="absolute top-[20%] right-[-20%] w-full h-full rescue-smoke-wrapper pointer-events-none z-0">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="absolute left-0 top-[20%] w-6 h-6 md:w-10 md:h-10 bg-gray-300 rounded-full opacity-0"
                style={{
                  animation: `smokeParticle 2s infinite ease-out ${i * 0.4}s`
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

