export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'flagship' | 'data' | 'institutional' | 'tools';
  categoryLabel: string;
  status: 'Completado' | 'En Producción' | 'Prototipo / POC' | 'En Expansión';
  date: string;
  
  // Perspective 1: Tech / Engineering
  tech: {
    stack: string[];
    architecture: string;
    highlights: string[];
    database?: string;
    githubUrl?: string;
    liveUrl?: string;
    metrics?: string[];
  };

  // Perspective 2: Functional Analyst / Business
  functional: {
    clientOrDomain: string;
    businessProblem: string;
    valueProposition: string;
    keyRequirements: string[];
    deliverables: string[];
    userPersona: string;
  };

  featured: boolean;
  accentColor: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'grimoldi-b2b',
    title: 'Grimoldi B2B & Retail System',
    subtitle: 'Relevamiento de Requerimientos, Modelado DER & Solución Fullstack',
    category: 'flagship',
    categoryLabel: 'Retail & Negocios',
    status: 'Completado',
    date: '2023 - 2024',
    accentColor: 'from-blue-600 to-indigo-700',
    featured: true,
    tech: {
      stack: ['React', 'Node.js', 'Express', 'SQL Relacional', 'Draw.io DER', 'REST API'],
      architecture: 'Clean Architecture orientada a dominio comercial con capa de persistencia normalizada.',
      highlights: [
        'Diagrama Entidad-Relación (DER) integral con normalización 3FN.',
        'Módulos de catálogo multimarca, listas de precios diferenciadas y control de stock centralizado.',
        'Backend desacoplado con endpoints protegidos y manejo transaccional de órdenes.'
      ],
      database: 'PostgreSQL / SQL con restricciones de integridad y triggers de stock',
      githubUrl: 'https://github.com/LucasMiguezCA',
      metrics: ['100% Cobertura de Requerimientos', 'Normalización 3FN', 'Tiempos de respuesta <120ms']
    },
    functional: {
      clientOrDomain: 'Grimoldi (Calzado & Retail Masivo)',
      businessProblem: 'Desconexión entre canales de distribución mayorista B2B, falta de visibilidad en tiempo real del stock disponible y errores recurrentes en la liquidación de pedidos.',
      valueProposition: 'Plataforma unificada que digitaliza la toma de órdenes comerciales mayoristas, reduciendo tiempos de procesamiento administrativo y devolviendo tranquilidad operativa al equipo comercial.',
      keyRequirements: [
        'Matriz de validación de crédito y condiciones de pago por cliente mayorista.',
        'Cálculo dinámico de listas de precios según volumen y perfil fiscal.',
        'Trazabilidad punta a punta desde la emisión del pedido hasta el despacho en depósito.'
      ],
      deliverables: [
        'Documento formal de Especificación de Requerimientos de Software (ERS).',
        'Cuestionario de relevamiento funcional y entrevistas con stakeholders.',
        'Diagrama Entidad-Relación (DER) conceptual, lógico y físico.'
      ],
      userPersona: 'Gerentes de Cuentas B2B, Supervisores de Depósito y Compradores Mayoristas.'
    }
  },
  {
    id: 'pictocomm-saac',
    title: 'PictoComm / PictoLink',
    subtitle: 'Arquitectura Políglota (Neo4j Grafos + Cassandra + Redis) para Inclusión',
    category: 'data',
    categoryLabel: 'Impacto Social & Salud',
    status: 'Completado',
    date: '2024',
    accentColor: 'from-cyan-600 to-blue-700',
    featured: true,
    tech: {
      stack: ['Neo4j (Cypher)', 'Apache Cassandra', 'Redis', 'Node.js Express', 'Frontend SAAC'],
      architecture: 'Arquitectura de Datos Multi-modelo (Multi-model Polyglot Persistence) con microservicios API.',
      highlights: [
        'Modelado ontológico en Grafo (Neo4j) para predecir y relacionar pictogramas semánticamente.',
        'Persistencia masiva distribuida (Cassandra) para auditoría de comunicaciones y telemetría de uso.',
        'Caché en memoria ultrarrápida (Redis) para sesiones de pacientes y carga instantánea de tableros.'
      ],
      database: 'Políglota: Neo4j (Grafos) + Cassandra (Columnar NoSQL) + Redis (In-Memory Key-Value)',
      githubUrl: 'https://github.com/LucasMiguezCA/TPO_Ingenieria_de_datos_2_UADE',
      metrics: ['3 Motores NoSQL integrados', 'Latencia semántica <40ms', 'Accesibilidad inclusiva']
    },
    functional: {
      clientOrDomain: 'Salud, Fonoaudiología & Accesibilidad Cognitiva (UADE)',
      businessProblem: 'Las personas con discapacidades en la comunicación verbal o neurodivergencias enfrentan barreras comunicativas diarias que reducen drásticamente su autonomía e integración comunitaria.',
      valueProposition: 'Sistema de Comunicación Aumentativa y Alternativa (SAAC) inteligente que predice secuencias semánticas de pictogramas, facilitando la interacción humana y mejorando la calidad de vida diaria.',
      keyRequirements: [
        'Sugerencia contextual de pictogramas basada en la relación semántica de la oración.',
        'Interfaz accesible de alto contraste con feedback auditivo.',
        'Panel clínico para profesionales de fonoaudiología con métricas de autonomía.'
      ],
      deliverables: [
        'Modelo de dominio de grafos semánticos.',
        'Prototipo funcional accesible para tabletas táctiles.',
        'Evaluación de usabilidad clínica para pacientes.'
      ],
      userPersona: 'Pacientes con dificultades del habla (TEA, afasia), terapeutas del lenguaje y familiares.'
    }
  },
  {
    id: 'dged-armada',
    title: 'DGED Armada Argentina',
    subtitle: 'Sistema Institucional de Gestión Educativa & Parte Diario',
    category: 'institutional',
    categoryLabel: 'Sector Público & Normativo',
    status: 'En Producción',
    date: '2023 - 2024',
    accentColor: 'from-slate-700 to-blue-900',
    featured: true,
    tech: {
      stack: ['Vue.js 3', 'Vite', 'Pinia', 'Tailwind CSS', 'REST API', 'PDF Engine'],
      architecture: 'Single Page Application (SPA) con arquitectura basada en componentes reactivos y control de acceso RBAC.',
      highlights: [
        'Digitalización estricta bajo Disposiciones Permanentes de la DGPN (Dirección General del Personal Naval).',
        'Generador dinámico de Partes Diarios institucionales con exportación fidedigna a formato oficial.',
        'Gestión de estados reactivos y validación cruzada de asistencias y novedades del personal.'
      ],
      database: 'Base de datos institucional relacional con auditoría estricta de modificaciones',
      githubUrl: 'https://github.com/LucasMiguezCA',
      metrics: ['Digitalización del 100% de partes físicos', 'Cumplimiento normativo DGPN N° 01-23']
    },
    functional: {
      clientOrDomain: 'Dirección General de Educación de la Armada (DGED)',
      businessProblem: 'El flujo de partes diarios dependía de planillas en papel y circuitos lentos, sobrecargando de estrés operativo y tareas manuales repetitivas al personal a cargo.',
      valueProposition: 'Modernización del circuito administrativo mediante un sistema digital confiable que elimina la carga burocrática manual y garantiza consistencia documental en tiempo real.',
      keyRequirements: [
        'Cumplimiento taxativo de las estructuras de partes diarios fijadas por las disposiciones navales.',
        'Firma y validación escalonada según la cadena de mando.',
        'Módulo de consulta rápida de niveles de instrucción y certificaciones del personal.'
      ],
      deliverables: [
        'Mapeo de procesos de la disposición administrativa militar a flujos de software.',
        'Módulos de Parte Diario, Sistema de Inglés y Consulta de Niveles.',
        'Manual de usuario y capacitación técnica para operadores institucionales.'
      ],
      userPersona: 'Oficiales de Personal, Instructores Educativos y Autoridades Navales.'
    }
  },
  {
    id: 'senasa-trazabilidad',
    title: 'SENASA Gestión Sanitaria',
    subtitle: 'Portal de Validación & Cumplimiento Fitosanitario y Zoosanitario',
    category: 'institutional',
    categoryLabel: 'Sector Público & Auditoría',
    status: 'Completado',
    date: '2023',
    accentColor: 'from-emerald-700 to-teal-900',
    featured: false,
    tech: {
      stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Formik / Zod'],
      architecture: 'Módulo web de alta disponibilidad con motor de validaciones condicionales complejas.',
      highlights: [
        'Formularios de registro sanitario con más de 80 campos dinámicos interconectados.',
        'Validación asíncrona de padrones y certificados de sanidad animal/vegetal.',
        'Generación de reportes de auditoría listos para inspecciones internacionales.'
      ],
      database: 'PostgreSQL con esquemas de trazabilidad y logs de auditoría inmutables',
      githubUrl: 'https://github.com/LucasMiguezCA',
      metrics: ['0% Error en validaciones de certificados', 'Soporte de transacciones concurrentes']
    },
    functional: {
      clientOrDomain: 'Servicio Nacional de Sanidad y Calidad Agroalimentaria (SENASA)',
      businessProblem: 'La complejidad burocrática y regulatoria frenaba la emisión ágil de certificados fitosanitarios para productores, arriesgando cargas y generando fricción innecesaria.',
      valueProposition: 'Agilización de la carga y verificación de declaraciones juradas sanitarias con reglas autoejecutables que protegen al productor y aceleran los tiempos del trámite.',
      keyRequirements: [
        'Validación en tiempo real contra registros sanitarios oficiales.',
        'Gestión de roles diferenciados: Productor, Inspector de Campo y Auditor Central.',
        'Historial inmutable de modificaciones para cumplimiento de auditorías externas.'
      ],
      deliverables: [
        'Diccionario de reglas de negocio fitosanitarias.',
        'Prototipos interactivos de alta fidelidad para el flujo de carga.',
        'Matriz de pruebas funcionales y casos extremos (edge cases).'
      ],
      userPersona: 'Auditores sanitarios, inspectores de frontera y productores agropecuarios.'
    }
  },
  {
    id: 'alexandria-analytics',
    title: 'Alexandria Analytics & LisoSoft',
    subtitle: 'Plataforma Frontend de Visualización de Datos & Business Intelligence',
    category: 'flagship',
    categoryLabel: 'Data & BI para PyMEs',
    status: 'En Expansión',
    date: '2024',
    accentColor: 'from-violet-600 to-indigo-900',
    featured: false,
    tech: {
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts / ChartJS', 'Axios'],
      architecture: 'Arquitectura modular frontend con consumo desacoplado de microservicios analíticos.',
      highlights: [
        'Paneles dinámicos con renderizado optimizado para grandes volúmenes de datos temporales.',
        'Widgets interactivos configurables por el usuario final (filtros cruzados).',
        'Consumo de APIs REST con debounce, memoización y caché local optimizada.'
      ],
      database: 'Time-series DB & Data Warehouse en backend',
      githubUrl: 'https://github.com/AlexandriaAnalytics/lisoft',
      metrics: ['Render fluido en tiempo real', 'Sincronización multi-gráfico reactiva']
    },
    functional: {
      clientOrDomain: 'Alexandria Analytics',
      businessProblem: 'Las PyMEs pierden semanas intentando consolidar datos dispersos en hojas de cálculo desactualizadas, tomando decisiones a ciegas en un contexto de inflación y cambio constante.',
      valueProposition: 'Un tablero de control visual simple que traduce números fríos en claridad operativa inmediata, permitiendo tomar decisiones rápidas sin necesidad de contratar costosas consultoras.',
      keyRequirements: [
        'Capacidad de filtrado instantáneo sin recarga de pantalla.',
        'Exportación de informes ejecutivos en un solo clic.',
        'Diseño limpio y comprensible para dueños de negocio no técnicos.'
      ],
      deliverables: [
        'Design System para métricas y gráficos corporativos.',
        'Especificación de contratos de API para el equipo de backend.',
        'Flujos de navegación de usuario para analítica de datos.'
      ],
      userPersona: 'Dueños de PyMEs, Directores de Operaciones y Responsables Comerciales.'
    }
  },
  {
    id: 'cuadro-conceptual',
    title: 'Cuadro Conceptual & Modelador Visual',
    subtitle: 'Herramienta de Mapeo de Arquitectura & Síntesis de Ideas Complejas',
    category: 'tools',
    categoryLabel: 'Herramientas de Diseño & Ideación',
    status: 'Prototipo / POC',
    date: '2024',
    accentColor: 'from-amber-600 to-orange-800',
    featured: false,
    tech: {
      stack: ['React', 'SVG Canvas', 'Tailwind CSS', 'State Management'],
      architecture: 'Motor de renderizado vectorial sobre canvas SVG reactivo.',
      highlights: [
        'Conexión dinámica de nodos con cálculo trigonométrico de curvas Bézier.',
        'Serialización y deserialización de estructuras de datos en grafos dirigidos.',
        'Exportación modular de esquemas para documentación técnica.'
      ],
      githubUrl: 'https://github.com/LucasMiguezCA',
      metrics: ['Interacción a 60 FPS', 'Exportación vectorial limpia']
    },
    functional: {
      clientOrDomain: 'Product Architecture & Domain Modeling',
      businessProblem: 'Explicar sistemas y procesos complejos a personas de negocio suele ser abstracto y frustrante sin una herramienta visual interactiva que baje ideas a tierra.',
      valueProposition: 'Espacio de trabajo visual donde las ideas complejas y los circuitos de trabajo de una empresa se descomponen en entidades claras antes de escribir código.',
      keyRequirements: [
        'Creación y vinculación rápida de conceptos mediante atajos.',
        'Organización jerárquica y por capas semánticas.',
        'Puente directo entre el modelo conceptual y el diseño de la solución técnica.'
      ],
      deliverables: [
        'Prototipo interactivo en navegador.',
        'Esquema JSON abierto de representación de modelos mentales.'
      ],
      userPersona: 'Dueños de negocio, Analistas Funcionales y Diseñadores de Procesos.'
    }
  }
];

