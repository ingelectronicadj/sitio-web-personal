/**
 * Sistema de internacionalización (i18n)
 * Soporte para Español (es) e Inglés (en)
 */
var i18n = {
  currentLang: "es",

  translations: {
    es: {
      // Meta & Title
      "page-title": "CV Diego Mena",
      "meta-description":
        "CV Diego Mena. Ingeniero electrónico, especialista en accesibilidad web, con más de 7 años de experiencia en el desarrollo de productos digitales (Software y Hardware).",

      // Skip link
      "skip-link": "Saltar al contenido principal",

      // Navbar horizontal
      "nav-experience": "Experiencia",
      "nav-skills": "Habilidades",
      "nav-projects": "Proyectos",

      // Sidebar nav
      "nav-about": "Acerca de mí",
      "nav-experience-side": "Experiencia",
      "nav-education": "Educación",
      "nav-skills-side": "Habilidades",
      "nav-projects-side": "Proyectos",
      "nav-interests": "Intereses",
      "nav-awards": "Reconocimientos",

      // Toggle & flags
      "contrast-label": "Modo oscuro",
      "sun-title": "Sin contraste",
      "moon-title": "Alto contraste",
      "flag-es-title": "Sitio en Español",
      "flag-en-title": "Traducir sitio al Inglés",

      // About section
      "about-profession": "<b>ESPECIALISTA EN ACCESIBILIDAD WEB</b>",
      "about-passion": "Apasionado por la ciencia y las tecnologías libres.",
      "about-email-label": "E-mail:",
      "about-contact-label": "Contacto:",
      "about-resume-link": " Hoja de vida en PDF",
      "about-description":
        "<b>Ingeniero especializado en desarrollo de productos digitales accesibles</b>, con experiencia en entornos web e híbridos. Magíster en Gerencia de Proyectos, con más de 5 años de experiencia en accesibilidad digital, aseguramiento de calidad (QA) y usabilidad.<br />Actualmente participa en proyectos internacionales en el sector fintech y de criptoactivos para clientes en España y Alemania, aportando en la accesibilidad de sistemas de componentes utilizados por múltiples aplicaciones web. De forma paralela, trabaja con entidades gubernamentales en Colombia, realizando diagnósticos y mejoras de accesibilidad alineadas con la <b>WCAG 2.2</b>, la Directiva Europea <b>EN 301 549</b>, la <b>Sección 508</b> de EE.UU. y la <b>Resolución 1519</b> de 2020 del MinTIC para Colombia.<br />Mi experiencia abarca desde el diseño y pruebas de accesibilidad, hasta la formación de equipos técnicos y la elaboración de reportes para cumplimiento normativo, garantizando altos estándares de calidad e inclusión digital en sectores como e-learning, fintech, comercio electrónico y gobierno.",

      // Social links aria-labels
      "aria-linkedin": "Red profesional Linkedin (Abre en una nueva ventana)",
      "aria-github": "Repositorios Github (Abre en una nueva ventana)",
      "aria-gitlab": "Repositorios Gitlab (Abre en una nueva ventana)",
      "aria-cvlac": "Perfil en CvLac (Abre en una nueva ventana)",

      // Experience section
      "section-experience": "Experiencia",

      "exp1-title": "Experto en Accesibilidad Digital",
      "exp1-company": "Hiberus",
      "exp1-description":
        "<b>Funciones:</b> Realizar evaluaciones de accesibilidad a productos digitales para entornos web e híbridos, alineadas con estándares internacionales como WCAG 2.2 y la normativa europea EN 301 549. Formo parte de un equipo especializado en soluciones fintech y de criptoactivos para los mercados de España y Alemania, contribuyendo a la accesibilidad de todo el sistema de componentes utilizados por diversas aplicaciones web del ecosistema. Identifico áreas de mejora para optimizar la experiencia de usuario y defino estrategias para su implementación. Ejecuto pruebas de calidad (QA) para garantizar el correcto funcionamiento, accesibilidad y usabilidad, asegurando el cumplimiento normativo y altos estándares de calidad en el desarrollo de proyectos.",
      "exp1-date": "Dic 2024 - Actualidad",

      "exp2-title": "Experto en Accesibilidad Web",
      "exp2-company": "Superintendencia de Industria y Comercio",
      "exp2-description":
        "<b>Funciones:</b> Realizar revisiones de accesibilidad en distintos productos digitales y secciones de la sede electrónica de la entidad, aplicando las directrices de la WCAG 2.2 y el Anexo 01 de la Resolución 1519 de 2020 del MinTIC. Contribuir en la identificación e implementación de mejoras de usabilidad y accesibilidad desde la fase de diseño de interfaces, incluyendo la capacitación a desarrolladores y creadores de contenido. Realizar pruebas de accesibilidad y calidad (QA) para diligenciar instrumentos como el FURAG e ITA, participar en la documentación y seguimiento de las actualizaciones necesarias para mantener y ampliar las mejoras de accesibilidad digital implementadas.",
      "exp2-date": "Dic 2024 - Dic 2025",

      "exp3-title": "Gestor Tecnopedagógico",
      "exp3-company":
        "Equipo de Tecnologías de Inclusión y Accesibilidad Web - UNAD",
      "exp3-description":
        "Certificación laboral por 5 años y 4 meses.<br><b>Funciones:</b> Aportar en el desarrollo de ambientes virtuales de aprendizaje, auditar recursos educativos digitales en accesibilidad web y desarrollar software para la automatización de procesos.<br><b>Algunos proyectos de gran impacto:</b> Lideré el proceso de actualización tecnológica de la Universidad en el año 2020, desarrollé todas las vistas de aulas modelo para la oferta de cursos de las distintas facultades y logré automatizar varios procesos para que los docentes pudieran crear cursos con estándares de calidad aportando a la NTC6576 - Norma Técnica Colombiana para el Diseño y Oferta de Cursos en Ambientes Virtuales de Aprendizaje.",
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

      // Education section
      "section-education": "Educación",

      "edu1-title": "Magister en Gerencia de Proyectos",
      "edu1-college": "Universidad Nacional Abierta y a Distancia",
      "edu1-description":
        "Actividades y asociaciones: Investigación y desarrollo (I+D). Miembro de la Red de Gestión Tecnopedagógica de cursos y recursos educativos digitales. Responsable por: Tecnologías de inclusión y accesibilidad web.",
      "edu1-date": "Agosto 2025",

      "edu2-title": "Especialista en Gestión de Proyectos",
      "edu2-college": "Universidad Nacional Abierta y a Distancia",
      "edu2-description":
        "Actividades y asociaciones: Investigación y desarrollo (I+D). Miembro de la Red de Gestión Tecnopedagógica de cursos y recursos educativos digitales. Responsable por: Tecnologías de inclusión y accesibilidad web.",
      "edu2-date": "Agosto 2022",

      "edu3-title": "Ingeniero Electrónico",
      "edu3-college": "Universidad Distrital Francisco José de Caldas",
      "edu3-description":
        "Actividades y asociaciones: Investigación y desarrollo (I+D). Exmiembro de los grupos de investigación: GLUD - Grupo Linux Universidad Distrital, GITUD - Grupo de Telecomunicaciones de la Universidad Distrital, LASER - Laboratorio de automatizacion, sistemas embebidos y robótica, TECLIBRE - Semillero de investigación en tecnologías libres.",
      "edu3-date": "Marzo 2018",

      // Skills section
      "section-skills": "Habilidades",
      "skills-intro":
        "Capacidad para la investigación, el autoaprendizaje, la resolución de problemas con creatividad e innovación, capacidad para escuchar a las personas y capacidad de recuperación. Facilidad de expresión oral, liderazgo de equipos, adaptabilidad a entornos laborales bajo presión, habilidades sociales y habilidades ejecutivas para administrar tareas por objetivos.",
      "skills-subtitle": "Perfil Desarrollador Frontend",
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
      "project1-link":
        "Resultados de Accesibilidad Web para la sede electrónica de la SIC",
      "project2-title":
        "Séptimo Seminario de Accesibilidad Web e Inclusión en la Educación Virtual",
      "project2-link":
        "Agenda del Séptimo Seminario de Accesibilidad Web e Inclusión en la Educación Virtual",
      "project3-title": "DataFill Foro educativo distrital 2024",
      "project3-link": "Foro educativo distrital 2024",
      "project4-title":
        "Sitio web de asesoría y empleo para personas con disCapacidad",
      "project4-link": "Implementación de Ghost CMS para Assersum",
      "project5-title": "Plataforma educativa para MinCIT & Fontur",
      "project5-link": "LMS MinCIT - Sistema de gestión de aprendizaje",
      "project6-title":
        "Curso de Accesibilidad Web orientado a entidades de Gobierno",
      "project6-link": "Post de la clase final - Clase 20",
      "project7-title": "Solución IoT para temeletría usando redes LPWAN",
      "project7-link": "Repositorio del proyecto",
      "project8-title": "Tarjeta Shield para control de motores por Bluetooth",
      "project8-link": "Diseño de PCB - esquemáticos",
      "project9-title": "Reproductor de videos con interprete de señas",
      "project9-link": "Demo del reproductor multimedia accesible",
      "project10-title":
        "Interfaz para visualización de estructuras moleculares",
      "project10-link": "Repositorio del proyecto",
      "project11-title": "Cursos MOOC - Cursos Masivos Abiertos y en Línea",
      "project12-title": "RPA para configuración rápida de recursos en Moodle",
      "project12-link": "Reconocimiento Buena Práctica Organizacional",
      "project13-title": "Sistema de Webconferencia Educativa y Organizacional",
      "project13-link": "Sitio web de implementación rápida",
      "project14-title": "Sitio web de atención dental profesional",
      "project14-link": "Sitio web de atención dental profesional",
      "project15-title": "Sitio web de Servicios de Ingeniería Catastral",
      "project15-link": "Sitio web de Servicios de Ingeniería Catastral",
      "project16-title": "Sitio web de Canchas y Estructuras Deportivas",
      "project16-link": "Sitio web de Canchas y Estructuras Deportivas",
      "project17-title":
        "Ajustes de Accesibilidad Web para la Sede electrónica de la SIC",
      "project17-link":
        "Sede electrónica de la Superintendencia de Industria y Comercio - SIC",
      "project18-title":
        "Ajustes de Accesibilidad Web para la Oficina virtual de propiedad intelectual Colombia - SIPI",
      "project18-link": "SIPI - Oficina virtual de propiedad intelectual",
      "project19-title":
        "Ajustes de Accesibilidad Web para Aplicación hibrida de criptomonedas - Openbank España y Alemania",
      "project19-link":
        "Aplicación web para criptomonedas - Openbank España y Alemania",

      // Interests section
      "section-interests": "Intereses",
      "interests-p1":
        "Entre mis intereses profesionales destaco el hecho de poder innovar siempre que sea posible, claramente, sin perder de vista el ciclo de vida de los productos o servicios que se encuentren en producción. Como entusiasta de la informática desde niño, he sido dado a la investigación y el autoaprendizaje, esta fortaleza me ha llevado con el paso del tiempo a formular mejores preguntas y dar con hallazgos interesantes en tecnologías para el internet de cosas, el analisis masivo de datos, la inteligencia artificial y la automatización de procesos.",
      "interests-p2":
        "Me interesa en gran medida aportar en temas de educación y a su vez disminuir la brecha digital. Considero que la educación es un pilar fundamental de la sociedad, y por ello, desde mis capacidades y experiencias aporto en la formación de formadores sobre nuevas herramientas de uso educativo digital.",
      "interests-p3":
        "Desde el análisis de los objetivos de desarrollo sostenible me interesa poder contribuir a la soberanía alimentaria(hambre cero), la educación de calidad, la energía asequible y no contaminante como acción por el clima, así como la conectividad a internet como derecho fundamental. Me interesa mucho aportar significativamente a esa gran red que llamamos internet y me capacito diariamente para ser consecuente con mis intereses.",

      // Awards section
      "section-awards": "Reconocimientos",

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
      "page-title": "CV Diego Mena",
      "meta-description":
        "CV Diego Mena. Electronic engineer, web accessibility specialist, with more than 7 years of experience in the development of digital products (Software and Hardware).",

      // Skip link
      "skip-link": "Skip to main content",

      // Navbar horizontal
      "nav-experience": "Experience",
      "nav-skills": "Skills",
      "nav-projects": "Projects",

      // Sidebar nav
      "nav-about": "About Me",
      "nav-experience-side": "Experience",
      "nav-education": "Education",
      "nav-skills-side": "Skills",
      "nav-projects-side": "Projects",
      "nav-interests": "Interests",
      "nav-awards": "Awards",

      // Toggle & flags
      "contrast-label": "Dark mode",
      "sun-title": "No contrast",
      "moon-title": "High contrast",
      "flag-es-title": "Translate site to Spanish",
      "flag-en-title": "Site in English",

      // About section
      "about-profession": "<b>WEB ACCESSIBILITY SPECIALIST</b>",
      "about-passion": "Passionate about science and open technologies.",
      "about-email-label": "E-mail:",
      "about-contact-label": "Contact:",
      "about-resume-link": " Resume in PDF",
      "about-description":
        "<b>Engineer specialized in the development of accessible digital products</b>, with experience in web and hybrid environments. Master in Project Management, with more than 5 years of experience in digital accessibility, quality assurance (QA) and usability.<br />Currently participating in international projects in the fintech and crypto-assets sector for clients in Spain and Germany, contributing to the accessibility of component systems used by multiple web applications. In parallel, works with government entities in Colombia, performing accessibility diagnostics and improvements aligned with <b>WCAG 2.2</b>, the European Directive <b>EN 301 549</b>, the U.S. <b>Section 508</b> and Colombia's <b>Resolution 1519</b> of 2020 from MinTIC.<br />My experience ranges from accessibility design and testing, to training technical teams and preparing compliance reports, ensuring high standards of quality and digital inclusion in sectors such as e-learning, fintech, e-commerce and government.",

      // Social links aria-labels
      "aria-linkedin": "LinkedIn professional network (Opens in a new window)",
      "aria-github": "GitHub repositories (Opens in a new window)",
      "aria-gitlab": "GitLab repositories (Opens in a new window)",
      "aria-cvlac": "CvLac profile (Opens in a new window)",

      // Experience section
      "section-experience": "Experience",

      "exp1-title": "Digital Accessibility Expert",
      "exp1-company": "Hiberus",
      "exp1-description":
        "<b>Responsibilities:</b> Perform accessibility evaluations of digital products for web and hybrid environments, aligned with international standards such as WCAG 2.2 and the European standard EN 301 549. Part of a specialized team in fintech and crypto-asset solutions for the Spanish and German markets, contributing to the accessibility of the entire component system used by various web applications in the ecosystem. I identify areas of improvement to optimize user experience and define strategies for their implementation. I execute quality assurance (QA) tests to ensure proper functionality, accessibility and usability, ensuring regulatory compliance and high quality standards in project development.",
      "exp1-date": "Dec 2024 - Present",

      "exp2-title": "Web Accessibility Expert",
      "exp2-company": "Superintendence of Industry and Commerce",
      "exp2-description":
        "<b>Responsibilities:</b> Perform accessibility reviews on various digital products and sections of the entity's electronic headquarters, applying the WCAG 2.2 guidelines and Annex 01 of Resolution 1519 of 2020 from MinTIC. Contribute to the identification and implementation of usability and accessibility improvements from the interface design phase, including training developers and content creators. Perform accessibility and quality assurance (QA) tests for instruments such as FURAG and ITA, participate in the documentation and tracking of updates needed to maintain and expand the implemented digital accessibility improvements.",
      "exp2-date": "Dec 2024 - Dec 2025",

      "exp3-title": "Techno-pedagogical Manager",
      "exp3-company":
        "Inclusion Technologies and Web Accessibility Team - UNAD",
      "exp3-description":
        "Work certification for 5 years and 4 months.<br><b>Responsibilities:</b> Contribute to the development of virtual learning environments, audit digital educational resources for web accessibility and develop software for process automation.<br><b>High-impact projects:</b> Led the University's technological upgrade process in 2020, developed all model classroom views for course offerings across different faculties and automated several processes so that teachers could create courses meeting quality standards contributing to NTC6576 - Colombian Technical Standard for the Design and Offer of Courses in Virtual Learning Environments.",
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

      // Education section
      "section-education": "Education",

      "edu1-title": "Master in Project Management",
      "edu1-college": "National Open and Distance University",
      "edu1-description":
        "Activities and associations: Research and development (R&D). Member of the Techno-pedagogical Management Network for courses and digital educational resources. Responsible for: Inclusion technologies and web accessibility.",
      "edu1-date": "August 2025",

      "edu2-title": "Specialist in Project Management",
      "edu2-college": "National Open and Distance University",
      "edu2-description":
        "Activities and associations: Research and development (R&D). Member of the Techno-pedagogical Management Network for courses and digital educational resources. Responsible for: Inclusion technologies and web accessibility.",
      "edu2-date": "August 2022",

      "edu3-title": "Electronic Engineer",
      "edu3-college": "Francisco José de Caldas District University",
      "edu3-description":
        "Activities and associations: Research and development (R&D). Former member of research groups: GLUD - Linux Group District University, GITUD - Telecommunications Group of the District University, LASER - Laboratory of automation, embedded systems and robotics, TECLIBRE - Research seedbed in free technologies.",
      "edu3-date": "March 2018",

      // Skills section
      "section-skills": "Skills",
      "skills-intro":
        "Capacity for research, self-learning, creative and innovative problem solving, ability to listen to people and resilience. Ease of oral expression, team leadership, adaptability to work environments under pressure, social skills and executive skills to manage tasks by objectives.",
      "skills-subtitle": "Frontend Developer Profile",
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
      "project1-link":
        "Web Accessibility Results for the SIC Electronic Headquarters",
      "project2-title":
        "Seventh Web Accessibility and Inclusion Seminar in Virtual Education",
      "project2-link":
        "Agenda of the Seventh Web Accessibility and Inclusion Seminar in Virtual Education",
      "project3-title": "DataFill District Educational Forum 2024",
      "project3-link": "District Educational Forum 2024",
      "project4-title":
        "Advisory and employment website for people with disabilities",
      "project4-link": "Ghost CMS implementation for Assersum",
      "project5-title": "Educational platform for MinCIT & Fontur",
      "project5-link": "LMS MinCIT - Learning Management System",
      "project6-title": "Web Accessibility Course for Government Entities",
      "project6-link": "Final class post - Class 20",
      "project7-title": "IoT solution for telemetry using LPWAN networks",
      "project7-link": "Project repository",
      "project8-title": "Shield board for motor control via Bluetooth",
      "project8-link": "PCB design - schematics",
      "project9-title": "Video player with sign language interpreter",
      "project9-link": "Accessible multimedia player demo",
      "project10-title": "Interface for molecular structure visualization",
      "project10-link": "Project repository",
      "project11-title": "MOOC - Massive Open Online Courses",
      "project12-title": "RPA for quick Moodle resource configuration",
      "project12-link": "Organizational Best Practice Award",
      "project13-title": "Educational and Organizational Web Conference System",
      "project13-link": "Quick deployment website",
      "project14-title": "Professional dental care website",
      "project14-link": "Professional dental care website",
      "project15-title": "Cadastral Engineering Services website",
      "project15-link": "Cadastral Engineering Services website",
      "project16-title": "Sports Courts and Structures website",
      "project16-link": "Sports Courts and Structures website",
      "project17-title":
        "Web Accessibility Adjustments for the SIC Electronic Headquarters",
      "project17-link":
        "Electronic Headquarters of the Superintendence of Industry and Commerce - SIC",
      "project18-title":
        "Web Accessibility Adjustments for the Colombian Virtual Intellectual Property Office - SIPI",
      "project18-link": "SIPI - Virtual Intellectual Property Office",
      "project19-title":
        "Web Accessibility Adjustments for Hybrid Cryptocurrency Application - Openbank Spain and Germany",
      "project19-link":
        "Web application for cryptocurrencies - Openbank Spain and Germany",

      // Interests section
      "section-interests": "Interests",
      "interests-p1":
        "Among my professional interests I highlight the ability to innovate whenever possible, clearly, without losing sight of the life cycle of products or services in production. As a computer enthusiast since childhood, I have been drawn to research and self-learning. This strength has led me over time to ask better questions and discover interesting findings in technologies for the Internet of Things, big data analysis, artificial intelligence and process automation.",
      "interests-p2":
        "I am very interested in contributing to educational topics and at the same time reducing the digital divide. I believe that education is a fundamental pillar of society, and therefore, from my capabilities and experiences, I contribute to the training of trainers on new digital educational tools.",
      "interests-p3":
        "From the analysis of the sustainable development goals, I am interested in contributing to food sovereignty (zero hunger), quality education, affordable and clean energy as action for climate, as well as internet connectivity as a fundamental right. I am very interested in contributing significantly to that great network we call the Internet and I train myself daily to be consistent with my interests.",

      // Awards section
      "section-awards": "Awards",

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
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        this.translations[lang]["meta-description"],
      );
    }

    // Actualizar todos los elementos con data-i18n (textContent/innerHTML)
    var elements = document.querySelectorAll("[data-i18n]");
    for (var idx = 0; idx < elements.length; idx++) {
      var el = elements[idx];
      var key = el.getAttribute("data-i18n");
      var translation = this.translations[lang][key];
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
    var titleElements = document.querySelectorAll("[data-i18n-title]");
    for (var t = 0; t < titleElements.length; t++) {
      var tel = titleElements[t];
      var tkey = tel.getAttribute("data-i18n-title");
      var ttranslation = this.translations[lang][tkey];
      if (ttranslation !== undefined) {
        tel.setAttribute("title", ttranslation);
      }
    }

    // Actualizar elementos con data-i18n-aria (atributo aria-label)
    var ariaElements = document.querySelectorAll("[data-i18n-aria]");
    for (var a = 0; a < ariaElements.length; a++) {
      var ael = ariaElements[a];
      var akey = ael.getAttribute("data-i18n-aria");
      var atranslation = this.translations[lang][akey];
      if (atranslation !== undefined) {
        ael.setAttribute("aria-label", atranslation);
      }
    }

    // Actualizar banderas activas
    var flagEs = document.getElementById("flag-es");
    var flagEn = document.getElementById("flag-en");
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
    var mainSlider = document.querySelector(".slider-for");
    var navSlider = document.querySelector(".slider-nav");
    if (mainSlider) {
      var mainRegion =
        mainSlider.closest("[aria-roledescription]") ||
        mainSlider.parentElement;
      var mainLabel = mainRegion
        ? mainRegion.querySelector("[aria-label]")
        : null;
    }
  },

  /**
   * Inicializar el sistema i18n
   */
  init: function () {
    var savedLang = localStorage.getItem("preferred_lang");
    var lang = savedLang || document.documentElement.lang || "es";

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
