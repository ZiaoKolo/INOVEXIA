import { useState } from 'react';
import { Target, Users, Award, Zap, Globe, Heart, Shield, TrendingUp, Rocket, User, Image, Plus, Check } from 'lucide-react';
import { HiMiniCheckBadge } from "react-icons/hi2";
import emailjs from '@emailjs/browser';

const About = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          message: `Nouvelle inscription à la newsletter:\n\nEmail: ${newsletterEmail}\nDate: ${new Date().toLocaleString('fr-FR')}\nSource: Page About`,
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
        message: 'Erreur d\'inscription. Veuillez réessayer ou nous contacter à koloziao2005@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Nous repoussons les limites technologiques pour créer des solutions avant-gardistes adaptées au marché africain."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Notre engagement envers la qualité se reflète dans chaque ligne de code et chaque interaction client."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Impact",
      description: "Nous mesurons notre succès par la transformation digitale et la croissance que nous générons pour nos partenaires."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Intégrité",
      description: "Transparence, honnêteté et respect des engagements sont au cœur de notre relation avec chaque client."
    }
  ];

  const stats = [
    { number: "50+", label: "Projets livrés" },
    { number: "30+", label: "Clients satisfaits" },
    { number: "95%", label: "Taux de réussite" },
    { number: "24/7", label: "Support client" }
  ];

  const team = [
    {
      name: "Ziao Kolo Israel",
      role: "Co-fondateur, CEO & Full-Stack Developer",
      expertise: "Architecture SaaS, MVP Development & Technical Leadership",
      image: "/team/Kolo.jpg"
    },
    {
      name: "Traoré Ouessogo Cheick Mohamed Tidjane",
      role: "Co-fondateur, Head of Digital Marketing & SEO",
      expertise: "Digital Strategy, SEO & Growth Marketing",
      image: "/team/Cheick.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark pt-20">
      {/* Hero Section */}
      <div className="border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Partenaire de l'innovation numérique en Afrique de l'Ouest
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                De votre idée brute à la{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  réussite technologique rentable
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                ZOMTIK est née d'une vision : démocratiser l'accès à l'ingénierie logicielle de classe mondiale et accompagner la montée en puissance de l'écosystème tech africain.
              </p>
            </div>
          
        </div>
      </div>

      {/* Mission Section */}
      <div className="border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
                  <Target className="w-4 h-4" />
                  Notre Mission
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Catalyseur de transformation digitale
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Le paysage numérique en Afrique de l'Ouest traverse une phase de mutation structurelle profonde. La contribution de l'économie numérique au PIB mondial devrait atteindre 25% d'ici 2026, et l'Afrique subsaharienne est à l'avant-garde avec un marché estimé à 180 milliards de dollars d'ici 2025.
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Dans cet écosystème en pleine effervescence, ZOMTIK se positionne non seulement comme un prestataire technique, mais comme un <strong className="text-slate-900 dark:text-white">catalyseur de réussite technologique</strong>.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-3xl bg-white dark:bg-card flex items-center justify-center">
                    <div className="text-center p-8">
                      <TrendingUp className="w-20 h-20 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                      <p className="text-4xl font-bold text-slate-900 dark:text-white mb-2">180 Mds $</p>
                      <p className="text-slate-600 dark:text-slate-400">Marché numérique africain en 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </div>

      {/* Values Section */}
      <div className="border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Nos valeurs fondamentales
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Ces principes guident chacune de nos décisions et définissent notre approche du partenariat technologique.
              </p>
            </div>
          
          
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-card border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-2xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* Team Section */}
      <div className="border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Notre Équipe
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Experts passionnés par l'innovation
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Une équipe pluridisciplinaire combinant excellence technique et compréhension profonde des enjeux locaux.
              </p>
            </div>
          
          
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-black dark:via-slate-950 dark:to-black rounded-[2rem] p-8 hover:scale-[1.02] transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-800"
              >
                {/* Background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="w-full aspect-[4/3] mb-6 rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name with verified badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <HiMiniCheckBadge className="w-7 h-7 text-blue-500 flex-shrink-0" />
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {member.role}
                  </p>

                  {/* Stats and Follow button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      
                    </div>
                    <a 
                      href={`https://www.linkedin.com/in/${index === 0 ? 'kolo-israel-ziao-1711a9329' : 'ouessogo-mohamed-tidjane-traor%C3%A9-aa68a9352'}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2"
                    >
                      Follow
                      <Plus className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
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

export default About;
