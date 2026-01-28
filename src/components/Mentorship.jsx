import { Link } from 'react-scroll';

const Mentorship = () => {
  return (
    <section id="mentorship" className="py-24 px-6 bg-slate-50 dark:bg-[#080808]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg">
            <div className="absolute inset-0 bg-slate-100 dark:bg-white/5 z-0"></div>
            <div className="relative z-10 p-8 flex flex-col items-center justify-center min-h-[400px]">
              {/* Mock Meeting UI */}
              <div className="w-full max-w-sm bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-xl p-4 shadow-xl">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Live Session</span>
                  </div>
                  <iconify-icon icon="solar:videocamera-record-linear" width="16" className="text-slate-400"></iconify-icon>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-slate-100 dark:bg-white/10 rounded-lg aspect-video flex items-center justify-center">
                    <iconify-icon icon="solar:user-circle-linear" width="32" className="text-slate-300"></iconify-icon>
                  </div>
                  <div className="bg-slate-100 dark:bg-white/10 rounded-lg aspect-video flex items-center justify-center">
                    <iconify-icon icon="solar:user-circle-linear" width="32" className="text-slate-300"></iconify-icon>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="p-2 rounded-full bg-red-50 text-red-500 border border-red-100 dark:bg-red-900/20 dark:border-red-900/30">
                    <iconify-icon icon="solar:microphone-linear" width="16"></iconify-icon>
                  </div>
                  <div className="p-2 rounded-full bg-slate-50 text-slate-900 dark:bg-white/10 dark:text-white border border-slate-200 dark:border-white/5">
                    <iconify-icon icon="solar:screen-share-linear" width="16"></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 mb-6">
            <iconify-icon icon="solar:stars-linear" className="text-indigo-600 dark:text-indigo-400"></iconify-icon>
            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">Mentorat d'élite</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 dark:text-white mb-6">
            Ne développez plus seul, <br /> accélérez votre carrière.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Sessions d'accompagnement technique personnalisées via Google Meet. Nous vous aidons à résoudre des bugs complexes, à structurer vos projets de fin d'études et à maîtriser les stacks les plus demandées du marché.
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
              <iconify-icon icon="solar:check-circle-bold" className="text-emerald-500 mt-1" width="22"></iconify-icon>
              <span>Révisions de code approfondies et refactorisation stratégique</span>
            </li>
            <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
              <iconify-icon icon="solar:check-circle-bold" className="text-emerald-500 mt-1" width="22"></iconify-icon>
              <span>Planification d'architecture système pour la scalabilité</span>
            </li>
            <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
              <iconify-icon icon="solar:check-circle-bold" className="text-emerald-500 mt-1" width="22"></iconify-icon>
              <span>Coaching carrière pour intégrer les meilleures firmes tech mondiales</span>
            </li>
          </ul>

          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white border-b border-slate-300 dark:border-white/30 pb-0.5 hover:border-slate-900 dark:hover:border-white transition-colors cursor-pointer"
          >
            Réserver ma session 1:1
            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
