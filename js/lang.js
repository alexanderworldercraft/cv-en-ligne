const html = document.querySelector('html');

html.setAttribute('lang', 'en')

// Objets contenant des traductions pour différentes langues
const translations = {
    'en': {
        'general': 'general',
        'Presentation': 'Presentation',
        'metier': 'Web Developer, Web Mobile',
        'competences': 'Professional Skills',
        'autre_cv': 'Other CV',
        'format_papier': 'Paper CV',
        'viewed': 'viewed',
        'pdf': 'DL in PDF',
        'img': 'DL in pictures',
        'paper': 'paper',
        'desc': 'Perseverance and determination always pay off in the end.',

        'Software': 'Software',
        'Systeme': 'Operating system',

        // Xp
        'xp': 'Professional Experience',
        'xp_t1': "Internship Website development",
        'xp_1': "Creation of a Windows server on which we mounted a Linux virtual server (debian) to support the development of the website.",
        'xp_t2': "Computer and digital training at AFPA",
        'xp_2': "Prepare for careers in IT and digital technology.",
        'xp_t3': 'Cybersecurity training',
        'xp_3': 'SecNum certification. <br>Creation of a safe for MDP. <br>Cybersecurity management. <br>IT security practices and habits.',
        'xp_t4': "Creation of a personal showcase site",
        'xp_4': "I have developed a professional website that reflects my abilities and achievements.",
        'xp_t5': "DWWM training at AFPA",
        'xp_5': "Learn how to become a Web and Mobile Web Developer.",
        'xp_t6': "Pro DWWM project for AFPA",
        'xp_6': "Creation of a complete professional project for the AFPA final exam to obtain my level 5 professional qualification.",

        // à propos
        'About_us': 'About us',
        'About_us_1': "Development is one of my passions: I love imagining and creating games, web pages, scripts, etc... Bringing them to life and enlivening them with elegant animations. My two favorite hobbies are learning new things and video games, which I've been playing since I was very young.",
        'About_us_2': "By nature resourceful and independent in my work, I enjoy learning new technologies, spending time solving problems and producing quality code. My work values: clean code, flexibility, performance and reliability.",
        'interests': 'My interests',
        'interests_1': 'Passionate about web development and immersed in Japanese culture, I hit the road, whether on two wheels on a motorcycle or behind the wheel of a car, in search of new adventures. Between road trips, I escape into the world of video games, where reality and the virtual intermingle.',
        // Plus de traductions...
    },
    'fr': {
        'general': 'général',
        'Presentation': 'Présentation',
        'metier': 'Développeur Web, Web Mobile',
        'competences': 'Compétences professionnelle',
        'autre_cv': 'Autre CV',
        'format_papier': 'CV Format papier',
        'viewed': 'Visualisé',
        'pdf': 'DL en PDF',
        'img': 'DL en image',
        'paper': 'papier',
        'desc': 'La persévérance et la détermination finissent toujours par porter leurs fruits.',

        'Software': 'Logiciels',
        'Systeme': "Système d'exploitation",

        // Xp
        'xp': 'Expérience Professionnelle',
        'xp_t1': "Stage Développement d'un site web",
        'xp_1': "Création d'un serveur Windows sur lequel nous avons monté un serveur virtuel Linux (débian) qui nous a servi de support pour le développement du site web.",
        'xp_t2': "Formation en informatique et numérique à l'AFPA",
        'xp_2': "Se préparer aux métiers de l'informatique et du numérique.",
        'xp_t3': 'Formation Cybersécurité',
        'xp_3': "certification SecNum. <br>Création d'un coffre fort pour MDP. <br>Gestion de la cybersécurité. <br>Pratiques et habitudes de sécurité informatique.",
        'xp_t4': "Création d'un site vitrine personnel",
        'xp_4': "J'ai développer un site web professionnel qui reflète mes capacités et mes réalisations.",
        'xp_t5': "Formation DWWM à l'AFPA",
        'xp_5': "Apprentissage du métier de Développeur Web, Web Mobile.",
        'xp_t6': "Projet Pro DWWM pour l'AFPA",
        'xp_6': "Création d'un projet professionnelle complet pour examen final de l'AFPA afin d'optenir mon titre professionnelle de niveau 5.",

        // à propos
        'About_us': 'À propos',
        'About_us_1': "Le développement est une de mes passions : j'aime imaginer et créer des jeux, des pages web, des scripts, etc... Les rendre vivants et les dynamiser avec des animations élégantes. Mes deux hobbys préférés sont d'apprendre de nouvelles choses et les jeux vidéo, que j'applique depuis mon plus jeune âge.",
        'About_us_2': "De nature débrouillard et indépendant dans mon travail, j’aime apprendre de nouvelles technologies, passer du temps à résoudre des problèmes et réaliser du code de qualité. Mes valeurs de travail : clean code, flexibilité, performance et sérieux.",
        'interests': "Mes centres d'intérêt",
        'interests_1': "Passionné de développement web et immergé dans la culture japonaise, je prends la route, que ce soit sur deux roues en moto ou derrière le volant d'une voiture, à la recherche de nouvelles aventures. Entre deux virées, je m'évade dans le monde des jeux vidéo, où réalité et virtuel s'entremêlent.",
        // Plus de traductions...
    },
    // Plus de langues...
};

// Fonction pour traduire tous les éléments
function translatePage() {
    // Obtenez le code de langue
    const lang = navigator.language.split('-')[0]; // 'en' de 'en-US'
    const translation = translations[lang] || translations['en'];

    // Trouvez tous les éléments avec un 'data-key' et mettez à jour leur texte
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translation[key]) {
            element.innerHTML = translation[key];
        }
    });
}

// Appeler la fonction au chargement de la page
window.onload = translatePage;