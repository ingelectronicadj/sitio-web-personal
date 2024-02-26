var langWords = {
    select: function(word, language = null) {
        languageSelected = 0;
        var wordToSelect = null;

        if (!language) {
            language = document.documentElement.lang;
        }

        switch (language) {
            case 'es':
            case 'es-co':
                languageSelected = 0;
                break;
            case 'en':
            case 'en-us':
                languageSelected = 1;
                break;
           /*case 'fr':
                languageSelected = 2;
                break;
            */
            default:
                languageSelected = 1;
                break;
        }

        //español, inglés, frances

        words = {
            'skip-to-main-content': ['Saltar al contenido principal', 'Skip to main content'],
            'Experience': ['Experiencia', 'Experience'],
            'Skills': ['Habilidades', 'Skills'],
            'Projects': ['Proyectos', 'Projects'],
            'About-Me': ['Acerca de mí', 'About Me'],
            'Education': ['Educación', 'Education'],
            'Interests': ['Intereses', 'Interests'],
            'Events': ['Eventos', 'Events'],
            'Software-and-Hardware-Developer': ['Desarrollador de software y hardware', 'Software and Hardware Developer'],
            'Passionate-about-science-and-technology': ['Apasionado por la ciencia y las tecnologías libres.', 'Passionate about science and open technologies.'],
            'E-mail': ['E-mail', 'E-mail'],
            'Contact': ['Contacto', 'Contact'],
            'Resume-in-PDF': ['Hoja de vida en PDF', 'Resume in PDF'],
            'Electronic-engineer-specialist': ['Ingeniero electrónico, especialista en gestión de proyectos, con más de 7 años de experiencia en el desarrollo de productos digitales accesibles (Software y Hardware). Encargado de diseñar y desarrollar soluciones tecnológicas efectivas y accesibles para garantizar que la innovación beneficie a todas las personas, sin importar sus capacidades.', 'Electronic engineer, specialist in project management, with more than 7 years of experience in the development of accessible digital products (Software and Hardware). Responsible for designing and developing effective and accessible technological solutions to ensure that innovation benefits all people, regardless of their abilities.']

        }
        

        try {
            wordToSelect = words[word][languageSelected];
        } catch (error) {
            //console.log('No se ha encontrado la palabra ( ' + word + ' ) para el idioma: ( ' + language + " ). Se carga palabra ( X-X-X-X-X-X-X ) ");
            wordToSelect = 'X-X-X-X-X-X-X';
        }

        return wordToSelect;
    }

}


