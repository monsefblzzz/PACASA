import React, { useState } from "react";
import { PRODUCTS_CATALOG, ProductItem } from "../types";
import { 
  Compass, ShieldAlert, Award, Layers, Ruler, FileText, ListFilter, HelpCircle
} from "lucide-react";
import { motion } from "motion/react";

export const CatalogoSecciones: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"signs" | "barriers" | "markings">("signs");
  const [selectedSpecProduct, setSelectedSpecProduct] = useState<string>("v-r2");

  const activeProduct = PRODUCTS_CATALOG.find(p => p.id === selectedSpecProduct) || PRODUCTS_CATALOG[0];

  return (
    <div id="interactive_catalog_widget" className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden my-12">
      
      {/* Tabs navigation */}
      <div className="bg-gray-900 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-800">
        <div>
          <span className="font-mono text-xs font-bold text-yellow-500 uppercase tracking-widest block">
            Especificaciones UNE / CE
          </span>
          <h4 className="font-display font-black text-lg sm:text-lg text-white uppercase mt-0.5">
            Explorador Técnico Interactivo
          </h4>
        </div>

        <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => {
              setActiveTab("signs");
              setSelectedSpecProduct("v-r2");
            }}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === "signs" ? "bg-yellow-500 text-slate-950 shadow" : "text-gray-400 hover:text-white"
            }`}
          >
            Señales Homologadas
          </button>
          
          <button
            onClick={() => {
              setActiveTab("barriers");
              setSelectedSpecProduct("c-bs");
            }}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === "barriers" ? "bg-yellow-500 text-slate-950 shadow" : "text-gray-400 hover:text-white"
            }`}
          >
            Guardarraíles y Barandillas
          </button>

          <button
            onClick={() => {
              setActiveTab("markings");
              setSelectedSpecProduct("h-transv");
            }}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === "markings" ? "bg-yellow-500 text-slate-950 shadow" : "text-gray-400 hover:text-white"
            }`}
          >
            Señalización Horizontal
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Specific Item Details Specs (Col-Span-5) */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-slate-50 border border-gray-100 p-6 rounded-2xl">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-yellow-500/10 text-yellow-800 text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 border border-yellow-500/15 rounded">
                NORMA CE EN-12899
              </span>
            </div>

            <h5 className="font-display font-black text-xl text-gray-900 leading-snug">
              {activeProduct.name}
            </h5>
            
            <p className="font-sans text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
              {activeProduct.description}
            </p>

            {activeProduct.specs && (
              <div className="mt-6 space-y-4">
                <span className="font-sans text-[10px] font-extrabold uppercase text-gray-400 tracking-wider block">
                  Ensayos y Tolerancias Técnicas
                </span>
                
                {activeProduct.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="bg-white p-3 rounded-xl border border-gray-200/50 shadow-xs flex items-start gap-2.5">
                    <Ruler className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <span className="font-mono text-xs text-gray-700 font-medium leading-relaxed">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-slate-900 text-white p-4 rounded-xl mt-6">
            <div className="flex items-center gap-2.5">
              <Award className="w-4.5 h-4.5 text-yellow-400" />
              <div>
                <span className="text-[9px] text-gray-400 leading-none">Certificado Técnico</span>
                <span className="font-mono text-xs font-bold block mt-0.5 text-yellow-400 uppercase">
                  Nacional Clase A+ (1972)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Renderer Configuration Simulation (Col-Span-8) */}
        <div className="lg:col-span-8 bg-slate-950 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-white relative min-h-[350px]">
          
          {/* Active selection visualization rendering */}
          <div className="flex-1 flex items-center justify-center p-4 bg-slate-900 rounded-xl border border-slate-800 my-4 shadow-inner relative overflow-hidden min-h-[220px]">
            <div className="absolute inset-0 bg-radial-gradient from-yellow-500/10 via-transparent to-transparent pointer-events-none" />
            
            {activeTab === "signs" ? (
              <div className="flex flex-col items-center">
                {selectedSpecProduct === "v-r2" ? (
                  <svg viewBox="0 0 100 100" className="w-36 h-36 filter drop-shadow-[0_4px_12px_rgba(239,68,68,0.3)]">
                    <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#ef4444" stroke="white" strokeWidth="5.5" />
                    <text x="50" y="63" fill="white" fontSize="26" fontWeight="950" textAnchor="middle" fontFamily="monospace">STOP</text>
                  </svg>
                ) : selectedSpecProduct === "v-obras" ? (
                  <svg viewBox="0 0 100 90" className="w-36 h-36 filter drop-shadow-[0_4px_12px_rgba(245,158,11,0.3)] animate-pulse">
                    <polygon points="50,5 98,85 2,85" fill="#ef4444" stroke="#111" strokeWidth="1.5" />
                    <polygon points="50,15 88,80 12,80" fill="#f59e0b" />
                    {/* Worker symbol */}
                    <path d="M50,32 A 4.5 4.5 0 1 1 50,41 A 4.5 4.5 0 1 1 50,32 Z" fill="#111" />
                    <line x1="50" y1="41" x2="50" y2="60" stroke="#111" strokeWidth="4" />
                    <line x1="50" y1="48" x2="35" y2="45" stroke="#111" strokeWidth="3.5" />
                    <line x1="50" y1="48" x2="65" y2="52" stroke="#111" strokeWidth="3.5" />
                    <line x1="50" y1="60" x2="42" y2="76" stroke="#111" strokeWidth="3.5" />
                    <line x1="50" y1="60" x2="58" y2="76" stroke="#111" strokeWidth="3.5" />
                  </svg>
                ) : (
                  /* TS-210 destination board plate */
                  <div className="bg-blue-700 p-6 rounded-lg border-4 border-white shadow-xl max-w-sm text-center">
                    <span className="font-mono text-cyan-200 text-xs font-bold leading-none uppercase">Castellón Nules</span>
                    <h5 className="font-display font-medium text-2xl text-white tracking-widest my-1 uppercase">TOLEDO</h5>
                    <div className="flex justify-between items-center text-xs font-mono text-blue-100 mt-4 border-t pt-2 border-blue-500">
                      <span>N-340 Autovía</span>
                      <span className="text-yellow-400 font-bold">250 km ↑</span>
                    </div>
                  </div>
                )}
              </div>
            ) : activeTab === "barriers" ? (
              <div className="w-full max-w-lg">
                {selectedSpecProduct === "c-bs" ? (
                  /* Simple wave profile diagram */
                  <svg viewBox="0 0 100 45" className="w-full h-32">
                    <rect x="5" y="15" width="90" height="15" fill="#475569" rx="1.5" />
                    {/* Posts */}
                    <line x1="20" y1="15" x2="20" y2="42" stroke="#334155" strokeWidth="5" />
                    <line x1="50" y1="15" x2="50" y2="42" stroke="#334155" strokeWidth="5" />
                    <line x1="80" y1="15" x2="80" y2="42" stroke="#334155" strokeWidth="5" />
                    {/* Wave profile detail */}
                    <line x1="5" y1="18" x2="95" y2="18" stroke="#cbd5e1" strokeWidth="1.5" />
                    <line x1="5" y1="21" x2="95" y2="21" stroke="#cbd5e1" strokeWidth="1" />
                    <line x1="5" y1="27" x2="95" y2="27" stroke="#cbd5e1" strokeWidth="1.5" />
                    <text x="50" y="11" fill="white" fontSize="3" fontStyle="italic" textAnchor="middle">BARRERA DE PERFIL ACERO W CE EN 1317</text>
                  </svg>
                ) : selectedSpecProduct === "c-bd" ? (
                  /* Double wave profile */
                  <svg viewBox="0 0 100 45" className="w-full h-32">
                    {/* Symmetrical wave rails */}
                    <rect x="5" y="12" width="90" height="12" fill="#334155" rx="1" />
                    <rect x="5" y="24" width="90" height="12" fill="#475569" rx="1" />
                    
                    {/* Truss center bolts and connectors */}
                    <line x1="15" y1="12" x2="15" y2="42" stroke="#1e293b" strokeWidth="6" />
                    <line x1="50" y1="12" x2="50" y2="42" stroke="#1e293b" strokeWidth="6" />
                    <line x1="85" y1="12" x2="85" y2="42" stroke="#1e293b" strokeWidth="6" />
                    
                    {/* Galvanized reflection highlights */}
                    <line x1="5" y1="15" x2="95" y2="15" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="5" y1="30" x2="95" y2="30" stroke="#cbd5e1" strokeWidth="1" />
                    <text x="50" y="8" fill="white" fontSize="3" fontStyle="italic" textAnchor="middle">BARRERA DE SEGURIDAD DOBLE BMSNC ONDA H</text>
                  </svg>
                ) : (
                  /* Motorcyclists SPM lower barrier protection */
                  <svg viewBox="0 0 100 45" className="w-full h-32">
                    {/* W-profiler */}
                    <rect x="5" y="10" width="90" height="12" fill="#475569" rx="1" />
                    <line x1="5" y1="16" x2="95" y2="16" stroke="#94a3b8" strokeWidth="1" />
                    
                    {/* Lower protection curved smooth panel */}
                    <rect x="5" y="26" width="90" height="10" fill="#f59e0b" rx="2" opacity="0.95" />
                    
                    {/* Heavy Posts */}
                    <line x1="25" y1="10" x2="25" y2="42" stroke="#334155" strokeWidth="5.5" />
                    <line x1="75" y1="10" x2="75" y2="42" stroke="#334155" strokeWidth="5.5" />
                    
                    {/* Pointers */}
                    <text x="50" y="32" fill="black" fontSize="3.5" fontWeight="bold" textAnchor="middle">PROTECCIÓN SPM ANTICORTE MOTORISTAS</text>
                  </svg>
                )}
              </div>
            ) : (
              <div className="w-full max-w-lg flex flex-col items-center">
                {selectedSpecProduct === "h-transv" ? (
                  /* Alignments transverse schema */
                  <svg viewBox="0 0 100 45" className="w-full h-28">
                    <rect x="5" y="5" width="90" height="35" fill="#1e293b" />
                    <line x1="5" y1="22" x2="95" y2="22" stroke="white" strokeWidth="1.2" strokeDasharray="5,5" />
                    
                    {/* Dynamic transverse warning lines */}
                    <line x1="30" y1="10" x2="30" y2="35" stroke="#fbbf24" strokeWidth="3.5" />
                    <line x1="42" y1="10" x2="42" y2="35" stroke="#fbbf24" strokeWidth="3.5" />
                    <line x1="54" y1="10" x2="54" y2="35" stroke="#fbbf24" strokeWidth="3.5" />
                    <line x1="66" y1="10" x2="66" y2="35" stroke="#fbbf24" strokeWidth="3.5" />

                    <text x="53" y="19" fill="#fbbf24" fontSize="2.8" fontWeight="bold" textAnchor="middle">PINTURA TERMOPLÁSTICA EN CALIENTE RA2</text>
                    <text x="50" y="43" fill="white" fontSize="3.5" fontStyle="italic" textAnchor="middle">SECUENCIA DE REDUCCIÓN DE VELOCIDAD INDUCIDA</text>
                  </svg>
                ) : selectedSpecProduct === "h-acc" ? (
                  /* Disabled accessibility rectangle S-A1 box logo */
                  <div className="w-24 h-24 bg-blue-600 rounded-xl border-4 border-white flex flex-col items-center justify-center shadow-lg animate-pulse">
                    <span className="text-white text-5xl">♿</span>
                  </div>
                ) : (
                  /* Simple roadway with markings */
                  <svg viewBox="0 0 100 45" className="w-full h-28">
                    <rect x="5" y="5" width="90" height="35" fill="#2d3748" />
                    {/* Asphalt white dashes */}
                    <line x1="5" y1="22" x2="95" y2="22" stroke="white" strokeWidth="2.5" strokeDasharray="10,8" />
                    <line x1="5" y1="10" x2="95" y2="10" stroke="#f59e0b" strokeWidth="1.2" />
                    <line x1="5" y1="34" x2="95" y2="34" stroke="#f59e0b" strokeWidth="1.2" />
                    <text x="50" y="42" fill="white" fontSize="3" fontStyle="italic" textAnchor="middle">MARCAS VIALES CON MICROESFERAS DE VIDRIO</text>
                  </svg>
                )}
              </div>
            )}

          </div>

          {/* Sibling selectors below visualizer depending on context */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-800 pt-5">
            <span className="font-mono text-[9.5px] text-gray-500 uppercase tracking-wider block">
              Seleccionar Producto de Catálogo:
            </span>

            <div className="flex flex-wrap gap-2">
              {activeTab === "signs" ? (
                <>
                  <button 
                    onClick={() => setSelectedSpecProduct("v-r2")}
                    className={`font-sans text-xs font-bold px-3 py-1.5 rounded-lg border transition ${
                      selectedSpecProduct === "v-r2" ? "bg-white text-slate-950" : "bg-slate-900 text-gray-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    R-2 STOP
                  </button>
                  <button 
                    onClick={() => setSelectedSpecProduct("v-obras")}
                    className={`font-sans text-xs font-bold px-3 py-1.5 rounded-lg border transition ${
                      selectedSpecProduct === "v-obras" ? "bg-white text-slate-950" : "bg-slate-900 text-gray-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    Peligro Obras
                  </button>
                  <button 
                    onClick={() => setSelectedSpecProduct("v-ts210")}
                    className={`font-sans text-xs font-bold px-3 py-1.5 rounded-lg border transition ${
                      selectedSpecProduct === "v-ts210" ? "bg-white text-slate-950" : "bg-slate-900 text-gray-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    TS-210 Cartel
                  </button>
                </>
              ) : activeTab === "barriers" ? (
                <>
                  <button 
                    onClick={() => setSelectedSpecProduct("c-bs")}
                    className={`font-sans text-xs font-bold px-3 py-1.5 rounded-lg border transition ${
                      selectedSpecProduct === "c-bs" ? "bg-white text-slate-950" : "bg-slate-900 text-gray-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    Barrera Simple
                  </button>
                  <button 
                    onClick={() => setSelectedSpecProduct("c-bd")}
                    className={`font-sans text-xs font-bold px-3 py-1.5 rounded-lg border transition ${
                      selectedSpecProduct === "c-bd" ? "bg-white text-slate-950" : "bg-slate-900 text-gray-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    Doble BMSNC
                  </button>
                  <button 
                    onClick={() => setSelectedSpecProduct("c-sm")}
                    className={`font-sans text-xs font-bold px-3 py-1.5 rounded-lg border transition ${
                      selectedSpecProduct === "c-sm" ? "bg-white text-slate-950" : "bg-slate-900 text-gray-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    Protección SPM
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => setSelectedSpecProduct("h-transv")}
                    className={`font-sans text-xs font-bold px-3 py-1.5 rounded-lg border transition ${
                      selectedSpecProduct === "h-transv" ? "bg-white text-slate-950" : "bg-slate-900 text-gray-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    Barra Transversal
                  </button>
                  <button 
                    onClick={() => setSelectedSpecProduct("h-acc")}
                    className={`font-sans text-xs font-bold px-3 py-1.5 rounded-lg border transition ${
                      selectedSpecProduct === "h-acc" ? "bg-white text-slate-950" : "bg-slate-900 text-gray-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    Plaza Accesible S-A1
                  </button>
                  <button 
                    onClick={() => setSelectedSpecProduct("h-marcas")}
                    className={`font-sans text-xs font-bold px-3 py-1.5 rounded-lg border transition ${
                      selectedSpecProduct === "h-marcas" ? "bg-white text-slate-950" : "bg-slate-900 text-gray-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    Marcas Acrílicas
                  </button>
                </>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
