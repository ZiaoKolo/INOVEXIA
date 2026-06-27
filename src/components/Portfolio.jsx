import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';


const projectsData = [
 {
    id: 1,
    title: "FixeCasa",
    bgGradient: 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900',
     bgImage: '/fixecasa.png',
    coverImage: '/fixecasa.png',
    url: 'https://fixecasa.com/',
    githubUrl: '',
    category: 'Application Web E-commerce',
    techStack: [
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'Stripe', icon: 'https://cdn.simpleicons.org/stripe/635BFF' },
    ],
    features: [
      'Boutique en ligne multilingue et internationale',
      'Catalogue d\'outillage professionnel avec navigation fluide',
      'Système de paiement sécurisé (carte, PayPal, MB WAY)',
      'Suivi de commande en temps réel',
      'Espace client et gestion de compte',
      'Design premium et expérience utilisateur haut de gamme'
    ],
    description: 'Boutique en ligne premium dédiée à la vente d\'équipements de bricolage professionnels pour le marché européen.',
    fullDescription: 'ZOTECS a conçu et développé FixeCasa, une plateforme e-commerce sur-mesure spécialisée dans la vente d\'outillage et d\'équipements de bricolage professionnels. Pensée pour le marché européen, cette boutique multilingue allie performance technique, sécurité des transactions et expérience utilisateur haut de gamme.',
    challenge: 'Notre client souhaitait une plateforme e-commerce capable de séduire une clientèle européenne exigeante, avec une expérience d\'achat fluide, multilingue, et un haut niveau de confiance et de sécurité dans les transactions.',
    solution: 'Nous avons développé une boutique en ligne moderne et performante, avec un catalogue produits optimisé, un système de paiement sécurisé multi-options, un suivi de commande en temps réel et un design premium pensé pour convertir les visiteurs en clients fidèles.',
    role: 'Vision Studio',
    responsibilities: 'Conception UX/UI, architecture logicielle, développement complet',
    timeline: 'Mai 2026',
    duration: '1 mois - Livré en production'
},
  {
    id: 2,
    title: "Docteur Kouakou",
    bgGradient: 'bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-900',
    bgImage: '/docteur-kouakou.png',
    coverImage: '/docteur-kouakou.png',
    url: 'https://docteur-kouakou.com/',
    githubUrl: '',
    category: 'Site Web Vitrine',
    techStack: [
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000', invert: true },
      { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Sanity', icon: 'https://cdn.simpleicons.org/sanity/F03E2F' },
    ],
    features: [
      'Présentation claire des produits et traitements',
      'Mise en valeur de la marque et de l\'expertise',
      'Prise de contact directe via WhatsApp',
      'Interface moderne, fluide et responsive',
      'Studio d\'administration pour gestion du contenu',
      'Architecture orientée conversion et ROI'
    ],
    description: 'Site web vitrine dynamique mettant en valeur l\'image de marque et l\'offre d\'un praticien de médecine traditionnelle.',
    fullDescription: 'ZOTECS a conçu et développé une infrastructure digitale orientée ROI pour Docteur Kouakou, dans le cadre de la structuration digitale et de l\'optimisation de son image de marque. Le site présente ses traitements médicinaux, ses cosmétiques naturels et ses diffuseurs de senteur, avec une expérience utilisateur soignée pensée pour convertir les visiteurs en clients.',
    challenge: 'Notre client avait besoin d\'une présence digitale professionnelle capable de renforcer sa crédibilité, de présenter clairement son offre, et de faciliter la prise de contact, tout en restant simple à gérer au quotidien.',
    solution: 'Nous avons développé un site vitrine dynamique avec une interface moderne, un studio d\'administration pour la gestion autonome du contenu, et un parcours utilisateur optimisé pour la conversion, du premier contact jusqu\'à la prise de rendez-vous via WhatsApp.',
    role: 'ZOTECS',
    responsibilities: 'Conception UX/UI, architecture digitale, développement complet, optimisation orientée ROI',
    timeline: 'Mai 2026',
    duration: 'Livré en production'
},
  {
    id: 3,
    title: "SchoolShop",
    bgGradient: 'bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-900',
    bgImage: '/img2.png',
    coverImage: '/img2.png',
    url: 'https://school-shop-git-main-ziaos-projects-eb7658b7.vercel.app/',
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
    title: "Conte Cargo",
    bgGradient: 'bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900',
    bgImage: '/conte-cargo.png',
    coverImage: '/conte-cargo.png',
    url: 'https://conte-cargo-navires-poly.com/',
    githubUrl: '',
    category: 'Site Web Vitrine',
    techStack: [
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000', invert: true },
      { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Sanity', icon: 'https://cdn.simpleicons.org/sanity/F03E2F' },
    ],
    features: [
      'Demande de devis gratuit en ligne',
      'Présentation claire des services (fret aérien, maritime, colis)',
      'Suivi de statut d\'envoi en temps réel',
      'Couverture internationale multi-continents',
      'Studio d\'administration pour gestion du contenu',
      'Service client disponible 24/7'
    ],
    description: 'Site web vitrine pour une entreprise leader du transit international de colis, véhicules et conteneurs.',
    fullDescription: 'ZOTECS a conçu et développé Conte Cargo, une plateforme digitale dédiée à une entreprise de transit international. Le site met en avant les solutions de fret aérien et maritime de l\'entreprise, reliant l\'Asie, le Moyen-Orient, les États-Unis, le Canada, l\'Europe et l\'Afrique, avec un parcours utilisateur fluide pour obtenir un devis et suivre ses envois.',
    challenge: 'Notre client avait besoin d\'une présence digitale crédible et internationale, capable de simplifier la demande de devis, de présenter clairement ses services de transit, et de rassurer une clientèle exigeant sécurité et rapidité.',
    solution: 'Nous avons développé un site vitrine moderne avec un système de devis en ligne, un suivi d\'envoi visible directement sur la page d\'accueil, et un studio d\'administration permettant à l\'équipe de gérer le contenu de manière autonome.',
    role: 'ZOTECS',
    responsibilities: 'Conception UX/UI, architecture digitale, développement complet, intégration du système de devis',
    timeline: 'Mai 2026',
    duration: 'Livré en production'
},
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-3 md:mb-4">
              Des Réussites Tangibles en Afrique
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              Découvrez comment nos solutions impactent l'économie réelle.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={index * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
