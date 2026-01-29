import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import FuzzyText from './FuzzyText';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Fuzzy 404 */}
        <div className="mb-8 flex justify-center">
          <FuzzyText 
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover
            fontSize="clamp(6rem, 20vw, 15rem)"
            fontWeight={900}
            color="#3b82f6"
            gradient={['#3b82f6', '#8b5cf6', '#ec4899']}
            fuzzRange={40}
          >
            404
          </FuzzyText>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Page introuvable
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
          Retournez à l'accueil pour continuer votre navigation.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Page précédente
          </button>
        </div>

        {/* Liens utiles */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Vous cherchez peut-être :
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/services"
              className="px-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Nos Services
            </Link>
            <Link
              to="/portfolio"
              className="px-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className="px-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
