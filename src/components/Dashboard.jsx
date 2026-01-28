const Dashboard = () => {
  // KPI Cards Data
  const kpiCards = [
    {
      title: "Projets Complétés",
      description: "Nombre total de projets livrés avec succès.",
      value: "47",
      icon: "solar:check-circle-linear"
    },
    {
      title: "Clients Actifs",
      description: "Nombre de clients en engagement actif.",
      value: "23",
      icon: "solar:users-group-linear"
    },
    {
      title: "Taux de Satisfaction",
      description: "Pourcentage de clients satisfaits (moyenne).",
      value: "98%",
      icon: "solar:star-linear"
    },
    {
      title: "Chiffre d'Affaires",
      description: "Revenu total généré ce mois.",
      value: "8,750,000 FCFA",
      icon: "solar:dollar-linear"
    }
  ];

  const menuItems = [
    { icon: "solar:home-2-linear", label: "Tableau de Bord" },
    { icon: "solar:user-linear", label: "Profil" },
    { icon: "solar:settings-linear", label: "Paramètres" }
  ];

  return (
    <section className="py-10 md:py-20 px-4 md:px-6 bg-slate-50 dark:bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 rounded-2xl md:rounded-[32px] overflow-hidden bg-white dark:bg-dark/80 border border-slate-200 dark:border-slate-800 shadow-xl" style={{ borderBottom: 'none' }}>
          
          {/* Sidebar */}
          <div className="w-full lg:w-64 bg-slate-100 dark:bg-dark/50 p-4 md:p-6 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-8">
              <iconify-icon icon="solar:infinity-linear" width="28" className="text-slate-900 dark:text-white"></iconify-icon>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">INOVEXIA</h2>
            </div>
            
            <nav className="space-y-2 md:space-y-4 grid grid-cols-3 lg:grid-cols-1 gap-2">
              {menuItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg cursor-pointer transition-colors ${
                    idx === 0
                      ? "bg-white dark:bg-dark text-slate-900 dark:text-white"
                      : "text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-dark/30"
                  }`}
                >
                  <iconify-icon icon={item.icon} width="20"></iconify-icon>
                  <span className="text-xs md:text-sm font-medium hidden md:inline">{item.label}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 md:p-6 lg:p-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Tableau de Bord</h1>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
                <div className="relative w-full sm:w-auto">
                  <iconify-icon icon="solar:magnifer-linear" width="20" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></iconify-icon>
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="w-full sm:w-auto pl-10 pr-4 py-2 rounded-lg bg-slate-100 dark:bg-dark/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  />
                </div>
                <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                  Plein écran
                </button>
              </div>
            </div>

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
            {kpiCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-dark/50 rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200 dark:border-slate-700"
              >
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <div>
                      <h3 className="text-xs md:text-sm font-semibold text-slate-900 dark:text-white mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 hidden sm:block">
                        {card.description}
                      </p>
                </div>
                    <iconify-icon icon={card.icon} width="20" className="md:w-6 text-slate-400 dark:text-slate-600"></iconify-icon>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    {card.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {/* Sales Trends */}
              <div className="bg-slate-50 dark:bg-dark/50 rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Évolution des Projets
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4 md:mb-6">
                  Courbe des projets en cours et complétés.
                </p>
                
                {/* Line Chart SVG */}
                <svg viewBox="0 0 300 150" className="w-full h-24 md:h-32">
                  {/* Grid lines */}
                  <line x1="40" y1="20" x2="40" y2="130" stroke="#e2e8f0" strokeWidth="1" className="dark:stroke-white/10" />
              <line x1="40" y1="130" x2="300" y2="130" stroke="#e2e8f0" strokeWidth="1" className="dark:stroke-white/10" />
              
              {/* Y axis labels */}
              <text x="30" y="135" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">0</text>
              <text x="20" y="85" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">5</text>
              <text x="20" y="35" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">15</text>
              
              {/* X axis labels */}
              <text x="35" y="145" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">Q1</text>
              <text x="85" y="145" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">Q2</text>
              <text x="135" y="145" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">Q3</text>
              <text x="185" y="145" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">Q4</text>
              <text x="235" y="145" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">Q5</text>
              <text x="285" y="145" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">Q6</text>
              
              {/* Red line */}
              <polyline points="40,100 90,95 140,75 190,85 240,80 290,95" fill="none" stroke="#ef4444" strokeWidth="2" />
              
              {/* Blue line */}
              <polyline points="40,110 90,80 140,70 190,100 240,90 290,105" fill="none" stroke="#3b82f6" strokeWidth="2" />
            </svg>
              </div>

              {/* User Acquisition */}
              <div className="bg-slate-50 dark:bg-dark/50 rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Répartition par Type de Service
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4 md:mb-6">
                  Distribution des projets par domaine de service.
                </p>
                
                {/* Bar Chart SVG */}
                <svg viewBox="0 0 300 150" className="w-full h-24 md:h-32">
              {/* Grid lines */}
              <line x1="40" y1="20" x2="40" y2="120" stroke="#e2e8f0" strokeWidth="1" className="dark:stroke-white/10" />
              <line x1="40" y1="120" x2="300" y2="120" stroke="#e2e8f0" strokeWidth="1" className="dark:stroke-white/10" />
              
              {/* Y axis labels */}
              <text x="25" y="125" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">0</text>
              <text x="10" y="75" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">150</text>
              
              {/* Bars */}
              <rect x="50" y="80" width="25" height="40" fill="#3b82f6" />
              <rect x="85" y="60" width="25" height="60" fill="#3b82f6" />
              <rect x="120" y="40" width="25" height="80" fill="#3b82f6" />
              <rect x="155" y="65" width="25" height="55" fill="#3b82f6" />
              <rect x="190" y="75" width="25" height="45" fill="#3b82f6" />
              <rect x="225" y="95" width="25" height="25" fill="#3b82f6" />
              
              {/* X axis labels */}
              <text x="55" y="135" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">Jan</text>
              <text x="85" y="135" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">Fev</text>
              <text x="115" y="135" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">Mar</text>
              <text x="150" y="135" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">Avr</text>
              <text x="185" y="135" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">Mai</text>
              <text x="220" y="135" fontSize="10" fill="#94a3b8" className="dark:fill-slate-500">Juin</text>
            </svg>
              </div>

              {/* Top Products */}
              <div className="bg-slate-50 dark:bg-dark/50 rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Services les Plus Demandés
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4 md:mb-6">
                  Top 5 des services les plus populaires ce trimestre.
                </p>
                
                {/* Pie Chart SVG */}
                <svg viewBox="0 0 200 150" className="w-full h-24 md:h-32">
                {/* Pie Chart Slices */}
                <circle cx="100" cy="75" r="50" fill="none" stroke="#3b82f6" strokeWidth="50" strokeDasharray="78.5 251.3" strokeLinecap="round" />
                <circle cx="100" cy="75" r="50" fill="none" stroke="#2563eb" strokeWidth="50" strokeDasharray="62.8 251.3" strokeLinecap="round" style={{strokeDashoffset: '-78.5'}} />
                <circle cx="100" cy="75" r="50" fill="none" stroke="#1d4ed8" strokeWidth="50" strokeDasharray="58.9 251.3" strokeLinecap="round" style={{strokeDashoffset: '-141.3'}} />
                <circle cx="100" cy="75" r="50" fill="none" stroke="#1e40af" strokeWidth="50" strokeDasharray="55.0 251.3" strokeLinecap="round" style={{strokeDashoffset: '-200.2'}} />
                
                {/* Labels */}
                <text x="155" y="55" fontSize="12" fontWeight="bold" fill="#3b82f6">72</text>
                <text x="155" y="90" fontSize="12" fontWeight="bold" fill="#3b82f6">157</text>
                <text x="65" y="105" fontSize="12" fontWeight="bold" fill="#3b82f6">129</text>
                <text x="45" y="70" fontSize="12" fontWeight="bold" fill="#3b82f6">111</text>
              </svg>
              </div>
            </div>

            {/* Bottom Section - Trusted By with Blur Fade */}
            <div className="relative mt-8 md:mt-12 pt-6 md:pt-8 pb-8 md:pb-12">
              {/* Blur Overlay Gradient - More pronounced */}
              <div className="absolute inset-x-0 -bottom-8 h-48 bg-linear-to-b from-transparent via-white/40 via-white/70 to-white dark:via-dark/40 dark:via-dark/70 dark:to-dark pointer-events-none backdrop-blur-sm"></div>
              
              <div className="relative z-0">
                <p className="text-center text-slate-600 dark:text-slate-400 mb-4 md:mb-6 text-xs md:text-sm font-medium">
                  Partenaires de confiance
                </p>
                <div className="flex justify-center items-center gap-4 md:gap-12 flex-wrap">
                  <div className="text-slate-500 dark:text-slate-500 font-medium text-xs md:text-sm">TechStartup Dakar</div>
                  <div className="text-slate-500 dark:text-slate-500 font-medium text-xs md:text-sm">Groupe Senegal Digital</div>
                  <div className="text-slate-500 dark:text-slate-500 font-medium text-xs md:text-sm">WebFlow Solutions</div>
                  <div className="text-slate-500 dark:text-slate-500 font-medium text-xs md:text-sm hidden sm:block">Design Afrique</div>
                  <div className="text-slate-500 dark:text-slate-500 font-medium text-xs md:text-sm hidden sm:block">Innovation Lab</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
