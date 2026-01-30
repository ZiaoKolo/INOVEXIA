import ProjectCard from './ProjectCard';


const projectsData = [
  {
    id: 1,
    title: "Maquis Manager",
    bgGradient: 'bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900',
    bgImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    coverImage: 'https://media.licdn.com/dms/image/v2/D4E22AQFPYCG2xvlsUQ/feedshare-shrink_2048_1536/B4EZnazHFKHcAw-/0/1760312465313?e=1770854400&v=beta&t=p2_7z42oojA14Zd6faqprWaYW1Yzv9RbVofNsVBry0Q',
    url: 'https://www.linkedin.com/posts/kolo-israel-ziao-1711a9329_androiddev-kotlin-roomdatabase-activity-7383285631038267392-amE-',
    githubUrl: 'https://github.com/ZiaoKolo/MaquisManager',
    category: 'Application Mobile',
    techStack: [
      { name: 'Kotlin', icon: 'https://cdn.simpleicons.org/kotlin/7F52FF' },
      { name: 'Android', icon: 'https://cdn.simpleicons.org/android/3DDC84' },
      { name: 'SQLite', icon: 'https://cdn.simpleicons.org/sqlite/003B57' },
      { name: 'Room', icon: 'https://cdn.simpleicons.org/android/3DDC84' },
    ],
    features: [
      'Gestion intelligente du stock en temps réel',
      'Interface optimisée pour une utilisation rapide',
      'Système de vente intuitif',
      'Statistiques et tableaux de bord personnalisés',
      'Architecture robuste hors-ligne',
      'Design moderne et accessible'
    ],
    description: 'Solution mobile complète pour la gestion de maquis avec suivi du stock et analyse des ventes.',
    fullDescription: 'ZOTECS a conçu une application Android professionnelle pour moderniser la gestion des maquis et restaurants locaux. Cette solution hors ligne permet une gestion complète du stock, des ventes et offre des statistiques détaillées sans nécessiter de connexion Internet.',
    challenge: 'Notre client avait besoin d\'une solution fiable fonctionnant sans connexion Internet, avec une interface simple pour des utilisateurs variés tout en garantissant la fiabilité des données.',
    solution: 'Nous avons développé une architecture MVVM robuste avec Room Database, garantissant des performances optimales et une expérience utilisateur fluide grâce à Material Design.',
    role: 'Vision Studio',
    responsibilities: 'Conception UX/UI, architecture logicielle, développement complet',
    timeline: 'Novembre 2025',
    duration: '1 mois - Livré en production'
  },
  {
    id: 2,
    title: "Chef IA",
    bgGradient: 'bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-900',
    bgImage: '/img.png',
    coverImage: '/img.png',
    url: 'https://www.linkedin.com/posts/kolo-israel-ziao-1711a9329_chefia-projetweb-innovation-activity-7359725871982649344-EBp9',
    githubUrl: 'https://github.com/ZiaoKolo/Chef-AI',
    category: 'Application Web IA',
    techStack: [
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000', invert: true },
      { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Gemini AI', icon: 'https://cdn.simpleicons.org/google/4285F4' },
    ],
    features: [
      'Intelligence artificielle pour suggestions personnalisées',
      'Base de données internationale de recettes',
      'Interface utilisateur moderne et intuitive',
      'Système de filtrage avancé',
      'Mise en valeur de la gastronomie africaine',
      'Performance et SEO optimisés'
    ],
    description: 'Plateforme web intelligente pour découvrir des recettes basées sur les ingrédients disponibles.',
    fullDescription: 'ZOTECS a créé un assistant culinaire innovant combinant intelligence artificielle et design moderne. La plateforme aide les utilisateurs à transformer leurs ingrédients en délicieux plats tout en valorisant la richesse gastronomique africaine.',
    challenge: 'Créer une expérience utilisateur exceptionnelle qui rende la recherche de recettes naturelle et personnalisée, tout en mettant en avant la diversité culinaire mondiale.',
    solution: 'Nous avons intégré l\'IA Gemini avec l\'API TheMealDB dans une interface Next.js performante, offrant des suggestions intelligentes et une expérience utilisateur fluide.',
    role: 'ZOTECS',
    responsibilities: 'Conception UX/UI, intégration IA générative, développement full-stack, optimisation SEO',
    timeline: 'Décembre 2025',
    duration: 'Livré - Version beta déployée'
  },
  {
    id: 3,
    title: "SchoolShop",
    bgGradient: 'bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-900',
    bgImage: '/img2.png',
    coverImage: '/img2.png',
    url: 'https://school-shop-git-main-ziaos-projects-eb7658b7.vercel.app/',
    githubUrl: 'https://github.com/ZiaoKolo/SchoolShop',
    category: 'Plateforme E-commerce',
    techStack: [
      { name: 'Django', icon: 'https://cdn.simpleicons.org/django/092E20' },
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    ],
    features: [
      'Catalogue produits complet et organisé',
      'Système de panier intelligent',
      'Gestion des commandes en temps réel',
      'Interface React moderne et réactive',
      'API REST performante',
      'Authentification sécurisée'
    ],
    description: 'Solution e-commerce complète pour la vente de fournitures scolaires avec gestion avancée.',
    fullDescription: 'ZOTECS a développé une plateforme e-commerce moderne dédiée aux fournitures scolaires, combinant une API Django robuste avec une interface React fluide pour une expérience d\'achat optimale.',
    challenge: 'Concevoir une architecture scalable séparant frontend et backend, avec une gestion sécurisée des transactions et un système de gestion de catalogue flexible.',
    solution: 'Architecture moderne avec Django REST Framework pour le backend et React pour le frontend, garantissant sécurité, performance et évolutivité.',
    role: 'ZOTECS',
    responsibilities: 'Architecture système full-stack, développement backend/frontend, intégration paiements, déploiement',
    timeline: 'Développé en 2025',
    duration: 'Projet livré et en production'
  },
  {
    id: 4,
    title: "MindFocus",
    bgGradient: 'bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900',
    bgImage: '/img3.png',
    coverImage: '/img3.png',
    githubUrl: 'https://github.com/ZiaoKolo/MindFocus',
    category: 'Extension Chrome',
    techStack: [
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'Chrome API', icon: 'https://cdn.simpleicons.org/googlechrome/4285F4' },
      { name: 'AI/ML', icon: 'https://cdn.simpleicons.org/openai/412991' },
      { name: 'HTML/CSS', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    ],
    features: [
      'Analyse intelligente en temps réel',
      'Détection contextuelle des distractions',
      'Notifications motivationnelles personnalisées',
      'Tableau de bord de productivité',
      'Mode concentration avancé',
      'Intégration IA native Chrome'
    ],
    description: 'Extension Chrome innovante utilisant l\'IA pour améliorer la concentration et la productivité.',
    fullDescription: 'ZOTECS a conçu une extension Chrome intelligente qui révolutionne la gestion de la concentration. En analysant le contenu web en temps réel, elle aide les utilisateurs à rester focusés sur leurs objectifs.',
    challenge: 'Développer une solution intelligente qui comprend le contexte réel de l\'utilisateur et offre des rappels personnalisés sans être intrusive, là où les bloqueurs traditionnels échouent.',
    solution: 'Utilisation des APIs d\'IA natives de Chrome pour une analyse sémantique en temps réel et des alertes contextuelles, le tout dans une interface élégante et non-intrusive.',
    role: 'ZOTECS',
    responsibilities: 'Conception produit, intégration APIs IA, développement extension Chrome, design UX/UI',
    timeline: 'Projet en cours',
    duration: 'Développement actif - Beta testing'
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto">
        
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-3 md:mb-4">
              Des Réussites Tangibles en Afrique
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              Découvrez comment nos solutions impactent l'économie réelle.
            </p>
          </div>
        

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projectsData.map((project) => (
            
              <div className="animate-fade-in">
                <ProjectCard project={project} />
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
