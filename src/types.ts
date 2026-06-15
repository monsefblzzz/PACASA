export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  category?: string;
  content: string[];
  metaLeft?: string;
  metaRight?: string;
  illustrationType: 'hero' | 'about' | 'services' | 'ap7' | 'n340' | 'signs-works-1' | 'signs-works-2' | 'signs-reg' | 'signs-ind' | 'led' | 'luminosos' | 'barandillas' | 'barandillas-models' | 'porticos' | 'barreras' | 'bolardos' | 'mobiliario' | 'aluminio' | 'horizontal' | 'accesibilidad' | 'barratransversal' | 'pasosobreelevado' | 'vertical' | 'carteles' | 'ind-general' | 'conos' | 'logistica' | 'mapa' | 'levante' | 'centro' | 'aragon' | 'cataluna' | 'sur' | 'canarias' | 'norte' | 'certificaciones' | 'calidad' | 'formacion' | 'tecnologia' | 'contacto-final';
}

export interface ProductItem {
  id: string;
  name: string;
  code?: string;
  description: string;
  specs?: string[];
  priceEst: number;
  category: 'vertical' | 'horizontal' | 'containment' | 'urban' | 'devices';
}

export interface ZoneContact {
  id: string;
  name: string;
  regions: string[];
  phone: string;
  email: string;
  schedule?: string;
  cobertura: string;
  servicios?: string;
  color: string;
  centerX: number; // For SVG map overlay relative position
  centerY: number;
}

