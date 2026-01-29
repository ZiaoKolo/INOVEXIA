import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleScrollLink = (target) => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <iconify-icon icon="solar:infinity-linear" width="20" className="text-blue-600 dark:text-blue-400"></iconify-icon>
              <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight">ZOMTIK</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Partenaire de l'innovation numérique en Afrique de l'Ouest.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <iconify-icon icon="solar:github-linear" width="20"></iconify-icon>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <iconify-icon icon="solar:youtube-linear" width="20"></iconify-icon>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              <li>
                {isHomePage ? (
                  <Link to="services" smooth={true} duration={500} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    Ingénierie SaaS & MVP
                  </Link>
                ) : (
                  <button onClick={() => handleScrollLink('services')} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    Ingénierie SaaS & MVP
                  </button>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <Link to="services" smooth={true} duration={500} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    Développement Web & Mobile
                  </Link>
                ) : (
                  <button onClick={() => handleScrollLink('services')} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    Développement Web & Mobile
                  </button>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <Link to="mentorship" smooth={true} duration={500} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    Mentorat Tech 1:1
                  </Link>
                ) : (
                  <button onClick={() => handleScrollLink('mentorship')} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    Mentorat Tech 1:1
                  </button>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <Link to="services" smooth={true} duration={500} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    Solutions IA Personnalisées
                  </Link>
                ) : (
                  <button onClick={() => handleScrollLink('services')} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    Solutions IA Personnalisées
                  </button>
                )}
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <RouterLink to="/about" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  À propos
                </RouterLink>
              </li>
              <li>
                {isHomePage ? (
                  <Link to="portfolio" smooth={true} duration={500} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    Portfolio
                  </Link>
                ) : (
                  <button onClick={() => handleScrollLink('portfolio')} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    Portfolio
                  </button>
                )}
              </li>
              <li>
                <RouterLink to="/blog" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Academy
                </RouterLink>
              </li>
              <li>
                {isHomePage ? (
                  <Link to="contact" smooth={true} duration={500} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    Contact
                  </Link>
                ) : (
                  <button onClick={() => handleScrollLink('contact')} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    Contact
                  </button>
                )}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-slate-500 dark:text-slate-400">
                Abidjan, Côte d'Ivoire
              </li>
              <li>
                <a href="mailto:koloziao2005@gmail.com" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  koloziao2005@gmail.com
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com/dl/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400 text-center md:text-left">
              © 2026 ZOMTIK. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-xs text-slate-400">
              <RouterLink to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Confidentialité</RouterLink>
              <RouterLink to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Conditions</RouterLink>
              <RouterLink to="/cookies" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cookies</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
