import ScrollAnimation from './ScrollAnimation';

const Services = () => {
  const services = [
    {
      icon: "solar:layers-minimalistic-linear",
      title: "Ingénierie SaaS & MVP",
      description: "Prototypage rapide et architecture full-stack. Nous transformons vos concepts en logiciels monétisables avec intégration des paiements locaux (Orange, Wave, MTN)."
    },
    {
      icon: "solar:code-square-linear",
      title: "Développement Web & Mobile",
      description: "Applications React et Next.js haute performance, optimisées pour le SEO technique et les connexions mobiles à faible bande passante."
    },
    {
      icon: "solar:diploma-linear",
      title: "Mentorat Technique Individuel",
      description: "Accompagnement expert pour développeurs juniors et porteurs de projets. Révisions de code, architecture système et préparation aux entretiens d'élite."
    },
    {
      icon: "solar:widget-5-linear",
      title: "Solutions IA Personnalisées",
      description: "Intégration d'intelligence artificielle générative pour automatiser vos processus métier et booster votre productivité opérationnelle."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-dark">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-medium tracking-tight text-slate-900 dark:text-white mb-4">Nos Piliers de Transformation Digitale</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-md">Une expertise technique de pointe conçue pour scaler dès le premier jour.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-slate-200 dark:bg-slate-800 ml-12 mb-2"></div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {services.map((service, index) => (
            <ScrollAnimation key={index} animateIn="fadeInUp">
              <div 
              className={`flex flex-col py-10 relative group ${
                index % 2 === 0 ? 'lg:border-r' : ''
              } ${
                index < 2 ? 'lg:border-b' : ''
              } dark:border-slate-800 border-slate-200`}
            >
              {/* Hover gradient background */}
              <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-slate-50 dark:from-slate-900/50 to-transparent pointer-events-none"></div>
              
              {/* Icon */}
              <div className="mb-4 relative z-10 px-10">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:text-blue-500 transition duration-200">
                  <iconify-icon icon={service.icon} width="24"></iconify-icon>
                </div>
              </div>
              
              {/* Title with animated left border */}
              <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-500 transition duration-200"></div>
                <span className="group-hover:translate-x-2 transition duration-200 inline-block text-slate-900 dark:text-white">
                  {service.title}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs mx-auto relative z-10 px-10 leading-relaxed">
                {service.description}
              </p>
            </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
