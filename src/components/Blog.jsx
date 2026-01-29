import { useState } from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, Code, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const articles = [
    {
      id: 1,
      title: "Créer un SaaS rentable depuis l'Afrique : Guide complet 2026",
      excerpt: "Découvrez les étapes essentielles pour transformer votre idée en produit SaaS monétisable, avec intégration des paiements mobiles (Orange Money, Wave, MTN).",
      category: "SaaS",
      date: "15 Janvier 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      author: "Ziao Kolo Israel",
      tags: ["SaaS", "Entrepreneuriat", "Mobile Money"]
    },
    {
      id: 2,
      title: "Architecture MVP : Valider votre idée en 30 jours",
      excerpt: "Méthodologie éprouvée pour concevoir et déployer un Minimum Viable Product performant sans dette technique.",
      category: "Développement",
      date: "10 Janvier 2026",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80",
      author: "Ziao Kolo Israel",
      tags: ["MVP", "Architecture", "Agilité"]
    },
    {
      id: 3,
      title: "Intégration de l'IA générative dans vos applications web",
      excerpt: "Comment implémenter Gemini AI et ChatGPT pour automatiser vos processus métier et améliorer l'expérience utilisateur.",
      category: "Intelligence Artificielle",
      date: "5 Janvier 2026",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      author: "Ziao Kolo Israel",
      tags: ["IA", "Gemini", "Automatisation"]
    },
    {
      id: 4,
      title: "Optimisation Mobile-First pour l'Afrique de l'Ouest",
      excerpt: "Techniques avancées de compression WebP et lazy loading pour garantir des performances optimales sur réseaux 3G/4G.",
      category: "Performance",
      date: "28 Décembre 2025",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
      author: "Ziao Kolo Israel",
      tags: ["Mobile", "Performance", "WebP"]
    },
    {
      id: 5,
      title: "Monétisation avec Mobile Money : Guide d'intégration",
      excerpt: "Tutoriel complet pour intégrer Orange Money, Wave et MTN Money dans votre application SaaS.",
      category: "Paiements",
      date: "20 Décembre 2025",
      readTime: "15 min",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
      author: "Ziao Kolo Israel",
      tags: ["Paiements", "API", "Monétisation"]
    },
    {
      id: 6,
      title: "SEO Technique pour Startups SaaS en 2026",
      excerpt: "Stratégies concrètes de référencement naturel pour dominer les recherches locales et attirer des clients qualifiés.",
      category: "Marketing",
      date: "12 Décembre 2025",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      author: "Traoré Ouessogo Cheick Mohamed Tidjane",
      tags: ["SEO", "Marketing", "Croissance"]
    }
  ];

  const categories = ["Tous", "SaaS", "Développement", "Intelligence Artificielle", "Performance", "Paiements", "Marketing"];

  const filteredArticles = activeCategory === 'Tous' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNewsletterStatus({ type: '', message: '' });

    // Validation
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus({ type: 'error', message: 'Veuillez entrer une adresse email valide.' });
      setIsSubmitting(false);
      return;
    }

    try {
      // Configuration EmailJS (même configuration que Contact.jsx)
      const serviceID = 'service_8325xj5';
      const templateID = 'template_f8hzxnm';
      const publicKey = 'J8cabesIQxz2vTUGK';

      // Envoi avec EmailJS
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: 'Inscription Newsletter',
          from_email: newsletterEmail,
          service: 'Newsletter ZOMTIK Academy',
          message: `Nouvelle inscription à la newsletter:\n\nEmail: ${newsletterEmail}\nDate: ${new Date().toLocaleString('fr-FR')}\nSource: Blog ZOMTIK`,
          to_email: 'koloziao2005@gmail.com',
        },
        publicKey
      );

      console.log('EmailJS Response:', result);
      
      setNewsletterStatus({ 
        type: 'success', 
        message: 'Inscription réussie ! Merci de nous rejoindre.' 
      });
      
      // Réinitialiser le formulaire
      setNewsletterEmail('');
      
      // Effacer le message après 5 secondes
      setTimeout(() => {
        setNewsletterStatus({ type: '', message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setNewsletterStatus({ 
        type: 'error', 
        message: '❌ Erreur d\'inscription. Veuillez réessayer ou nous contacter à koloziao2005@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark pt-20">
      {/* Hero Section */}
      <div className="border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Ressources Tech & Business
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Academy ZOMTIK
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Guides pratiques, tutoriels techniques et stratégies de croissance pour réussir dans l'écosystème tech africain.
              </p>
            </div>
          
        </div>
      </div>

      {/* Categories Filter */}
      <div className="border-b border-slate-200 dark:border-white/5 sticky top-16 bg-white/95 dark:bg-dark/95 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === activeCategory
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                    : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 border-t border-slate-200 dark:border-slate-700 pt-10">
          {filteredArticles.map((article, idx) => (
            
              <article
                className="flex max-w-xl flex-col items-start justify-between"
              >
              {/* Image */}
              <Link to={`/blog/${article.id}`} className="relative w-full group/image">
                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-slate-100 dark:bg-slate-800 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-transform duration-300 group-hover/image:scale-[1.02]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-white/10 group-hover/image:ring-blue-500/50 transition-all"></div>
                <div className="absolute inset-0 rounded-2xl bg-blue-600/0 group-hover/image:bg-blue-600/10 transition-all duration-300 flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>

              {/* Date & Category */}
              <div className="flex items-center gap-x-4 text-xs mt-4">
                <time className="text-slate-400 dark:text-slate-400">
                  {article.date}
                </time>
                <span className="relative z-10 rounded-full bg-slate-800/60 dark:bg-slate-800/60 px-3 py-1.5 font-medium text-slate-300 dark:text-slate-300">
                  {article.category}
                </span>
              </div>

              {/* Title & Excerpt */}
              <div className="group relative grow">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-300">
                  <Link to={`/blog/${article.id}`}>
                    <span className="absolute inset-0"></span>
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {article.excerpt}
                </p>
              </div>

              {/* Author */}
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img
                  src={article.author === "Ziao Kolo Israel" ? "/team/Kolo.jpg" : "/team/Cheick.jpeg"}
                  alt={article.author}
                  className="size-10 rounded-full bg-slate-800 dark:bg-slate-800 object-cover"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {article.author}
                  </p>
                  <p className="text-slate-400 dark:text-slate-400">{article.readTime} de lecture</p>
                </div>
              </div>
            </article>
            
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                Restez informé
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Recevez nos dernières ressources
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Tutoriels, guides stratégiques et analyses de marché directement dans votre boîte mail.
              </p>
            
            {/* Status Message */}
            {newsletterStatus.message && (
              <div className={`mb-6 p-4 rounded-lg ${
                newsletterStatus.type === 'success' 
                  ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20' 
                  : 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20'
              }`}>
                {newsletterStatus.message}
              </div>
            )}
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="votre.email@exemple.com"
                className="flex-1 px-4 py-3 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-card text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-full bg-blue-600 dark:bg-blue-500 text-white font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi...' : 'S\'abonner'}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