/*


Experiencia
Gestor Tecnopedagógico
Universidad Nacional Abierta y a Distancia - UNAD
Certificación laboral por 4 años y 6 meses.Funciones: Aportar en el desarrollo de ambientes virtuales de aprendizaje, auditar recursos educativos digitales en accesibilidad web y desarrollar software para la automatización de procesos.Algunos proyectos de gran impacto: Lideré el proceso de actualización tecnológica de la Universidad en el año 2020, desarrollé todas las vistas de aulas modelo para la oferta de cursos de las distintas facultades y logré automatizar varios procesos para que los docentes pudieran crear cursos con estándares de calidad aportando a la NTC6576 - Norma Técnica Colombiana para el Diseño y Oferta de Cursos en Ambientes Virtuales de Aprendizaje.
Sept 2019 - Actualidad

Profesional IT
Dokuma Tech
Certificación laboral por 1 años y 3 meses.Funciones: Liderar el desarrollo de la plataforma educativa para la Dirección de Análisis Sectorial y Promoción DASP del Ministerio de Comercio, Industria y Turismo, MinCIT.
Colaborar estrechamente con expertos para recopilar contenido técnico y convertirlo en material de formación interactivo y accesible.
Mantenerse actualizado sobre las tendencias y avances en tecnologías e-learning para garantizar la entrega de experiencias de aprendizaje innovadoras.
Diciembre 2022 - Febrero 2024
Experto en accesibilidad web
Cognos Online
Fortalecer competencias y habilidades en accesibilidad web, a los funcionarios encargados de los portales institucionales y redes sociales de la Contraloría General de la República de Colombia.
Julio 2023 - Agosto 2023

Coordinador de educación
Universidad Autónoma de Bucaramanga
Coordinador de la Formación Técnico-Laboral en Programación: Como Coordinador de la ruta de formación técnico laboral en habilidades de programación, orientadas a aplicaciones móviles y web.
Supervisar y coordinar todos los aspectos relacionados con la formación, incluyendo la selección de instructores, la planificación de lecciones y la evaluación del desempeño de los estudiantes.
Trabajé en estrecha colaboración con el Fondo Único de Tecnologías de la Formación y las Comunicaciones y la Universidad Autónoma de Bucaramanga en virtud del Convenio de Asociación Nro. 743 de 2022.
Noviembre 2022 - Julio 2023

Educación
Ingeniero Electrónico
Universidad Distrital Francisco José de Caldas
Actividades y asociaciones: Investigación y desarrollo (I+D). Exmiembro de los grupos de investigación: GLUD - Grupo Linux Universidad Distrital, GITUD - Grupo de Telecomunicaciones de la Universidad Distrital, LASER - Laboratorio
de automatizacion, sistemas embebidos y robótica, TECLIBRE - Semillero de investigación en tecnologías libres.
Marzo 2018

Especialista en Gestión de Proyectos
Universidad Nacional Abierta y a Distancia
Actividades y asociaciones: Investigación y desarrollo (I+D).
Miembro de la Red de Gestión Tecnopedagógica de cursos y recursos educativos digitales.
Responsable por: Tecnologías de inclusión y accesibilidad web.
Abril 2022

Magister en Gerencia de Proyectos
Universidad Nacional Abierta y a Distancia
Actividades y asociaciones: Investigación y desarrollo (I+D).
Miembro de la Red de Gestión Tecnopedagógica de cursos y recursos educativos digitales.
Responsable por: Tecnologías de inclusión y accesibilidad web.
En formación

Habilidades
Capacidad para la investigación, el autoaprendizaje, la resolución de problemas con creatividad e innovación, capacidad para escuchar a las personas y capacidad de recuperación. Facilidad de expresión oral, liderazgo de equipos, adaptabilidad a entornos laborales bajo presión, habilidades sociales y habilidades ejecutivas para administrar tareas por objetivos.

Perfil Desarrollador Frontend
Especialista en Accesibilidad Web -Certificado
Especialista en Soporte de TI -Certificado
Especialista en Diseño Web Responsive - Certificado
Nivel de Javascript Avanzado - Certificado
Especialista en Optimización web - Certificado

Proyectos
Para ver todos los proyectos consulte mi cuenta Gitlab o mi cuenta Github.
Entre los proyectos más destacados se encuentran:
Plataforma educativa para MinCIT & Fontur
LMS MinCIT - Sistema de gestión de aprendizaje
Curso de Accesibilidad Web orientado a entidades de Gobierno
Post de la clase final - Clase 20
Solución IoT para temeletría usando redes LPWAN
Repositorio del proyecto
Tarjeta Shield para control de motores por Bluetooth
Diseño de PCB - esquemáticos
Reproductor de videos con interprete de señas
Demo del reproductor multimedia accesible
Interfaz para visualización de estructuras moleculares
Repositorio del proyecto
Cursos Moodle adaptables con accesibilidad web
RPA para configuración rápida de recursos en Moodle
Reconocimiento Buena Práctica Organizacional
Sistema de Webconferencia Educativa y Organizacional
Sitio web de implementación rápida

Intereses
Entre mis intereses profesionales destaco el hecho de poder innovar siempre que sea posible, claramente, sin perder de vista el ciclo de vida de los productos o servicios que se encuentren en producción. Como entusiasta de la informática desde niño, he sido dado a la investigación y el autoaprendizaje, esta fortaleza me ha llevado con el paso del tiempo a formular mejores preguntas y dar con hallazgos interesantes en tecnologías para el internet de cosas, el analisis masivo de datos, la inteligencia artificial y la automatización de procesos.
Me interesa en gran medida aportar en temas de educación y a su vez disminuir la brecha digital. Considero que la educación es un pilar fundamental de la sociedad, y por ello, desde mis capacidades y experiencias aporto en la formación de formadores sobre nuevas herramientas de uso educativo digital.
Desde el análisis de los objetivos de desarrollo sostenible me interesa poder contribuir a la soberanía alimentaria(hambre cero), la educación de calidad, la energía asequible y no contaminante como acción por el clima, así como la conectividad a internet como derecho fundamental. Me interesa mucho aportar significativamente a esa gran red que llamamos internet y me capacito diariamente para ser consecuente con mis intereses.

Eventos
Organizador - Sexto Seminario de Accesibilidad Web e Inclusión en la Educación Virtual
Tema: Reflexiones y acciones para el tránsito hacia una cultura inclusiva universitaria.
Octubre 2023

Organizador - Quinto Seminario de Accesibilidad Web e Inclusión en la Educación Virtual
Tema: La tecnología adaptada a las necesidades de una Educación inclusiva.
Noviembre 2022

Ponente - Cuarto Seminario de Accesibilidad Web e Inclusión en la Educación Virtual
Tema: Buenas prácticas en el desarrollo web accesible.
Noviembre 2021

Ponente - Reduc@te Colombia 2021
Tema: Software libre de integración a la ruta para el control de la evaluación del aprendizaje.
Octubre 2021

Ponente - Tercer Seminario de Accesibilidad Web e Inclusión en la Educación Virtual
Tema: Un acercamiento al uso de tecnologías para auditar recursos con accesibilidad web.
Octubre 2020

Ponente - Premio Interamericano en Modelos Educativos Innovadores en Eduación Superior MEIN
Tema: ¿Cómo implementar una estrategia de originalidad en la educación virtual?
Octubre 2020

Ponente - XXVI Congreso Internacional sobre Educación Virtual, Electrónica y a Distancia
Tema: Herramientas tecnológicas que aportan a los procesos de inclusión educativa.
Julio 2020

Ponente - IV Congreso Internacional Virtual en Investigación e Innovación en Ingeniería
Tema: Sistema IoT para el monitoreo y control de fuentes de luz artificial.
Mayo 2018

Hackathons
1rd Place - AngelHack - IBM & Hurify - Project IceB: party IoT whit wearables and beacons Bluetooth - 2018
1rd Place - Hackathon Reinventa Realiza y Respira - University Javeriana - Diaspora: quality of the air with IoT LPWAN - 2018
1st Place - IA Experience Antioquia - RIU: Immediate reaction in emergency rooms with IoT and artificial intelligence - 2017
1rd Place - Regional Santander Digital - Gobernación de Santander - Videoreproductor of sign language Assersum - 2017
1st Place - Hackathon Bunny Inc - Anand Seeds Hack Agro-IoT whit RF 433MHz - 2016
2nd Place - Eco-Hackathon - Botanical Garden of Bogotá - Weather stations with GSM/GPRS - 2015
1st Place - Hackathon for peace and free culture - Alta Consejería Distrital of TIC - Anand Seeds AgroEthernet - 2014

*/