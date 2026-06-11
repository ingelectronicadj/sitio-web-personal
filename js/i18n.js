/**
 * Sistema de internacionalización (i18n)
 * Soporte para Español (es) e Inglés (en)
 */
const i18n = {
  currentLang: "es",

  translations: {
    es: {
      // Meta & Title
      "page-title": "Diego Mena · Experto en Accesibilidad Digital — WCAG 2.2, Auditorías y Shift Left",
      "meta-description":
        "Perfil profesional de Diego Mena. Experto en accesibilidad digital con +5 años en auditorías WCAG 2.2, EN 301 549 y Sección 508. Especializado en fintech, gobierno y e-learning. De la conformidad al impacto real.",

      // Skip link
      "skip-link": "Saltar al contenido principal",

      // Navbar horizontal
      "nav-experience": "Experiencia",
      "nav-skills": "Habilidades",
      "nav-projects": "Proyectos",
      "nav-blog": "Artículos",

      // Sidebar nav
      "opens-new-tab": "(Se abre en una nueva pestaña)",
      "nav-about": "Acerca de mí",
      "nav-experience-side": "Experiencia",
      "nav-education": "Educación",
      "nav-skills-side": "Habilidades",
      "nav-projects-side": "Proyectos",
      "nav-interests": "Intereses",
      "nav-blog-side": "Artículos",
      "nav-awards": "Eventos",

      // Toggle & flags
      "contrast-label": "Modo oscuro",
      "sun-title": "Sin contraste",
      "moon-title": "Alto contraste",
      "flag-es-title": "Sitio en Español",
      "flag-en-title": "Traducir sitio al Inglés",

      // About section
      "about-profession": "<b>EXPERTO EN ACCESIBILIDAD DIGITAL</b>",
      "about-passion": "Apasionado por la ciencia y las tecnologías libres.",
      "about-email-label": "E-mail:",
      "about-contact-label": "Contacto:",
      "about-resume-link": " Hoja de vida en PDF",
      "about-resume-pdf": "./docs/Hoja_de_Vida_Diego_Mena-ES.pdf",
      "about-description":
        "<b>Ingeniero especializado en desarrollo de productos digitales accesibles</b>, con experiencia en entornos web e híbridos. Magíster en Gerencia de Proyectos, con más de 5 años de experiencia en accesibilidad digital, aseguramiento de calidad (QA) y usabilidad.<br />Actualmente participa en proyectos internacionales en el sector fintech y de criptoactivos para clientes en España y Alemania, aportando en la accesibilidad de sistemas de componentes utilizados por múltiples aplicaciones web. De forma paralela, trabaja con entidades gubernamentales en Colombia, realizando diagnósticos y mejoras de accesibilidad alineadas con la <b>WCAG 2.2</b>, la Directiva Europea <b>EN 301 549</b>, la <b>Sección 508</b> de EE.UU. y la <b>Resolución 1519</b> de 2020 del MinTIC para Colombia.<br />Mi experiencia abarca desde el diseño y pruebas de accesibilidad, hasta la formación de equipos técnicos y la elaboración de reportes para cumplimiento normativo, garantizando altos estándares de calidad e inclusión digital en sectores como e-learning, fintech, comercio electrónico y gobierno.",

      // Social links aria-labels
      "aria-linkedin": "Red profesional Linkedin (Abre en una nueva ventana)",
      "aria-github": "Repositorios Github (Abre en una nueva ventana)",
      "aria-gitlab": "Repositorios Gitlab (Abre en una nueva ventana)",
      "aria-cvlac": "Perfil en CvLac (Abre en una nueva ventana)",

      // Events carousel
      "events-carousel-title": "Eventos y participaciones",

      // Experience section
      "section-experience": "Experiencia",

      "exp0-title": "Founder",
      "exp0-company":
        '<a href="https://a11ypro.tech/" target="_blank" rel="noopener noreferrer" aria-label="Visitar el sitio web de A11Y PRO (Abre en una nueva pestaña)">A11Y PRO</a>',
      "exp0-description":
        '<b>Funciones:</b> Fundé A11Y PRO, una empresa especializada en accesibilidad digital. Lidero el diseño y desarrollo de soluciones SaaS que automatizan la evaluación y remediación de accesibilidad web conforme al <b>cumplimiento normativo internacional (WCAG, ADA y EN 301 549)</b>. Entre mis creaciones clave se encuentran el <a href="https://scanner.a11ypro.tech/" target="_blank" rel="noopener noreferrer" aria-label="Visitar A11Y PRO Scanner (Abre en una nueva pestaña)"><b>A11Y PRO Scanner</b></a>, una herramienta de análisis automatizado de accesibilidad, y el <a href="https://widget.a11ypro.tech/" target="_blank" rel="noopener noreferrer" aria-label="Visitar A11Y PRO Widget (Abre en una nueva pestaña)"><b>A11Y PRO Widget</b></a>, un widget de accesibilidad integrable en cualquier sitio web.',
      "exp0-date": "Junio 2026 - Actualidad",

      "exp1-title": "Experto en Accesibilidad Digital",
      "exp1-company": "Hiberus",
      "exp1-description":
        "<b>Funciones:</b> Realizar evaluaciones de accesibilidad a productos digitales para entornos web e híbridos, alineadas con estándares internacionales como <b>WCAG 2.2</b> y la normativa europea <b>EN 301 549</b>. Formo parte de un equipo especializado en soluciones fintech y de criptoactivos para los mercados de España y Alemania, contribuyendo a la accesibilidad de todo el sistema de componentes utilizados por diversas aplicaciones web del ecosistema. Identifico áreas de mejora para optimizar la experiencia de usuario y defino estrategias para su implementación. Ejecuto pruebas de calidad (QA) para garantizar el correcto funcionamiento, accesibilidad y usabilidad, asegurando el cumplimiento normativo y altos estándares de calidad en el desarrollo de proyectos.",
      "exp1-date": "Dic 2024 - Actualidad",

      "exp2-title": "Experto en Accesibilidad Web",
      "exp2-company": "Superintendencia de Industria y Comercio",
      "exp2-description":
        "<b>Funciones:</b> Realizar revisiones de accesibilidad en distintos productos digitales y secciones de la sede electrónica de la entidad, aplicando las directrices de la <b>WCAG 2.2</b> y el Anexo 01 de la <b>Resolución 1519</b> de 2020 del MinTIC. Lideré la refactorización de todos los componentes del software principal para el registro de patentes en Colombia (SIPI) y la sede electrónica de la SIC, sentando las bases en un sistema de diseño y desarrollo robusto y accesible para futuros desarrollos. Contribuir en la identificación e implementación de mejoras de usabilidad y accesibilidad desde la fase de diseño de interfaces, incluyendo la capacitación a desarrolladores y creadores de contenido. Realizar pruebas de accesibilidad y calidad (QA) para diligenciar instrumentos como el FURAG e ITA.",
      "exp2-date": "Dic 2024 - Dic 2025",

      "exp3-description":
        'Certificación laboral por 5 años y 4 meses.<br><b>Funciones:</b> Aportar en el desarrollo de ambientes virtuales de aprendizaje, auditar recursos educativos digitales en accesibilidad web y desarrollar software para la automatización de procesos.<br><b>Algunos proyectos de gran impacto:</b> Lideré el proceso de actualización tecnológica de la Universidad Nacional Abierta y a Distancia en el año 2020, desarrollé todas las vistas de aulas modelo para la oferta de cursos de las distintas facultades y logré automatizar varios procesos para que los docentes pudieran crear cursos con estándares de calidad aportando a la <b>NTC6576</b>. En 2023, gané un <a href="https://sig.unad.edu.co/documentos/sig/buenas_practicas/2023_implementacion_rpa.pdf" target="_blank" rel="noopener noreferrer" aria-label="Ver reconocimiento por la implementación de un RPA (Abre en una nueva pestaña)"><b>reconocimiento institucional UNAD</b></a> por la implementación de un RPA para el apoyo de la gestión tecnopedagógica.',
      "exp3-date": "Sept 2019 - Dic 2024",

      "exp4-title": "Experto en accesibilidad web",
      "exp4-company": "Cognos Online",
      "exp4-description":
        "Fortalecer competencias y habilidades en accesibilidad web, a los funcionarios encargados de los portales institucionales y redes sociales de la Contraloría General de la República de Colombia.",
      "exp4-date": "Julio 2023 - Agosto 2023",

      "exp5-title": "Coordinador de educación",
      "exp5-company": "Universidad Autónoma de Bucaramanga",
      "exp5-description":
        "Coordinador de la Formación Técnico-Laboral en Programación: Como Coordinador de la ruta de formación técnico laboral en habilidades de programación, orientadas a aplicaciones móviles y web. Supervisar y coordinar todos los aspectos relacionados con la formación, incluyendo la selección de instructores, la planificación de lecciones y la evaluación del desempeño de los estudiantes. Trabajé en estrecha colaboración con el Fondo Único de Tecnologías de la Formación y las Comunicaciones y la Universidad Autónoma de Bucaramanga en virtud del Convenio de Asociación Nro. 743 de 2022.",
      "exp5-date": "Noviembre 2022 - Julio 2023",

      // Miniaturas de hitos en experiencia
      "exp0-milestone-label":
        "<i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i> Ver sitio web",
      "exp0-milestone-aria":
        "Visitar el sitio web de A11Y PRO (se abre en nueva pestaña)",
      "exp1-milestone-label":
        "<i class=\"fas fa-file-pdf\" aria-hidden=\"true\"></i> Ver certificado",
      "exp1-milestone-aria":
        "Ver certificado laboral de Hiberus (PDF, se abre en nueva pestaña)",
      "exp2-milestone-label":
        "<i class=\"fas fa-file-pdf\" aria-hidden=\"true\"></i> Ver certificado",
      "exp2-milestone-aria":
        "Ver certificado laboral de la SIC (PDF, se abre en nueva pestaña)",
      "exp3-milestone-label":
        "<i class=\"fas fa-file-pdf\" aria-hidden=\"true\"></i> Ver certificado",
      "exp3-milestone-aria":
        "Ver certificado laboral de la UNAD (PDF, se abre en nueva pestaña)",
      "exp4-milestone-label":
        "<i class=\"fas fa-file-pdf\" aria-hidden=\"true\"></i> Ver certificado",
      "exp4-milestone-aria":
        "Ver certificado laboral de Cognos Online (PDF, se abre en nueva pestaña)",
      "exp5-milestone-label":
        "<i class=\"fas fa-file-pdf\" aria-hidden=\"true\"></i> Ver certificado",
      "exp5-milestone-aria":
        "Ver certificado laboral de la UNAB (PDF, se abre en nueva pestaña)",

      // Education section
      "section-education": "Educación",

      "edu1-title": "Magister en Gerencia de Proyectos",
      "edu1-college": "Universidad Nacional Abierta y a Distancia",
      "edu1-description":
        'Actividades y asociaciones: Investigación y desarrollo (I+D). Miembro de la Red de Gestión Tecnopedagógica de cursos y recursos educativos digitales. Responsable por: Tecnologías de inclusión y accesibilidad web. <br><b>Tesis:</b> <a href="https://repository.unad.edu.co/handle/10596/69586" target="_blank" rel="noopener noreferrer">Prospectiva de plataforma educativa para la UNAD en zonas de baja o inexistente cobertura a internet</a>.',
      "edu1-date": "Agosto 2025",

      "edu2-title": "Especialista en Gestión de Proyectos",
      "edu2-college": "Universidad Nacional Abierta y a Distancia",
      "edu2-description":
        'Actividades y asociaciones: Investigación y desarrollo (I+D). Miembro de la Red de Gestión Tecnopedagógica de cursos y recursos educativos digitales. Responsable por: Tecnologías de inclusión y accesibilidad web. <br><b>Tesis:</b> <a href="https://repository.unad.edu.co/handle/10596/47926" target="_blank" rel="noopener noreferrer">Desarrollo de herramienta digital para el apoyo de la gestión tecnopedagógica de cursos en el campus virtual de la UNAD</a>.',
      "edu2-date": "Agosto 2022",

      "edu3-title": "Ingeniero Electrónico",
      "edu3-college": "Universidad Distrital Francisco José de Caldas",
      "edu3-description":
        'Actividades y asociaciones: Investigación y desarrollo (I+D). Exmiembro de los grupos de investigación: GLUD - Grupo Linux Universidad Distrital, GITUD - Grupo de Telecomunicaciones de la Universidad Distrital, LASER - Laboratorio de automatizacion, sistemas embebidos y robótica, TECLIBRE - Semillero de investigación en tecnologías libres. <br><b>Tesis:</b> <a href="https://repository.udistrital.edu.co/items/bd06700a-7131-470b-815f-52061c029aa2" target="_blank" rel="noopener noreferrer">Sistema Iot para el monitoreo y control de fuentes de luz artificial aplicado a la agricultura de precisión</a>.',
      "edu3-date": "Marzo 2018",

      // Miniaturas de diplomas en educación
      "edu-diploma-label": "\u003ci class=\"fas fa-file-pdf\" aria-hidden=\"true\"\u003e\u003c/i\u003e Ver diploma",
      "edu1-diploma-aria":
        "Ver diploma de Maestría en Gerencia de Proyectos (PDF, se abre en nueva pestaña)",
      "edu2-diploma-aria":
        "Ver diploma de Especialización en Gestión de Proyectos (PDF, se abre en nueva pestaña)",
      "edu3-diploma-aria":
        "Ver diploma de Ingeniero Electrónico (PDF, se abre en nueva pestaña)",

      // Skills section
      "section-skills": "Habilidades",
      "skills-intro":
        "Capacidad para la investigación, el autoaprendizaje, la resolución de problemas con creatividad e innovación, capacidad para escuchar a las personas y capacidad de recuperación. Facilidad de expresión oral, liderazgo de equipos, adaptabilidad a entornos laborales bajo presión, habilidades sociales y habilidades ejecutivas para administrar tareas por objetivos.",
      "skills-subtitle": "Certificaciones y Formación Continua",
      "skills-tech-stack": "Pila Tecnológica y Competencias",
      "skills-qa-title": "QA Engineering & Accessibility",
      "skills-qa-desc":
        "Experiencia en aseguramiento de calidad de aplicaciones web mediante pruebas funcionales, pruebas de regresión, validación de criterios de aceptación y análisis técnico del DOM. Especializado en pruebas de accesibilidad integradas al proceso de QA, combinando herramientas automáticas (axe DevTools, ARC Toolkit, IBM Equal Access, Lighthouse, WAVE), inspección técnica (Chrome DevTools, análisis de árbol de accesibilidad y semántica) y pruebas manuales con tecnologías de asistencia (NVDA, JAWS, VoiceOver y Talkback). Experiencia documentando defectos de forma técnica y accionable, análisis de causa raíz y acompañamiento a equipos de desarrollo en la remediación.",
      "skills-auto-title": "Automatización y análisis técnico",
      "skills-auto-desc":
        "Uso de Python para procesamiento de datos, apoyo a tareas de automatización, análisis de resultados de pruebas y generación de reportes técnicos. Experiencia trabajando con estructuras de datos, scripts de apoyo a QA y visualización de resultados mediante visores de datos. Entorno GNU/Linux como base para ejecución de herramientas, pruebas y flujos técnicos.",
      "skills-soft-title": "Base en ingeniería de software y sistemas",
      "skills-soft-desc":
        "Fundamentos sólidos en programación estructurada y orientada a objetos, comprensión de lógica de sistemas y arquitectura de software, lo que fortalece la capacidad de diagnóstico técnico, análisis de defectos complejos y comunicación efectiva para resolver incidencias con equipos de desarrollo.",
      skill1: "Especialista en Accesibilidad Web -",
      skill2: "Especialista en UX Research -",
      skill3: "Especialista en Gestión de Proyectos -",
      skill4: "Scrum Master -",
      skill5: "Especialista en Soporte de TI -",
      skill6: "Especialista en Diseño Web Responsive -",
      skill7: "Nivel de Javascript Avanzado -",
      skill8: "Especialista en Optimización Web -",
      "skill-cert": "Certificado",

      // Projects section
      "section-projects": "Proyectos",
      "projects-intro": "Para ver todos los proyectos consulte mi cuenta",
      "projects-or": "o mi cuenta",
      "projects-featured": "Entre los proyectos más destacados se encuentran:",

      "project1-title":
        "Auditoría de Accesibilidad Web para la sede electrónica de la SIC",
      "project1-link": "Ver resultados de auditoría",
      "project1-aria":
        "Ver resultados de la Auditoría de Accesibilidad Web para la sede electrónica de la SIC",
      "project2-title":
        "Séptimo Seminario de Accesibilidad Web e Inclusión en la Educación Virtual",
      "project2-link": "Ver agenda del seminario",
      "project2-aria":
        "Ver agenda del Séptimo Seminario de Accesibilidad Web e Inclusión en la Educación Virtual",
      "project3-title": "DataFill Foro educativo distrital 2024",
      "project3-link": "Ver plataforma del foro",
      "project3-aria":
        "Ver plataforma DataFill del Foro educativo distrital 2024",
      "project4-title":
        "Sitio web de asesoría y empleo para personas con disCapacidad",
      "project4-link": "Ver sitio de Assersum",
      "project4-aria":
        "Ver sitio web de Assersum - asesoría y empleo para personas con disCapacidad",
      "project5-title": "Plataforma educativa para MinCIT & Fontur",
      "project5-link": "Ver plataforma LMS",
      "project5-aria":
        "Ver plataforma LMS MinCIT - Sistema de gestión de aprendizaje",
      "project6-title":
        "Curso de Accesibilidad Web orientado a entidades de Gobierno",
      "project6-link": "Ver publicación del curso",
      "project6-aria":
        "Ver post de la clase final del Curso de Accesibilidad Web - Clase 20",

      "project9-title": "Reproductor de videos con interprete de señas",
      "project9-link": "Ver demo del reproductor",
      "project9-aria":
        "Ver demo del Reproductor de videos accesible con interprete de señas",

      "project11-title": "Cursos MOOC - Cursos Masivos Abiertos y en Línea",
      "project11-aria":
        "Ver catálogo de Cursos MOOC - Cursos Masivos Abiertos y en Línea",

      "project13-title": "Sistema de Webconferencia Educativa y Organizacional",
      "project13-link": "Ver sitio del proyecto",
      "project13-aria":
        "Ver sitio web del Sistema de Webconferencia Educativa y Organizacional",

      "project17-title": "Accesibilidad Web para la Sede electrónica de la SIC",
      "project17-link": "Ver sede electrónica",
      "project17-aria":
        "Ver Sede electrónica de la Superintendencia de Industria y Comercio - SIC",
      "project18-title":
        "Accesibilidad Web para la Oficina virtual de propiedad intelectual Colombia - SIPI",
      "project18-link": "Ver oficina virtual",
      "project18-aria": "Ver SIPI - Oficina virtual de propiedad intelectual",
      "project19-title":
        "Accesibilidad Web para Aplicación de criptomonedas - Openbank",
      "project19-link": "Ver aplicación web",
      "project19-aria": "Ver Aplicación web para criptomonedas - Openbank",
      "project20-title":
        "Panorama de la accesibilidad web en Colombia para sitios web gov.co",
      "project20-link": "Ver observatorio",
      "project20-aria":
        "Ver Panorama de la accesibilidad web en Colombia para sitios web gov.co - 5,000+ sitios gov.co",

      // Interests section
      "section-interests": "Intereses",
      "interests-p1":
        "Desde mis inicios como entusiasta de la informática, he creído que la tecnología solo cobra sentido cuando sirve a la sociedad. Hoy, esa convicción se materializa en mi trayectoria como experto en accesibilidad digital, donde he comprendido que para eliminar las barreras a gran escala necesitamos soluciones más inteligentes y robustas.",
      "interests-p2":
        "Es aquí donde la Inteligencia Artificial se convierte en el eje de mi visión: más que el núcleo académico de mi futuro Doctorado, la IA es para mí el motor que permitirá automatizar soluciones accesibles y cerrar la brecha digital en el ecosistema global.",
      "interests-p3":
        'Mi evolución técnica, desde la automatización siempre ha está guiada por los ODS y la "Ciencia para la paz", la cual busca comprender las causas de violencia y construir soluciones tecnológicas y sociales que fomenten la convivencia pacífica, la equidad y la justicia social. Me interesa aportar activamente a comunidades de software libre y a una educación de calidad que no deje a nadie atrás. Cada línea de código que escribo tiene un propósito claro: construir una red más humana, accesible y ética.',

      // Research section
      "research-header": "Enfoque de Investigación y Propuesta Doctoral",
      "research-p1":
        "Mi propuesta de investigación se centra en la aplicación de Inteligencia Artificial para la auditoría y mejora automatizada de la accesibilidad web en sitios gubernamentales.",
      "research-doctoral-link": "Propuesta Doctoral (Google Docs)",
      "research-bibliometry-link": "Tabla de Bibliometría (Google Sheets)",
      "research-act-p":
        'Romper el umbral del conocimiento mediante la validación de accesibilidad desde la automatización y la consistencia de casos de prueba; integrando el uso de <a href="https://scanner.a11ypro.tech/" target="_blank" rel="noopener noreferrer">A11Y PRO SCANNER <span class="visually-hidden" data-i18n="opens-new-tab">(Se abre en una nueva pestaña)</span></a> para auditorías a gran escala bajo normativas internacionales.',
      "research-act-link": "Implementaciones ACT (W3C)",
      "research-observatory-link":
        "Observatorio de Accesibilidad Digital Gov.co",
      "research-registration-link": "Certificado de Registro de Software",

      // Blog section
      "section-blog": "Artículos",
      "blog1-title": "Impacto de la Inteligencia Artificial en la automatización de auditorías <span class=\"text-primary\">WCAG</span>",
      "blog1-date": "Mayo 2026 · IA & Accesibilidad",
      "blog1-desc": "Exploramos cómo los modelos de lenguaje pueden asistir en la detección de problemas complejos de accesibilidad y las limitaciones actuales frente a la evaluación humana especializada.",
      "blog1-link": "Leer artículo",
      "blog1-aria": "Leer artículo sobre el Impacto de la Inteligencia Artificial en auditorías WCAG",
      "blog2-title": "Mejores prácticas para implementar ARIA en Single Page Applications",
      "blog2-date": "Mayo 2026 · Buenas Prácticas",
      "blog2-desc": "Un recorrido técnico sobre el manejo del foco, regiones en vivo (aria-live) y notificaciones asíncronas para garantizar una navegación sin barreras en React y Angular.",
      "blog2-link": "Leer artículo",
      "blog2-aria": "Leer artículo sobre Mejores prácticas para implementar ARIA",
      "blog3-title": "Comparativa de herramientas de testing: axe-core vs ARC Toolkit",
      "blog3-date": "Mayo 2026 · Testing y QA",
      "blog3-desc": "Análisis detallado de las ventajas y casos de uso ideales para dos de las herramientas más potentes del mercado en la identificación automatizada de barreras digitales.",
      "blog3-link": "Leer artículo",
      "blog3-aria": "Leer artículo sobre Comparativa de herramientas de testing",

      // Awards section
      "section-awards": "Eventos",

      "award1-text":
        "Organizador - Séptimo Seminario de Accesibilidad Web e Inclusión en la Educación Virtual",
      "award1-topic":
        "Tema: Inclusión desde las tecnologías, diversidad y equidad desde las IES.",
      "award1-date": "Octubre 2024",

      "award2-text":
        "Organizador - Sexto Seminario de Accesibilidad Web e Inclusión en la Educación Virtual",
      "award2-topic":
        "Tema: Reflexiones y acciones para el tránsito hacia una cultura inclusiva universitaria.",
      "award2-date": "Octubre 2023",

      "award3-text":
        "Organizador - Quinto Seminario de Accesibilidad Web e Inclusión en la Educación Virtual",
      "award3-topic":
        "Tema: La tecnología adaptada a las necesidades de una Educación inclusiva.",
      "award3-date": "Noviembre 2022",

      "award4-text":
        "Ponente - Cuarto Seminario de Accesibilidad Web e Inclusión en la Educación Virtual",
      "award4-topic": "Tema: Buenas prácticas en el desarrollo web accesible.",
      "award4-date": "Noviembre 2021",

      "award5-text": "Ponente - Reduc@te Colombia 2021",
      "award5-topic":
        "Tema: Software libre de integración a la ruta para el control de la evaluación del aprendizaje.",
      "award5-date": "Octubre 2021",

      "award6-text":
        "Ponente - Tercer Seminario de Accesibilidad Web e Inclusión en la Educación Virtual",
      "award6-topic":
        "Tema: Un acercamiento al uso de tecnologías para auditar recursos con accesibilidad web.",
      "award6-date": "Octubre 2020",

      "award7-text":
        "Ponente - Premio Interamericano en Modelos Educativos Innovadores en Eduación Superior MEIN",
      "award7-topic":
        "Tema: ¿Cómo implementar una estrategia de originalidad en la educación virtual?",
      "award7-date": "Octubre 2020",

      "award8-text":
        "Ponente - XXVI Congreso Internacional sobre Educación Virtual, Electrónica y a Distancia",
      "award8-topic":
        "Tema: Herramientas tecnológicas que aportan a los procesos de inclusión educativa.",
      "award8-date": "Julio 2020",

      // Back to top
      "back-to-top": "Volver arriba",

      // Slick slider
      "slider-main-instructions":
        "Al cambiar el contenido actual de este carrusel, cambiará el contenido de miniaturas que le sigue.",
      "slider-main-label": "Carrusel de imágenes principal",
      "slider-nav-instructions":
        "Al cambiar el contenido actual de este carrusel cambiará el contenido del principal que le antecede.",
      "slider-nav-label": "Carrusel de miniaturas",

      // region
      "contrast-region": "Contraste y selección de idioma",
    },

    en: {
      // Meta & Title
      "page-title": "Diego Mena · Digital Accessibility Expert — WCAG 2.2, Audits & Shift Left",
      "meta-description":
        "Diego Mena's professional profile. Digital accessibility expert with 5+ years in WCAG 2.2, EN 301 549, and Section 508 audits. Specialized in fintech, government, and e-learning. From compliance to real impact.",

      // Skip link
      "skip-link": "Skip to main content",

      // Navbar horizontal
      "nav-experience": "Experience",
      "nav-skills": "Skills",
      "nav-projects": "Projects",
      "nav-blog": "Articles",

      // Sidebar nav
      "opens-new-tab": "(Opens in a new tab)",
      "nav-about": "About Me",
      "nav-experience-side": "Experience",
      "nav-education": "Education",
      "nav-skills-side": "Skills",
      "nav-projects-side": "Projects",
      "nav-interests": "Interests",
      "nav-blog-side": "Articles",
      "nav-awards": "Events",

      // Toggle & flags
      "contrast-label": "Dark mode",
      "sun-title": "No contrast",
      "moon-title": "High contrast",
      "flag-es-title": "Translate site to Spanish",
      "flag-en-title": "Site in English",

      // About section
      "about-profession": "<b>DIGITAL ACCESSIBILITY EXPERT</b>",
      "about-passion": "Passionate about science and open technologies.",
      "about-email-label": "E-mail:",
      "about-contact-label": "Contact:",
      "about-resume-link": " Resume in PDF",
      "about-resume-pdf": "./docs/Hoja_de_Vida_Diego_Mena-EN.pdf",
      "about-description":
        "<b>Engineer specialized in the development of accessible digital products</b>, with experience in web and hybrid environments. Master in Project Management, with more than 5 years of experience in digital accessibility, quality assurance (QA) and usability.<br />Currently participating in international projects in the fintech and crypto-assets sector for clients in Spain and Germany, contributing to the accessibility of component systems used by multiple web applications. In parallel, works with government entities in Colombia, performing accessibility diagnostics and improvements aligned with <b>WCAG 2.2</b>, the European Directive <b>EN 301 549</b>, the U.S. <b>Section 508</b> and Colombia's <b>Resolution 1519</b> of 2020 from MinTIC.<br />My experience ranges from accessibility design and testing, to training technical teams and preparing compliance reports, ensuring high standards of quality and digital inclusion in sectors such as e-learning, fintech, e-commerce and government.",

      // Social links aria-labels
      "aria-linkedin": "LinkedIn professional network (Opens in a new window)",
      "aria-github": "GitHub repositories (Opens in a new window)",
      "aria-gitlab": "GitLab repositories (Opens in a new window)",
      "aria-cvlac": "CvLac profile (Opens in a new window)",

      // Events carousel
      "events-carousel-title": "Events and participations",

      // Experience section
      "section-experience": "Experience",

      "exp0-title": "Founder",
      "exp0-company":
        '<a href="https://a11ypro.tech/" target="_blank" rel="noopener noreferrer" aria-label="Visit the A11Y PRO website (Opens in a new tab)">A11Y PRO</a>',
      "exp0-description":
        '<b>Responsibilities:</b> I founded A11Y PRO, a company specialized in digital accessibility. I lead the design and development of SaaS solutions that automate web accessibility evaluation and remediation in compliance with <b>international regulations (WCAG, ADA and EN 301 549)</b>. Among my key creations are the <a href="https://scanner.a11ypro.tech/" target="_blank" rel="noopener noreferrer" aria-label="Visit A11Y PRO Scanner (Opens in a new tab)"><b>A11Y PRO Scanner</b></a>, an automated accessibility analysis tool, and the <a href="https://widget.a11ypro.tech/" target="_blank" rel="noopener noreferrer" aria-label="Visit A11Y PRO Widget (Opens in a new tab)"><b>A11Y PRO Widget</b></a>, an accessibility widget that can be embedded in any website.',
      "exp0-date": "June 2026 - Present",

      "exp1-title": "Digital Accessibility Expert",
      "exp1-company": "Hiberus",
      "exp1-description":
        "<b>Responsibilities:</b> Perform accessibility evaluations of digital products for web and hybrid environments, aligned with international standards such as <b>WCAG 2.2</b> and the European standard <b>EN 301 549</b>. Part of a specialized team in fintech and crypto-asset solutions for the Spanish and German markets, contributing to the accessibility of the entire component system used by various web applications in the ecosystem. I identify areas of improvement to optimize user experience and define strategies for their implementation. I execute quality assurance (QA) tests to ensure proper functionality, accessibility and usability, ensuring regulatory compliance and high quality standards in project development.",
      "exp1-date": "Dec 2024 - Present",

      "exp2-title": "Web Accessibility Expert",
      "exp2-company": "Superintendence of Industry and Commerce",
      "exp2-description":
        "<b>Responsibilities:</b> Perform accessibility reviews on various digital products and sections of the entity's electronic headquarters, applying the <b>WCAG 2.2</b> guidelines and Annex 01 of <b>Resolution 1519</b> of 2020 from MinTIC. Led the refactoring of all components for the main patent registration software in Colombia (SIPI) and the SIC electronic headquarters, establishing the foundation for a robust and accessible design and development system for future developments. Contribute to the identification and implementation of usability and accessibility improvements from the interface design phase, including training developers and content creators. Perform accessibility and quality assurance (QA) tests for instruments such as FURAG and ITA.",
      "exp2-date": "Dec 2024 - Dec 2025",

      "exp3-description":
        'Work certification for 5 years and 4 months.<br><b>Responsibilities:</b> Contribute to the development of virtual learning environments, audit digital educational resources for web accessibility and develop software for process automation.<br><b>High-impact projects:</b> Led the National Open and Distance University\'s technological upgrade process in 2020, developed all model classroom views for course offerings across different faculties and automated several processes so that teachers could create courses meeting quality standards contributing to <b>NTC6576</b>. In 2023, I won an <a href="https://sig.unad.edu.co/documentos/sig/buenas_practicas/2023_implementacion_rpa.pdf" target="_blank" rel="noopener noreferrer" aria-label="View institutional recognition for RPA implementation (Opens in a new tab)"><b>UNAD institutional recognition</b></a> for the implementation of an RPA to support techno-pedagogical management.',
      "exp3-date": "Sep 2019 - Dec 2024",

      "exp4-title": "Web Accessibility Expert",
      "exp4-company": "Cognos Online",
      "exp4-description":
        "Strengthen skills and competencies in web accessibility for officials in charge of institutional portals and social media of the Comptroller General of the Republic of Colombia.",
      "exp4-date": "July 2023 - August 2023",

      "exp5-title": "Education Coordinator",
      "exp5-company": "Autonomous University of Bucaramanga",
      "exp5-description":
        "Technical-Vocational Programming Training Coordinator: As Coordinator of the technical-vocational training path in programming skills, oriented to mobile and web applications. Supervise and coordinate all aspects related to training, including instructor selection, lesson planning and student performance evaluation. Worked closely with the Unique Fund for Training Technologies and Communications and the Autonomous University of Bucaramanga under Association Agreement No. 743 of 2022.",
      "exp5-date": "November 2022 - July 2023",

      // Experience milestone thumbnails
      "exp0-milestone-label":
        "<i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i> View website",
      "exp0-milestone-aria":
        "Visit the A11Y PRO website (opens in new tab)",
      "exp1-milestone-label":
        "<i class=\"fas fa-file-pdf\" aria-hidden=\"true\"></i> View certificate",
      "exp1-milestone-aria":
        "View Hiberus work certificate (PDF, opens in new tab)",
      "exp2-milestone-label":
        "<i class=\"fas fa-file-pdf\" aria-hidden=\"true\"></i> View certificate",
      "exp2-milestone-aria":
        "View SIC work certificate (PDF, opens in new tab)",
      "exp3-milestone-label":
        "<i class=\"fas fa-file-pdf\" aria-hidden=\"true\"></i> View certificate",
      "exp3-milestone-aria":
        "View UNAD work certificate (PDF, opens in new tab)",
      "exp4-milestone-label":
        "<i class=\"fas fa-file-pdf\" aria-hidden=\"true\"></i> View certificate",
      "exp4-milestone-aria":
        "View Cognos Online work certificate (PDF, opens in new tab)",
      "exp5-milestone-label":
        "<i class=\"fas fa-file-pdf\" aria-hidden=\"true\"></i> View certificate",
      "exp5-milestone-aria":
        "View UNAB work certificate (PDF, opens in new tab)",

      // Education section
      "section-education": "Education",

      "edu1-title": "Master in Project Management",
      "edu1-college": "National Open and Distance University",
      "edu1-description":
        'Activities and associations: Research and development (R&D). Member of the Techno-pedagogical Management Network for courses and digital educational resources. Responsible for: Inclusion technologies and web accessibility. <br><b>Thesis:</b> <a href="https://repository.unad.edu.co/handle/10596/69586" target="_blank" rel="noopener noreferrer">Prospective for an educational platform for UNAD in areas with low or non-existent internet coverage</a>.',
      "edu1-date": "August 2025",

      "edu2-title": "Specialist in Project Management",
      "edu2-college": "National Open and Distance University",
      "edu2-description":
        'Activities and associations: Research and development (R&D). Member of the Techno-pedagogical Management Network for courses and digital educational resources. Responsible for: Inclusion technologies and web accessibility. <br><b>Thesis:</b> <a href="https://repository.unad.edu.co/handle/10596/47926" target="_blank" rel="noopener noreferrer">Development of a digital tool to support techno-pedagogical management of courses in the UNAD virtual campus</a>.',
      "edu2-date": "August 2022",

      "edu3-title": "Electronic Engineer",
      "edu3-college": "Francisco José de Caldas District University",
      "edu3-description":
        'Activities and associations: Research and development (R&D). Former member of research groups: GLUD - Linux Group District University, GITUD - Telecommunications Group of the District University, LASER - Laboratory of automation, embedded systems and robotics, TECLIBRE - Research seedbed in free technologies. <br><b>Thesis:</b> <a href="https://repository.udistrital.edu.co/items/bd06700a-7131-470b-815f-52061c029aa2" target="_blank" rel="noopener noreferrer">IoT system for monitoring and control of artificial light sources applied to precision agriculture</a>.',
      "edu3-date": "March 2018",

      // Education diploma thumbnails
      "edu-diploma-label": "\u003ci class=\"fas fa-file-pdf\" aria-hidden=\"true\"\u003e\u003c/i\u003e View diploma",
      "edu1-diploma-aria":
        "View Master in Project Management diploma (PDF, opens in new tab)",
      "edu2-diploma-aria":
        "View Specialist in Project Management diploma (PDF, opens in new tab)",
      "edu3-diploma-aria":
        "View Electronic Engineer diploma (PDF, opens in new tab)",

      // Skills section
      "section-skills": "Skills",
      "skills-intro":
        "Capacity for research, self-learning, creative and innovative problem solving, ability to listen to people and resilience. Ease of oral expression, team leadership, adaptability to work environments under pressure, social skills and executive skills to manage tasks by objectives.",
      "skills-subtitle": "Certifications & Continuous Learning",
      "skills-tech-stack": "Technical Stack & Competencies",
      "skills-qa-title": "QA Engineering & Accessibility",
      "skills-qa-desc":
        "Quality assurance experience in web applications through functional testing, regression testing, validation of acceptance criteria and technical DOM analysis. Specialized in accessibility testing integrated into the QA process, combining automated tools (axe DevTools, ARC Toolkit, IBM Equal Access, Lighthouse, WAVE), technical inspection (Chrome DevTools, accessibility tree and semantics analysis) and manual testing with assistive technologies (NVDA, JAWS, VoiceOver and Talkback). Experience documenting defects in a technical and actionable way, root cause analysis and accompanying development teams in remediation.",
      "skills-auto-title": "Automation and technical analysis",
      "skills-auto-desc":
        "Use of Python for data processing, support for automation tasks, analysis of test results and generation of technical reports. Experience working with data structures, scripts to support QA and visualization of results through data viewers. GNU/Linux environment as a basis for running tools, tests and technical flows.",
      "skills-soft-title": "Software and systems engineering foundation",
      "skills-soft-desc":
        "Solid fundamentals in structured and object-oriented programming, understanding of systems logic and software architecture, which strengthens the capacity for technical diagnosis, analysis of complex defects and effective communication to resolve incidents with development teams.",
      skill1: "Web Accessibility Specialist -",
      skill2: "UX Research Specialist -",
      skill3: "Project Management Specialist -",
      skill4: "Scrum Master -",
      skill5: "IT Support Specialist -",
      skill6: "Responsive Web Design Specialist -",
      skill7: "Advanced Javascript Level -",
      skill8: "Web Optimization Specialist -",
      "skill-cert": "Certificate",

      // Projects section
      "section-projects": "Projects",
      "projects-intro": "To see all projects check my account",
      "projects-or": "or my account",
      "projects-featured": "Among the most outstanding projects are:",

      "project1-title":
        "Web Accessibility Audit for the SIC Electronic Headquarters",
      "project1-link": "View audit results",
      "project1-aria":
        "View web accessibility results for the SIC Electronic Headquarters",
      "project2-title":
        "Seventh Web Accessibility and Inclusion Seminar in Virtual Education",
      "project2-link": "View seminar agenda",
      "project2-aria":
        "View agenda of the Seventh Web Accessibility and Inclusion Seminar in Virtual Education",
      "project3-title": "DataFill District Educational Forum 2024",
      "project3-link": "View forum platform",
      "project3-aria":
        "View DataFill platform for the District Educational Forum 2024",
      "project4-title":
        "Advisory and employment website for people with disabilities",
      "project4-link": "View Assersum site",
      "project4-aria":
        "View Assersum website - advisory and employment for people with disabilities",
      "project5-title": "Educational platform for MinCIT & Fontur",
      "project5-link": "View LMS platform",
      "project5-aria": "View MinCIT LMS platform - Learning Management System",
      "project6-title": "Web Accessibility Course for Government Entities",
      "project6-link": "View course post",
      "project6-aria": "View post of the final class - Class 20",

      "project9-title": "Video player with sign language interpreter",
      "project9-link": "View player demo",
      "project9-aria":
        "View demo of the accessible multimedia player with sign language interpreter",

      "project11-title": "MOOC - Massive Open Online Courses",
      "project11-aria": "View MOOC catalogue - Massive Open Online Courses",

      "project13-title": "Educational and Organizational Web Conference System",
      "project13-link": "View project site",
      "project13-aria":
        "View website for the Educational and Organizational Web Conference System",

      "project17-title":
        "Web Accessibility for the SIC Electronic Headquarters",
      "project17-link": "View electronic headquarters",
      "project17-aria":
        "View Electronic Headquarters of the Superintendence of Industry and Commerce - SIC",
      "project18-title":
        "Web Accessibility for the Colombian Virtual Intellectual Property Office - SIPI",
      "project18-link": "View virtual office",
      "project18-aria": "View SIPI - Virtual Intellectual Property Office",
      "project19-title":
        "Web Accessibility for Cryptocurrency Application - Openbank",
      "project19-link": "View web application",
      "project19-aria":
        "View web application for cryptocurrencies - Openbank Spain and Germany",
      "project20-title":
        "Overview of web accessibility in Colombia for gov.co websites",
      "project20-link": "View observatory",
      "project20-aria":
        "View Overview of web accessibility in Colombia for gov.co websites - 5,000+ gov.co sites",

      // Interests section
      "section-interests": "Interests",
      "interests-p1":
        "Since my early days as a computer enthusiast, I have believed that technology only makes sense when it serves society. Today, that conviction is materialized in my career as a digital accessibility expert, where I have understood that to eliminate barriers on a large scale we need smarter and more robust solutions.",
      "interests-p2":
        "This is where Artificial Intelligence becomes the axis of my vision: more than the academic core of my future PhD, AI is for me the engine that will allow automating accessible solutions and closing the digital divide in the global ecosystem.",
      "interests-p3":
        'My technical evolution, starting from automation, has always been guided by the SDGs and "Science for Peace", which seeks to understand the causes of violence and build technological and social solutions that promote peaceful coexistence, equity and social justice. I am interested in actively contributing to free software communities and to a quality education that leaves no one behind. Every line of code I write has a clear purpose: to build a more human, accessible, and ethical network.',

      // Research section
      "research-header": "Research Focus and Doctoral Proposal",
      "research-p1":
        "My research focus centers on the application of Artificial Intelligence for automated web accessibility auditing and improvement of government websites.",
      "research-doctoral-link": "Doctoral Proposal (Google Docs)",
      "research-bibliometry-link": "Bibliometry Table (Google Sheets)",
      "research-act-p":
        'Breaking the knowledge threshold through accessibility validation from automation and test case consistency; integrating the use of <a href="https://scanner.a11ypro.tech/" target="_blank" rel="noopener noreferrer">A11Y PRO SCANNER <span class="visually-hidden" data-i18n="opens-new-tab">(Opens in a new tab)</span></a> for large-scale auditing under international standards.',
      "research-act-link": "ACT Implementations (W3C)",
      "research-observatory-link": "Gov.co Digital Accessibility Observatory",
      "research-registration-link": "Software Registration Certificate",

      // Blog section
      "section-blog": "Articles",
      "blog1-title": "Impact of Artificial Intelligence on <span class=\"text-primary\">WCAG</span> audit automation",
      "blog1-date": "May 2026 · AI & Accessibility",
      "blog1-desc": "We explore how language models can assist in detecting complex accessibility issues and their current limitations compared to specialized human evaluation.",
      "blog1-link": "Read article",
      "blog1-aria": "Read article about the Impact of Artificial Intelligence on WCAG audits",
      "blog2-title": "Best practices for implementing ARIA in Single Page Applications",
      "blog2-date": "May 2026 · Best Practices",
      "blog2-desc": "A technical journey on focus management, live regions (aria-live), and asynchronous notifications to ensure barrier-free navigation in React and Angular.",
      "blog2-link": "Read article",
      "blog2-aria": "Read article about Best practices for implementing ARIA",
      "blog3-title": "Testing tools comparison: axe-core vs ARC Toolkit",
      "blog3-date": "May 2026 · Testing & QA",
      "blog3-desc": "Detailed analysis of the advantages and ideal use cases for two of the most powerful tools in the market for automated identification of digital barriers.",
      "blog3-link": "Read article",
      "blog3-aria": "Read article about Testing tools comparison",

      // Awards section
      "section-awards": "Events",

      "award1-text":
        "Organizer - Seventh Web Accessibility and Inclusion Seminar in Virtual Education",
      "award1-topic":
        "Topic: Inclusion through technologies, diversity and equity from higher education institutions.",
      "award1-date": "October 2024",

      "award2-text":
        "Organizer - Sixth Web Accessibility and Inclusion Seminar in Virtual Education",
      "award2-topic":
        "Topic: Reflections and actions for the transition towards an inclusive university culture.",
      "award2-date": "October 2023",

      "award3-text":
        "Organizer - Fifth Web Accessibility and Inclusion Seminar in Virtual Education",
      "award3-topic":
        "Topic: Technology adapted to the needs of inclusive Education.",
      "award3-date": "November 2022",

      "award4-text":
        "Speaker - Fourth Web Accessibility and Inclusion Seminar in Virtual Education",
      "award4-topic": "Topic: Best practices in accessible web development.",
      "award4-date": "November 2021",

      "award5-text": "Speaker - Reduc@te Colombia 2021",
      "award5-topic":
        "Topic: Free software integration into the learning assessment control pathway.",
      "award5-date": "October 2021",

      "award6-text":
        "Speaker - Third Web Accessibility and Inclusion Seminar in Virtual Education",
      "award6-topic":
        "Topic: An approach to the use of technologies for auditing resources with web accessibility.",
      "award6-date": "October 2020",

      "award7-text":
        "Speaker - Inter-American Award for Innovative Educational Models in Higher Education MEIN",
      "award7-topic":
        "Topic: How to implement an originality strategy in virtual education?",
      "award7-date": "October 2020",

      "award8-text":
        "Speaker - XXVI International Congress on Virtual, Electronic and Distance Education",
      "award8-topic":
        "Topic: Technological tools that contribute to educational inclusion processes.",
      "award8-date": "July 2020",

      // Back to top
      "back-to-top": "Back to top",

      // Slick slider
      "slider-main-instructions":
        "When changing the current content of this carousel, the following thumbnail content will change.",
      "slider-main-label": "Main image carousel",
      "slider-nav-instructions":
        "When changing the current content of this carousel, the preceding main content will change.",
      "slider-nav-label": "Thumbnail carousel",

      // region
      "contrast-region": "Contrast and language selection",
    },
  },

  /**
   * Cambiar el idioma del sitio
   * @param {string} lang - 'es' o 'en'
   */
  changeLang: function (lang) {
    if (!this.translations[lang]) return;
    this.currentLang = lang;

    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;

    // Actualizar título de la página
    document.title = this.translations[lang]["page-title"];

    // Actualizar meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        this.translations[lang]["meta-description"],
      );
    }

    // Actualizar todos los elementos con data-i18n (textContent/innerHTML)
    const elements = document.querySelectorAll("[data-i18n]");
    for (let idx = 0; idx < elements.length; idx++) {
      const el = elements[idx];
      const key = el.getAttribute("data-i18n");
      const translation = this.translations[lang][key];
      if (translation !== undefined) {
        // Si la traducción contiene HTML, usar innerHTML
        if (translation.indexOf("<") !== -1) {
          el.innerHTML = translation;
        } else {
          el.textContent = translation;
        }
      }
    }

    // Actualizar elementos con data-i18n-title (atributo title)
    const titleElements = document.querySelectorAll("[data-i18n-title]");
    for (let t = 0; t < titleElements.length; t++) {
      const tel = titleElements[t];
      const tkey = tel.getAttribute("data-i18n-title");
      const ttranslation = this.translations[lang][tkey];
      if (ttranslation !== undefined) {
        tel.setAttribute("title", ttranslation);
      }
    }
    // Actualizar elementos con data-i18n-href (atributo href)
    const hrefElements = document.querySelectorAll("[data-i18n-href]");
    for (let h = 0; h < hrefElements.length; h++) {
      const hel = hrefElements[h];
      const hkey = hel.getAttribute("data-i18n-href");
      const htranslation = this.translations[lang][hkey];
      if (htranslation !== undefined) {
        hel.setAttribute("href", htranslation);
      }
    }

    // Actualizar elementos con data-i18n-aria (atributo aria-label)
    const ariaElements = document.querySelectorAll("[data-i18n-aria]");
    for (let a = 0; a < ariaElements.length; a++) {
      const ael = ariaElements[a];
      const akey = ael.getAttribute("data-i18n-aria");
      const atranslation = this.translations[lang][akey];
      if (atranslation !== undefined) {
        ael.setAttribute("aria-label", atranslation);
      }
    }

    // Actualizar banderas activas
    const flagEs = document.getElementById("flag-es");
    const flagEn = document.getElementById("flag-en");
    if (flagEs && flagEn) {
      if (lang === "es") {
        flagEs.classList.add("flag-active");
        flagEn.classList.remove("flag-active");
      } else {
        flagEn.classList.add("flag-active");
        flagEs.classList.remove("flag-active");
      }
    }

    // Guardar preferencia
    localStorage.setItem("preferred_lang", lang);

    // Re-inicializar slick slider con textos traducidos
    this.updateSliderLabels(lang);
  },

  /**
   * Actualizar las etiquetas del slider de Slick
   */
  updateSliderLabels: function (lang) {
    const mainSlider = document.querySelector(".slider-for");
    const navSlider = document.querySelector(".slider-nav");
    if (mainSlider) {
      const mainRegion =
        mainSlider.closest("[aria-roledescription]") ||
        mainSlider.parentElement;
      const mainLabel = mainRegion
        ? mainRegion.querySelector("[aria-label]")
        : null;
    }
  },

  /**
   * Inicializar el sistema i18n
   */
  init: function () {
    const savedLang = localStorage.getItem("preferred_lang");
    let lang = savedLang || document.documentElement.lang || "es";

    // Validar idioma
    if (!this.translations[lang]) {
      lang = "es";
    }

    this.changeLang(lang);
  },
};

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  i18n.init();
});