export const PYME_PILLARS = [
  {
    icon: 'SearchCheck',
    title: '1. Diagnóstico Funcional Sin Costo',
    tagline: 'Entendemos el dolor antes de hablar de tecnología',
    description: 'No vendemos software empaquetado ni suscripciones infladas. Nos sentamos con vos, analizamos cómo funciona tu negocio hoy, dónde se pierde tiempo y qué procesos te generan estrés.',
    badge: 'Cero Fricción'
  },
  {
    icon: 'Layers',
    title: '2. Sistemas a Medida Simples y Económicos',
    tagline: 'La herramienta justa, sin funciones que nadie usa',
    description: 'Desarrollamos soluciones livianas y directas (gestión de stock, catálogos B2B, seguimiento de pedidos, paneles de control) que tu equipo aprende a usar en 10 minutos.',
    badge: 'Económico & Eficiente'
  },
  {
    icon: 'HeartHandshake',
    title: '3. Tecnología para la Calidad de Vida',
    tagline: 'Devolver horas de descanso al dueño y su gente',
    description: 'El objetivo no es la tecnología en sí, sino aliviar la carga mental del trabajo diario: eliminar planillas de cálculo rotas, evitar errores de despacho y que el negocio funcione ordenado.',
    badge: 'Impacto Humano'
  },
  {
    icon: 'TrendingUp',
    title: '4. Acompañamiento y Crecimiento Continuo',
    tagline: 'Soporte humano y cercano que evoluciona con tu empresa',
    description: 'No te dejamos solo con un manual de 200 páginas. Capacitamos a tu equipo con calidez, realizamos ajustes según el feedback real y escalamos el sistema al ritmo de tu crecimiento.',
    badge: 'Socio Tecnológico'
  }
];
