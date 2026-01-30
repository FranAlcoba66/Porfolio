export default {
    navbar: {
        hero: 'Home',
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        resume: 'Resume',
        resumePath: '/CV-Francisco_Alcoba-[EN].pdf'
    },
    hero: {
        greeting: 'Hi, I am',
        role: 'Full Stack Developer',
        description: 'Full Stack Developer with over four years of experience creating digital solutions that optimize processes and add value. I am passionate about continuous learning and finding creative ways to solve problems.',
        cta: 'Check out my work!'
    },
    about: {
        title: 'About Me',
        description1: 'I am a Full Stack developer with over four years of experience creating digital solutions that optimize processes and add value to teams. I am passionate about continuous learning, exploring new ideas, and finding creative ways to solve problems.',
        description2: 'In addition to my technical skills, I excel at teamwork and fostering a positive work environment. My empathy allows me to easily connect with people and enhance collaboration in multidisciplinary settings.',
        recentTech: "Here are some technologies I've been working with recently:",
        profileAlt: 'Profile picture'
    },
    experience: {
        title: "Where I've Worked",
        jobs: {
            innexus: {
                title: 'Full Stack Developer',
                company: 'Innexus',
                location: 'Río Cuarto, Córdoba, Argentina',
                date: 'February 2024 - Present',
                point1: 'Client: Iluminar Laboratorio (iluminarlaboratorio.com.ar) - Collaborated on system scalability, transforming it from an internal tool into a commercial product for other laboratories.',
                point2: 'Client: Adrian Mercado (adrianmercado.com.ar) - Implemented a multi-profile billing system, allowing users to make payments with different tax IDs and bank accounts.',
                point3: 'Developed an auction profit calculator and exportable financial reports in PDF and Excel, improving revenue visibility.',
                point4: 'Optimized platform performance by fixing bugs, enhancing the user experience.',
                point5: 'Tools: PHP, Python, JavaScript, Django, FastAPI, Laravel, React.js, PostgreSQL, MySQL, JIRA, Bitbucket, Docker, HTML, CSS.'
            },
            picallex: {
                title: 'Full Stack Developer',
                company: 'Picallex',
                location: 'Río Cuarto, Córdoba, Argentina',
                date: 'January 2022 - January 2024',
                point1: 'Developed custom views and a suite of tools tailored for sales, support, and billing teams, optimizing their workflows.',
                point2: 'Automated invoice calculation and generation through scheduled tasks (cron jobs), reducing manual workload and improving financial accuracy.',
                point3: 'Created a platform for efficient Key Account Manager (KAM) management, improving tracking and handling of key clients.',
                point4: 'Developed functionalities for PBX (phone system) administration and technical incident resolution for the support team.',
                point5: 'Generated exportable financial reports in PDF and Excel to facilitate metrics analysis.',
                point6: 'Tools: Python, PHP, JavaScript, Django, Laravel, SQL, HTML, CSS, MySQL, PHPUnit, Docker, JIRA, GitHub.'
            }
        }
    },
    education: {
        title: 'Education',
        courses: {
            python: {
                title: 'Python Basic Course',
                institution: 'National University of Río Cuarto',
                date: 'June - August 2021'
            },
            programar: {
                title: '#Se Programar',
                institution: 'Ministry of Productive Development',
                date: 'October - December 2021'
            },
            yoprogramo: {
                title: 'Full Stack Developer #Yo Programo',
                institution: 'Ministry of Productive Development',
                date: 'February 2022 - August 2022'
            },
            ispc: {
                title: 'Full Stack Python Developer',
                institution: 'ISPC Polytechnic Institute',
                date: 'August 2022 - February 2023'
            },
            oracle: {
                title: 'Oracle Next Education Program F2 T3',
                institution: 'Alura Latam',
                date: 'August 2022 - February 2023'
            }
        }
    },
    skills: {
        title: 'Skills',
        backend: 'Backend Development',
        frontend: 'Frontend Development',
        databases: 'Databases',
        tools: 'Tools \u0026 Methodologies',
        infrastructure: 'Infrastructure \u0026 DevOps',
        cloud: 'Cloud \u0026 AWS'
    },
    projects: {
        title: "Some Things I've Built",
        featuredProject: 'Featured Project',
        coffeeShop: {
            title: 'Coffee Shop',
            description: 'Web application developed in Django to manage products and handle orders in a coffee shop. It allows users to view the menu with images, create orders, and efficiently manage the order workflow in a simple and agile way.'
        },
        portfolio: {
            title: 'Portfolio Website',
            description: 'Personal portfolio developed with modern technologies showcasing my professional experience, technical skills, and projects. Designed with a focus on user experience, smooth animations, and a responsive layout.'
        },
        exchange: {
            title: 'Platzi Exchange App',
            description: 'Interactive web application for tracking cryptocurrencies. It displays the top cryptocurrencies with up-to-date information such as price, market capitalization, and 24-hour variation. Each cryptocurrency has a detailed view including its price history and the markets where it is available. The app features a currency converter between USD and the selected cryptocurrency, along with dynamic charts to analyze price trends. Real-time data is fetched using the Coinbase REST API. The entire design is fully responsive, built with TailwindCSS to ensure a smooth experience across all devices.'
        },
        municipalDecrees: {
            title: 'Legal Document Management System',
            description: 'Web platform for managing and consulting municipal legal documents (decrees and ordinances). Allows authenticated users to perform CRUD operations on legislation, organizing documents by municipality, locality, department, and province. Features JWT authentication, permission control, documented RESTful API, and search and filtering system.',
        },
        emailChanneling: {
            title: 'Email Query and Complaint Channeling System',
            description: 'Backend system that automates email management using Artificial Intelligence. Integrates Gmail, Slack, and OpenAI to classify, summarize, and automatically respond to customer queries and complaints. Features real-time processing with event-driven architecture, intelligent email classification by category (operations, commercial, administration, billing), and instant Slack notifications with interactive buttons.',
        }
    },
    contact: {
        title: 'Contact',
        subtitle: 'Let’s connect!',
        description: 'I am currently open to new opportunities. Whether you have a question or just want to say hi, I’ll do my best to get back to you!',
        phone: '+54 358 411-8450',
        location: 'Río Cuarto, Córdoba',
        linkedin: 'LinkedIn Profile',
        github: 'GitHub Profile'
    }
}
