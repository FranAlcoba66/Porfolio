export default {
    navbar: {
        hero: 'Inicio',
        about: 'Sobre Mí',
        experience: 'Experiencia',
        education: 'Educación',
        skills: 'Habilidades',
        projects: 'Proyectos',
        contact: 'Contacto',
        resume: 'Currículum',
        resumePath: '/CV-Francisco:_Alcoba-[ES].pdf'
    },
    hero: {
        greeting: 'Hola, soy',
        role: 'Full Stack Developer',
        description: 'Desarrollador Full Stack con más de cuatro años de experiencia creando soluciones digitales que optimizan procesos y aportan valor. Me apasiona el aprendizaje continuo y encontrar formas creativas de resolver problemas.',
        cta: '¡Mira mi trabajo!'
    },
    about: {
        title: 'Sobre Mí',
        description1: 'Soy un desarrollador Full Stack con más de cuatro años de experiencia creando soluciones digitales que optimizan procesos y aportan valor a los equipos. Me apasiona el aprendizaje continuo, explorar nuevas ideas y encontrar formas creativas de resolver problemas.',
        description2: 'Además de mis habilidades técnicas, me destaco por mi capacidad para trabajar en equipo y fomentar un ambiente laboral positivo. Mi empatía me permite conectar fácilmente con las personas y potenciar la colaboración en entornos multidisciplinarios.',
        recentTech: 'Aquí hay algunas tecnologías con las que he estado trabajando recientemente:',
        profileAlt: 'Foto de perfil'
    },
    experience: {
        title: 'Donde he Trabajado',
        jobs: {
            innexus: {
                title: 'Desarrollador Full Stack',
                company: 'Innexus',
                location: 'Río Cuarto, Córdoba, Argentina',
                date: 'Febrero 2024 - Presente',
                point1: 'Cliente: Iluminar Laboratorio (iluminarlaboratorio.com.ar) - Colaboré en la escalabilidad del sistema, transformándolo de una herramienta interna en un producto comercial para otros laboratorios.',
                point2: 'Cliente: Adrian Mercado (adrianmercado.com.ar) - Implementé un sistema de facturación multiperfil, permitiendo a los usuarios realizar pagos con diferentes CUITs y cuentas bancarias.',
                point3: 'Desarrollé una calculadora de ganancias de subastas y reportes financieros exportables en PDF y Excel, mejorando la visibilidad de los ingresos.',
                point4: 'Optimicé el rendimiento de la plataforma mediante la resolución de errores (bugs), mejorando la experiencia del usuario.',
                point5: 'Herramientas: PHP, Python, JavaScript, Django, FastAPI, Laravel, React.js, PostgreSQL, MySQL, JIRA, Bitbucket, Docker, HTML, CSS.'
            },
            picallex: {
                title: 'Desarrollador Full Stack',
                company: 'Picallex',
                location: 'Río Cuarto, Córdoba, Argentina',
                date: 'Enero 2022 - Enero 2024',
                point1: 'Desarrollé vistas personalizadas y un conjunto de herramientas adaptadas para los equipos de ventas, soporte y facturación, optimizando sus flujos de trabajo.',
                point2: 'Automaticé el cálculo y la generación de facturas mediante tareas programadas (cron jobs), lo que redujo la carga de trabajo manual y mejoró la precisión financiera.',
                point3: 'Creé una plataforma para la gestión eficiente de Key Account Managers (KAMs), mejorando el seguimiento y manejo de clientes clave.',
                point4: 'Desarrollé funcionalidades para la administración de centrales telefónicas (PBX) y la resolución de incidentes técnicos para el equipo de soporte.',
                point5: 'Generé reportes financieros exportables en PDF y Excel para facilitar el análisis de métricas.',
                point6: 'Herramientas: Python, PHP, JavaScript, Django, Laravel, SQL, HTML, CSS, MySQL, PHPUnit, Docker, JIRA, GitHub.'
            }
        }
    },
    education: {
        title: 'Educación',
        courses: {
            python: {
                title: 'Curso básico de Python',
                institution: 'Universidad Nacional Río Cuarto',
                date: 'Junio - Agosto 2021'
            },
            programar: {
                title: '#Se Programar',
                institution: 'Ministerio De Desarrollo Productivo',
                date: 'Octubre - Diciembre 2021'
            },
            yoprogramo: {
                title: 'Full Stack Developer #Yo Programo',
                institution: 'Ministerio De Desarrollo Productivo',
                date: 'Febrero 2022 - Agosto 2022'
            },
            ispc: {
                title: 'Desarrollador Full Stack Python',
                institution: 'ISPC Instituto Superior Politécnico',
                date: 'Agosto 2022 - Febrero 2023'
            },
            oracle: {
                title: 'Programa Oracle Next Education F2 T3',
                institution: 'Alura Latam',
                date: 'Agosto 2022 - Febrero 2023'
            }
        }
    },
    skills: {
        title: 'Habilidades',
        backend: 'Desarrollo Backend',
        frontend: 'Desarrollo Frontend',
        databases: 'Bases de Datos',
        tools: 'Herramientas y Metodologías',
        infrastructure: 'Infraestructura \u0026 DevOps',
        cloud: 'Cloud \u0026 AWS'
    },
    projects: {
        title: 'Proyectos que he Construido',
        featuredProject: 'Proyecto Destacado',
        coffeeShop: {
            title: 'Coffee Shop',
            description: 'Aplicación web desarrollada en Django para administrar productos y gestionar pedidos en una cafetería. Permite ver el menú con imágenes, crear órdenes, y controlar el flujo de pedidos de forma ágil y sencilla.'
        },
        portfolio: {
            title: 'Sitio Web Personal',
            description: 'Portfolio personal desarrollado con tecnologías modernas que muestra mi experiencia profesional, habilidades técnicas y proyectos. Diseñado con un enfoque en la experiencia del usuario, animaciones suaves y un diseño responsivo.'
        },
        exchange: {
            title: 'Platzi Exchange',
            description: 'Aplicación web interactiva para el seguimiento de criptomonedas. Permite visualizar las principales criptodivisas con datos actualizados como precio, capitalización de mercado y variación en las últimas 24 horas. Cada criptomoneda cuenta con una vista detallada que incluye su historial de precios y los mercados en los que está disponible. Integra un conversor entre USD y la criptomoneda seleccionada, así como gráficos dinámicos para analizar la evolución de precios. La información se obtiene en tiempo real mediante la API REST de Coinbase. Todo el diseño es completamente responsivo, desarrollado con TailwindCSS para garantizar una experiencia fluida en cualquier dispositivo.',
        },
        municipalDecrees: {
            title: 'Sistema de Gestión de Documentos Legales',
            description: 'Plataforma web para la administración y consulta de documentos legales municipales (decretos y ordenanzas). Permite a los usuarios autenticados realizar operaciones CRUD sobre la legislación, organizando los documentos por municipalidad, localidad, departamento y provincia. Incluye autenticación JWT, control de permisos, API RESTful documentada, y sistema de búsqueda y filtrado.',
        },
        emailChanneling: {
            title: 'Canalizador de Consultas y Reclamos',
            description: 'Sistema backend que automatiza la gestión de correos electrónicos mediante Inteligencia Artificial. Integra Gmail, Slack y OpenAI para clasificar, resumir y responder automáticamente consultas y reclamos de clientes. Utiliza procesamiento en tiempo real con arquitectura event-driven, clasificación inteligente de correos por categoría (operaciones, comercial, administración, facturación), y notificaciones instantáneas a Slack con botones interactivos.',
        }
    },
    contact: {
        title: 'Contacto',
        subtitle: '¡Conectemos!',
        description: 'Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas una pregunta o solo quieras saludar, ¡haré lo posible por responderte!',
        phone: '+54 358 411-8450',
        location: 'Río Cuarto, Córdoba',
        linkedin: 'Perfil de LinkedIn',
        github: 'Perfil de GitHub'
    }
}