export const SLIDES_DATA: Slide[] = [
  {
    id: 1,
    title: "PACASA - Señalización Vial desde 1972",
    subtitle: "LIDER EN ESPAÑA EN SOLUCIONES DE SEÑALIZACIÓN Y SEGURIDAD VIAL",
    content: ["Sistemas integrales de marcas viales, señales verticales y contención metálica para autopistas, autovías y cascos urbanos."],
    metaLeft: "Desde 1972",
    metaRight: "Señalización Vial",
    illustrationType: "hero"
  },
  {
    id: 2,
    title: "Quiénes Somos",
    subtitle: "PACASA Señalización Vial",
    content: [
      "Fundada en 1972, PACASA es líder en España en soluciones de señalización vial y seguridad en carreteras.",
      "Con más de 50 años de experiencia, nuestra misión se centra en tres pilares fundamentales: innovación constante en tecnología de señalización, calidad certificada en todos nuestros productos y servicios, y un compromiso absoluto con la seguridad vial de conductores y peatones."
    ],
    metaLeft: "Desde 1972",
    metaRight: "Líderes en España",
    illustrationType: "about"
  },
  {
    id: 3,
    title: "Nuestros Servicios",
    subtitle: "Servicios 2024",
    content: [
      "Señalización Vial: Marcas horizontales y señales verticales completas.",
      "Barreras y Pretiles: Sistemas de contención vehicular metálicos homologados.",
      "Paneles LED: Gestión dinámica de tráfico e información en tiempo real."
    ],
    metaLeft: "PACASA",
    metaRight: "Servicios 2024",
    illustrationType: "services"
  },
  {
    id: 4,
    title: "AP-7",
    subtitle: "Autopista del Mediterráneo",
    category: "Proyecto Destacado",
    content: [
      "Proyecto integral de señalización en la AP-7: señalización direccional completa, sistemas de gestión dinámica con paneles LED, barreras de seguridad vial reforzada.",
      "Destacamos por la escala y complejidad técnica del proyecto en uno de los corredores viales más transitados de Europa."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Seguridad Vial",
    illustrationType: "ap7"
  },
  {
    id: 5,
    title: "N-340 Nules",
    subtitle: "Seguridad Vial Integral",
    category: "Proyecto Destacado",
    content: [
      "Proyecto completo de señalización en la N-340 a su paso por Nules.",
      "Instalación de señales verticales, barandillas de protección y elementos urbanos.",
      "Mejora significativa en seguridad vial y fluidez del tráfico para conductores y peatones."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Castellón, España",
    illustrationType: "n340"
  },
  {
    id: 6,
    title: "Señales de Obras 1",
    subtitle: "Catálogo",
    content: [
      "Señales temporales triangulares de advertencia con pintura retrorreflectante de alta intensidad.",
      "Indicadores de peligro por obras ('WORKS AHEAD'), estrechamientos y desvíos provisionales.",
      "Cumplen estrictamente con los coeficientes de retrorreflexión de la norma de carreteras."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Catálogo Señales",
    illustrationType: "signs-works-1"
  },
  {
    id: 7,
    title: "Señales de Obras 2",
    subtitle: "Catálogo",
    content: [
      "Señales de obras serie TS (52-62): desvíos, estrechamientos y carriles.",
      "Serie TB (1-10): balizas y paneles direccionales (TB 2, T5).",
      "TL-11: limitación de altura.",
      "Diseñadas para máxima visibilidad y reconocimiento instantáneo en zonas de trabajo de día y de noche."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Señales de Obras 2",
    illustrationType: "signs-works-2"
  },
  {
    id: 8,
    title: "Señales Reglamentarias",
    subtitle: "Catálogo",
    content: [
      "Señales de prioridad, prohibición y obligación metálicas troqueladas con lámina reflectante.",
      "Señal R-2 'STOP' de alta reflectancia, límites de velocidad, señales de dirección azul e indicaciones restrictivas.",
      "Acabado de alta resistencia al exterior y corrosión con pintura electrostática y aluminio extruido."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Señales Reglamentarias",
    illustrationType: "signs-reg"
  },
  {
    id: 9,
    title: "Señales de Indicación",
    subtitle: "Volumen 09 - Catálogo 2024",
    content: [
      "TS-210 Toledo: Señal de indicación de destino con nombre de ciudad y distancia kilométrica. Fondo azul reflectante.",
      "TS-220 / TS-800: Señales direccionales con flechas y símbolos para orientación en autopistas y carreteras principales.",
      "Serie S-1 a S-40: Señales verticales de indicación general: hospitales, estacionamientos, servicios y puntos de interés."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Catálogo 2024",
    illustrationType: "signs-ind"
  },
  {
    id: 10,
    title: "Paneles LED",
    subtitle: "Volumen 10 - Gestión Dinámica de Vías",
    content: [
      "Sistemas LED de mensajería variable para autopistas y vías rápidas.",
      "Permiten informar sobre incidencias en tiempo real, límites de velocidad dinámicos y advertencias ambientales.",
      "Control remoto integrado para coordinación instantánea con centros de gestión de tráfico."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Catálogo 2024",
    illustrationType: "led"
  },
  {
    id: 11,
    title: "Elementos Luminosos",
    subtitle: "Catálogo",
    content: [
      "Elementos luminosos esenciales para la seguridad vial: balizas con bandera móvil para alertar conductores.",
      "Semáforos portátiles para control en obras, cascadas luminosas de alta visibilidad.",
      "Flechas direccionales LED y dispositivos triflash para máxima señalización nocturna."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Elementos Luminosos",
    illustrationType: "luminosos"
  },
  {
    id: 12,
    title: "Barandillas",
    subtitle: "Diseño y Técnica",
    category: "Catálogo Técnico",
    content: [
      "Las barandillas PACASA combinan seguridad máxima con diseño estético.",
      "Fabricadas en acero galvanizado de alta resistencia, ofrecen protección óptima en puentes, pasos elevados y zonas urbanas.",
      "Dimensiones estándar: 1.100mm altura mínima según normativa. Materiales: acero S235JR galvanizado en caliente. Acabados personalizables para integración arquitectónica. Certificación CE según EN 1317."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Seguridad Vial",
    illustrationType: "barandillas"
  },
  {
    id: 13,
    title: "Modelos de Barandillas",
    subtitle: "Modelos Técnicos",
    category: "Catálogo Técnico",
    content: [
      "Modelo 1.500mm: Diseño compacto ideal para pasos peatonales y zonas urbanas con menor altura requerida.",
      "Modelo 2.000mm: Altura estándar para puentes y viaductos. Protección reforzada en zonas de tráfico intenso.",
      "Modelo 5.000mm: Máxima protección para puentes elevados y estructuras de gran altura. Certificación europea."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Barandillas",
    illustrationType: "barandillas-models"
  },
  {
    id: 14,
    title: "Pórticos y Banderolas",
    subtitle: "Volumen 14 - Estructuras para Señalización Vial",
    content: [
      "Estructuras de acero de gran luz para soporte de señalización en autopistas de carriles múltiples.",
      "Cálculo estructural según la normativa de acciones en carreteras, garantizando resistencia ante vientos extremos.",
      "Tratamiento anticorrosivo por galvanización y opcional termolacado para durabilidad de décadas."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Catálogo 2024",
    illustrationType: "porticos"
  },
  {
    id: 15,
    title: "Sistemas de Contención",
    subtitle: "Catálogo 2024",
    content: [
      "Barrera Simple: Barrera metálica de perfil W para protección lateral en carreteras. Absorción de impactos certificada.",
      "Barrera Doble BMSNC: Sistema de doble onda para separación de carriles y medianas. Máxima protección en colisiones frontales.",
      "Protección Motoristas: Sistema SPM bajo barrera para evitar lesiones graves a motoristas. Homologado según normativa europea."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Sistemas de Contención",
    illustrationType: "barreras"
  },
  {
    id: 16,
    title: "Hitos y Bolardos",
    subtitle: "Catálogo 16",
    content: [
      "Soluciones urbanas para control de accesos y delimitación de espacios.",
      "Disponibles en versiones de hito fijo, flexible y extraíble.",
      "Materiales de alta resistencia: acero inoxidable, fundición, polietileno y acero galvanizado.",
      "Aplicaciones: zonas peatonales, plazas, aparcamientos y áreas restringidas."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Hitos y Bolardos",
    illustrationType: "bolardos"
  },
  {
    id: 17,
    title: "Mobiliario Urbano",
    subtitle: "Catálogo Urbano",
    content: [
      "Diseño e instalación de vallas de protección peatonal de acero negro, bancos modernos combinados con madera técnica, jardineras robustas de chapa de acero corten o lacado.",
      "Soluciones estéticas y funcionales para modernización de paseos, plazas públicas y bulevares comerciales."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Mobiliario Urbano",
    illustrationType: "mobiliario"
  },
  {
    id: 18,
    title: "Componentes Aluminio",
    subtitle: "Catálogo 2024",
    content: [
      "Postes: Postes de aluminio extruido, ligeros y resistentes a la corrosión, ideales para señalización vial permanente.",
      "Abrazaderas: Sistemas de fijación en aluminio de alta resistencia para uniones seguras y duraderas en señalización vertical.",
      "Perfiles y Bases: Perfiles estructurales y bases de anclaje en aluminio con acabado profesional para instalaciones de fijación firme."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Componentes Aluminio",
    illustrationType: "aluminio"
  },
  {
    id: 19,
    title: "Señalización Horizontal",
    subtitle: "Volumen 19 - Marcas Viales de Alta Visibilidad",
    content: [
      "Especialistas en líneas longitudinales, pasos peatonales, símbolos y flechas reflectantes.",
      "Utilizamos materiales de última generación (pinturas acrílicas, termoplásticas y plásticos en frío) que garantizan durabilidad extrema y máxima visibilidad nocturna para la seguridad de conductores y peatones."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Catálogo 2023",
    illustrationType: "horizontal"
  },
  {
    id: 20,
    title: "Accesibilidad",
    subtitle: "Volumen 20 - Señalización Horizontal",
    content: [
      "Especialistas en señalización horizontal para accesibilidad universal.",
      "Diseñamos e instalamos plazas de aparcamiento adaptadas con el símbolo internacional de accesibilidad.",
      "Rutas accesibles con pavimento táctil direccional y de advertencia, y marcas especiales en pasos peatonales para personas con movilidad reducida.",
      "Cumplimiento normativo garantizado según Real Decreto 505/2007."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Catálogo 2023",
    illustrationType: "accesibilidad"
  },
  {
    id: 21,
    title: "Barra Transversal de Alerta",
    subtitle: "Señalización Horizontal - Normativa Técnica",
    content: [
      "La barra transversal de alerta es un elemento fundamental de señalización horizontal temporal o de advertencia inducida.",
      "Diseño según normativa vigente con dimensiones oficiales: ancho mínimo de 50 cm y separación entre barras de 1 a 3 metros.",
      "Aplicación principal en zonas de obras, aproximación a puntos conflictivos y áreas de reducción de velocidad.",
      "Material retrorreflectante clase RA2 de alta resistencia para máxima visibilidad nocturna. Instalación profesional garantizada por técnicos certificados PACASA."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Normativa Técnica",
    illustrationType: "barratransversal"
  },
  {
    id: 22,
    title: "Paso Sobreelevado",
    subtitle: "Página 22 - Especificaciones Técnicas",
    content: [
      "El paso sobreelevado garantiza la seguridad peatonal mediante elevación controlada del cruce de vehículos.",
      "Incluye señalización vertical de advertencia P-20 y marcas horizontales normativas M-4.3.",
      "Distancias normalizadas de aproximación, rampas de transición de pendientes suaves y pintura antideslizante de alta duración homologada según normativa estatal."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Catálogo 2023",
    illustrationType: "pasosobreelevado"
  },
  {
    id: 23,
    title: "Señalización Vertical",
    subtitle: "Aluminio - Ligero y Resistente",
    content: [
      "Catálogo de señales verticales fabricadas en aluminio extruido con modulación extruida reforzada.",
      "Ideal para soportes direccionales complejos y cartelería informativa de amplias dimensiones.",
      "Su ligereza reduce la carga de viento transmitida al cimiento, facilitando montajes veloces y ecológicos."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Catálogo - Página 23",
    illustrationType: "vertical"
  },
  {
    id: 24,
    title: "Carteles Urbanos",
    subtitle: "Volumen 24",
    content: [
      "Carteles especiales diseñados para aplicaciones urbanas específicas.",
      "Soluciones personalizadas que incluyen señalización de calles, placas identificativas de calles históricas, directorios de polígonos industriales, carteles informativos y tótems adaptados a las necesidades de cada municipio."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Catálogo 2024",
    illustrationType: "carteles"
  },
  {
    id: 25,
    title: "Indicación General",
    subtitle: "Catálogo Señales",
    content: [
      "Placas direccionales cuadradas y rectangulares (S-28, S-17) con perfiles redondeados.",
      "Servicios de socorro y cruz roja, indicadores de estacionamientos reservados, centros hoteleros y señalética general corporativa.",
      "Vinilos reflectantes microprismáticos de clase RA1, RA2 o RA3 para responder a las diferentes demandas de velocidad de la vía."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Indicación General",
    illustrationType: "ind-general"
  },
  {
    id: 26,
    title: "Conos y Señalización Temporal",
    subtitle: "Conos de Seguridad",
    content: [
      "Conos de Seguridad: Conos reflectantes en medidas 30, 50 y 75 cm con bases flexibles de alta resistencia para señalización de desvío temporal.",
      "Cintas y Chalecos: Cintas de balizamiento reflectantes y chalecos de alta visibilidad homologados clase 2/3 para máxima seguridad del personal operario.",
      "Piquetas y Balizas: Piquetas cilíndricas y prismáticas con bandas reflectantes de alta visibilidad para delimitación de zonas de obra y canalización de tráfico."
    ],
    metaLeft: "PACASA",
    metaRight: "Catálogo 2024",
    illustrationType: "conos"
  },
  {
    id: 27,
    title: "Logística y Capacidad",
    subtitle: "Volumen 27 - Logística 2024",
    content: [
      "Nuestra flota de vehículos especializados y almacenes estratégicamente ubicados garantizan una respuesta rápida y eficiente.",
      "Gestión integral de montaje, instalación y mantenimiento con equipos profesionales y maquinaria de última generación, asegurando la entrega perfecta de proyectos en España."
    ],
    metaLeft: "PACASA Señalización Vial",
    metaRight: "Logística 2024",
    illustrationType: "logistica"
  },
  {
    id: 28,
    title: "Cobertura Nacional",
    subtitle: "PACASA Señalización Vial",
    content: [
      "Presencia en todo el territorio español con equipos especializados en cada región.",
      "Zona Levante: sede central en Castellón.",
      "Zona Centro: cobertura Madrid y alrededores.",
      "Zona Aragón: servicios en Zaragoza y provincias.",
      "Zona Cataluña: Barcelona y costa mediterránea.",
      "Zona Sur: Andalucía completa.",
      "Zona Canarias: islas principales.",
      "Zona Norte: País Vasco, Cantabria, Asturias y Galicia.",
      "Red logística integrada para respuesta rápida nacional."
    ],
    metaLeft: "Página 28",
    metaRight: "Desde 1972",
    illustrationType: "mapa"
  },
  {
    id: 29,
    title: "Contacto Zona Levante",
    subtitle: "Equipo Levante (Castellón, Valencia, Murcia)",
    content: [
      "Equipo especializado en señalización vial para la Comunidad Valenciana y Región de Murcia.",
      "Servicio técnico profesional y respuesta rápida de proyectos.",
      "Teléfono: 966 215 988",
      "Email: levante@pacasa.com",
      "Cobertura: Comunidad Valenciana y Murcia.",
      "Servicios: Instalación, mantenimiento y suministro integral."
    ],
    metaLeft: "PACASA",
    metaRight: "Desde 1972",
    illustrationType: "levante"
  },
  {
    id: 30,
    title: "Contacto Zona Centro",
    subtitle: "Equipo Centro (Madrid y provincias)",
    content: [
      "Nuestro equipo en la Zona Centro está a su disposición para proyectos de señalización vial, instalación y mantenimiento en Madrid y provincias limítrofes.",
      "Teléfonos: 666 480 820 / 666 480 801",
      "Email: centro@pacasa.com",
      "Web: www.pacasa.com",
      "Horario: Lunes a Viernes: 8:00 - 18:00"
    ],
    metaLeft: "PACASA",
    metaRight: "Catálogo 2024",
    illustrationType: "centro"
  },
  {
    id: 31,
    title: "Contacto Zona Aragón",
    subtitle: "Equipo Aragón (Zaragoza y resto del territorio aragonés)",
    content: [
      "Nuestro equipo en Aragón está preparado para atender sus necesidades de señalización vial con profesionalidad y rapidez.",
      "Teléfono: 666 480 811",
      "Email: aragon@pacasa.com",
      "Web: www.pacasa.com",
      "Cobertura: Comunidad de Aragón"
    ],
    metaLeft: "PACASA",
    metaRight: "Señalización Vial",
    illustrationType: "aragon"
  },
  {
    id: 32,
    title: "Contacto Zona Cataluña",
    subtitle: "Equipo Cataluña (Barcelona, Tarragona, Lleida, Girona)",
    content: [
      "Nuestro equipo en Cataluña ofrece soluciones completas de señalización vial, instalación y mantenimiento para proyectos públicos y privados.",
      "Teléfono: 600 918 075",
      "Email: cataluna@pacasa.com",
      "Cobertura: Barcelona, Tarragona, Lleida, Girona",
      "Servicios: Señalización vial integral en toda Cataluña"
    ],
    metaLeft: "PACASA",
    metaRight: "Desde 1972",
    illustrationType: "cataluna"
  },
  {
    id: 33,
    title: "Contacto Zona Sur",
    subtitle: "Equipo Sur (Andalucía, Extremadura)",
    content: [
      "Nuestro equipo en la Zona Sur está preparado para atender sus proyectos de señalización vial con la máxima profesionalidad y rapidez.",
      "Teléfono: 607 110 210",
      "Email: sur@pacasa.com",
      "Cobertura: Andalucía, Extremadura, Murcia",
      "Servicios: Instalación, mantenimiento y asesoría técnica"
    ],
    metaLeft: "PACASA",
    metaRight: "Desde 1972",
    illustrationType: "sur"
  },
  {
    id: 34,
    title: "Contacto Zona Canarias",
    subtitle: "Equipo Canarias (Archipiélago Canario)",
    content: [
      "Nuestro equipo en Canarias está preparado para atender sus necesidades de señalización vial en todo el archipiélago.",
      "Teléfono: 666 480 821",
      "Email: canarias@pacasa.com",
      "Horario: Lunes a Viernes 8:00 - 18:00",
      "Cobertura: Islas Canarias completas"
    ],
    metaLeft: "PACASA",
    metaRight: "Señalización Vial",
    illustrationType: "canarias"
  },
  {
    id: 35,
    title: "Contacto Zona Norte",
    subtitle: "Equipo Norte (País Vasco, Cantabria, Asturias, Galicia)",
    content: [
      "Nuestro equipo en la Zona Norte está preparado para atender sus necesidades de señalización vial con la máxima profesionalidad y eficiencia.",
      "Teléfono: 666 480 861",
      "Email: norte@pacasa.com",
      "Cobertura: País Vasco, Cantabria, Asturias, Galicia",
      "Horario: Lunes a Viernes: 8:00 - 18:00"
    ],
    metaLeft: "PACASA",
    metaRight: "Desde 1972",
    illustrationType: "norte"
  },
  {
    id: 36,
    title: "Certificaciones",
    subtitle: "Volumen 36 - Calidad y Gestión Certificada",
    content: [
      "Garantía de Calidad 2024.",
      "ISO 9001: Certificación del Sistema de Gestión de la Calidad para fabricación e instalación de señalización vial.",
      "ISO 14001: Sistema de Gestión Ambiental, certificando nuestro compromiso con la reducción del impacto ambiental.",
      "OHSAS 18001 / UNE 2267301: Homologación en Seguridad y Salud en el Trabajo, garantizando obras y operaciones sin riesgos."
    ],
    metaLeft: "Volumen 36",
    metaRight: "Garantía 2024",
    illustrationType: "certificaciones"
  },
  {
    id: 37,
    title: "Control de Calidad",
    subtitle: "Seguridad Laboral",
    category: "Garantías",
    content: [
      "Utilizamos retrorreflectómetros de última generación para verificar la visibilidad nocturna exacta de señales verticales y marcas viales de gran recorrido.",
      "Realizamos inspecciones técnicas periódicas y auditorías internas estrictas.",
      "Compromiso total con la seguridad laboral propia, así como la seguridad de terceros y la protección del medio ambiente en cada tramo."
    ],
    metaLeft: "37 / 40",
    metaRight: "Desde 1972",
    illustrationType: "calidad"
  },
  {
    id: 38,
    title: "Formación",
    subtitle: "Profesionalismo del Equipo",
    content: [
      "En PACASA invertimos continuamente en la formación técnica y operativa de nuestro equipo humano.",
      "Programas de capacitación técnica especializada en señalización vial complejas, seguridad laboral y nuevas normativas de tráfico.",
      "Nuestros operarios de obras están certificados a la vanguardia pública y privada, garantizando excelencia en cada kilómetro ejecutado."
    ],
    metaLeft: "PACASA",
    metaRight: "Desde 1972",
    illustrationType: "formacion"
  },
  {
    id: 39,
    title: "Innovación y Tecnología",
    subtitle: "Liderando el Futuro Vial",
    content: [
      "Tecnología 2024: En PACASA apostamos por la innovación productiva constante.",
      "Nuestras instalaciones industriales cuentan con cortadoras de plasma de última generación para la fabricación de señales metálicas con precisión micrométrica.",
      "Utilizamos software de vanguardia CAD/CAM para proyectos complejos totalmente personalizados.",
      "Desarrollamos paneles LED inteligentes de bajo consumo con control de gestión remota para informar al instante a conductores españoles en tiempo real."
    ],
    metaLeft: "PACASA",
    metaRight: "Tecnología 2024",
    illustrationType: "tecnologia"
  },
  {
    id: 40,
    title: "Gracias por su Atención",
    subtitle: "PACASA de Movilidad S.L. - Desde 1972",
    content: [
      "Confíe en PACASA para todas sus necesidades de señalización, balizamiento y seguridad vial. Más de 50 años de experiencia técnica nos avalan.",
      "Sede Central Ronda Este s/n, Castellón, España.",
      "Teléfono General: 964 215 988",
      "Fax: 964 204 799",
      "Email General de Pedidos: pacasa@pacasa.com",
      "Sitio oficial de referencia corporativa."
    ],
    metaLeft: "Señalización Vial desde 1972",
    metaRight: "www.pacasa.com",
    illustrationType: "contacto-final"
  }
];

export const OUTSTANDING_PROJECTS = [
  {
    id: "ap7",
    title: "Autopista AP-7",
    subtitle: "Autopista del Mediterráneo",
    description: "Equipamiento de señalización direccional completa, protección mediante barrera metálica con marcado CE, paneles dinámicos LED inteligentes y marcas viales de alta durabilidad en más de 120 km del corredor de la Comunidad Valenciana.",
    stats: { "Longitud": "120+ km", "Paneles LED": "14 unidades", "Pintura aplicada": "85.000 m²" }
  },
  {
    id: "n340",
    title: "Carretera Nacional N-340",
    subtitle: "Travesía de Nules (Castellón)",
    description: "Reurbanización integral y adecuación de seguridad vial a su paso por el núcleo urbano de Nules. Instalación de barandillas de alta seguridad galvanizadas, pasos de peatones sobreelevados, marcas táctiles de accesibilidad, y señales verticales con pórticos de acero.",
    stats: { "Señales": "180 ud.", "Barandillas": "1.300 metros", "Accidentabilidad": "-42% reducción" }
  }
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  // --- SEÑALIZACIÓN VERTICAL ---
  { id: "p1_real", name: "Señal P-1", code: "P-1", description: "Señal de tráfico oficial de España P-1.", priceEst: 70, category: "vertical" },
  { id: "p1a_real", name: "Señal P-1A", code: "P-1A", description: "Señal de tráfico oficial de España P-1A.", priceEst: 70, category: "vertical" },
  { id: "p1b_real", name: "Señal P-1B", code: "P-1B", description: "Señal de tráfico oficial de España P-1B.", priceEst: 70, category: "vertical" },
  { id: "p1c_real", name: "Señal P-1C", code: "P-1C", description: "Señal de tráfico oficial de España P-1C.", priceEst: 70, category: "vertical" },
  { id: "p1d_real", name: "Señal P-1D", code: "P-1D", description: "Señal de tráfico oficial de España P-1D.", priceEst: 70, category: "vertical" },
  { id: "p1e_real", name: "Señal P-1E", code: "P-1E", description: "Señal de tráfico oficial de España P-1E.", priceEst: 70, category: "vertical" },
  { id: "p2_real", name: "Señal P-2", code: "P-2", description: "Señal de tráfico oficial de España P-2.", priceEst: 70, category: "vertical" },
  { id: "p3_real", name: "Señal P-3", code: "P-3", description: "Señal de tráfico oficial de España P-3.", priceEst: 70, category: "vertical" },
  { id: "p4_real", name: "Señal P-4", code: "P-4", description: "Señal de tráfico oficial de España P-4.", priceEst: 70, category: "vertical" },
  { id: "p5_real", name: "Señal P-5", code: "P-5", description: "Señal de tráfico oficial de España P-5.", priceEst: 70, category: "vertical" },
  { id: "p6_real", name: "Señal P-6", code: "P-6", description: "Señal de tráfico oficial de España P-6.", priceEst: 70, category: "vertical" },
  { id: "p7_real", name: "Señal P-7", code: "P-7", description: "Señal de tráfico oficial de España P-7.", priceEst: 70, category: "vertical" },
  { id: "p11_real", name: "Señal P-11", code: "P-11", description: "Señal de tráfico oficial de España P-11.", priceEst: 70, category: "vertical" },
  { id: "p11a_real", name: "Señal P-11A", code: "P-11A", description: "Señal de tráfico oficial de España P-11A.", priceEst: 70, category: "vertical" },
  { id: "p13a_real", name: "Señal P-13A", code: "P-13A", description: "Señal de tráfico oficial de España P-13A.", priceEst: 70, category: "vertical" },
  { id: "p13b_real", name: "Señal P-13B", code: "P-13B", description: "Señal de tráfico oficial de España P-13B.", priceEst: 70, category: "vertical" },
  { id: "p14a_real", name: "Señal P-14A", code: "P-14A", description: "Señal de tráfico oficial de España P-14A.", priceEst: 70, category: "vertical" },
  { id: "p14b_real", name: "Señal P-14B", code: "P-14B", description: "Señal de tráfico oficial de España P-14B.", priceEst: 70, category: "vertical" },
  { id: "p15_real", name: "Señal P-15", code: "P-15", description: "Señal de tráfico oficial de España P-15.", priceEst: 70, category: "vertical" },
  { id: "p15a_real", name: "Señal P-15A", code: "P-15A", description: "Señal de tráfico oficial de España P-15A.", priceEst: 70, category: "vertical" },
  { id: "p15b_real", name: "Señal P-15B", code: "P-15B", description: "Señal de tráfico oficial de España P-15B.", priceEst: 70, category: "vertical" },
  { id: "p17_real", name: "Señal P-17", code: "P-17", description: "Señal de tráfico oficial de España P-17.", priceEst: 70, category: "vertical" },
  { id: "p17a_real", name: "Señal P-17A", code: "P-17A", description: "Señal de tráfico oficial de España P-17A.", priceEst: 70, category: "vertical" },
  { id: "p17b_real", name: "Señal P-17B", code: "P-17B", description: "Señal de tráfico oficial de España P-17B.", priceEst: 70, category: "vertical" },
  { id: "p19_real", name: "Señal P-19", code: "P-19", description: "Señal de tráfico oficial de España P-19.", priceEst: 70, category: "vertical" },
  { id: "p20a_real", name: "Señal P-20A", code: "P-20A", description: "Señal de tráfico oficial de España P-20A.", priceEst: 70, category: "vertical" },
  { id: "p23_real", name: "Señal P-23", code: "P-23", description: "Señal de tráfico oficial de España P-23.", priceEst: 70, category: "vertical" },
  { id: "p24_real", name: "Señal P-24", code: "P-24", description: "Señal de tráfico oficial de España P-24.", priceEst: 70, category: "vertical" },
  { id: "p24a_real", name: "Señal P-24A", code: "P-24A", description: "Señal de tráfico oficial de España P-24A.", priceEst: 70, category: "vertical" },
  { id: "p25_real", name: "Señal P-25", code: "P-25", description: "Señal de tráfico oficial de España P-25.", priceEst: 70, category: "vertical" },
  { id: "p26_real", name: "Señal P-26", code: "P-26", description: "Señal de tráfico oficial de España P-26.", priceEst: 70, category: "vertical" },
  { id: "p27_real", name: "Señal P-27", code: "P-27", description: "Señal de tráfico oficial de España P-27.", priceEst: 70, category: "vertical" },
  { id: "p28_real", name: "Señal P-28", code: "P-28", description: "Señal de tráfico oficial de España P-28.", priceEst: 70, category: "vertical" },
  { id: "p29_real", name: "Señal P-29", code: "P-29", description: "Señal de tráfico oficial de España P-29.", priceEst: 70, category: "vertical" },
  { id: "p30_real", name: "Señal P-30", code: "P-30", description: "Señal de tráfico oficial de España P-30.", priceEst: 70, category: "vertical" },
  { id: "p31_real", name: "Señal P-31", code: "P-31", description: "Señal de tráfico oficial de España P-31.", priceEst: 70, category: "vertical" },
  { id: "p32_real", name: "Señal P-32", code: "P-32", description: "Señal de tráfico oficial de España P-32.", priceEst: 70, category: "vertical" },
  { id: "p34_real", name: "Señal P-34", code: "P-34", description: "Señal de tráfico oficial de España P-34.", priceEst: 70, category: "vertical" },
  { id: "p50_real", name: "Señal P-50", code: "P-50", description: "Señal de tráfico oficial de España P-50.", priceEst: 70, category: "vertical" },
  { id: "r1_real", name: "Señal R-1", code: "R-1", description: "Señal de tráfico oficial de España R-1.", priceEst: 70, category: "vertical" },
  { id: "r3_real", name: "Señal R-3", code: "R-3", description: "Señal de tráfico oficial de España R-3.", priceEst: 70, category: "vertical" },
  { id: "r4_real", name: "Señal R-4", code: "R-4", description: "Señal de tráfico oficial de España R-4.", priceEst: 70, category: "vertical" },
  { id: "r5_real", name: "Señal R-5", code: "R-5", description: "Señal de tráfico oficial de España R-5.", priceEst: 70, category: "vertical" },
  { id: "r6_real", name: "Señal R-6", code: "R-6", description: "Señal de tráfico oficial de España R-6.", priceEst: 70, category: "vertical" },
  { id: "r100_real", name: "Señal R-100", code: "R-100", description: "Señal de tráfico oficial de España R-100.", priceEst: 70, category: "vertical" },
  { id: "r101_real", name: "Señal R-101", code: "R-101", description: "Señal de tráfico oficial de España R-101.", priceEst: 70, category: "vertical" },
  { id: "r102_real", name: "Señal R-102", code: "R-102", description: "Señal de tráfico oficial de España R-102.", priceEst: 70, category: "vertical" },
  { id: "r103_real", name: "Señal R-103", code: "R-103", description: "Señal de tráfico oficial de España R-103.", priceEst: 70, category: "vertical" },
  { id: "r104_real", name: "Señal R-104", code: "R-104", description: "Señal de tráfico oficial de España R-104.", priceEst: 70, category: "vertical" },
  { id: "r108_real", name: "Señal R-108", code: "R-108", description: "Señal de tráfico oficial de España R-108.", priceEst: 70, category: "vertical" },
  { id: "r109_real", name: "Señal R-109", code: "R-109", description: "Señal de tráfico oficial de España R-109.", priceEst: 70, category: "vertical" },
  { id: "r110_real", name: "Señal R-110", code: "R-110", description: "Señal de tráfico oficial de España R-110.", priceEst: 70, category: "vertical" },
  { id: "r112_real", name: "Señal R-112", code: "R-112", description: "Señal de tráfico oficial de España R-112.", priceEst: 70, category: "vertical" },
  { id: "r113_real", name: "Señal R-113", code: "R-113", description: "Señal de tráfico oficial de España R-113.", priceEst: 70, category: "vertical" },
  { id: "r115_real", name: "Señal R-115", code: "R-115", description: "Señal de tráfico oficial de España R-115.", priceEst: 70, category: "vertical" },
  { id: "r116_real", name: "Señal R-116", code: "R-116", description: "Señal de tráfico oficial de España R-116.", priceEst: 70, category: "vertical" },
  { id: "r117_real", name: "Señal R-117", code: "R-117", description: "Señal de tráfico oficial de España R-117.", priceEst: 70, category: "vertical" },
  { id: "r118_real", name: "Señal R-118", code: "R-118", description: "Señal de tráfico oficial de España R-118.", priceEst: 70, category: "vertical" },
  { id: "r120_real", name: "Señal R-120", code: "R-120", description: "Señal de tráfico oficial de España R-120.", priceEst: 70, category: "vertical" },
  { id: "r200_real", name: "Señal R-200", code: "R-200", description: "Señal de tráfico oficial de España R-200.", priceEst: 70, category: "vertical" },
  { id: "r200a_real", name: "Señal R-200A", code: "R-200A", description: "Señal de tráfico oficial de España R-200A.", priceEst: 70, category: "vertical" },
  { id: "r201_real", name: "Señal R-201", code: "R-201", description: "Señal de tráfico oficial de España R-201.", priceEst: 70, category: "vertical" },
  { id: "r202_real", name: "Señal R-202", code: "R-202", description: "Señal de tráfico oficial de España R-202.", priceEst: 70, category: "vertical" },
  { id: "r203_real", name: "Señal R-203", code: "R-203", description: "Señal de tráfico oficial de España R-203.", priceEst: 70, category: "vertical" },
  { id: "r204_real", name: "Señal R-204", code: "R-204", description: "Señal de tráfico oficial de España R-204.", priceEst: 70, category: "vertical" },
  { id: "r205_real", name: "Señal R-205", code: "R-205", description: "Señal de tráfico oficial de España R-205.", priceEst: 70, category: "vertical" },
  { id: "r300_real", name: "Señal R-300", code: "R-300", description: "Señal de tráfico oficial de España R-300.", priceEst: 70, category: "vertical" },
  { id: "r30110_real", name: "Señal R-30110", code: "R-30110", description: "Señal de tráfico oficial de España R-30110.", priceEst: 70, category: "vertical" },
  { id: "r30120_real", name: "Señal R-30120", code: "R-30120", description: "Señal de tráfico oficial de España R-30120.", priceEst: 70, category: "vertical" },
  { id: "r30130_real", name: "Señal R-30130", code: "R-30130", description: "Señal de tráfico oficial de España R-30130.", priceEst: 70, category: "vertical" },
  { id: "r30140_real", name: "Señal R-30140", code: "R-30140", description: "Señal de tráfico oficial de España R-30140.", priceEst: 70, category: "vertical" },
  { id: "r30150_real", name: "Señal R-30150", code: "R-30150", description: "Señal de tráfico oficial de España R-30150.", priceEst: 70, category: "vertical" },
  { id: "r30160_real", name: "Señal R-30160", code: "R-30160", description: "Señal de tráfico oficial de España R-30160.", priceEst: 70, category: "vertical" },
  { id: "r30170_real", name: "Señal R-30170", code: "R-30170", description: "Señal de tráfico oficial de España R-30170.", priceEst: 70, category: "vertical" },
  { id: "r30180_real", name: "Señal R-30180", code: "R-30180", description: "Señal de tráfico oficial de España R-30180.", priceEst: 70, category: "vertical" },
  { id: "r30190_real", name: "Señal R-30190", code: "R-30190", description: "Señal de tráfico oficial de España R-30190.", priceEst: 70, category: "vertical" },
  { id: "r301100_real", name: "Señal R-301100", code: "R-301100", description: "Señal de tráfico oficial de España R-301100.", priceEst: 70, category: "vertical" },
  { id: "r301110_real", name: "Señal R-301110", code: "R-301110", description: "Señal de tráfico oficial de España R-301110.", priceEst: 70, category: "vertical" },
  { id: "r301120_real", name: "Señal R-301120", code: "R-301120", description: "Señal de tráfico oficial de España R-301120.", priceEst: 70, category: "vertical" },
  { id: "r302_real", name: "Señal R-302", code: "R-302", description: "Señal de tráfico oficial de España R-302.", priceEst: 70, category: "vertical" },
  { id: "r303_real", name: "Señal R-303", code: "R-303", description: "Señal de tráfico oficial de España R-303.", priceEst: 70, category: "vertical" },
  { id: "r304_real", name: "Señal R-304", code: "R-304", description: "Señal de tráfico oficial de España R-304.", priceEst: 70, category: "vertical" },
  { id: "r305_real", name: "Señal R-305", code: "R-305", description: "Señal de tráfico oficial de España R-305.", priceEst: 70, category: "vertical" },
  { id: "r306_real", name: "Señal R-306", code: "R-306", description: "Señal de tráfico oficial de España R-306.", priceEst: 70, category: "vertical" },
  { id: "r307_real", name: "Señal R-307", code: "R-307", description: "Señal de tráfico oficial de España R-307.", priceEst: 70, category: "vertical" },
  { id: "r307a_real", name: "Señal R-307A", code: "R-307A", description: "Señal de tráfico oficial de España R-307A.", priceEst: 70, category: "vertical" },
  { id: "r307b_real", name: "Señal R-307B", code: "R-307B", description: "Señal de tráfico oficial de España R-307B.", priceEst: 70, category: "vertical" },
  { id: "r307c_real", name: "Señal R-307C", code: "R-307C", description: "Señal de tráfico oficial de España R-307C.", priceEst: 70, category: "vertical" },
  { id: "r308_real", name: "Señal R-308", code: "R-308", description: "Señal de tráfico oficial de España R-308.", priceEst: 70, category: "vertical" },
  { id: "r308c_real", name: "Señal R-308C", code: "R-308C", description: "Señal de tráfico oficial de España R-308C.", priceEst: 70, category: "vertical" },
  { id: "r308d_real", name: "Señal R-308D", code: "R-308D", description: "Señal de tráfico oficial de España R-308D.", priceEst: 70, category: "vertical" },
  { id: "r308e_real", name: "Señal R-308E", code: "R-308E", description: "Señal de tráfico oficial de España R-308E.", priceEst: 70, category: "vertical" },
  { id: "r308f_real", name: "Señal R-308F", code: "R-308F", description: "Señal de tráfico oficial de España R-308F.", priceEst: 70, category: "vertical" },
  { id: "r308g_real", name: "Señal R-308G", code: "R-308G", description: "Señal de tráfico oficial de España R-308G.", priceEst: 70, category: "vertical" },
  { id: "r308h_real", name: "Señal R-308H", code: "R-308H", description: "Señal de tráfico oficial de España R-308H.", priceEst: 70, category: "vertical" },
  { id: "r309_real", name: "Señal R-309", code: "R-309", description: "Señal de tráfico oficial de España R-309.", priceEst: 70, category: "vertical" },
  { id: "r310_real", name: "Señal R-310", code: "R-310", description: "Señal de tráfico oficial de España R-310.", priceEst: 70, category: "vertical" },
  { id: "r400a_real", name: "Señal R-400A", code: "R-400A", description: "Señal de tráfico oficial de España R-400A.", priceEst: 70, category: "vertical" },
  { id: "r400b_real", name: "Señal R-400B", code: "R-400B", description: "Señal de tráfico oficial de España R-400B.", priceEst: 70, category: "vertical" },
  { id: "r400c_real", name: "Señal R-400C", code: "R-400C", description: "Señal de tráfico oficial de España R-400C.", priceEst: 70, category: "vertical" },
  { id: "r400d_real", name: "Señal R-400D", code: "R-400D", description: "Señal de tráfico oficial de España R-400D.", priceEst: 70, category: "vertical" },
  { id: "r400e_real", name: "Señal R-400E", code: "R-400E", description: "Señal de tráfico oficial de España R-400E.", priceEst: 70, category: "vertical" },
  { id: "r401a_real", name: "Señal R-401A", code: "R-401A", description: "Señal de tráfico oficial de España R-401A.", priceEst: 70, category: "vertical" },
  { id: "r401b_real", name: "Señal R-401B", code: "R-401B", description: "Señal de tráfico oficial de España R-401B.", priceEst: 70, category: "vertical" },
  { id: "r401c_real", name: "Señal R-401C", code: "R-401C", description: "Señal de tráfico oficial de España R-401C.", priceEst: 70, category: "vertical" },
  { id: "r402_real", name: "Señal R-402", code: "R-402", description: "Señal de tráfico oficial de España R-402.", priceEst: 70, category: "vertical" },
  { id: "r403a_real", name: "Señal R-403A", code: "R-403A", description: "Señal de tráfico oficial de España R-403A.", priceEst: 70, category: "vertical" },
  { id: "r403b_real", name: "Señal R-403B", code: "R-403B", description: "Señal de tráfico oficial de España R-403B.", priceEst: 70, category: "vertical" },
  { id: "r403c_real", name: "Señal R-403C", code: "R-403C", description: "Señal de tráfico oficial de España R-403C.", priceEst: 70, category: "vertical" },
  { id: "r406_real", name: "Señal R-406", code: "R-406", description: "Señal de tráfico oficial de España R-406.", priceEst: 70, category: "vertical" },
  { id: "r407a_real", name: "Señal R-407A", code: "R-407A", description: "Señal de tráfico oficial de España R-407A.", priceEst: 70, category: "vertical" },
  { id: "r407b_real", name: "Señal R-407B", code: "R-407B", description: "Señal de tráfico oficial de España R-407B.", priceEst: 70, category: "vertical" },
  { id: "r409_real", name: "Señal R-409", code: "R-409", description: "Señal de tráfico oficial de España R-409.", priceEst: 70, category: "vertical" },
  { id: "r416_real", name: "Señal R-416", code: "R-416", description: "Señal de tráfico oficial de España R-416.", priceEst: 70, category: "vertical" },
  { id: "r420_real", name: "Señal R-420", code: "R-420", description: "Señal de tráfico oficial de España R-420.", priceEst: 70, category: "vertical" },
  { id: "r421_real", name: "Señal R-421", code: "R-421", description: "Señal de tráfico oficial de España R-421.", priceEst: 70, category: "vertical" },
  { id: "r500_real", name: "Señal R-500", code: "R-500", description: "Señal de tráfico oficial de España R-500.", priceEst: 70, category: "vertical" },
  { id: "r502_real", name: "Señal R-502", code: "R-502", description: "Señal de tráfico oficial de España R-502.", priceEst: 70, category: "vertical" },
  { id: "r503_real", name: "Señal R-503", code: "R-503", description: "Señal de tráfico oficial de España R-503.", priceEst: 70, category: "vertical" },
  { id: "r504_real", name: "Señal R-504", code: "R-504", description: "Señal de tráfico oficial de España R-504.", priceEst: 70, category: "vertical" },
  { id: "r505_real", name: "Señal R-505", code: "R-505", description: "Señal de tráfico oficial de España R-505.", priceEst: 70, category: "vertical" },
  { id: "r507_real", name: "Señal R-507", code: "R-507", description: "Señal de tráfico oficial de España R-507.", priceEst: 70, category: "vertical" },
  { id: "r508_real", name: "Señal R-508", code: "R-508", description: "Señal de tráfico oficial de España R-508.", priceEst: 70, category: "vertical" },
  { id: "r509_real", name: "Señal R-509", code: "R-509", description: "Señal de tráfico oficial de España R-509.", priceEst: 70, category: "vertical" },
  { id: "r510_real", name: "Señal R-510", code: "R-510", description: "Señal de tráfico oficial de España R-510.", priceEst: 70, category: "vertical" },
  { id: "r511_real", name: "Señal R-511", code: "R-511", description: "Señal de tráfico oficial de España R-511.", priceEst: 70, category: "vertical" },
  { id: "r512_real", name: "Señal R-512", code: "R-512", description: "Señal de tráfico oficial de España R-512.", priceEst: 70, category: "vertical" },
  { id: "r513_real", name: "Señal R-513", code: "R-513", description: "Señal de tráfico oficial de España R-513.", priceEst: 70, category: "vertical" },
  { id: "r515_real", name: "Señal R-515", code: "R-515", description: "Señal de tráfico oficial de España R-515.", priceEst: 70, category: "vertical" },
  { id: "r516_real", name: "Señal R-516", code: "R-516", description: "Señal de tráfico oficial de España R-516.", priceEst: 70, category: "vertical" },
  { id: "s1_real", name: "Señal S-1", code: "S-1", description: "Señal de tráfico oficial de España S-1.", priceEst: 70, category: "vertical" },
  { id: "s1a_real", name: "Señal S-1A", code: "S-1A", description: "Señal de tráfico oficial de España S-1A.", priceEst: 70, category: "vertical" },
  { id: "s2_real", name: "Señal S-2", code: "S-2", description: "Señal de tráfico oficial de España S-2.", priceEst: 70, category: "vertical" },
  { id: "s2a_real", name: "Señal S-2A", code: "S-2A", description: "Señal de tráfico oficial de España S-2A.", priceEst: 70, category: "vertical" },
  { id: "s3_real", name: "Señal S-3", code: "S-3", description: "Señal de tráfico oficial de España S-3.", priceEst: 70, category: "vertical" },
  { id: "s4_real", name: "Señal S-4", code: "S-4", description: "Señal de tráfico oficial de España S-4.", priceEst: 70, category: "vertical" },
  { id: "s5_real", name: "Señal S-5", code: "S-5", description: "Señal de tráfico oficial de España S-5.", priceEst: 70, category: "vertical" },
  { id: "s7_real", name: "Señal S-7", code: "S-7", description: "Señal de tráfico oficial de España S-7.", priceEst: 70, category: "vertical" },
  { id: "s8_real", name: "Señal S-8", code: "S-8", description: "Señal de tráfico oficial de España S-8.", priceEst: 70, category: "vertical" },
  { id: "s9_real", name: "Señal S-9", code: "S-9", description: "Señal de tráfico oficial de España S-9.", priceEst: 70, category: "vertical" },
  { id: "s10_real", name: "Señal S-10", code: "S-10", description: "Señal de tráfico oficial de España S-10.", priceEst: 70, category: "vertical" },
  { id: "s11_real", name: "Señal S-11", code: "S-11", description: "Señal de tráfico oficial de España S-11.", priceEst: 70, category: "vertical" },
  { id: "s11a_real", name: "Señal S-11A", code: "S-11A", description: "Señal de tráfico oficial de España S-11A.", priceEst: 70, category: "vertical" },
  { id: "s11b_real", name: "Señal S-11B", code: "S-11B", description: "Señal de tráfico oficial de España S-11B.", priceEst: 70, category: "vertical" },
  { id: "s12_real", name: "Señal S-12", code: "S-12", description: "Señal de tráfico oficial de España S-12.", priceEst: 70, category: "vertical" },
  { id: "s14a_real", name: "Señal S-14A", code: "S-14A", description: "Señal de tráfico oficial de España S-14A.", priceEst: 70, category: "vertical" },
  { id: "s14b_real", name: "Señal S-14B", code: "S-14B", description: "Señal de tráfico oficial de España S-14B.", priceEst: 70, category: "vertical" },
  { id: "s14c_real", name: "Señal S-14C", code: "S-14C", description: "Señal de tráfico oficial de España S-14C.", priceEst: 70, category: "vertical" },
  { id: "s14d_real", name: "Señal S-14D", code: "S-14D", description: "Señal de tráfico oficial de España S-14D.", priceEst: 70, category: "vertical" },
  { id: "s14e_real", name: "Señal S-14E", code: "S-14E", description: "Señal de tráfico oficial de España S-14E.", priceEst: 70, category: "vertical" },
  { id: "s14f_real", name: "Señal S-14F", code: "S-14F", description: "Señal de tráfico oficial de España S-14F.", priceEst: 70, category: "vertical" },
  { id: "s15a_real", name: "Señal S-15A", code: "S-15A", description: "Señal de tráfico oficial de España S-15A.", priceEst: 70, category: "vertical" },
  { id: "s15b_real", name: "Señal S-15B", code: "S-15B", description: "Señal de tráfico oficial de España S-15B.", priceEst: 70, category: "vertical" },
  { id: "s15c_real", name: "Señal S-15C", code: "S-15C", description: "Señal de tráfico oficial de España S-15C.", priceEst: 70, category: "vertical" },
  { id: "s15d_real", name: "Señal S-15D", code: "S-15D", description: "Señal de tráfico oficial de España S-15D.", priceEst: 70, category: "vertical" },
  { id: "s16_real", name: "Señal S-16", code: "S-16", description: "Señal de tráfico oficial de España S-16.", priceEst: 70, category: "vertical" },
  { id: "s17_real", name: "Señal S-17", code: "S-17", description: "Señal de tráfico oficial de España S-17.", priceEst: 70, category: "vertical" },
  { id: "s18_real", name: "Señal S-18", code: "S-18", description: "Señal de tráfico oficial de España S-18.", priceEst: 70, category: "vertical" },
  { id: "s19_real", name: "Señal S-19", code: "S-19", description: "Señal de tráfico oficial de España S-19.", priceEst: 70, category: "vertical" },
  { id: "s20_real", name: "Señal S-20", code: "S-20", description: "Señal de tráfico oficial de España S-20.", priceEst: 70, category: "vertical" },
  { id: "s22_real", name: "Señal S-22", code: "S-22", description: "Señal de tráfico oficial de España S-22.", priceEst: 70, category: "vertical" },
  { id: "s23_real", name: "Señal S-23", code: "S-23", description: "Señal de tráfico oficial de España S-23.", priceEst: 70, category: "vertical" },
  { id: "s24_real", name: "Señal S-24", code: "S-24", description: "Señal de tráfico oficial de España S-24.", priceEst: 70, category: "vertical" },
  { id: "s25_real", name: "Señal S-25", code: "S-25", description: "Señal de tráfico oficial de España S-25.", priceEst: 70, category: "vertical" },
  { id: "s26a_real", name: "Señal S-26A", code: "S-26A", description: "Señal de tráfico oficial de España S-26A.", priceEst: 70, category: "vertical" },
  { id: "s26b_real", name: "Señal S-26B", code: "S-26B", description: "Señal de tráfico oficial de España S-26B.", priceEst: 70, category: "vertical" },
  { id: "s26c_real", name: "Señal S-26C", code: "S-26C", description: "Señal de tráfico oficial de España S-26C.", priceEst: 70, category: "vertical" },
  { id: "s27_real", name: "Señal S-27", code: "S-27", description: "Señal de tráfico oficial de España S-27.", priceEst: 70, category: "vertical" },
  { id: "s28_real", name: "Señal S-28", code: "S-28", description: "Señal de tráfico oficial de España S-28.", priceEst: 70, category: "vertical" },
  { id: "s29_real", name: "Señal S-29", code: "S-29", description: "Señal de tráfico oficial de España S-29.", priceEst: 70, category: "vertical" },
  { id: "s32_real", name: "Señal S-32", code: "S-32", description: "Señal de tráfico oficial de España S-32.", priceEst: 70, category: "vertical" },
  { id: "s34_real", name: "Señal S-34", code: "S-34", description: "Señal de tráfico oficial de España S-34.", priceEst: 70, category: "vertical" },
  { id: "s34a_real", name: "Señal S-34A", code: "S-34A", description: "Señal de tráfico oficial de España S-34A.", priceEst: 70, category: "vertical" },
  { id: "s35_real", name: "Señal S-35", code: "S-35", description: "Señal de tráfico oficial de España S-35.", priceEst: 70, category: "vertical" },
  { id: "s36_real", name: "Señal S-36", code: "S-36", description: "Señal de tráfico oficial de España S-36.", priceEst: 70, category: "vertical" },
  { id: "s37_real", name: "Señal S-37", code: "S-37", description: "Señal de tráfico oficial de España S-37.", priceEst: 70, category: "vertical" },
  { id: "s38_real", name: "Señal S-38", code: "S-38", description: "Señal de tráfico oficial de España S-38.", priceEst: 70, category: "vertical" },
  { id: "s39_real", name: "Señal S-39", code: "S-39", description: "Señal de tráfico oficial de España S-39.", priceEst: 70, category: "vertical" },
  { id: "s40_real", name: "Señal S-40", code: "S-40", description: "Señal de tráfico oficial de España S-40.", priceEst: 70, category: "vertical" },
  { id: "s41_real", name: "Señal S-41", code: "S-41", description: "Señal de tráfico oficial de España S-41.", priceEst: 70, category: "vertical" },
  { id: "s42_real", name: "Señal S-42", code: "S-42", description: "Señal de tráfico oficial de España S-42.", priceEst: 70, category: "vertical" },
  { id: "s43_real", name: "Señal S-43", code: "S-43", description: "Señal de tráfico oficial de España S-43.", priceEst: 70, category: "vertical" },
  { id: "s44_real", name: "Señal S-44", code: "S-44", description: "Señal de tráfico oficial de España S-44.", priceEst: 70, category: "vertical" },
  { id: "s47_real", name: "Señal S-47", code: "S-47", description: "Señal de tráfico oficial de España S-47.", priceEst: 70, category: "vertical" },
  { id: "s48_real", name: "Señal S-48", code: "S-48", description: "Señal de tráfico oficial de España S-48.", priceEst: 70, category: "vertical" },
  { id: "s49_real", name: "Señal S-49", code: "S-49", description: "Señal de tráfico oficial de España S-49.", priceEst: 70, category: "vertical" },
  { id: "s50a_real", name: "Señal S-50A", code: "S-50A", description: "Señal de tráfico oficial de España S-50A.", priceEst: 70, category: "vertical" },
  { id: "s50b_real", name: "Señal S-50B", code: "S-50B", description: "Señal de tráfico oficial de España S-50B.", priceEst: 70, category: "vertical" },
  { id: "s50c_real", name: "Señal S-50C", code: "S-50C", description: "Señal de tráfico oficial de España S-50C.", priceEst: 70, category: "vertical" },
  { id: "s50d_real", name: "Señal S-50D", code: "S-50D", description: "Señal de tráfico oficial de España S-50D.", priceEst: 70, category: "vertical" },
  { id: "s50e_real", name: "Señal S-50E", code: "S-50E", description: "Señal de tráfico oficial de España S-50E.", priceEst: 70, category: "vertical" },
  { id: "s51_real", name: "Señal S-51", code: "S-51", description: "Señal de tráfico oficial de España S-51.", priceEst: 70, category: "vertical" },
  { id: "s51a_real", name: "Señal S-51A", code: "S-51A", description: "Señal de tráfico oficial de España S-51A.", priceEst: 70, category: "vertical" },
  { id: "s51b_real", name: "Señal S-51B", code: "S-51B", description: "Señal de tráfico oficial de España S-51B.", priceEst: 70, category: "vertical" },
  { id: "s52_real", name: "Señal S-52", code: "S-52", description: "Señal de tráfico oficial de España S-52.", priceEst: 70, category: "vertical" },
  { id: "s52a_real", name: "Señal S-52A", code: "S-52A", description: "Señal de tráfico oficial de España S-52A.", priceEst: 70, category: "vertical" },
  { id: "s52b_real", name: "Señal S-52B", code: "S-52B", description: "Señal de tráfico oficial de España S-52B.", priceEst: 70, category: "vertical" },
  { id: "s52c_real", name: "Señal S-52C", code: "S-52C", description: "Señal de tráfico oficial de España S-52C.", priceEst: 70, category: "vertical" },
  { id: "s52f_real", name: "Señal S-52F", code: "S-52F", description: "Señal de tráfico oficial de España S-52F.", priceEst: 70, category: "vertical" },
  { id: "s52g_real", name: "Señal S-52G", code: "S-52G", description: "Señal de tráfico oficial de España S-52G.", priceEst: 70, category: "vertical" },
  { id: "s53_real", name: "Señal S-53", code: "S-53", description: "Señal de tráfico oficial de España S-53.", priceEst: 70, category: "vertical" },
  { id: "s53a_real", name: "Señal S-53A", code: "S-53A", description: "Señal de tráfico oficial de España S-53A.", priceEst: 70, category: "vertical" },
  { id: "s53b_real", name: "Señal S-53B", code: "S-53B", description: "Señal de tráfico oficial de España S-53B.", priceEst: 70, category: "vertical" },
  { id: "s53c_real", name: "Señal S-53C", code: "S-53C", description: "Señal de tráfico oficial de España S-53C.", priceEst: 70, category: "vertical" },
  { id: "s60a_real", name: "Señal S-60A", code: "S-60A", description: "Señal de tráfico oficial de España S-60A.", priceEst: 70, category: "vertical" },
  { id: "s60b_real", name: "Señal S-60B", code: "S-60B", description: "Señal de tráfico oficial de España S-60B.", priceEst: 70, category: "vertical" },
  { id: "s61a_real", name: "Señal S-61A", code: "S-61A", description: "Señal de tráfico oficial de España S-61A.", priceEst: 70, category: "vertical" },
  { id: "s61b_real", name: "Señal S-61B", code: "S-61B", description: "Señal de tráfico oficial de España S-61B.", priceEst: 70, category: "vertical" },
  { id: "s61c_real", name: "Señal S-61C", code: "S-61C", description: "Señal de tráfico oficial de España S-61C.", priceEst: 70, category: "vertical" },
  { id: "s61d_real", name: "Señal S-61D", code: "S-61D", description: "Señal de tráfico oficial de España S-61D.", priceEst: 70, category: "vertical" },
  { id: "s62a_real", name: "Señal S-62A", code: "S-62A", description: "Señal de tráfico oficial de España S-62A.", priceEst: 70, category: "vertical" },
  { id: "s62b_real", name: "Señal S-62B", code: "S-62B", description: "Señal de tráfico oficial de España S-62B.", priceEst: 70, category: "vertical" },
  { id: "s63_real", name: "Señal S-63", code: "S-63", description: "Señal de tráfico oficial de España S-63.", priceEst: 70, category: "vertical" },
  { id: "s63b_real", name: "Señal S-63B", code: "S-63B", description: "Señal de tráfico oficial de España S-63B.", priceEst: 70, category: "vertical" },
  { id: "s63c_real", name: "Señal S-63C", code: "S-63C", description: "Señal de tráfico oficial de España S-63C.", priceEst: 70, category: "vertical" },
  { id: "s63d_real", name: "Señal S-63D", code: "S-63D", description: "Señal de tráfico oficial de España S-63D.", priceEst: 70, category: "vertical" },
  { id: "s64a_real", name: "Señal S-64A", code: "S-64A", description: "Señal de tráfico oficial de España S-64A.", priceEst: 70, category: "vertical" },
  { id: "s64b_real", name: "Señal S-64B", code: "S-64B", description: "Señal de tráfico oficial de España S-64B.", priceEst: 70, category: "vertical" },
  { id: "s65a_real", name: "Señal S-65A", code: "S-65A", description: "Señal de tráfico oficial de España S-65A.", priceEst: 70, category: "vertical" },
  { id: "s65b_real", name: "Señal S-65B", code: "S-65B", description: "Señal de tráfico oficial de España S-65B.", priceEst: 70, category: "vertical" },
  { id: "s66_real", name: "Señal S-66", code: "S-66", description: "Señal de tráfico oficial de España S-66.", priceEst: 70, category: "vertical" },
  { id: "s68_real", name: "Señal S-68", code: "S-68", description: "Señal de tráfico oficial de España S-68.", priceEst: 70, category: "vertical" },
  { id: "s70a_real", name: "Señal S-70A", code: "S-70A", description: "Señal de tráfico oficial de España S-70A.", priceEst: 70, category: "vertical" },
  { id: "s70b_real", name: "Señal S-70B", code: "S-70B", description: "Señal de tráfico oficial de España S-70B.", priceEst: 70, category: "vertical" },
  { id: "s71a_real", name: "Señal S-71A", code: "S-71A", description: "Señal de tráfico oficial de España S-71A.", priceEst: 70, category: "vertical" },
  { id: "s71b_real", name: "Señal S-71B", code: "S-71B", description: "Señal de tráfico oficial de España S-71B.", priceEst: 70, category: "vertical" },
  { id: "s72a_real", name: "Señal S-72A", code: "S-72A", description: "Señal de tráfico oficial de España S-72A.", priceEst: 70, category: "vertical" },
  { id: "s72b_real", name: "Señal S-72B", code: "S-72B", description: "Señal de tráfico oficial de España S-72B.", priceEst: 70, category: "vertical" },
  { id: "s73a_real", name: "Señal S-73A", code: "S-73A", description: "Señal de tráfico oficial de España S-73A.", priceEst: 70, category: "vertical" },
  { id: "s73b_real", name: "Señal S-73B", code: "S-73B", description: "Señal de tráfico oficial de España S-73B.", priceEst: 70, category: "vertical" },
  { id: "s100_real", name: "Señal S-100", code: "S-100", description: "Señal de tráfico oficial de España S-100.", priceEst: 70, category: "vertical" },
  { id: "s101_real", name: "Señal S-101", code: "S-101", description: "Señal de tráfico oficial de España S-101.", priceEst: 70, category: "vertical" },
  { id: "s102_real", name: "Señal S-102", code: "S-102", description: "Señal de tráfico oficial de España S-102.", priceEst: 70, category: "vertical" },
  { id: "s103_real", name: "Señal S-103", code: "S-103", description: "Señal de tráfico oficial de España S-103.", priceEst: 70, category: "vertical" },
  { id: "s104_real", name: "Señal S-104", code: "S-104", description: "Señal de tráfico oficial de España S-104.", priceEst: 70, category: "vertical" },
  { id: "s105_real", name: "Señal S-105", code: "S-105", description: "Señal de tráfico oficial de España S-105.", priceEst: 70, category: "vertical" },
  { id: "s105b_real", name: "Señal S-105B", code: "S-105B", description: "Señal de tráfico oficial de España S-105B.", priceEst: 70, category: "vertical" },
  { id: "s105c_real", name: "Señal S-105C", code: "S-105C", description: "Señal de tráfico oficial de España S-105C.", priceEst: 70, category: "vertical" },
  { id: "s105d_real", name: "Señal S-105D", code: "S-105D", description: "Señal de tráfico oficial de España S-105D.", priceEst: 70, category: "vertical" },
  { id: "s105e_real", name: "Señal S-105E", code: "S-105E", description: "Señal de tráfico oficial de España S-105E.", priceEst: 70, category: "vertical" },
  { id: "s105f_real", name: "Señal S-105F", code: "S-105F", description: "Señal de tráfico oficial de España S-105F.", priceEst: 70, category: "vertical" },
  { id: "s106_real", name: "Señal S-106", code: "S-106", description: "Señal de tráfico oficial de España S-106.", priceEst: 70, category: "vertical" },
  { id: "s107_real", name: "Señal S-107", code: "S-107", description: "Señal de tráfico oficial de España S-107.", priceEst: 70, category: "vertical" },
  { id: "s108_real", name: "Señal S-108", code: "S-108", description: "Señal de tráfico oficial de España S-108.", priceEst: 70, category: "vertical" },
  { id: "s109_real", name: "Señal S-109", code: "S-109", description: "Señal de tráfico oficial de España S-109.", priceEst: 70, category: "vertical" },
  { id: "s110_real", name: "Señal S-110", code: "S-110", description: "Señal de tráfico oficial de España S-110.", priceEst: 70, category: "vertical" },
  { id: "s111_real", name: "Señal S-111", code: "S-111", description: "Señal de tráfico oficial de España S-111.", priceEst: 70, category: "vertical" },
  { id: "s112_real", name: "Señal S-112", code: "S-112", description: "Señal de tráfico oficial de España S-112.", priceEst: 70, category: "vertical" },
  { id: "s113_real", name: "Señal S-113", code: "S-113", description: "Señal de tráfico oficial de España S-113.", priceEst: 70, category: "vertical" },
  { id: "s114_real", name: "Señal S-114", code: "S-114", description: "Señal de tráfico oficial de España S-114.", priceEst: 70, category: "vertical" },
  { id: "s115_real", name: "Señal S-115", code: "S-115", description: "Señal de tráfico oficial de España S-115.", priceEst: 70, category: "vertical" },
  { id: "s116_real", name: "Señal S-116", code: "S-116", description: "Señal de tráfico oficial de España S-116.", priceEst: 70, category: "vertical" },
  { id: "s117_real", name: "Señal S-117", code: "S-117", description: "Señal de tráfico oficial de España S-117.", priceEst: 70, category: "vertical" },
  { id: "s118_real", name: "Señal S-118", code: "S-118", description: "Señal de tráfico oficial de España S-118.", priceEst: 70, category: "vertical" },
  { id: "s119_real", name: "Señal S-119", code: "S-119", description: "Señal de tráfico oficial de España S-119.", priceEst: 70, category: "vertical" },
  { id: "s121_real", name: "Señal S-121", code: "S-121", description: "Señal de tráfico oficial de España S-121.", priceEst: 70, category: "vertical" },
  { id: "s122_real", name: "Señal S-122", code: "S-122", description: "Señal de tráfico oficial de España S-122.", priceEst: 70, category: "vertical" },
  { id: "s123_real", name: "Señal S-123", code: "S-123", description: "Señal de tráfico oficial de España S-123.", priceEst: 70, category: "vertical" },
  { id: "s124_real", name: "Señal S-124", code: "S-124", description: "Señal de tráfico oficial de España S-124.", priceEst: 70, category: "vertical" },
  { id: "s125_real", name: "Señal S-125", code: "S-125", description: "Señal de tráfico oficial de España S-125.", priceEst: 70, category: "vertical" },
  { id: "s126_real", name: "Señal S-126", code: "S-126", description: "Señal de tráfico oficial de España S-126.", priceEst: 70, category: "vertical" },
  { id: "s127_real", name: "Señal S-127", code: "S-127", description: "Señal de tráfico oficial de España S-127.", priceEst: 70, category: "vertical" },
  { id: "s200_real", name: "Señal S-200", code: "S-200", description: "Señal de tráfico oficial de España S-200.", priceEst: 70, category: "vertical" },
  { id: "s220_real", name: "Señal S-220", code: "S-220", description: "Señal de tráfico oficial de España S-220.", priceEst: 70, category: "vertical" },
  { id: "s222_real", name: "Señal S-222", code: "S-222", description: "Señal de tráfico oficial de España S-222.", priceEst: 70, category: "vertical" },
  { id: "s222a_real", name: "Señal S-222A", code: "S-222A", description: "Señal de tráfico oficial de España S-222A.", priceEst: 70, category: "vertical" },
  { id: "s225_real", name: "Señal S-225", code: "S-225", description: "Señal de tráfico oficial de España S-225.", priceEst: 70, category: "vertical" },
  { id: "s230_real", name: "Señal S-230", code: "S-230", description: "Señal de tráfico oficial de España S-230.", priceEst: 70, category: "vertical" },
  { id: "s230a_real", name: "Señal S-230A", code: "S-230A", description: "Señal de tráfico oficial de España S-230A.", priceEst: 70, category: "vertical" },
  { id: "s232_real", name: "Señal S-232", code: "S-232", description: "Señal de tráfico oficial de España S-232.", priceEst: 70, category: "vertical" },
  { id: "s232a_real", name: "Señal S-232A", code: "S-232A", description: "Señal de tráfico oficial de España S-232A.", priceEst: 70, category: "vertical" },
  { id: "s235_real", name: "Señal S-235", code: "S-235", description: "Señal de tráfico oficial de España S-235.", priceEst: 70, category: "vertical" },
  { id: "s235a_real", name: "Señal S-235A", code: "S-235A", description: "Señal de tráfico oficial de España S-235A.", priceEst: 70, category: "vertical" },
  { id: "s242_real", name: "Señal S-242", code: "S-242", description: "Señal de tráfico oficial de España S-242.", priceEst: 70, category: "vertical" },
  { id: "s250_real", name: "Señal S-250", code: "S-250", description: "Señal de tráfico oficial de España S-250.", priceEst: 70, category: "vertical" },
  { id: "s260_real", name: "Señal S-260", code: "S-260", description: "Señal de tráfico oficial de España S-260.", priceEst: 70, category: "vertical" },
  { id: "s261_real", name: "Señal S-261", code: "S-261", description: "Señal de tráfico oficial de España S-261.", priceEst: 70, category: "vertical" },
  { id: "s263_real", name: "Señal S-263", code: "S-263", description: "Señal de tráfico oficial de España S-263.", priceEst: 70, category: "vertical" },
  { id: "s263a_real", name: "Señal S-263A", code: "S-263A", description: "Señal de tráfico oficial de España S-263A.", priceEst: 70, category: "vertical" },
  { id: "s264_real", name: "Señal S-264", code: "S-264", description: "Señal de tráfico oficial de España S-264.", priceEst: 70, category: "vertical" },
  { id: "s266_real", name: "Señal S-266", code: "S-266", description: "Señal de tráfico oficial de España S-266.", priceEst: 70, category: "vertical" },
  { id: "s266a_real", name: "Señal S-266A", code: "S-266A", description: "Señal de tráfico oficial de España S-266A.", priceEst: 70, category: "vertical" },
  { id: "s270_real", name: "Señal S-270", code: "S-270", description: "Señal de tráfico oficial de España S-270.", priceEst: 70, category: "vertical" },
  { id: "s271_real", name: "Señal S-271", code: "S-271", description: "Señal de tráfico oficial de España S-271.", priceEst: 70, category: "vertical" },
  { id: "s322_real", name: "Señal S-322", code: "S-322", description: "Señal de tráfico oficial de España S-322.", priceEst: 70, category: "vertical" },
  { id: "s351_real", name: "Señal S-351", code: "S-351", description: "Señal de tráfico oficial de España S-351.", priceEst: 70, category: "vertical" },
  { id: "s354_real", name: "Señal S-354", code: "S-354", description: "Señal de tráfico oficial de España S-354.", priceEst: 70, category: "vertical" },
  { id: "s355_real", name: "Señal S-355", code: "S-355", description: "Señal de tráfico oficial de España S-355.", priceEst: 70, category: "vertical" },
  { id: "s360_real", name: "Señal S-360", code: "S-360", description: "Señal de tráfico oficial de España S-360.", priceEst: 70, category: "vertical" },
  { id: "s362_real", name: "Señal S-362", code: "S-362", description: "Señal de tráfico oficial de España S-362.", priceEst: 70, category: "vertical" },
  { id: "s366_real", name: "Señal S-366", code: "S-366", description: "Señal de tráfico oficial de España S-366.", priceEst: 70, category: "vertical" },
  { id: "s368_real", name: "Señal S-368", code: "S-368", description: "Señal de tráfico oficial de España S-368.", priceEst: 70, category: "vertical" },
  { id: "s373_real", name: "Señal S-373", code: "S-373", description: "Señal de tráfico oficial de España S-373.", priceEst: 70, category: "vertical" },
  { id: "s375_real", name: "Señal S-375", code: "S-375", description: "Señal de tráfico oficial de España S-375.", priceEst: 70, category: "vertical" },
  { id: "s600_real", name: "Señal S-600", code: "S-600", description: "Señal de tráfico oficial de España S-600.", priceEst: 70, category: "vertical" },
  { id: "s602_real", name: "Señal S-602", code: "S-602", description: "Señal de tráfico oficial de España S-602.", priceEst: 70, category: "vertical" },
  { id: "s700_real", name: "Señal S-700", code: "S-700", description: "Señal de tráfico oficial de España S-700.", priceEst: 70, category: "vertical" },
  { id: "s710_real", name: "Señal S-710", code: "S-710", description: "Señal de tráfico oficial de España S-710.", priceEst: 70, category: "vertical" },
  { id: "s720_real", name: "Señal S-720", code: "S-720", description: "Señal de tráfico oficial de España S-720.", priceEst: 70, category: "vertical" },
  { id: "s740_real", name: "Señal S-740", code: "S-740", description: "Señal de tráfico oficial de España S-740.", priceEst: 70, category: "vertical" },
  { id: "s760_real", name: "Señal S-760", code: "S-760", description: "Señal de tráfico oficial de España S-760.", priceEst: 70, category: "vertical" },
  { id: "s770_real", name: "Señal S-770", code: "S-770", description: "Señal de tráfico oficial de España S-770.", priceEst: 70, category: "vertical" },
  { id: "s800_real", name: "Señal S-800", code: "S-800", description: "Señal de tráfico oficial de España S-800.", priceEst: 70, category: "vertical" },
  { id: "s810_real", name: "Señal S-810", code: "S-810", description: "Señal de tráfico oficial de España S-810.", priceEst: 70, category: "vertical" },
  { id: "s820_real", name: "Señal S-820", code: "S-820", description: "Señal de tráfico oficial de España S-820.", priceEst: 70, category: "vertical" },
  { id: "s821_real", name: "Señal S-821", code: "S-821", description: "Señal de tráfico oficial de España S-821.", priceEst: 70, category: "vertical" },
  { id: "s830_real", name: "Señal S-830", code: "S-830", description: "Señal de tráfico oficial de España S-830.", priceEst: 70, category: "vertical" },
  { id: "s840_real", name: "Señal S-840", code: "S-840", description: "Señal de tráfico oficial de España S-840.", priceEst: 70, category: "vertical" },
  { id: "s850_real", name: "Señal S-850", code: "S-850", description: "Señal de tráfico oficial de España S-850.", priceEst: 70, category: "vertical" },
  { id: "s851_real", name: "Señal S-851", code: "S-851", description: "Señal de tráfico oficial de España S-851.", priceEst: 70, category: "vertical" },
  { id: "s852_real", name: "Señal S-852", code: "S-852", description: "Señal de tráfico oficial de España S-852.", priceEst: 70, category: "vertical" },
  { id: "s853_real", name: "Señal S-853", code: "S-853", description: "Señal de tráfico oficial de España S-853.", priceEst: 70, category: "vertical" },
  { id: "s860a_real", name: "Señal S-860A", code: "S-860A", description: "Señal de tráfico oficial de España S-860A.", priceEst: 70, category: "vertical" },
  { id: "s860b_real", name: "Señal S-860B", code: "S-860B", description: "Señal de tráfico oficial de España S-860B.", priceEst: 70, category: "vertical" },
  { id: "s870a_real", name: "Señal S-870A", code: "S-870A", description: "Señal de tráfico oficial de España S-870A.", priceEst: 70, category: "vertical" },
  { id: "s870b_real", name: "Señal S-870B", code: "S-870B", description: "Señal de tráfico oficial de España S-870B.", priceEst: 70, category: "vertical" },
  { id: "s880a_real", name: "Señal S-880A", code: "S-880A", description: "Señal de tráfico oficial de España S-880A.", priceEst: 70, category: "vertical" },
  { id: "s880b_real", name: "Señal S-880B", code: "S-880B", description: "Señal de tráfico oficial de España S-880B.", priceEst: 70, category: "vertical" },
  { id: "s880c_real", name: "Señal S-880C", code: "S-880C", description: "Señal de tráfico oficial de España S-880C.", priceEst: 70, category: "vertical" },
  { id: "s880d_real", name: "Señal S-880D", code: "S-880D", description: "Señal de tráfico oficial de España S-880D.", priceEst: 70, category: "vertical" },
  { id: "s880e_real", name: "Señal S-880E", code: "S-880E", description: "Señal de tráfico oficial de España S-880E.", priceEst: 70, category: "vertical" },
  { id: "s880f_real", name: "Señal S-880F", code: "S-880F", description: "Señal de tráfico oficial de España S-880F.", priceEst: 70, category: "vertical" },
  { id: "s890a_real", name: "Señal S-890A", code: "S-890A", description: "Señal de tráfico oficial de España S-890A.", priceEst: 70, category: "vertical" },
  { id: "s890b_real", name: "Señal S-890B", code: "S-890B", description: "Señal de tráfico oficial de España S-890B.", priceEst: 70, category: "vertical" },
  { id: "s890c_real", name: "Señal S-890C", code: "S-890C", description: "Señal de tráfico oficial de España S-890C.", priceEst: 70, category: "vertical" },
  { id: "s891_real", name: "Señal S-891", code: "S-891", description: "Señal de tráfico oficial de España S-891.", priceEst: 70, category: "vertical" },
  { id: "s892_real", name: "Señal S-892", code: "S-892", description: "Señal de tráfico oficial de España S-892.", priceEst: 70, category: "vertical" },
  { id: "s900_real", name: "Señal S-900", code: "S-900", description: "Señal de tráfico oficial de España S-900.", priceEst: 70, category: "vertical" },
  { id: "s910_real", name: "Señal S-910", code: "S-910", description: "Señal de tráfico oficial de España S-910.", priceEst: 70, category: "vertical" },
  { id: "s920_real", name: "Señal S-920", code: "S-920", description: "Señal de tráfico oficial de España S-920.", priceEst: 70, category: "vertical" },
  { id: "s930a_real", name: "Señal S-930A", code: "S-930A", description: "Señal de tráfico oficial de España S-930A.", priceEst: 70, category: "vertical" },
  { id: "s950_real", name: "Señal S-950", code: "S-950", description: "Señal de tráfico oficial de España S-950.", priceEst: 70, category: "vertical" },
  { id: "s960_real", name: "Señal S-960", code: "S-960", description: "Señal de tráfico oficial de España S-960.", priceEst: 70, category: "vertical" },
  { id: "s970_real", name: "Señal S-970", code: "S-970", description: "Señal de tráfico oficial de España S-970.", priceEst: 70, category: "vertical" },
  { id: "s980_real", name: "Señal S-980", code: "S-980", description: "Señal de tráfico oficial de España S-980.", priceEst: 70, category: "vertical" },
  { id: "s990a_real", name: "Señal S-990A", code: "S-990A", description: "Señal de tráfico oficial de España S-990A.", priceEst: 70, category: "vertical" },
  { id: "tp1_real", name: "Señal T-P1", code: "T-P1", description: "Señal de tráfico oficial de España T-P1.", priceEst: 70, category: "vertical" },
  { id: "tp1a_real", name: "Señal T-P1A", code: "T-P1A", description: "Señal de tráfico oficial de España T-P1A.", priceEst: 70, category: "vertical" },
  { id: "tp1b_real", name: "Señal T-P1B", code: "T-P1B", description: "Señal de tráfico oficial de España T-P1B.", priceEst: 70, category: "vertical" },
  { id: "tp1c_real", name: "Señal T-P1C", code: "T-P1C", description: "Señal de tráfico oficial de España T-P1C.", priceEst: 70, category: "vertical" },
  { id: "tp1d_real", name: "Señal T-P1D", code: "T-P1D", description: "Señal de tráfico oficial de España T-P1D.", priceEst: 70, category: "vertical" },
  { id: "tp2_real", name: "Señal T-P2", code: "T-P2", description: "Señal de tráfico oficial de España T-P2.", priceEst: 70, category: "vertical" },
  { id: "tp3_real", name: "Señal T-P3", code: "T-P3", description: "Señal de tráfico oficial de España T-P3.", priceEst: 70, category: "vertical" },
  { id: "tp4_real", name: "Señal T-P4", code: "T-P4", description: "Señal de tráfico oficial de España T-P4.", priceEst: 70, category: "vertical" },
  { id: "tp13a_real", name: "Señal T-P13A", code: "T-P13A", description: "Señal de tráfico oficial de España T-P13A.", priceEst: 70, category: "vertical" },
  { id: "tp13b_real", name: "Señal T-P13B", code: "T-P13B", description: "Señal de tráfico oficial de España T-P13B.", priceEst: 70, category: "vertical" },
  { id: "tp14a_real", name: "Señal T-P14A", code: "T-P14A", description: "Señal de tráfico oficial de España T-P14A.", priceEst: 70, category: "vertical" },
  { id: "tp14b_real", name: "Señal T-P14B", code: "T-P14B", description: "Señal de tráfico oficial de España T-P14B.", priceEst: 70, category: "vertical" },
  { id: "tp15_real", name: "Señal T-P15", code: "T-P15", description: "Señal de tráfico oficial de España T-P15.", priceEst: 70, category: "vertical" },
  { id: "tp15a_real", name: "Señal T-P15A", code: "T-P15A", description: "Señal de tráfico oficial de España T-P15A.", priceEst: 70, category: "vertical" },
  { id: "tp15b_real", name: "Señal T-P15B", code: "T-P15B", description: "Señal de tráfico oficial de España T-P15B.", priceEst: 70, category: "vertical" },
  { id: "tp17_real", name: "Señal T-P17", code: "T-P17", description: "Señal de tráfico oficial de España T-P17.", priceEst: 70, category: "vertical" },
  { id: "tp17a_real", name: "Señal T-P17A", code: "T-P17A", description: "Señal de tráfico oficial de España T-P17A.", priceEst: 70, category: "vertical" },
  { id: "tp17b_real", name: "Señal T-P17B", code: "T-P17B", description: "Señal de tráfico oficial de España T-P17B.", priceEst: 70, category: "vertical" },
  { id: "tp19_real", name: "Señal T-P19", code: "T-P19", description: "Señal de tráfico oficial de España T-P19.", priceEst: 70, category: "vertical" },
  { id: "tp25_real", name: "Señal T-P25", code: "T-P25", description: "Señal de tráfico oficial de España T-P25.", priceEst: 70, category: "vertical" },
  { id: "tp26_real", name: "Señal T-P26", code: "T-P26", description: "Señal de tráfico oficial de España T-P26.", priceEst: 70, category: "vertical" },
  { id: "tp28_real", name: "Señal T-P28", code: "T-P28", description: "Señal de tráfico oficial de España T-P28.", priceEst: 70, category: "vertical" },
  { id: "tp30_real", name: "Señal T-P30", code: "T-P30", description: "Señal de tráfico oficial de España T-P30.", priceEst: 70, category: "vertical" },
  { id: "tp31_real", name: "Señal T-P31", code: "T-P31", description: "Señal de tráfico oficial de España T-P31.", priceEst: 70, category: "vertical" },
  { id: "tp50_real", name: "Señal T-P50", code: "T-P50", description: "Señal de tráfico oficial de España T-P50.", priceEst: 70, category: "vertical" },
  { id: "tr1_real", name: "Señal T-R1", code: "T-R1", description: "Señal de tráfico oficial de España T-R1.", priceEst: 70, category: "vertical" },
  { id: "tr204_real", name: "Señal T-R204", code: "T-R204", description: "Señal de tráfico oficial de España T-R204.", priceEst: 70, category: "vertical" },
  { id: "tr205_real", name: "Señal T-R205", code: "T-R205", description: "Señal de tráfico oficial de España T-R205.", priceEst: 70, category: "vertical" },
  { id: "tr302_real", name: "Señal T-R302", code: "T-R302", description: "Señal de tráfico oficial de España T-R302.", priceEst: 70, category: "vertical" },
  { id: "tr303_real", name: "Señal T-R303", code: "T-R303", description: "Señal de tráfico oficial de España T-R303.", priceEst: 70, category: "vertical" },
  { id: "tr30120_real", name: "Señal T-R30120", code: "T-R30120", description: "Señal de tráfico oficial de España T-R30120.", priceEst: 70, category: "vertical" },
  { id: "tr30130_real", name: "Señal T-R30130", code: "T-R30130", description: "Señal de tráfico oficial de España T-R30130.", priceEst: 70, category: "vertical" },
  { id: "tr30140_real", name: "Señal T-R30140", code: "T-R30140", description: "Señal de tráfico oficial de España T-R30140.", priceEst: 70, category: "vertical" },
  { id: "tr30150_real", name: "Señal T-R30150", code: "T-R30150", description: "Señal de tráfico oficial de España T-R30150.", priceEst: 70, category: "vertical" },
  { id: "tr30160_real", name: "Señal T-R30160", code: "T-R30160", description: "Señal de tráfico oficial de España T-R30160.", priceEst: 70, category: "vertical" },
  { id: "tr30170_real", name: "Señal T-R30170", code: "T-R30170", description: "Señal de tráfico oficial de España T-R30170.", priceEst: 70, category: "vertical" },
  { id: "tr30180_real", name: "Señal T-R30180", code: "T-R30180", description: "Señal de tráfico oficial de España T-R30180.", priceEst: 70, category: "vertical" },
  { id: "tr30190_real", name: "Señal T-R30190", code: "T-R30190", description: "Señal de tráfico oficial de España T-R30190.", priceEst: 70, category: "vertical" },
  { id: "tr301100_real", name: "Señal T-R301100", code: "T-R301100", description: "Señal de tráfico oficial de España T-R301100.", priceEst: 70, category: "vertical" },
  { id: "tr500_real", name: "Señal T-R500", code: "T-R500", description: "Señal de tráfico oficial de España T-R500.", priceEst: 70, category: "vertical" },
  { id: "v-r1", name: "Ceda el paso", code: "R-1", description: "Señal de reglamentación Ceda el Paso. Indica la obligación de ceder el paso.", specs: ["Lámina Nivel 2", "135/60/30 cm", "Acero galvanizado"], priceEst: 70, category: "vertical" },
  { id: "v-r2", name: "Señal R-2 STOP", code: "R-2", description: "Señal de detención obligatoria con lámina retrorreflectante de clase RA2, fabricada en chapa de acero galvanizado troquelado.", specs: ["Diámetro estándar: 600 / 900 mm", "Lámina microprismática", "Acero protección anticorrosiva"], priceEst: 85, category: "vertical" },
  { id: "p-1", name: "Curva peligrosa a la derecha", code: "P-1", description: "Señal triangular de peligro por la proximidad de una curva peligrosa hacia la derecha.", specs: ["Lados 70/90 cm", "Reflectante Nivel I/II"], priceEst: 65, category: "vertical" },
  { id: "p-2", name: "Curva peligrosa a la izquierda", code: "P-2", description: "Señal triangular de peligro por curva peligrosa hacia la izquierda.", specs: ["Lados 70/90 cm", "Reflectante Nivel I/II"], priceEst: 65, category: "vertical" },
  { id: "p-3", name: "Curvas peligrosas", code: "P-3", description: "Peligro por la proximidad de una sucesión de curvas peligrosas.", specs: ["Lado 70/90/135 cm", "Acero / Aluminio"], priceEst: 68, category: "vertical" },
  { id: "p-4", name: "Intersección con prioridad", code: "P-4", description: "Peligro por proximidad de intersección con prioridad sobre vías a derecha e izquierda.", priceEst: 70, category: "vertical" },
  { id: "p-15", name: "Perfil irregular", code: "P-15", description: "Peligro por proximidad de un resalto o badén o pavimento en mal estado.", priceEst: 65, category: "vertical" },
  { id: "p-17", name: "Estrechamiento de calzada", code: "P-17", description: "Peligro por estrechamiento de la vía.", priceEst: 65, category: "vertical" },
  { id: "p-20", name: "Peligro Paso de Peatones", code: "P-20", description: "Peligro por la proximidad de un lugar frecuentado por peatones.", priceEst: 65, category: "vertical" },
  { id: "p-21", name: "Peligro Niños", code: "P-21", description: "Peligro por la proximidad de un lugar frecuentado por niños (colegios, zonas de juegos).", priceEst: 65, category: "vertical" },
  { id: "r-101", name: "Entrada prohibida", code: "R-101", description: "Prohibición de acceso a toda clase de vehículos.", priceEst: 80, category: "vertical" },
  { id: "r-118", name: "Entrada prohibida VMP", code: "R-118", description: "Prohibición de acceso a vehículos de movilidad personal (patinetes).", priceEst: 80, category: "vertical" },
  { id: "r-301-30", name: "Velocidad máxima 30", code: "R-301", description: "Prohibición de circular a más de 30 km/h (zonas pacíficas).", priceEst: 80, category: "vertical" },
  { id: "r-301-50", name: "Velocidad máxima 50", code: "R-301", description: "Prohibición de circular a más de 50 km/h (vías urbanas/interurbanas).", priceEst: 80, category: "vertical" },
  { id: "s-11", name: "Principio de Autopista", code: "S-11", description: "Señal de indicación de principio de autopista.", priceEst: 150, category: "vertical" },
  { id: "s-13", name: "Vía para automóviles", code: "S-13", description: "Señal de indicación de principio de vía reservada a automóviles.", priceEst: 150, category: "vertical" },
  { id: "s-28", name: "Zonas de Hospital", code: "S-28", description: "Indicación de proximidad a un hospital o centro sanitario.", priceEst: 95, category: "vertical" },
  { id: "s-122", name: "Paso de Peatones (Info)", code: "S-122", description: "Situación de un paso para peatones. Cuadrada o rectangular.", priceEst: 80, category: "vertical" },
  { id: "v-ts210", name: "Llama Direccional TS-210", code: "TS-210", description: "Cartel informativo o pórtico de destino azul reflectante con distancias métricas y flechas de guiado para autovías.", specs: ["Modular en aluminio extruido", "Reflectancia Nivel 3 RA3", "Soportes perfiles de acero"], priceEst: 450, category: "vertical" },
  { id: "v-obras", name: "Señal Triangular de Obras TR-215", code: "TR-215", description: "Peligro temporal por obras con base plegable de trípode, pintura amarilla especial para alta luminosidad.", specs: ["Trípode plegable integrado", "Amarillo flúor reflectante", "Ligera y fácil de transportar"], priceEst: 65, category: "vertical" },
  { id: "tr-301", name: "Velocidad máxima obras", code: "TR-301", description: "Límite de velocidad máxima temporal en tramos de obras con fondo amarillo flúor.", priceEst: 75, category: "vertical" },
  
  // --- SEÑALIZACIÓN HORIZONTAL ---
  { id: "h-marcas", name: "Marcas Viales Acrílicas (Continuas/Discontinuas)", code: "M-1.1/M-1.2", description: "Líneas longitudinales de pintura de larga duración con microesferas de vidrio incorporadas para retrorreflexión instantánea en húmedo.", specs: ["Espesor: 400 micras seco", "Resistencia de deslizamiento > 45 SRT", "Secado rápido < 15 minutos"], priceEst: 4.8, category: "horizontal" },
  { id: "h-transv", name: "Barra Transversal de Alerta", description: "Marcas viales transversales de reducción de velocidad inducida por vibración y efecto óptico especial para zonas de obras.", specs: ["Ancho mínimo: 50 cm", "Separación modular: 1-3 m", "Material reflectante RA2 en frío"], priceEst: 18, category: "horizontal" },
  { id: "h-acc", name: "Cajón Símbolo Accesibilidad S-A1", description: "Fondo azul purpurina con pictograma de silla de ruedas en blanco mate para estacionamientos autorizados de movilidad reducida.", specs: ["Dimensiones: 1.5 x 1.5 metros", "Cumplimiento RD 505/2007", "Alta resistencia frente a neumáticos"], priceEst: 75, category: "horizontal" },
  { id: "m-2-1", name: "Línea transversal continua", code: "M-2.1", description: "Línea transversal continua para indicar detención obligatoria ante STOP o paso peatonales.", priceEst: 6, category: "horizontal" },
  { id: "m-2-2", name: "Línea transversal discontinua", code: "M-2.2", description: "Línea transversal discontinua para indicar Ceda el Paso.", priceEst: 4.5, category: "horizontal" },
  { id: "m-4-1", name: "Paso de Peatones Cebreado", code: "M-4.1", description: "Bandas anchas blancas paralelas para el cruce de peatones.", specs: ["Ancho de banda: 50cm", "Pintura termoplástica antideslizante"], priceEst: 35, category: "horizontal" },
  { id: "m-4-2", name: "Paso para ciclistas", code: "M-4.2", description: "Líneas transversales discontinuas paralelas para carriles bici.", priceEst: 25, category: "horizontal" },
  { id: "m-5-1", name: "Letra Ceda el Paso", code: "M-5.1", description: "Símbolo triangular marcado en el pavimento.", priceEst: 18, category: "horizontal" },
  { id: "m-5-2", name: "Marca de STOP", code: "M-5.2", description: "Las letras STOP marcadas en la calzada para detención.", priceEst: 20, category: "horizontal" },
  { id: "m-6-4", name: "Marca de Velocidad", code: "M-6.4", description: "Cifra en la calzada indicando el límite de velocidad del carril.", priceEst: 15, category: "horizontal" },
  { id: "m-6-5", name: "Símbolo Ciclotrompetas", code: "M-6.5", description: "Marca vial para carriles preferentes de bicicletas.", priceEst: 18, category: "horizontal" },
  
  // --- SISTEMAS DE CONTENCIÓN ---
  { id: "c-bs", name: "Barrera de Seguridad Simple", description: "Barrera metálica de perfil W con postes de acero clavados al suelo a intervalos normales para amortiguar salidas de calzada.", specs: ["Aptitud nivel de contención: N2", "Material: Acero galvanizado S235JR", "Marcado Certificación CE EN 1317"], priceEst: 48, category: "containment" },
  { id: "c-bd", name: "Barrera Doble BMSNC", description: "Sistema coordinado de doble onda metálica idónea para medianas estrechas con elevado peligro de colisión frontal.", specs: ["Doble cara de absorción", "Postes HEA de deformación programada", "Galvanizado caliente ≥ 70 micras"], priceEst: 95, category: "containment" },
  { id: "c-sm", name: "Sistema Protección Motoristas SPM", description: "Salva-vidas inferior elástico instalado bajo la bionda metálica clásica para evitar cortes fatales a motoristas y ciclistas.", specs: ["Homologación clase 60 o 70", "Estructura lisa continua de absorción", "Fácil reequipamiento en barreras ya existentes"], priceEst: 35, category: "containment" },
  
  // --- SEÑALIZACIÓN Y MOBILIARIO URBANO ---
  { id: "u-baran1500", name: "Barandilla Peatonal 1.500mm", description: "Protección urbana elegante de menor altura, idónea para canalizar flujos de peatones en aceras estrechas.", specs: ["Altura visible: 900 mm", "Acero inoxidable o lacado Ral", "Anclaje mediante brida atornillada"], priceEst: 120, category: "urban" },
  { id: "u-baran2000", name: "Barandilla Puentes 2.000mm", description: "Barandilla reforzada normalizada con barrotes verticales tupidos anti-escalada para pasos elevados y puentes de autovías.", specs: ["Altura total normalizada: 1100 mm", "Postes robustos S235JR", "Certificado de carga lateral"], priceEst: 185, category: "urban" },
  { id: "u-bolardo-flex", name: "Bolardo Hito Flexible Poliuretano", description: "Bolardo cilíndrico de balizamiento urbano capaz de absorber decenas de atropellos regresando a su forma original.", specs: ["Altura: 800 mm con dos bandas RA2", "Poliuretano memoria de forma", "No daña los parachoques de vehículos"], priceEst: 45, category: "urban" },
  { id: "u-valla-negra", name: "Valla Metálica de Protección Peatonal", description: "Valla protectora peatonal de rejilla de acero lacado en negro para desvío y seguridad enfrente de colegios.", specs: ["Acero electro-zincado termolacado", "Fácil acoplamiento modular", "Ancho estándar: 1.8 metros"], priceEst: 90, category: "urban" },
  
  // --- DISPOSITIVOS LUMINOSOS ---
  { id: "d-cono75", name: "Cono de Seguridad 75cm", code: "TB-11", description: "Cono termoplástico súper flexible naranja fosforescente con dos camisas prismáticas de reflectancia homologada de obras.", specs: ["Altura: 75 cm", "Base pesada de caucho reciclado", "Camisa prismática nivel 2"], priceEst: 16, category: "devices" },
  { id: "d-led-m", name: "Panel LED Variable de Vía", description: "Panel digital dinámico configurable de alta intensidad para alerta de velocidades móviles e incidencias en obras.", specs: ["Leds de alta luminosidad nichia", "Batería solar recargable + cargador", "Control mediante app bluetooth/gsm"], priceEst: 1850, category: "devices" },
  { id: "d-triflash", name: "Dispositivo Señalizador Triflash", description: "Triángulo LED destellante instalado sobre techos de vehículos de servicio vial con encendido integrado automático.", specs: ["3 potentes ópticas LED de 100mm", "Alimentación dual: 12V / Batería", "Homologación oficial de carreteras"], priceEst: 280, category: "devices" }
];

export const ZONES_CONTACT_DATA: ZoneContact[] = [
  {
    id: "levante",
    name: "Zona Levante (Sede Central)",
    regions: ["Castellón", "Valencia", "Alicante", "Murcia"],
    phone: "966 215 988",
    email: "levante@pacasa.com",
    schedule: "Lunes a Viernes: 8:00 - 18:30",
    cobertura: "Comunidad Valenciana y Murcia",
    servicios: "Instalación, mantenimiento, suministro de marcas viales e ingeniería de fabricación.",
    color: "#eab308", // Yellow
    centerX: 65,
    centerY: 55
  },
  {
    id: "centro",
    name: "Zona Centro",
    regions: ["Madrid", "Toledo", "Guadalajara", "Cuenca", "Segovia", "Ávila"],
    phone: "666 480 820",
    email: "centro@pacasa.com",
    schedule: "Lunes a Viernes: 8:00 - 18:00",
    cobertura: "Madrid y provincias limítrofes",
    servicios: "Obras civiles de señalización, mantenimiento urgente y suministro de componentes.",
    color: "#f97316", // Orange
    centerX: 45,
    centerY: 46
  },
  {
    id: "cataluna",
    name: "Zona Cataluña",
    regions: ["Barcelona", "Tarragona", "Lleida", "Girona"],
    phone: "600 918 075",
    email: "cataluna@pacasa.com",
    schedule: "Lunes a Viernes: 8:00 - 18:00",
    cobertura: "Cataluña completa (Sede Barcelona)",
    servicios: "Señalización vial integral de carreteras catalanas (marcas en frío y señalización vertical de obras).",
    color: "#ef4444", // Red
    centerX: 81,
    centerY: 25
  },
  {
    id: "sur",
    name: "Zona Sur",
    regions: ["Sevilla", "Málaga", "Cádiz", "Granada", "Córdoba", "Huelva", "Jaén", "Almería", "Extremadura"],
    phone: "607 110 210",
    email: "sur@pacasa.com",
    schedule: "Lunes a Viernes: 8:00 - 18:00",
    cobertura: "Andalucía, Extremadura y Murcia",
    servicios: "Instalación y mantenimiento con maquinaria de autopropulsado termoplástico.",
    color: "#10b981", // Green
    centerX: 31,
    centerY: 75
  },
  {
    id: "aragon",
    name: "Zona Aragón",
    regions: ["Zaragoza", "Huesca", "Teruel"],
    phone: "666 480 811",
    email: "aragon@pacasa.com",
    schedule: "Lunes a Viernes: 8:00 - 18:00",
    cobertura: "Comunidad de Aragón",
    servicios: "Suministro de cartelería de aluminio y señalética direccional de carreteras autonómicas.",
    color: "#06b6d4", // Cyan
    centerX: 62,
    centerY: 30
  },
  {
    id: "norte",
    name: "Zona Norte",
    regions: ["País Vasco", "Cantabria", "Asturias", "Galicia", "Navarra", "La Rioja"],
    phone: "666 480 861",
    email: "norte@pacasa.com",
    schedule: "Lunes a Viernes: 8:00 - 18:00",
    cobertura: "País Vasco, Cantabria, Asturias y Galicia",
    servicios: "Mantenimiento invernal, barreras de seguridad vial quitamiedos, y suministro de balizas reflectantes de alta visibilidad.",
    color: "#6366f1", // Indigo
    centerX: 35,
    centerY: 15
  },
  {
    id: "canarias",
    name: "Zona Canarias",
    regions: ["Tenerife", "Gran Canaria", "Lanzarote", "Fuerteventura", "La Palma", "La Gomera", "El Hierro"],
    phone: "666 480 821",
    email: "canarias@pacasa.com",
    schedule: "Lunes a Viernes: 8:00 - 18:00 (Hora canaria)",
    cobertura: "Islas Canarias completas",
    servicios: "Instalación de señalización urbana, balizamiento especial y reflectores de alta visibilidad costeros.",
    color: "#a855f7", // Purple
    centerX: 15,
    centerY: 90
  }
];
