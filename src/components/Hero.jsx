import { Link } from 'react-scroll';
import ScrollAnimation from './ScrollAnimation';
import AnimatedCursor from './AnimatedCursor';
import { HeroGeometric } from './ui/HeroGeometric';

const Hero = () => {
  return (
    <HeroGeometric>
      <section className="relative pt-20 pb-24 md:pt-40 md:pb-32 px-6 flex items-center justify-center min-h-screen">
        <div className="max-w-3xl mx-auto text-center relative z-10 animate-slide-up">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/10 backdrop-blur-sm mb-8 transition-colors duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-semibold text-blue-700 dark:text-blue-400 tracking-wide uppercase transition-colors duration-500">Partenaire Stratégique des Startups Africaines</span>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animateIn="fadeInUp">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-slate-900 dark:text-white transition-colors duration-500">
              De votre idée brute à la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400 transition-all duration-500">réussite technologique</span> rentable.
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animateIn="fadeInUp">
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium transition-colors duration-500">
              TRANSEIA conçoit des produits SaaS premium et des MVP scalables pour les entreprises innovantes. Nous accompagnons également la montée en compétences des talents de demain par un mentorat technique d'élite.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animateIn="fadeInUp">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative">
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              className="w-full md:w-auto px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer"
            >
              Démarrer mon MVP (30 jours)
              <iconify-icon icon="solar:rocket-2-linear" width="18"></iconify-icon>
            </Link>
            <Link 
              to="mentorship" 
              smooth={true} 
              duration={500}
              className="w-full md:w-auto px-8 py-3.5 bg-slate-200 dark:bg-white/10 backdrop-blur-sm border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white rounded-full text-sm font-medium hover:bg-slate-300 dark:hover:bg-white/20 transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer"
            >
              Réserver un Mentorat 1:1
              <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
            </Link>
          </div>
          </ScrollAnimation>

          {/* AnimatedCursor - positioned below buttons */}
          <div className="mt-3 flex justify-center md:justify-start md:ml-[10%] pointer-events-none">
            <AnimatedCursor text="Clique ici" />
          </div>
        </div>
      </section>
    </HeroGeometric>
  );
};

export default Hero;
