import React, { useRef } from "react";
import { ZONES_CONTACT_DATA, OUTSTANDING_PROJECTS } from "../types";
import { InteractiveMap } from "./InteractiveMap";
import { CatalogoSecciones } from "./CatalogoSecciones";
import { 
  Building2, ShieldAlert, Award, Compass, Truck, Users, Cpu, FileCheck2, 
  HelpCircle, ChevronRight, Sparkles, MapPin, Gauge, ShieldCheck, Mail, Phone, Clock
} from "lucide-react";
import { motion } from "motion/react";

interface AppLandingProps {
  onOpenEstimator: () => void;
  onNavigateToSlide: (slideId: number) => void;
  selectedZoneId: string;
  setSelectedZoneId: (id: string) => void;
}

export const AppLanding: React.FC<AppLandingProps> = ({
  onOpenEstimator,
  onNavigateToSlide,
  selectedZoneId,
  setSelectedZoneId
}) => {
  const nosotrosRef = useRef<HTMLDivElement>(null);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const proyectosRef = useRef<HTMLDivElement>(null);
  const coberturaRef = useRef<HTMLDivElement>(null);
  const contactoRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="pacasa_corporate_landing" className="bg-[#FCFCFA] text-gray-900 overflow-x-hidden selection:bg-yellow-500/30 selection:text-gray-950">
      
      {/* 1. Hero / Slide #1 Representation */}
      <section className="relative bg-white border-b border-gray-100 overflow-hidden py-16 sm:py-24">
        {/* Ambient subtle background grid or patterns */}
        <div className="absolute inset-0 bg-radial-gradient from-yellow-500/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero left text column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 bg-yellow-500/10 text-yellow-800 text-xs font-bold px-3 py-1.5 rounded-full border border-yellow-500/20 uppercase tracking-widest leading-none">
              <Sparkles className="w-3.5 h-3.5 text-yellow-600 animate-pulse" />
              Líder en España desde 1972
            </span>
            
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-none uppercase text-shadow-sm">
              PACASA <br />
              <span className="text-yellow-600 font-black">SEÑALIZACIÓN</span> VIAL DESDE 1972
            </h1>
            
            <p className="font-sans text-lg text-gray-600 leading-relaxed font-semibold">
              Especialistas en la fabricación, suministro e instalación de marcas viales reflectantes, señales verticales de aluminio de alta resistencia y sistemas metálicos homologados de contención en autopistas, autovías y cascos urbanos.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onOpenEstimator}
                className="bg-slate-900 hover:bg-yellow-500 hover:text-slate-950 text-white font-sans text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              >
                Solicitar Pliego Técnico
              </button>
              
              <button
                onClick={() => onNavigateToSlide(1)}
                className="bg-gray-150 hover:bg-gray-200 text-gray-800 font-sans text-sm font-bold px-6 py-3.5 rounded-xl transition cursor-pointer"
              >
                Ver Presentación Completa
              </button>
            </div>

            {/* Micro horizontal specs list */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100 text-xs sm:text-sm font-sans font-semibold text-gray-500">
              <div>
                <span className="text-yellow-600 font-black block text-2xl">50+ Años</span>
                <span>De Trayectoria</span>
              </div>
              <div>
                <span className="text-yellow-600 font-black block text-2xl">CE Marcado</span>
                <span>Normas Unificadas</span>
              </div>
              <div>
                <span className="text-yellow-600 font-black block text-2xl">7 Zonas</span>
                <span>Cobertura España</span>
              </div>
            </div>
          </div>

          {/* Hero right visual column: High Craft Pedestal & Arch of slide 1 */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square bg-[#0c1322] rounded-3xl overflow-hidden shadow-2xl p-8 border border-slate-900 flex flex-col items-center justify-center">
              
              {/* Outer glowing soft backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-transparent pointer-events-none" />
              
              {/* Elegant Arch Frame of Slide 1 */}
              <div className="w-56 h-72 rounded-t-full bg-[#131d31] border-2 border-yellow-500/30 relative flex items-center justify-center shadow-inner">
                
                {/* Gold Traffic Sign on Pedestal stand */}
                <div className="w-1.5 h-28 bg-gradient-to-b from-yellow-500/50 to-yellow-600/10 mt-12 relative">
                  
                  {/* Glowing Arrow Circle Sign */}
                  <div className="absolute top-0 -translate-y-full left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-xl flex items-center justify-center border border-white/50 animate-pulse">
                    <span className="text-slate-950 font-black text-2xl">↑</span>
                  </div>

                  {/* Base of pedestal */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-2 bg-yellow-500/55 rounded-sm" />
                </div>

                <span className="absolute bottom-2 text-[8px] font-mono tracking-widest text-yellow-500 bg-slate-950 px-2 py-0.5 rounded-full border border-yellow-500/30">
                  SEÑALIZACIÓN INDUCIDA P-20
                </span>
              </div>

              <div className="mt-4 font-mono text-[9px] text-yellow-500/70 uppercase tracking-widest">
                Modelo Escultórico de Seguridad Pasiva
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. "Quiénes Somos" / Slide #2 pillars */}
      <section ref={nosotrosRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column Left: Visual layout info */}
            <div className="lg:col-span-5 relative">
              <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
                <span className="font-mono text-xs font-bold text-yellow-600 uppercase tracking-widest block mb-1">
                  Puntal Técnico
                </span>
                <h4 className="font-display font-black text-lg text-gray-900 leading-tight uppercase">
                  FUNDACIÓN DESDE 1972
                </h4>
                
                <p className="font-sans text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
                  Con más de 50 años de experiencia técnica en carreteras del territorio español, nuestra misión continua se centra en salvaguardar la integridad de conductores y peatones.
                </p>

                {/* Simulated testing quality metric chart list */}
                <div className="mt-6 space-y-3.5 font-sans text-xs">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-gray-500 font-semibold">Corte de Chapa Plasma CNC</span>
                    <span className="text-emerald-600 font-bold">● Certificado CE</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-gray-500 font-semibold">Galvanización inmersión S235JR</span>
                    <span className="text-emerald-600 font-bold">● UNE ISO 1461</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-semibold">Ensayo retrorreflectómetro RA2</span>
                    <span className="text-emerald-600 font-bold">● Completo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column Right: About main texts and three pillars */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-bold text-yellow-600 uppercase tracking-widest block">
                Nuestros Valores Fundacionales
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 uppercase">
                QUIÉNES SOMOS Y NUESTROS PILARES
              </h3>
              
              <p className="font-sans text-gray-650 leading-relaxed font-semibold">
                Fundada en 1972, PACASA es líder nacional en el suministro e implantación de soluciones integrales de señalización vial. Nuestra trayectoria de más de medio siglo se fundamenta en tres pilares irrenunciables:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="space-y-2.5">
                  <div className="w-10 h-10 bg-yellow-500/10 text-yellow-700 flex items-center justify-center rounded-xl border border-yellow-500/10 font-bold text-lg">💡</div>
                  <h5 className="font-display font-black text-sm text-gray-900 uppercase">INNOVACIÓN CONSTANTE</h5>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed">
                    Diseño CAD/CAM, cortadora por plasma CNC de alta precisión, y paneles inteligentes de mensajería variable LED.
                  </p>
                </div>
                
                <div className="space-y-2.5">
                  <div className="w-10 h-10 bg-yellow-550/10 text-yellow-800 flex items-center justify-center rounded-xl border border-yellow-500/10 font-bold text-lg">✔</div>
                  <h5 className="font-display font-black text-sm text-gray-900 uppercase">CALIDAD CERTIFICADA</h5>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed">
                    Procesos homologados bajo las normas más exigentes: ISO 9001 e ISO 14001, OHSAS 18001 e idoneidad de Marcado CE.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="w-10 h-10 bg-yellow-500/10 text-yellow-700 flex items-center justify-center rounded-xl border border-yellow-500/10 font-bold text-lg">🛡</div>
                  <h5 className="font-display font-black text-sm text-gray-900 uppercase">COMPROMISO VIAL</h5>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed">
                    Instalaciones de seguridad pasiva (barreras dobles y sistemas para motoristas SPM) homologados por ministerios.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Interactive Specs explorer - Tabs */}
      <section ref={serviciosRef} className="py-12 bg-[#FAF9F5]/40 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-4">
            <span className="font-mono text-xs font-bold text-yellow-600 uppercase tracking-widest block">
              Catálogo de Suministro Certificado
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 uppercase leading-none">
              MATERIALES S.L. 1972
            </h3>
            <p className="font-sans text-sm text-gray-500 font-semibold leading-relaxed">
              Descubre las dimensiones del pliego técnico oficial para cada una de nuestras gamas de señalización vertical, biondas metálicas bMSNC y pintura transfronteriza horizontal.
            </p>
          </div>

          <CatalogoSecciones />

        </div>
      </section>

      {/* 4. Proyectos Destacados AP-7 y N-340 / Slide #4-5 */}
      <section ref={proyectosRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-6">
            <div>
              <span className="font-mono text-xs font-bold text-yellow-600 uppercase tracking-widest block mb-1">
                Garantía en Infraestructura Real
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 uppercase">
                PROYECTOS DESTACADOS RECIENTES
              </h3>
            </div>
            
            <button
              onClick={() => onNavigateToSlide(4)}
              className="font-sans text-xs font-bold text-yellow-700 hover:text-yellow-600 transition flex items-center gap-1.5 uppercase tracking-wide cursor-pointer"
            >
              <span>Ver Fotos en Diapositivas</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {OUTSTANDING_PROJECTS.map((proj) => (
              <div 
                key={proj.id}
                className="bg-gray-50/50 p-6 sm:p-8 rounded-3xl border border-gray-200/60 flex flex-col justify-between hover:shadow-md duration-350"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-black text-yellow-600 bg-yellow-50 px-2.5 py-1 rounded-md uppercase tracking-wider border border-yellow-250">
                       {proj.id.toUpperCase()} AUTOVÍA
                    </span>
                    <span className="font-mono text-xs text-gray-400 font-semibold uppercase">
                      ESPAÑA
                    </span>
                  </div>

                  <h4 className="font-display font-black text-2xl text-gray-900 leading-none uppercase">
                    {proj.title}
                  </h4>
                  <p className="font-serif italic text-sm text-yellow-800 font-semibold mt-1.5 mb-4">
                    {proj.subtitle}
                  </p>

                  <p className="font-sans text-sm text-gray-650 leading-relaxed font-semibold">
                    {proj.description}
                  </p>

                  <div className="mt-6 space-y-2.5 bg-white p-4 rounded-2xl border border-gray-150">
                    <span className="font-sans text-[10px] font-extrabold uppercase text-gray-400 tracking-wider block mb-1">
                      Métricas Técnicas de Suministro
                    </span>
                    
                    {Object.entries(proj.stats).map(([k, v]) => (
                      <div key={k} className="flex justify-between items-center text-xs font-sans">
                        <span className="text-gray-500 font-semibold">{k}:</span>
                        <span className="font-mono font-black text-slate-900">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200/50 mt-8 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-gray-400">Certificación General Fomento</span>
                  <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                    Obra Concluida
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Cobertura Nacional Interactive Map - Slide 28-35 */}
      <section ref={coberturaRef} className="py-16 bg-[#FAF9F5]/40 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="font-mono text-xs font-bold text-yellow-600 uppercase tracking-widest block">
              Proximidad y Logística Propia
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 uppercase leading-none">
              DELEGACIONES EN ESPAÑA
            </h3>
            <p className="font-sans text-sm text-gray-500 font-semibold leading-relaxed">
              Garantizamos una respuesta rápida y un transporte veloz de todo el catálogo gracias a nuestra flota de vehículos especializados y 7 delegaciones unificadas de atención.
            </p>
          </div>

          <InteractiveMap 
            selectedZoneId={selectedZoneId}
            onSelectZone={(id) => setSelectedZoneId(id)}
          />

        </div>
      </section>

      {/* 6. Contact and Castellón Central Suministro (Slide 40) */}
      <section ref={contactoRef} className="py-20 bg-slate-950 text-white relative overflow-hidden">
        {/* Absolute geometric background details */}
        <div className="absolute inset-0 bg-radial-gradient from-yellow-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Col: Contact info and address slide */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-yellow-500 uppercase tracking-widest block">
                  Confianza desde 1972
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase leading-none">
                  GRACIAS POR SU ATENCIÓN
                </h3>
                <p className="font-serif italic text-base text-yellow-500/80 font-medium">
                  Confíe en PACASA para todas sus necesidades de señalización, marcas viales y balizamiento.
                </p>
                <p className="font-sans text-sm text-gray-450 leading-relaxed font-semibold">
                  Más de 50 años de experiencia e innovación en el sector nos consolidan como el partner de referencia de cientos de contratas de obras públicas, promotores de viales y municipios de España.
                </p>
              </div>

              {/* Sede central details card */}
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
                <h5 className="font-display font-black text-xs text-yellow-500 uppercase tracking-widest">
                  DELEGACIÓN CENTRAL DE CASTELLÓN
                </h5>

                <div className="space-y-3 font-sans text-xs text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Ronda Este s/n, 12003 Castellón, España</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>General Teléfono: +34 964 215 988</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Peticiones y Presupuestos: pacasa@pacasa.com</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Suministro Almacén de Lunes a Viernes de 8:00 a 18:30 h.</span>
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-slate-500">
                © {new Date().getFullYear()} PACASA MOVILIDAD S.L. Todos los derechos reservados.
              </div>
            </div>

            {/* Right Col: Instant form simulator */}
            <div className="lg:col-span-6 bg-slate-900 border border-slate-850 p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-yellow-500 uppercase tracking-widest block mb-1">
                  Estudio y Pliego Express
                </span>
                <h4 className="font-display font-black text-xl text-white uppercase mb-4">
                  SOLICITAR OFERTA ECONÓMICA
                </h4>
                
                <p className="font-sans text-xs text-gray-400 mb-6 leading-relaxed">
                  ¿Tienes un pliego de condiciones de marcas viales o necesitas instalar guardarraíles homologados? Contacta con nosotros e indica los metros o necesidades aproximadas para calcular la oferta.
                </p>

                {/* Micro submit success */}
                <div className="space-y-4 font-sans text-xs text-gray-250">
                  <div>
                    <label className="block text-[8.5px] font-mono text-gray-500 mb-1.5 uppercase">¿Qué necesitas calcular?</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={onOpenEstimator}
                        className="bg-slate-950 p-3 rounded-xl border border-dashed border-slate-800 text-left hover:border-yellow-500/40 text-gray-400 hover:text-white transition"
                      >
                        <span className="font-display font-black text-[10px] block text-white">Catálogo de Señales</span>
                        <span className="text-[8.5px] text-slate-500">STOP, obras, balizas</span>
                      </button>
                      <button 
                        onClick={onOpenEstimator}
                        className="bg-slate-950 p-3 rounded-xl border border-dashed border-slate-800 text-left hover:border-yellow-500/40 text-gray-400 hover:text-white transition"
                      >
                        <span className="font-display font-black text-[10px] block text-white">Biondas y Barreras</span>
                        <span className="text-[8.5px] text-slate-500">BMSNC, guardarraíles peatonal, SPM</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="font-display font-extrabold text-[#FFF] text-xs">Simulador Integrado de Presupuestos</span>
                      <p className="text-[9.5px] text-gray-500">Suma biondas, conos o marcas viales para ver costes aprox.</p>
                    </div>
                    <button
                      onClick={onOpenEstimator}
                      className="bg-yellow-550 hover:bg-yellow-500 text-slate-950 font-bold px-3.5 py-2 rounded-lg text-xs tracking-tight transition"
                    >
                      Ejecutar
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-850 pt-6">
                <span className="font-mono text-[8.5px] text-slate-500 block mb-1">ATENCIÓN TELEFÓNICA CENTRAL NACIONAL</span>
                <span className="font-mono text-xl sm:text-2xl font-black text-white hover:text-yellow-500 cursor-pointer block leading-none">
                  +34 964 215 988
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
