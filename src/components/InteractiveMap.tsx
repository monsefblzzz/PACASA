import React, { useState } from "react";
import { ZONES_CONTACT_DATA, ZoneContact } from "../types";
import { Phone, Mail, Clock, Shield, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Spain from "@svg-maps/spain";

interface InteractiveMapProps {
  selectedZoneId?: string;
  onSelectZone?: (id: string) => void;
}

const regionToZone: Record<string, string> = {
  "andalusia": "sur",
  "aragon": "aragon",
  "asturias": "norte",
  "balearic-islands": "levante",
  "basque-country": "norte",
  "canary-islands": "canarias",
  "cantabria": "norte",
  "castile-and-leon": "centro",
  "castile-la-mancha": "centro",
  "catalonia": "cataluna",
  "extremadura": "sur",
  "galicia": "norte",
  "la-rioja": "norte",
  "madrid": "centro",
  "murcia": "levante",
  "navarre": "norte",
  "valencia": "levante"
};

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  selectedZoneId = "levante",
  onSelectZone
}) => {
  const [internalZoneId, setInternalZoneId] = useState<string>(selectedZoneId);

  const activeId = onSelectZone ? selectedZoneId : internalZoneId;
  const setActiveId = (id: string) => {
    if (onSelectZone) {
      onSelectZone(id);
    } else {
      setInternalZoneId(id);
    }
  };

  const activeZone = ZONES_CONTACT_DATA.find((z) => z.id === activeId) || ZONES_CONTACT_DATA[0];

  return (
    <div id="cobertura_map_section" className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Map column (Left) */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-slate-50 border border-gray-100 p-6 rounded-2xl relative min-h-[380px]">
          <div>
            <span className="font-mono text-xs font-bold text-yellow-600 uppercase tracking-widest block mb-1">
              Presencia en toda España S.L.
            </span>
            <h4 className="font-display font-black text-xl sm:text-2xl text-gray-900 uppercase">
              COBERTURA NACIONAL COORDINADA
            </h4>
            <p className="font-sans text-xs sm:text-sm text-gray-500 mt-2">
              Haz clic sobre cualquier delegación para filtrar el equipo técnico especializado de la zona.
            </p>
          </div>

          {/* Realistic geographic map of Spain */}
          <div className="my-6 relative flex items-center justify-center">
            <svg 
              viewBox={Spain.viewBox}
              className="w-full h-auto max-w-xl selection:bg-transparent"
              style={{ maxHeight: "400px" }}
            >
              <g className="spain-map">
                {Spain.locations.map((loc) => {
                  const zoneId = regionToZone[loc.id] || "levante";
                  const isActive = zoneId === activeId;
                  const zoneData = ZONES_CONTACT_DATA.find(z => z.id === zoneId);
                  const color = zoneData ? zoneData.color : "#cbd5e1";

                  return (
                    <path
                      key={loc.id}
                      id={loc.id}
                      name={loc.name}
                      d={loc.path}
                      fill={isActive ? color : "#f1f5f9"}
                      stroke="#cbd5e1"
                      strokeWidth="1"
                      opacity={isActive ? 1 : 0.6}
                      className="cursor-pointer transition-all duration-300 hover:opacity-80"
                      onClick={() => setActiveId(zoneId)}
                    >
                      <title>{loc.name}</title>
                    </path>
                  );
                })}
              </g>
            </svg>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
            {ZONES_CONTACT_DATA.map((z) => (
              <button
                key={z.id}
                onClick={() => setActiveId(z.id)}
                className={`font-sans text-xs font-bold px-2.5 py-1.5 rounded-lg border transition ${
                  z.id === activeId
                    ? "bg-gray-900 border-gray-900 text-white shadow"
                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {z.name.replace("Zona ", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Info Column (Right) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeZone.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div 
                    className="w-4 h-4 rounded-full border border-white shadow-sm"
                    style={{ backgroundColor: activeZone.color }}
                  />
                  <span className="font-mono text-xs font-black uppercase text-yellow-600 tracking-wider">
                    Delegación Territorial
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl text-gray-900 leading-none uppercase mb-2">
                  {activeZone.name}
                </h3>
                <p className="font-serif italic text-sm text-yellow-800 font-medium mb-6">
                  {activeZone.cobertura}
                </p>

                {/* Scope and services */}
                {activeZone.servicios && (
                  <div className="mb-6 bg-white p-4 rounded-xl border border-gray-200/60 shadow-sm">
                    <span className="font-sans text-[10px] font-extrabold uppercase text-gray-400 tracking-wider block mb-1">
                      Servicios Locales Disponibles
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                      {activeZone.servicios}
                    </p>
                  </div>
                )}

                {/* Scope lists */}
                <div className="mb-6">
                  <span className="font-sans text-[10px] font-extrabold uppercase text-gray-400 tracking-wider block mb-2">
                    Provincias bajo Cobertura Directa
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeZone.regions.map((reg, rIdx) => (
                      <span 
                        key={rIdx} 
                        className="bg-gray-200/50 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md border border-gray-200"
                      >
                        {reg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action and Phone/Email specs */}
              <div className="border-t border-gray-200/80 pt-6 mt-6">
                <div className="space-y-3.5 mb-6 text-sm font-sans text-gray-700">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-gray-400 font-medium block">Teléfono de Atención</span>
                      <a href={`tel:${activeZone.phone.replace(/\s/g, "")}`} className="font-black text-gray-900 hover:text-yellow-600 transition">
                        {activeZone.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-gray-400 font-medium block">Correo Electrónico Directo</span>
                      <a href={`mailto:${activeZone.email}`} className="font-bold underline text-gray-900 hover:text-yellow-600 transition">
                        {activeZone.email}
                      </a>
                    </div>
                  </div>

                  {activeZone.schedule && (
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                      <div>
                        <span className="text-xs text-gray-400 font-medium block">Horario de Oficina</span>
                        <span className="font-semibold text-gray-800">{activeZone.schedule}</span>
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href={`mailto:${activeZone.email}?subject=Solicitud de Señalización - Zona ${activeZone.name}`}
                  className="w-full bg-slate-900 hover:bg-yellow-600 text-white font-sans font-extrabold text-xs text-center py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                  <span>Contactar Delegado de Zona</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
