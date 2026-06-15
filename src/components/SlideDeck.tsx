import React, { useState, useEffect, useRef } from "react";
import { 
  Play, Pause, ChevronLeft, ChevronRight, Grid, LayoutGrid, Info, CheckCircle, 
  Settings, Send, Phone, Mail, Clock, ShieldCheck, MapPin, Gauge, Lightbulb
} from "lucide-react";
import { Slide, SLIDES_DATA, PRODUCTS_CATALOG } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface SlideDeckProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  onOpenEstimator?: () => void;
}

export const SlideDeck: React.FC<SlideDeckProps> = ({
  currentIndex,
  setCurrentIndex,
  onOpenEstimator
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showIndexGrid, setShowIndexGrid] = useState<boolean>(false);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [ledText, setLedText] = useState<string>("PRECAUCION OBRAS");
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  const activeSlide: Slide = SLIDES_DATA[currentIndex];

  // Auto playback loop
  useEffect(() => {
    if (isPlaying) {
      autoPlayTimer.current = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % SLIDES_DATA.length);
      }, 5000); // 5 seconds per slide
    } else {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    }
    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isPlaying, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % SLIDES_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
  };

  // Divide category labels
  const getCategory = (index: number): string => {
    if (index === 0) return "Inicio";
    if (index >= 1 && index <= 2) return "Sobre Nosotros";
    if (index >= 3 && index <= 11) return "Catálogo Señales";
    if (index >= 12 && index <= 18) return "Barreras y Estructuras";
    if (index >= 19 && index <= 26) return "Marcas Horizontales";
    if (index >= 27 && index <= 35) return "Cobertura y Contactos";
    return "Calidad y Certificación";
  };

  const categories = [
    { id: "all", label: "Todas las Diapositivas" },
    { id: "sobre", label: "Nosotros" },
    { id: "senales", label: "Catálogo Señales" },
    { id: "barreras", label: "Barreras e Infraestructura" },
    { id: "horizontal", label: "Vial Horizontal" },
    { id: "cobertura", label: "Contacto por Zonas" },
    { id: "calidad", label: "Tecnología y Calidad" }
  ];

  const getFilteredSlides = () => {
    if (filterCategory === "all") return SLIDES_DATA;
    if (filterCategory === "sobre") {
      return SLIDES_DATA.filter(s => s.id <= 3);
    }
    if (filterCategory === "senales") {
      return SLIDES_DATA.filter(s => s.id >= 6 && s.id <= 11 || s.id === 23 || s.id === 25);
    }
    if (filterCategory === "barreras") {
      return SLIDES_DATA.filter(s => s.id === 12 || s.id === 13 || s.id === 14 || s.id === 15 || s.id === 18);
    }
    if (filterCategory === "horizontal") {
      return SLIDES_DATA.filter(s => s.id >= 19 && s.id <= 22 || s.id === 26);
    }
    if (filterCategory === "cobertura") {
      return SLIDES_DATA.filter(s => s.id === 28 || (s.id >= 29 && s.id <= 35));
    }
    if (filterCategory === "calidad") {
      return SLIDES_DATA.filter(s => s.id === 36 || s.id === 37 || s.id === 38 || s.id === 39 || s.id === 40);
    }
    return SLIDES_DATA;
  };

  // Render specific illustrations for slides of exact indexes
  const renderIllustration = (type: string) => {
    switch (type) {
      case "hero":
        return (
          <div className="relative w-full h-full bg-slate-950 flex flex-col items-center justify-center p-6 border border-slate-900 rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-radial-gradient from-yellow-500/10 via-transparent to-transparent pointer-events-none" />
            
            {/* Minimal Arch visual from slide #1 */}
            <div className="w-64 h-80 rounded-t-full bg-slate-900/80 border-2 border-yellow-500/25 relative shadow-2xl flex flex-col items-center justify-center">
              {/* Inner shining pedestal and golden sign */}
              <div className="w-1.5 h-32 bg-yellow-500/40 mt-16 relative">
                {/* Gold round signboard */}
                <div className="absolute top-0 -translate-y-full left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-lg flex items-center justify-center border border-white/30 animate-pulse">
                  <span className="text-slate-950 font-black text-xl">↑</span>
                </div>
                {/* Pedestal bottom stand */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-sm" />
              </div>
              <div className="absolute bottom-4 text-[9px] font-mono tracking-widest text-yellow-500 bg-slate-950 px-2 py-0.5 rounded-full border border-yellow-500/25">
                SEÑAL P-20 ESPAÑA
              </div>
            </div>
            
            <p className="mt-4 font-mono text-[10px] text-yellow-400/70 tracking-widest">
              LÍDER EN ESPAÑA EN SEÑALIZACIÓN VIAL · S.L. 1972
            </p>
          </div>
        );

      case "about":
        return (
          <div className="w-full h-full bg-slate-100 dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b pb-3 border-gray-300">
              <span className="font-display font-black text-sm text-gray-800">INFRAESTRUCTURA DE FABRICACIÓN</span>
              <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-700 border border-yellow-500/20 font-bold text-[9px] rounded">DESDE 1972</span>
            </div>
            
            {/* Simulated blueprint / production plant mockup */}
            <div className="my-4 flex-1 border border-dashed border-gray-300 rounded-lg p-3 bg-white flex flex-col justify-center relative">
              <div className="text-[10px] text-yellow-600 font-mono font-bold uppercase tracking-wider mb-2">Planta Principal de Castellón</div>
              
              <div className="grid grid-cols-3 gap-2 text-[9px] font-mono">
                <div className="bg-slate-100 p-2 rounded border border-gray-200">
                  <div className="font-bold text-gray-800">SECCIÓN A</div>
                  <div className="text-gray-500">Corte por Plasma CNC</div>
                  <div className="text-emerald-600 mt-1">● Activo</div>
                </div>
                <div className="bg-slate-100 p-2 rounded border border-gray-200">
                  <div className="font-bold text-gray-800">SECCIÓN B</div>
                  <div className="text-gray-500">Galvanizado S235</div>
                  <div className="text-emerald-600 mt-1">● Comprobado</div>
                </div>
                <div className="bg-slate-100 p-2 rounded border border-gray-200">
                  <div className="font-bold text-gray-800">SECCIÓN C</div>
                  <div className="text-gray-500">Pintura RA2/RA3</div>
                  <div className="text-emerald-600 mt-1">● Certificado</div>
                </div>
              </div>

              {/* Status bar */}
              <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-gray-900 text-white px-2 py-1 rounded text-[8px] font-bold">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                CONEXIÓN CAD/CAM OK
              </div>
            </div>

            <div className="text-[10px] text-gray-500 leading-relaxed font-sans">
              * Fabricación nacional bajo especificación CE UNE-EN 485 y riguroso control ISO de calidad continua.
            </div>
          </div>
        );

      case "services":
        return (
          <div className="w-full h-full bg-slate-900 rounded-2xl p-6 text-white flex flex-col justify-between border border-slate-800">
            <h4 className="font-display font-extrabold text-sm tracking-widest text-yellow-400">SERVICIOS DE ALTA RESISTENCIA</h4>
            <div className="grid grid-cols-1 gap-3 my-4">
              <div className="flex items-center gap-3 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700">
                <div className="w-2 h-8 bg-yellow-400 rounded-sm" />
                <div>
                  <h5 className="font-sans text-xs font-bold">Instalación Vial Horizontal</h5>
                  <p className="text-[10px] text-slate-400 font-sans">Pinturas acrílicas y plásticos en caliente.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700">
                <div className="w-2 h-8 bg-orange-500 rounded-sm" />
                <div>
                  <h5 className="font-sans text-xs font-bold">Sistemas de Contención Certificados</h5>
                  <p className="text-[10px] text-slate-400 font-sans">Barrera Simple, Doble BMSNC y SPM.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700">
                <div className="w-2 h-8 bg-cyan-400 rounded-sm" />
                <div>
                  <h5 className="font-sans text-xs font-bold">Paneles LED e Informativos</h5>
                  <p className="text-[10px] text-slate-400 font-sans">Gestión telemática de vías en tiempo real.</p>
                </div>
              </div>
            </div>
            <span className="text-[9px] font-mono text-slate-500 tracking-wider text-right">PACASA MOVILIDAD S.L. 2024</span>
          </div>
        );

      case "ap7":
      case "n340":
        return (
          <div className="w-full h-full bg-slate-950 rounded-2xl p-4 border border-slate-800 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-2 right-2 bg-yellow-500/20 text-yellow-400 text-[8px] font-mono uppercase px-2 py-0.5 rounded border border-yellow-500/30">
              {type === "ap7" ? "AP-7 Corredor Mediterráneo" : "N-340 Travesía de Nules"}
            </div>
            <div className="flex-1 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-lg p-2.5 relative my-4">
              {/* Freeway perspective blueprint representation */}
              <svg viewBox="0 0 100 65" className="w-full h-36">
                {/* Sky and distant horizon */}
                <rect x="0" y="0" width="100" height="25" fill="#0d1527" />
                <rect x="0" y="25" width="100" height="40" fill="#181e2e" />
                {/* Highway lanes perspective lines */}
                <polygon points="50,25 51,25 90,65 10,65" fill="#2d3748" />
                <polygon points="50,25 50.5,25 72,65 28,65" fill="#1e293b" />
                {/* Center road dash markings perspective */}
                <line x1="50" y1="25" x2="50" y2="65" stroke="#f1f5f9" strokeWidth="1.2" strokeDasharray="3,4" />
                {/* Yellow shoulder lines */}
                <line x1="50" y1="25" x2="16" y2="65" stroke="#f59e0b" strokeWidth="0.8" />
                <line x1="50" y1="25" x2="84" y2="65" stroke="#f59e0b" strokeWidth="0.8" />
                
                {/* Sign structures */}
                {type === "ap7" ? (
                  <>
                    {/* Gantries */}
                    <line x1="30" y1="12" x2="70" y2="12" stroke="#cbd5e1" strokeWidth="1.5" />
                    <line x1="31" y1="12" x2="31" y2="50" stroke="#94a3b8" strokeWidth="2" />
                    <line x1="69" y1="12" x2="69" y2="50" stroke="#94a3b8" strokeWidth="2" />
                    {/* Gantry panels */}
                    <rect x="36" y="5" width="28" height="6" fill="#10b981" rx="0.5" />
                    <text x="50" y="9.5" fill="white" fontSize="2.8" textAnchor="middle" fontWeight="bold">AP-7 VALENCIA 2.5km</text>
                  </>
                ) : (
                  <>
                    {/* Speed Limit Sign 30 and pedestrian sign */}
                    <circle cx="28" cy="22" r="5" fill="#ef4444" />
                    <circle cx="28" cy="22" r="3.8" fill="white" />
                    <text x="28" y="24" fill="black" fontSize="5" textAnchor="middle" fontWeight="black" fontFamily="monospace">30</text>
                    <line x1="28" y1="27" x2="28" y2="45" stroke="#94a3b8" strokeWidth="1" />
                  </>
                )}
              </svg>
            </div>
            <div className="text-[10px] text-slate-400 leading-snug font-sans">
              {type === "ap7" 
                ? "Doble bionda bMSNC galvanizada con protección elástica para motoristas instalada según exigencia de Fomento."
                : "Señalización integrada con marcas táctiles podotáctiles en aceras, y paso sobre-elevado según RD 505/2007."}
            </div>
          </div>
        );

      case "signs-works-1":
      case "signs-works-2":
        return (
          <div className="w-full h-full bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-orange-500">SEÑALIZACIÓN TEMPORAL DE OBRAS</h4>
            <div className="flex-1 flex items-center justify-around my-4 bg-slate-950 rounded-lg p-3">
              {/* Construction warning triangle SVG */}
              <div className="flex flex-col items-center">
                <svg width="45" height="40" viewBox="0 0 100 90">
                  <polygon points="50,5 98,85 2,85" fill="#ef4444" stroke="#111" strokeWidth="1" />
                  <polygon points="50,15 88,80 12,80" fill="#f59e0b" />
                  <rect x="46" y="32" width="8" height="28" fill="#111" rx="2" />
                  <circle cx="50" cy="70" r="4.5" fill="#111" />
                </svg>
                <span className="text-[8px] font-mono text-gray-400 mt-2">TR-101 Peligro</span>
              </div>
              
              {/* TB-2 board card */}
              <div className="flex flex-col items-center bg-white text-gray-900 border border-gray-300 p-2 rounded relative">
                <div className="w-20 h-10 border-2 border-red-500 flex flex-col justify-between items-center p-0.5">
                  <div className="w-full h-2 bg-red-600" />
                  <span className="font-mono text-[10px] font-bold tracking-tight">TB 2 - WORKS</span>
                  <div className="w-full h-2 bg-red-600" />
                </div>
                <span className="text-[8px] font-mono text-gray-400 mt-2">Baliza Tem. TB-2</span>
              </div>

              {/* T5 Arrow Board */}
              <div className="flex flex-col items-center">
                <div className="bg-slate-900 border border-yellow-500 w-16 h-8 flex items-center justify-center p-1 rounded">
                  <span className="text-yellow-500 font-mono text-xs font-bold font-black">{"<< T5 >>"}</span>
                </div>
                <span className="text-[8px] font-mono text-gray-400 mt-2">Desvío T-5</span>
              </div>
            </div>
            <p className="text-[9px] font-mono text-slate-400 italic">
              Nivel de retrorreflexión Clase RA2 y RA3 de gran angularidad reflectante bajo ensayos oficiales.
            </p>
          </div>
        );

      case "signs-reg":
        return (
          <div className="w-full h-full bg-slate-950 rounded-2xl p-5 border border-slate-900 flex flex-col justify-between">
            <h4 className="font-display font-extrabold text-xs text-red-500 tracking-wider">SEÑALES REGLAMENTARIAS HOMOLOGADAS</h4>
            <div className="grid grid-cols-3 gap-3 my-4">
              {/* STOP Sign */}
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg flex flex-col items-center justify-center">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Octagon shape */}
                    <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#ef4444" stroke="white" strokeWidth="4" />
                    <text x="50" y="60" fill="white" fontSize="28" fontWeight="black" textAnchor="middle" fontFamily="monospace">STOP</text>
                  </svg>
                </div>
                <span className="text-[8px] font-mono text-gray-400 mt-1">R-2 Prioridad</span>
              </div>

              {/* Speed Limit 50 */}
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-red-600 border border-white p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <span className="text-slate-950 font-mono text-base font-black">50</span>
                  </div>
                </div>
                <span className="text-[8px] font-mono text-gray-400 mt-1">R-301 Velocidad</span>
              </div>

              {/* Blue mandatory direction circle */}
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 border border-white flex items-center justify-center">
                  <span className="text-white font-mono text-xl font-bold">↑</span>
                </div>
                <span className="text-[8px] font-mono text-gray-400 mt-1">R-400 Sentido</span>
              </div>
            </div>
            <p className="text-[9px] font-mono text-slate-500 text-center">
              Fabricadas en chapa de acero de 1.5mm y aluminio reforzado resistente a climas de costa o montaña.
            </p>
          </div>
        );

      case "signs-ind":
        return (
          <div className="w-full h-full bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
            <h4 className="font-display font-medium text-xs text-blue-400 tracking-wider">SEÑALIZACIÓN VERTICAL DE INDICACIÓN</h4>
            
            <div className="my-4 bg-slate-950 rounded-lg p-3 flex flex-col gap-2.5">
              {/* Blueprint representation of Toledo indicator board */}
              <div className="bg-blue-700 border border-white/80 p-2.5 rounded shadow flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-black tracking-tight leading-none text-white">Toledo</span>
                  <span className="font-mono text-[9px] text-blue-200 mt-0.5">250 km</span>
                </div>
                <div className="font-bold text-xs bg-white text-blue-700 w-5 h-5 rounded-full flex items-center justify-center">N</div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-900 border border-slate-800 p-1.5 rounded flex items-center gap-1.5">
                  <div className="bg-blue-600 w-4 h-4 rounded text-[9px] flex items-center justify-center font-bold">H</div>
                  <span className="text-[8px] font-mono text-slate-400">Hospital S-1</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-1.5 rounded flex items-center gap-1.5">
                  <div className="bg-blue-600 w-4 h-4 text-[9px] flex items-center justify-center font-bold">P</div>
                  <span className="text-[8px] font-mono text-slate-400">Párking S-17</span>
                </div>
              </div>
            </div>

            <p className="text-[9px] font-mono text-slate-400 text-right">
              Mismo diseño y especificaciones que el catálogo oficial del Ministerio de Fomento.
            </p>
          </div>
        );

      case "led":
        return (
          <div className="w-full h-full bg-slate-950 text-white border border-slate-900 rounded-3xl p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b pb-2.5 border-slate-800">
              <span className="font-display font-black text-xs text-yellow-500 uppercase tracking-widest">PROBADOR DE MATRIZ LED LED-V10</span>
              <span className="text-[8px] font-mono text-slate-500 uppercase tracking-tight">CONTROL GSM ACTIVO</span>
            </div>
            
            <div className="my-3">
              <label className="block text-[10px] text-gray-400 font-mono mb-1.5 uppercase tracking-wide">
                Introduce Texto Informativo:
              </label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={ledText} 
                  onChange={(e) => setLedText(e.target.value.toUpperCase())}
                  maxLength={24}
                  className="flex-1 bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-xs text-yellow-500 font-mono focus:outline-none focus:border-yellow-500"
                />
              </div>
            </div>

            {/* Glowing amber led matrix strip simulation */}
            <div className="bg-black border-4 border-slate-800 rounded-lg p-3 my-2 text-center relative shadow-inner overflow-hidden flex items-center justify-center min-h-[75px]">
              <div className="absolute inset-0 bg-radial-gradient from-amber-500/15 via-transparent to-transparent pointer-events-none" />
              <div 
                className="font-mono text-amber-500 font-black tracking-widest text-sm uppercase filter drop-shadow-[0_0_5px_rgba(245,158,11,0.6)] animate-pulse"
                style={{ fontFamily: '"Courier New", Courier, monospace', letterSpacing: '4px' }}
              >
                {ledText || "PAGASA ALERTA"}
              </div>
            </div>

            <p className="text-[9px] font-mono text-slate-500 leading-snug">
              * Fabricado con diodos de alto ángulo de visión Nichia, sensor de luz ambiental automático y batería recargable ecológica de ciclo continuo.
            </p>
          </div>
        );

      case "luminosos":
        return (
          <div className="w-full h-full bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
            <h4 className="font-display font-extrabold text-xs text-cyan-400 uppercase tracking-wider">ELEMENTOS LUMINOSOS URBANOS</h4>
            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex flex-col items-center">
                {/* Simulated twin-light portal semaphore */}
                <div className="w-6 h-14 bg-black rounded-full border border-gray-700 flex flex-col items-center justify-around py-1 animate-pulse">
                  <div className="w-4.5 h-4.5 rounded-full bg-red-600 shadow-[0_0_8px_#ef4444]" />
                  <div className="w-4.5 h-4.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
                </div>
                <span className="text-[8px] font-mono text-slate-400 mt-2">Semáforo Portátil</span>
              </div>
              
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex flex-col items-center justify-center">
                {/* Led Arrow indicator */}
                <span className="text-xl text-yellow-500 animate-pulse font-mono tracking-widest font-bold">{"======>"}</span>
                <span className="text-[8px] font-mono text-slate-400 mt-2">Flecha LED Destellante</span>
              </div>
            </div>
            <p className="text-[9px] font-mono text-slate-500 text-center">
              Batería de gel libre de mantenimiento + carga solar autónoma de gran durabilidad.
            </p>
          </div>
        );

      case "barandillas":
      case "barandillas-models":
        return (
          <div className="w-full h-full bg-slate-550 dark:bg-slate-905 rounded-2xl p-5 border border-slate-300 relative flex flex-col justify-between">
            <h4 className="font-display font-black text-xs text-gray-800 uppercase tracking-widest">PLANO DE BARANDILLAS S235JR CE</h4>
            
            <div className="my-3 bg-white border border-gray-300 rounded p-3 relative">
              <span className="absolute top-1 right-2 font-mono text-[8px] text-emerald-600 font-bold">ALTURA: 1.100mm MIN</span>
              {/* Technical Drawing representing modular steel pipe safety barrier */}
              <svg viewBox="0 0 100 45" className="w-full h-32">
                <line x1="5" y1="10" x2="95" y2="10" stroke="#475569" strokeWidth="2.5" />
                <line x1="5" y1="20" x2="95" y2="20" stroke="#475569" strokeWidth="2" />
                <line x1="5" y1="35" x2="95" y2="35" stroke="#475569" strokeWidth="1.5" />
                
                {/* Vertical support columns */}
                <line x1="15" y1="10" x2="15" y2="42" stroke="#475569" strokeWidth="4.5" />
                <line x1="50" y1="10" x2="50" y2="42" stroke="#475569" strokeWidth="4.5" />
                <line x1="85" y1="10" x2="85" y2="42" stroke="#475569" strokeWidth="4.5" />
                
                {/* Vertical thin filler pickets */}
                <line x1="25" y1="10" x2="25" y2="35" stroke="#94a3b8" strokeWidth="1" />
                <line x1="35" y1="10" x2="35" y2="35" stroke="#94a3b8" strokeWidth="1" />
                <line x1="60" y1="10" x2="60" y2="35" stroke="#94a3b8" strokeWidth="1" />
                <line x1="70" y1="10" x2="70" y2="35" stroke="#94a3b8" strokeWidth="1" />

                {/* Pedestales de anclaje */}
                <rect x="11" y="42" width="8" height="2" fill="#334155" />
                <rect x="46" y="42" width="8" height="2" fill="#334155" />
                <rect x="81" y="42" width="8" height="2" fill="#334155" />
              </svg>
            </div>

            <p className="text-[9px] font-mono text-gray-500 leading-tight">
              Diseño modular de barandillas de alta resistencia. Galvanización por inmersión en caliente según UNE EN ISO 1461.
            </p>
          </div>
        );

      case "porticos":
        return (
          <div className="w-full h-full bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
            <h4 className="font-display font-extrabold text-xs text-yellow-400">PÓRTICOS Y BANDEROLAS DE ACERO</h4>
            
            <div className="bg-slate-950 border border-slate-850 p-2 rounded my-4">
              {/* Structural grid of freeway portal span */}
              <svg viewBox="0 0 100 45" className="w-full h-28">
                {/* Spacio span */}
                <line x1="10" y1="15" x2="90" y2="15" stroke="#e2e8f0" strokeWidth="2" />
                <line x1="10" y1="23" x2="90" y2="23" stroke="#e2e8f0" strokeWidth="2" />
                {/* Truss members inside the portal support */}
                <line x1="10" y1="15" x2="20" y2="23" stroke="#94a3b8" strokeWidth="0.8" />
                <line x1="20" y1="15" x2="30" y2="23" stroke="#94a3b8" strokeWidth="0.8" />
                <line x1="30" y1="15" x2="40" y2="23" stroke="#94a3b8" strokeWidth="0.8" />
                <line x1="50" y1="15" x2="60" y2="23" stroke="#94a3b8" strokeWidth="0.8" />
                <line x1="60" y1="15" x2="70" y2="23" stroke="#94a3b8" strokeWidth="0.8" />
                <line x1="70" y1="15" x2="80" y2="23" stroke="#94a3b8" strokeWidth="0.8" />
                {/* Main side upright columns */}
                <line x1="10" y1="15" x2="10" y2="43" stroke="#cbd5e1" strokeWidth="4" />
                <line x1="90" y1="15" x2="90" y2="43" stroke="#cbd5e1" strokeWidth="4" />
                
                {/* Blue info pointers */}
                <rect x="25" y="10" width="18" height="10" fill="#2563eb" rx="0.5" />
                <rect x="55" y="10" width="18" height="10" fill="#2563eb" rx="0.5" />
                <text x="34" y="17" fill="white" fontSize="3" fontStyle="bold" textAnchor="middle">AP-7</text>
                <text x="64" y="17" fill="white" fontSize="3" fontStyle="bold" textAnchor="middle">Nules</text>
              </svg>
            </div>
            
            <p className="text-[9px] font-mono text-slate-400">
              * Estructura ensayada y calculada para aguantar velocidades críticas de vientos huracanados Clase C.
            </p>
          </div>
        );

      case "barreras":
        return (
          <div className="w-full h-full bg-slate-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100 rounded-2xl p-5 border border-gray-200 relative flex flex-col justify-between">
            <h4 className="font-display font-black text-xs text-yellow-600 uppercase tracking-widest">BIONDAS METÁLICAS DE SEGURIDAD</h4>
            <div className="my-4 bg-white p-3 rounded border border-gray-200 flex flex-col gap-2">
              <div className="grid grid-cols-3 gap-2 text-[9px] font-mono">
                <div className="bg-gray-50 p-2 rounded border">
                  <div className="font-bold text-gray-800">PERFIL SIMPLE W</div>
                  <div className="text-gray-500">Absorción lateral estándar.</div>
                  <div className="text-blue-600 font-bold mt-1">CE Nivel N2</div>
                </div>
                <div className="bg-gray-50 p-2 rounded border">
                  <div className="font-bold text-gray-800">DOBLE BMSNC</div>
                  <div className="text-gray-500">Poste H con bionda dual.</div>
                  <div className="text-blue-600 font-bold mt-1">H2 Contención Fuerte</div>
                </div>
                <div className="bg-gray-50 p-2 rounded border">
                  <div className="font-bold text-gray-800">SISTEMA SPM</div>
                  <div className="text-gray-500">Salva-vidas inferior elástico.</div>
                  <div className="text-red-600 font-bold mt-1">Anticorte Motoristas</div>
                </div>
              </div>
            </div>
            <p className="text-[9px] font-mono text-gray-500 italic text-center">
              * Fabricación nacional galvanizada según UNE-EN ISO 1461. Máxima catalogación viales.
            </p>
          </div>
        );

      case "bolardos":
      case "mobiliario":
      case "aluminio":
      case "conos":
        return (
          <div className="w-full h-full bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
            <h4 className="font-display font-extrabold text-xs text-orange-500 uppercase tracking-wide">COMPLEMENTOS URBANOS Y BALIZAS</h4>
            <div className="grid grid-cols-3 gap-2.5 my-4">
              {/* Cones representation */}
              <div className="bg-slate-950 p-2 rounded flex flex-col items-center">
                <svg width="25" height="35" viewBox="0 0 100 120">
                  <polygon points="50,10 90,110 10,110" fill="#f97316" />
                  {/* White reflective stripes */}
                  <polygon points="50,30 31,80 69,80" fill="white" />
                  <polygon points="50,45 38,75 62,75" fill="#f97316" />
                  <rect x="5" y="110" width="90" height="10" fill="#1e293b" />
                </svg>
                <span className="text-[7.5px] font-mono text-gray-400 mt-2">Cono Reflectante</span>
              </div>

              {/* Bollard representation */}
              <div className="bg-slate-950 p-2 rounded flex flex-col items-center justify-center">
                <div className="w-4 h-14 bg-orange-500 rounded-t-full border border-gray-600 flex flex-col justify-around py-1">
                  <div className="w-full h-2.5 bg-white" />
                  <div className="w-full h-2.5 bg-white" />
                </div>
                <span className="text-[7.5px] font-mono text-gray-400 mt-2">Hito Flexible</span>
              </div>

              {/* Bench representation */}
              <div className="bg-slate-950 p-2 rounded flex flex-col items-center justify-center">
                <div className="w-14 h-8 border border-white/40 flex flex-col justify-between p-1 rounded">
                  <div className="w-full h-2 bg-yellow-700 rounded-sm" />
                  <div className="w-full h-1 bg-slate-700" />
                  <div className="flex justify-between">
                    <div className="w-1.5 h-3 bg-slate-500" />
                    <div className="w-1.5 h-3 bg-slate-500" />
                  </div>
                </div>
                <span className="text-[7.5px] font-mono text-gray-400 mt-2">Banco Madera</span>
              </div>
            </div>
            <p className="text-[9px] font-mono text-slate-500 text-center">
              Acero galvanizado por termolacado, plásticos virgenes de gran elasticidad anti-UV.
            </p>
          </div>
        );

      case "horizontal":
      case "accesibilidad":
      case "barratransversal":
      case "pasosobreelevado":
        return (
          <div className="w-full h-full bg-slate-105 rounded-2xl p-5 border border-slate-300 relative flex flex-col justify-between">
            <h4 className="font-display font-extrabold text-xs text-emerald-800 uppercase tracking-widest">MARCAS VIALES HORIZONTALES</h4>
            
            <div className="my-3 bg-slate-900 text-white rounded p-3 relative">
              <span className="absolute top-1.5 right-2 font-mono text-[8px] text-yellow-500">PINTURA ANTIDESLIZANTE</span>
              
              {type === "pasosobreelevado" ? (
                /* Zebra bump layout mockup */
                <svg viewBox="0 0 100 45" className="w-full h-28">
                  {/* Ramp perspective shape */}
                  <polygon points="10,40 25,15 75,15 90,40" fill="#334155" />
                  {/* White Stripes on peak flat zone */}
                  <rect x="30" y="15" width="5" height="15" fill="white" />
                  <rect x="40" y="15" width="5" height="15" fill="white" />
                  <rect x="50" y="15" width="5" height="15" fill="white" />
                  <rect x="65" y="15" width="5" height="15" fill="white" />
                  {/* Warning arrows indicators */}
                  <polyline points="18,34 18,25 22,25" fill="none" stroke="#f59e0b" strokeWidth="1" />
                  <polyline points="82,34 82,25 78,25" fill="none" stroke="#f59e0b" strokeWidth="1" />
                  <text x="50" y="42" fill="white" fontSize="3" fontStyle="italic" textAnchor="middle">PASO SOBREELEVADO P-20</text>
                </svg>
              ) : type === "barratransversal" ? (
                /* Transversal alert strip */
                <svg viewBox="0 0 100 45" className="w-full h-28">
                  <rect x="5" y="5" width="90" height="35" fill="#1e293b" />
                  {/* Yellow transversaler strip blocks */}
                  <rect x="20" y="15" width="60" height="4" fill="#f59e0b" />
                  <rect x="20" y="24" width="60" height="4" fill="#f59e0b" />
                  <rect x="20" y="32" width="60" height="4" fill="#f59e0b" />
                  
                  {/* Dimensional markers */}
                  <line x1="15" y1="15" x2="15" y2="36" stroke="#fbbf24" strokeWidth="0.8" />
                  <text x="12" y="27" fill="#fbbf24" fontSize="2.8" transform="rotate(-90 12 27)" textAnchor="middle">ANCHO: 50cm</text>
                </svg>
              ) : (
                /* Accessibility S-A1 box logo */
                <div className="flex items-center justify-center h-28">
                  <div className="w-20 h-20 bg-blue-600 rounded-lg border-2 border-white flex flex-col items-center justify-center">
                    <span className="text-white text-4xl">♿</span>
                    <span className="text-[7px] font-mono text-blue-200 mt-1 uppercase font-bold tracking-widest">MINUSVALÍA RD505</span>
                  </div>
                </div>
              )}
            </div>

            <p className="text-[9px] font-mono text-gray-500 text-center leading-snug">
              Microesferas de vidrio añadidas para retrorreflexión instantánea en tramos de nula iluminación.
            </p>
          </div>
        );

      case "logistica":
        return (
          <div className="w-full h-full bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
            <h4 className="font-display font-extrabold text-xs text-yellow-400 uppercase tracking-widest">FLOTA LOGÍSTICA DE CARRETERAS</h4>
            <div className="my-4 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-around min-h-[120px]">
              <div className="flex justify-between items-center text-[10px] bg-slate-900 p-2 rounded">
                <span className="font-mono text-yellow-400 font-bold">Autopropulsión Termoplástico</span>
                <span className="font-sans font-semibold">3 Unidades</span>
              </div>
              <div className="flex justify-between items-center text-[10px] bg-slate-900 p-2 rounded">
                <span className="font-mono text-yellow-400 font-bold">Furgones de Señales Rápidos</span>
                <span className="font-sans font-semibold">14 Unidades</span>
              </div>
              <div className="flex justify-between items-center text-[10px] bg-slate-900 p-2 rounded">
                <span className="font-mono text-yellow-400 font-bold">Camiones con Pluma de Gran Carga</span>
                <span className="font-sans font-semibold">4 Unidades</span>
              </div>
            </div>
            <p className="text-[9px] font-mono text-slate-500 italic text-right">
              Capacidad para pintar hasta 80 km de autovía por jornada con equipos autónomos.
            </p>
          </div>
        );

      case "mapa":
      case "levante":
      case "centro":
      case "aragon":
      case "cataluna":
      case "sur":
      case "canarias":
      case "norte":
        return (
          <div className="w-full h-full bg-slate-950 rounded-2xl p-4 border border-slate-930 flex flex-col justify-between text-white">
            <h4 className="font-display font-medium text-[11px] text-yellow-500 uppercase tracking-wider">MAPA INTERACTIVO DE COBERTURA</h4>
            
            {/* Outline map of Spain simulated */}
            <div className="flex-1 flex items-center justify-center p-2 my-2 bg-slate-900/60 rounded border border-slate-850">
              <svg viewBox="0 0 100 65" className="w-full h-32">
                <path 
                  d="M10,25 Q15,10 50,12 T90,20 Q85,45 60,50 T30,55 Z" 
                  fill="#1e293b" 
                  stroke="#475569" 
                  strokeWidth="0.8"
                />
                
                {/* Visual pins matching the active contacts indices */}
                <circle cx="65" cy="35" r="3.5" fill={type === 'levante' ? "#eab308" : "#475569"} className="animate-pulse" />
                <circle cx="45" cy="28" r="3.5" fill={type === 'centro' ? "#f97316" : "#475569"} className="animate-pulse" />
                <circle cx="80" cy="20" r="3.5" fill={type === 'cataluna' ? "#ef4444" : "#475569"} className="animate-pulse" />
                <circle cx="35" cy="48" r="3.5" fill={type === 'sur' ? "#10b981" : "#475569"} className="animate-pulse" />
                <circle cx="60" cy="22" r="3.5" fill={type === 'aragon' ? "#06b6d4" : "#475569"} className="animate-pulse" />
                <circle cx="35" cy="12" r="3.5" fill={type === 'norte' ? "#6366f1" : "#475569"} className="animate-pulse" />
                
                {/* Legend overlay info */}
                <text x="50" y="58" fill="white" fontSize="3" textAnchor="middle" fontWeight="bold">PRESENCIA COMPLETA NACIONAL</text>
              </svg>
            </div>
            
            <p className="text-[8px] font-mono text-slate-500 text-center leading-relaxed">
              * Más de 7 delegaciones unificadas para dar respuesta rápida vial de suministro a cualquier ayuntamiento o ministerio.
            </p>
          </div>
        );

      case "certificaciones":
        return (
          <div className="w-full h-full bg-white text-gray-900 rounded-2xl p-5 border border-gray-200 flex flex-col justify-between">
            <h4 className="font-display font-black text-xs text-gray-800 uppercase tracking-widest">SISTEMAS CERTIFICADOS DE GARANTÍA</h4>
            
            <div className="grid grid-cols-1 gap-2.5 my-3 text-[10px] font-mono">
              <div className="flex items-center gap-2 bg-gray-50 p-2 rounded border border-gray-200">
                <span className="text-yellow-600 font-bold text-xs">✔</span>
                <div>
                  <div className="font-bold text-gray-800">ISO 9001:2015</div>
                  <div className="text-[8.5px] text-gray-500">Gestión de Calidad Certificada</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-2 rounded border border-gray-200">
                <span className="text-yellow-600 font-bold text-xs">✔</span>
                <div>
                  <div className="font-bold text-gray-800">ISO 14001:2015</div>
                  <div className="text-[8.5px] text-gray-500">Gestión de Respeto Ambiental</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-2 rounded border border-gray-200">
                <span className="text-yellow-600 font-bold text-xs">✔</span>
                <div>
                  <div className="font-bold text-gray-800">OHSAS 18001 / ISO 45001</div>
                  <div className="text-[8.5px] text-gray-500">Seguridad y Salud Laboral en Obra</div>
                </div>
              </div>
            </div>

            <p className="text-[9px] font-mono text-gray-500">
              * Homologación reglamentaria de balizas y barreras con el sello oficial del Marcado CE europeo.
            </p>
          </div>
        );

      case "calidad":
      case "formacion":
      case "tecnologia":
        return (
          <div className="w-full h-full bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
            <h4 className="font-display font-extrabold text-xs text-yellow-400 uppercase tracking-wider">TECNOLOGÍA Y DESARROLLOS PACASA</h4>
            
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 my-4 flex flex-col gap-2 relative">
              <div className="text-[9.5px] font-mono text-cyan-400 font-bold">Laboratorio de Control e Inspección:</div>
              <ul className="text-[9px] font-mono text-slate-400 list-disc list-inside space-y-1">
                <li>Medición nocturna de retroreflectómetros calibrados.</li>
                <li>Equipos de corte plasma de acero de alta precisión CNC.</li>
                <li>Software integrado CAD / CAM para rotulación.</li>
                <li>Control de calidad destructivo ante pandeo y tracción.</li>
              </ul>
            </div>

            <p className="text-[8px] font-mono text-slate-500">
              PACASA invierte el 6.5% del beneficio anual neto en seguridad pasiva y desarrollo de materiales viales.
            </p>
          </div>
        );

      case "contacto-final":
        return (
          <div className="w-full h-full bg-slate-950 text-white rounded-3xl p-5 border border-slate-900 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b pb-2.5 border-slate-800">
              <span className="font-display font-medium text-[10px] text-yellow-500 uppercase tracking-widest">Sede Central de Castellón</span>
              <span className="text-[8px] font-mono text-slate-500">EST. desde 1972</span>
            </div>

            <div className="my-4 bg-slate-900 p-3 rounded-lg flex flex-col gap-2 text-[10px] font-mono">
              <div className="flex items-center gap-1.5 text-gray-300">
                <span className="text-yellow-500">📍</span>
                <span>Ronda Este s/n, 12003 Castellón, España</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-300">
                <span className="text-yellow-500">📞</span>
                <span>Teléfono General: +34 964 215 988</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-300">
                <span className="text-yellow-500">📠</span>
                <span>Fax General: +34 964 204 799</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-350">
                <span className="text-yellow-500">✉</span>
                <span>pacasa@pacasa.com · www.pacasa.com</span>
              </div>
            </div>

            <button 
              onClick={onOpenEstimator}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-sans font-black text-[11px] p-2.5 rounded-lg transition uppercase tracking-wider"
            >
              Iniciar Presupuesto Técnico Express
            </button>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-slate-100 rounded-2xl flex items-center justify-center p-6 border border-gray-300">
            <span className="text-gray-400 font-mono text-xs">PAGASA - Señalización Comercial</span>
          </div>
        );
    }
  };

  return (
    <div id="slide_deck_viewer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Search / filter bar / bento toggle */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 mb-6">
        
        {/* Toggle Grid vs Deck view */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setShowIndexGrid(!showIndexGrid)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-sans transition-all cursor-pointer ${
              showIndexGrid 
                ? "bg-yellow-500 text-slate-950 shadow" 
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>{showIndexGrid ? "Ver Diapositiva Única" : "Ver Todas (40 Diapositivas)"}</span>
          </button>
          
          <span className="font-sans text-xs text-gray-400 font-semibold uppercase tracking-wider hidden sm:inline">
            |
          </span>
          
          {!showIndexGrid && (
            <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-200">
              <span className="font-sans text-xs text-gray-500 font-bold">
                Tema de Diapositiva:
              </span>
              <span className="font-mono text-xs font-bold text-yellow-600 bg-white shadow-xs px-2 py-0.5 rounded ml-2 border border-gray-100">
                {getCategory(currentIndex)}
              </span>
            </div>
          )}
        </div>

        {/* Categories selector */}
        {showIndexGrid && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`flex-shrink-0 font-sans text-xs font-bold px-3 py-2 rounded-lg transition ${
                  filterCategory === cat.id 
                    ? "bg-gray-900 text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

      </div>

      <AnimatePresence mode="wait">
        {showIndexGrid ? (
          /* Bento index of all 40 slides */
          <motion.div 
            key="grid-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {getFilteredSlides().map((slide) => {
              const mainIndex = SLIDES_DATA.findIndex(s => s.id === slide.id);
              return (
                <div 
                  key={slide.id}
                  onClick={() => {
                    setCurrentIndex(mainIndex);
                    setShowIndexGrid(false);
                  }}
                  className={`bg-white rounded-2xl p-4 border transition-all duration-300 hover:shadow-md hover:border-yellow-500/50 cursor-pointer flex flex-col justify-between group h-52 relative ${
                    mainIndex === currentIndex ? "ring-2 ring-yellow-500 border-transparent" : "border-gray-200"
                  }`}
                >
                  {/* Decorative tag */}
                  <div className="absolute top-2 right-2 bg-gray-100 text-gray-500 text-[8px] font-mono px-1.5 py-0.5 rounded uppercase">
                    DP {slide.id}
                  </div>

                  <div>
                    <span className="font-mono text-xs text-yellow-600 font-bold tracking-wider uppercase block mb-1">
                      {getCategory(mainIndex)}
                    </span>
                    <h5 className="font-display font-black text-sm text-gray-900 leading-snug group-hover:text-yellow-600 transition-colors line-clamp-2">
                      {slide.title}
                    </h5>
                    <p className="font-sans text-xs text-gray-500 mt-2 line-clamp-3">
                      {slide.content[0]}
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-sans font-medium text-gray-400 border-t pt-2 mt-2 border-gray-100">
                    <span>{slide.metaLeft || "PACASA"}</span>
                    <span>Pag. {slide.id}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        ) : (
          /* Single slide theater presentation view */
          <motion.div 
            key="single-slide-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200/80 shadow-2xl rounded-3xl overflow-hidden"
          >
            {/* Standard slide layout viewer in 16:9 ratio style framing */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
              
              {/* Slide Left: Info details */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between bg-[#FAF9F5]/40 border-r border-gray-100">
                
                {/* Meta header */}
                <div className="flex items-center justify-between text-[11px] font-sans font-bold text-gray-400 uppercase tracking-widest border-b pb-4 border-gray-200/50">
                  <span id="slide_meta_left">{activeSlide.metaLeft || "Desde 1972"}</span>
                  <span id="slide_meta_right">{activeSlide.metaRight || "Señalización Vial"}</span>
                </div>

                {/* Main slide titles and explanation */}
                <div className="my-8 sm:my-12">
                  {activeSlide.category && (
                    <span className="inline-block bg-yellow-500/15 border border-yellow-500/20 text-[10px] text-yellow-800 font-sans font-extrabold uppercase px-2.5 py-1 rounded-md mb-3 tracking-wider">
                      {activeSlide.category}
                    </span>
                  )}
                  <h2 
                    id="slide_main_title"
                    className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-none mb-4 uppercase text-shadow-sm"
                  >
                    {activeSlide.title}
                  </h2>
                  {activeSlide.subtitle && (
                    <h3 className="font-serif italic text-base sm:text-lg text-yellow-700/90 font-medium mb-6">
                      {activeSlide.subtitle}
                    </h3>
                  )}
                  
                  {/* Bullet points array */}
                  <div className="space-y-4">
                    {activeSlide.content.map((bullet, bulletIdx) => (
                      <div key={bulletIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-1" />
                        <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed font-semibold">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer specs */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 text-[10px] font-mono text-gray-400">
                  <span className="uppercase text-yellow-600 font-bold">PACASA Movilidad S.L.</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded font-bold text-slate-600">
                    Diapositiva {activeSlide.id} / 40
                  </span>
                  <span>www.pacasa.com</span>
                </div>

              </div>

              {/* Slide Right: Visual Illustration dashboard area */}
              <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-10 flex items-center justify-center border-t lg:border-t-0 border-gray-100">
                <div className="w-full h-full max-w-lg aspect-square flex items-center justify-center">
                  {renderIllustration(activeSlide.illustrationType)}
                </div>
              </div>

            </div>

            {/* Playback action bar */}
            <div className="bg-slate-900 text-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
              
              {/* Play / pause / previous / next */}
              <div className="flex items-center gap-3.5">
                <button
                  onClick={handlePrev}
                  className="bg-slate-800 hover:bg-slate-705 p-2 rounded-lg text-gray-300 hover:text-white transition cursor-pointer"
                  title="Diapositiva Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`p-3 rounded-full shadow-lg transition-all text-slate-950 cursor-pointer ${
                    isPlaying 
                      ? "bg-amber-400 hover:bg-amber-500 hover:scale-105" 
                      : "bg-white hover:bg-gray-100 hover:scale-105"
                  }`}
                  title={isPlaying ? "Pausar Autoreproducir" : "Encender Autoreproducir"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-slate-950 fill-slate-950" />
                  ) : (
                    <Play className="w-5 h-5 text-slate-950 fill-slate-950" />
                  )}
                </button>

                <button
                  onClick={handleNext}
                  className="bg-slate-800 hover:bg-slate-705 p-2 rounded-lg text-gray-300 hover:text-white transition cursor-pointer"
                  title="Siguiente Diapositiva"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <span className="font-mono text-xs text-slate-400 ml-2 hidden sm:inline">
                  {isPlaying ? "Autoplay Encendido (5s)" : "Modo Manual (Teclas de flechas ← → activas)"}
                </span>
              </div>

              {/* Progress track slide steps ticks */}
              <div className="flex-1 max-w-xs mx-4 hidden lg:block">
                <div className="h-1 bg-slate-800 rounded-full w-full relative">
                  <div 
                    className="h-full bg-yellow-500 rounded-full transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / SLIDES_DATA.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Fast index scroll jump bar */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-slate-400 uppercase mr-1">Ir a:</span>
                <select
                  value={currentIndex}
                  onChange={(e) => setCurrentIndex(Number(e.target.value))}
                  className="bg-slate-800 text-white font-sans text-xs px-2.5 py-1.5 rounded-md border border-slate-700/80 focus:outline-none focus:border-yellow-500"
                >
                  {SLIDES_DATA.map((slide, sIdx) => (
                    <option key={slide.id} value={sIdx}>
                      Diap. {slide.id}: {slide.title.substring(0, 24)}...
                    </option>
                  ))}
                </select>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
