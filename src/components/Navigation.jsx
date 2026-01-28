import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 dark:border-white/5 bg-white/80 dark:bg-dark/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <RouterLink to="/" className="flex items-center gap-2 group">
          <iconify-icon icon="solar:infinity-linear" width="22" className="text-blue-600 dark:text-blue-400"></iconify-icon>
          <span className="font-bold tracking-tight text-lg">INOVEXIA</span>
        </RouterLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
          {isHomePage ? (
            <>
              <Link 
                to="services" 
                smooth={true} 
                duration={500} 
                className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Ingénierie SaaS
              </Link>
              <Link 
                to="mentorship" 
                smooth={true} 
                duration={500} 
                className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Mentorat Tech
              </Link>
              <Link 
                to="portfolio" 
                smooth={true} 
                duration={500} 
                className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Portfolio
              </Link>
            </>
          ) : (
            <>
              <RouterLink 
                to="/#services"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Ingénierie SaaS
              </RouterLink>
              <RouterLink 
                to="/#mentorship"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Mentorat Tech
              </RouterLink>
              <RouterLink 
                to="/#portfolio"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Portfolio
              </RouterLink>
            </>
          )}
          <RouterLink 
            to="/blog"
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Academy
          </RouterLink>
          <RouterLink 
            to="/about"
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            À propos
          </RouterLink>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-8 h-8 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
          >
            {darkMode ? (
              <iconify-icon icon="solar:sun-2-linear" width="20"></iconify-icon>
            ) : (
              <iconify-icon icon="solar:moon-linear" width="20"></iconify-icon>
            )}
          </button>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer shadow-lg shadow-blue-500/25"
          >
            <span>Lancer mon Projet Tech</span>
            <iconify-icon icon="solar:rocket-2-linear" width="16"></iconify-icon>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
