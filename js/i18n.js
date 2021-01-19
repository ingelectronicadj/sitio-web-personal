var data = {
    es: {
        nav_menu: ['Experiencia', 'Habilidades', 'Proyectos'],
        vertical_menu: ['Acerca de mí', 'Experiencia', 'Educación', 'Habilidades', 'Intereses', 'Premios'],
        about_me: {
            profesion: '<b>DESARROLLADOR DE </br> SOFTWARE Y HARDWARE</b> <br />Apasionado por la ciencia y las tecnologías libres. <br />E-mail: <a href="mailto:ingelectronicadj@gmail.com">ingelectronicadj@gmail.com</a> <br />Contacto: <a href="tel:3213842659">(+0571) 321 3842659</a>',
            legend: 'Ingeniero electrónico con experiencia en el desarrollo de productos digitales, apasionado por la ciencia y la tecnología. Promotor de software libre y hardware de diseño abierto. Investigador sobre herramientas de uso educativo digital y especialista en la ejecución de proyectos orientados a Internet.'
        },
        experience: {
            title: 'Experiencia',
            jobs: [{
                    title: 'Gestor Tecnopedagógico',
                    company: 'Universidad Nacional Abierta y a Distancia - UNAD',
                    work: 'Contratado para desarrollar herramientas web y fragmentos de software para la automatización de procesos, así como auditar la calidad de ambientes virtuales de aprendizaje Moodle, correspondientes al área de gestión e innovación tecnopedagógica de cursos y recursos educativos digitales de la UNAD.',
                    date: 'Sept 2019 - Actualidad'
                },
                {
                    title: 'Diseñador Electrónico',
                    company: 'Freelance',
                    work: 'Encargado de plantear solución a proyectos de tecnificación y automatización industrial orientados al Internet de la cosas. Diseñar, desarrollar e implementar software y hardware, con el propósito de monitorear o realizar alguna acción remota en específico desde cualquier parte con cobertura a internet o dentro de una zona de cobertura por radiofrecuencia',
                    date: 'Marzo 2018 - Diciembre 2019'
                },
                {
                    title: 'Investigador Junior',
                    company: 'Centro de investigación y Desarrollo Científico - CIDC',
                    work: 'Convocado por grupo de investigación para desarrollar prototipos de dispositivos IoT enfocados a la horticultura. Realizar análisis de investigación y documentar procesos a través de informes científicos. Asistir a eventos internacionales sobre agricultura de precisión.',
                    date: 'Junio 2017 - Diciembre 2018'
                },
                {
                    title: 'Desarrollador Web',
                    company: 'Assersum',
                    work: 'Encargado de desarrollar herramientas web para la Inclusión de personas con discapacidad auditiva en entornos de aprendizaje digital.',
                    date: 'Enero 2014 - Marzo 2017'
                }
            ]
        },
        education: {
            title: 'Educación',
            studies: [{
                    title: 'Ingeniero Electrónico',
                    college: 'Universidad Distrital Francisco José de Caldas',
                    legend: 'Especialidades: telemática, telecomunicaciones y sistemas embebidos.',
                    date: 'Marzo 2018'
                },
                {
                    title: 'Desarrollador FullStack',
                    college: 'FEDESOFT - Federación Colombiana de la Industria de Software y TI',
                    date: 'Agosto 2018'
                },
                {
                    title: 'Profesional de Soporte de TI',
                    college: 'Google & Coursera college',
                    date: 'En formación'
                }
            ]
        },


    },
    en: {
        nav_menu: ['Experience', 'Skills', 'Projects'],
        vertical_menu: ['About me', 'Experience', 'Education', 'Skills', 'Interests', 'Awards'],
        about_me: {
            profesion: '<b> DEVELOPER OF </br> SOFTWARE AND HARDWARE </b> <br /> Passionate about science and free technologies. <br /> E-mail: <a href="mailto:ingelectronicadj@gmail.com"> ingelectronicadj@gmail.com </a> <br /> Contact: <a href="tel:3213842659"> (+0571 ) 321 3842659 </a>',
            legend: 'Electronic engineer with experience in the development of digital products, passionate about science and technology. Promoter of free software and open design hardware. Researcher on tools for digital educational use and specialist in the execution of Internet-oriented projects.'
        },
        experience: {
            title: 'Experience',
            jobs: [{
                    title: 'Techno-pedagogical Auditor',
                    company: 'National University - UNAD',
                    work: 'Hired to develop web tools and software fragments for the automation of processes, as well as to audit the quality of virtual Moodle learning environments, corresponding to the area of management and techno-pedagogical innovation of courses and digital educational resources of the UNAD.',
                    date: 'Sept 2019 - Present'
                },
                {
                    title: 'Electronic Designer',
                    company: 'Freelance',
                    work: 'In charge of proposing solutions to industrial automation and technification projects oriented to the Internet of Things. Design, develop and implement software and hardware, with the purpose of monitoring or carrying out any specific remote action from anywhere with internet coverage or within a radio frequency coverage area.',
                    date: 'March 2018 - December 2019'
                },
                {
                    title: 'Junior Researcher',
                    company: 'Scientific Research and Development Center - CIDC',
                    work: 'Convened by a research group to develop prototypes of IoT devices focused on horticulture. Perform research analysis and document processes through scientific reports. Attend international events on precision agriculture.',
                    date: 'June 2017 - December 2018'
                },
                {
                    title: 'Web developer',
                    company: 'Assersum',
                    work: 'In charge of developing web tools for the Inclusion of people with hearing disabilities in digital learning environments.',
                    date: 'January 2014 - March 2017'
                }
            ]
        },
        education: {
            title: 'Education',
            studies: [{
                    title: 'Electronic Engineer',
                    college: 'District University FJC',
                    legend: 'Specialties: telematics, telecommunications and embedded systems.',
                    date: 'March 2018'
                },
                {
                    title: 'FullStack Developer',
                    college: 'FEDESOFT - Colombian Federation of the Software and IT Industry',
                    date: 'Agosto 2018'
                },
                {
                    title: 'IT Support Professional,
                    college: 'Google & Coursera college',
                    date: 'In progress'
                }
            ]
        },
    }
}

function changeLang(type) {
    switch (type) {
        case 'es':

            break;

        case 'en':

            break;

        default:
            break;
    }
}