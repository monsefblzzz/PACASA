import React from "react";
import { Layers, Presentation, Compass, Eye, Map, PhoneCall, ShoppingBag } from "lucide-react";

interface NavbarProps {
  appMode: "website" | "slides";
  setAppMode: (mode: "website" | "slides") => void;
  currentSlideIndex?: number;
  goToCategory?: (category: string) => void;
  onOpenEstimator?: () => void;
}

export const PacasaLogo: React.FC<{ className?: string; size?: number; showText?: boolean }> = ({ 
  className = "", 
  size = 48, 
  showText = true 
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG rendering of the precise PACASA Logo from the prompt PNG */}
      <svg 
        id="pacasa_brand_logo"
        width={size} 
        height={size * 1.05} 
        viewBox="0 0 100 105" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        {/* Black left vertical loop representing part of the sign/P */}
        <path 
          d="M40 95V45L55 25H40L10 45V85L30 15L60 0L90 15V32L80 20L40 45" 
          fill="#111111" 
        />
        {/* Right golden poly segment completion for letter shape P */}
        <path 
          d="M90 15L90 38V85L70 95L50 80V45H90" 
          fill="#eab308" 
          opacity="0.25"
        />
        <path 
          d="M90 20L90 40L70 60H50L90 20" 
          fill="#eab308" 
        />
        
        {/* Center upward Golden Arrow & Asphalt Strip */}
        <g id="road_arrow_group">
          {/* Black roadway bed */}
          <path 
            d="M10 100L40 45V100H10Z" 
            fill="#111111" 
          />
          {/* Dashed white center line for the road */}
          <line x1="25" y1="100" x2="25" y2="85" stroke="white" strokeWidth="3" strokeDasharray="5,5" />
          <line x1="33" y1="75" x2="33" y2="65" stroke="white" strokeWidth="2" />
          
          {/* Ascending yellow/gold highway stripe merging into vertical arrow */}
          <path 
            d="M10 85L58 35L75 40L83 15L56 12L62 25L10 70V85Z" 
            fill="#eab308" 
          />
        </g>
        
        {/* Red Warning Triangle top beacon - exactly as the iconic red accent pin at the top apex of the inner P */}
        <polygon 
          points="50,15 62,32 38,32" 
          fill="#ef4444" 
          strokeWidth="1.5"
          stroke="#111111"
        />
      </svg>
      
      {showText && (
        <div className="flex flex-col">
          <span 
            id="pacasa_text_title"
            className="font-display text-2xl font-black text-gray-900 leading-none tracking-tight"
          >
            PACASA
          </span>
          <span 
            className="font-sans text-[10px] font-bold tracking-[0.25em] text-gray-500 uppercase leading-none mt-1"
          >
            MOVILIDAD S.L.
          </span>
        </div>
      )}
    </div>
  );
};

export const Navbar: React.FC<NavbarProps> = ({
  appMode,
  setAppMode,
  currentSlideIndex,
  goToCategory,
  onOpenEstimator
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo left */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => setAppMode("website")}>
          <PacasaLogo size={42} />
        </div>

        {/* Dynamic Navigation list based on Mode client chooses */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {appMode === "website" ? (
            <>
              <button 
                onClick={() => goToCategory && goToCategory("nosotros")} 
                className="font-sans text-sm font-semibold text-gray-600 hover:text-yellow-600 transition-colors cursor-pointer"
              >
                Quiénes Somos
              </button>
              <button 
                onClick={() => goToCategory && goToCategory("servicios")} 
                className="font-sans text-sm font-semibold text-gray-600 hover:text-yellow-600 transition-colors cursor-pointer"
              >
                Catálogo Técnico
              </button>
              <button 
                onClick={() => goToCategory && goToCategory("proyectos")} 
                className="font-sans text-sm font-semibold text-gray-600 hover:text-yellow-600 transition-colors cursor-pointer"
              >
                Proyectos
              </button>
              <button 
                onClick={() => goToCategory && goToCategory("cobertura")} 
                className="font-sans text-sm font-semibold text-gray-600 hover:text-yellow-600 transition-colors cursor-pointer"
              >
                Cobertura España
              </button>
              <button 
                onClick={() => goToCategory && goToCategory("contacto")} 
                className="font-sans text-sm font-semibold text-gray-600 hover:text-yellow-600 transition-colors cursor-pointer"
              >
                Delegaciones
              </button>
            </>
          ) : (
            <>
              <span className="font-sans text-xs font-semibold uppercase text-gray-500 tracking-wider flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-md">
                <Presentation className="w-3.5 h-3.5 text-yellow-600" />
                Diapositiva Actual: {currentSlideIndex !== undefined ? currentSlideIndex + 1 : 1} / 40
              </span>
              <button 
                onClick={() => goToCategory && goToCategory("index")} 
                className="font-sans text-sm font-medium text-gray-600 hover:text-yellow-600 transition"
              >
                Índice de Diapositivas
              </button>
            </>
          )}
        </nav>

        {/* Buttons right - selector of Presentation / Website & Estimator Tool */}
        <div className="flex items-center gap-3">
          
          {/* Estimate Builder button */}
          <button
            onClick={onOpenEstimator}
            className="flex items-center gap-2 bg-gray-950 hover:bg-yellow-600 text-white font-sans text-xs sm:text-sm font-bold tracking-tight px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.02]"
          >
            <ShoppingBag className="w-4 h-4 text-yellow-500 hover:text-white" />
            <span>Presupuesto Rápido</span>
          </button>

          {/* Toggle Switch */}
          <div className="bg-gray-100 p-1 rounded-xl flex items-center shadow-inner border border-gray-200">
            <button
              id="switch_web_mode"
              onClick={() => setAppMode("website")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-sans transition-all cursor-pointer ${
                appMode === "website"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              title="Ver Landing Page Corporativa"
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Corporativo</span>
            </button>
            <button
              id="switch_slide_mode"
              onClick={() => setAppMode("slides")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-sans transition-all cursor-pointer ${
                appMode === "slides"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              title="Ver Presentación de 40 Diapositivas"
            >
              <Presentation className="w-3.5 h-3.5 text-yellow-500" />
              <span className="hidden sm:inline">Diapositivas</span>
            </button>
          </div>

        </div>
        
      </div>
    </header>
  );
};
