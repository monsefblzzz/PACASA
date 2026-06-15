import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { SlideDeck } from "./components/SlideDeck";
import { AppLanding } from "./components/AppLanding";
import { Estimator } from "./components/Estimator";
import { SLIDES_DATA } from "./types";
import { 
  Compass, Presentation, Award, ShieldAlert, PhoneCall, HelpCircle, 
  ChevronRight, Building2, Truck, Ruler, Milestone, ArrowRightLeft
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [appMode, setAppMode] = useState<"website" | "slides">("website");
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [estimatorOpen, setEstimatorOpen] = useState<boolean>(false);
  const [selectedZoneId, setSelectedZoneId] = useState<string>("levante");

  // Synchronize the selected contact zone from Slide Deck Map to website state map
  useEffect(() => {
    const activeSlide = SLIDES_DATA[currentSlideIndex];
    if (activeSlide && activeSlide.illustrationType) {
      const type = activeSlide.illustrationType;
      // If the slide is one of the zone contacts, sync selected zone
      if (["levante", "centro", "aragon", "cataluna", "sur", "canarias", "norte"].includes(type)) {
        setSelectedZoneId(type);
      }
    }
  }, [currentSlideIndex]);

  // Handle smooth navigation anchor jumps inside Landing Page Mode
  const handleGoToCategory = (category: string) => {
    if (appMode !== "website") {
      setAppMode("website");
      // Delay selection to allow section rendering in DOM
      setTimeout(() => {
        executeScroll(category);
      }, 100);
    } else {
      executeScroll(category);
    }
  };

  const executeScroll = (category: string) => {
    let targetId = "";
    if (category === "nosotros") targetId = "section_nosotros";
    else if (category === "servicios") targetId = "interactive_catalog_widget";
    else if (category === "proyectos") targetId = "section_proyectos";
    else if (category === "cobertura") targetId = "section_cobertura";
    else if (category === "contacto") targetId = "section_contacto";

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navigateToSlideDirectly = (slideIndex: number) => {
    setCurrentSlideIndex(slideIndex);
    setAppMode("slides");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FCFCFA] flex flex-col justify-between selection:bg-yellow-500/20 selection:text-slate-950">
      
      {/* Navbar orchestration header */}
      <Navbar 
        appMode={appMode}
        setAppMode={(mode) => setAppMode(mode)}
        currentSlideIndex={currentSlideIndex}
        goToCategory={handleGoToCategory}
        onOpenEstimator={() => setEstimatorOpen(true)}
      />

      {/* Mode Status Alert bar for accessibility */}
      <div className="bg-slate-900 text-white border-b border-slate-800 text-[11px] font-sans font-semibold py-2.5 px-4 text-center tracking-tight flex items-center justify-center gap-2">
        <Milestone className="w-3.5 h-3.5 text-yellow-500" />
        {appMode === "website" ? (
          <span>
            Estás explorando el <strong>Sitio Web Corporativo</strong>. Puedes alternar a la
            <button 
              onClick={() => setAppMode("slides")} 
              className="text-yellow-500 underline font-bold ml-1.5 hover:text-yellow-400 cursor-pointer"
            >
              Presentación de 40 Diapositivas
            </button>
          </span>
        ) : (
          <span>
            Estás en el <strong>Modo Presentación (40 Diapositivas)</strong>. Puedes navegar con las teclas de dirección ← → o volver al
            <button 
              onClick={() => setAppMode("website")} 
              className="text-yellow-500 underline font-bold ml-1.5 hover:text-yellow-400 cursor-pointer"
            >
              Sitio Corporativo
            </button>
          </span>
        )}
      </div>

      {/* Main Container viewport */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {appMode === "website" ? (
            <motion.div
              key="landing-page-component"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              {/* Main landing sections custom built from 40 slides */}
              <div id="section_nosotros">
                <AppLanding 
                  onOpenEstimator={() => setEstimatorOpen(true)}
                  onNavigateToSlide={navigateToSlideDirectly}
                  selectedZoneId={selectedZoneId}
                  setSelectedZoneId={setSelectedZoneId}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="slides-deck-component"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
            >
              {/* PowerPoint replica presentation deck player */}
              <SlideDeck 
                currentIndex={currentSlideIndex}
                setCurrentIndex={setCurrentSlideIndex}
                onOpenEstimator={() => setEstimatorOpen(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating technical calculator panel (Presupuesto Rápido) */}
      <AnimatePresence>
        {estimatorOpen && (
          <Estimator onClose={() => setEstimatorOpen(false)} />
        )}
      </AnimatePresence>

      {/* Dynamic CTA Footer Section */}
      <footer className="bg-white border-t border-gray-150 py-10 text-center text-xs font-sans text-gray-500 font-semibold shadow-inner">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
            <span className="text-gray-600 font-bold uppercase tracking-wider">
              PACASA Movilidad S.L. desde 1972
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleGoToCategory("contacto")}
              className="text-gray-400 hover:text-yellow-600 transition"
            >
              Fomento España
            </button>
            <span>·</span>
            <button
              onClick={() => setEstimatorOpen(true)}
              className="text-gray-450 hover:text-yellow-600 transition underline"
            >
              Estudio de Pliegos
            </button>
            <span>·</span>
            <span>Ronda Este s/n, Castellón, España</span>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
