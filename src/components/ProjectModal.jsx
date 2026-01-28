import { X, Zap, Github, PlayCircle } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-900/95 dark:bg-black/95 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col bg-white dark:bg-card border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header (Sticky Top) */}
        <div className="flex items-center justify-between px-6 py-5 sm:px-8 border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-card/95 backdrop-blur z-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/10">
            <span className="text-xs font-medium tracking-wide text-blue-600 dark:text-blue-300 uppercase">
              {project.category || 'Projet'}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="group p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors duration-200"
          >
            <X className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Cover Image Section */}
          <div className="w-full px-6 pt-6 sm:px-8 sm:pt-8">
            <div className="group relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg">
              <img 
                src={project.coverImage || project.bgImage} 
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
            {/* Left Column: Description (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Description Block */}
              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>{project.fullDescription || project.description}</p>
                {project.challenge && (
                  <p><strong className="text-slate-900 dark:text-white">Défi :</strong> {project.challenge}</p>
                )}
                {project.solution && (
                  <p><strong className="text-slate-900 dark:text-white">Solution :</strong> {project.solution}</p>
                )}
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="pt-4">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                    Fonctionnalités clés
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 p-1 rounded bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                          <Zap className="w-4 h-4" />
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Meta Info (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Tech Stack */}
              <div className="bg-slate-50 dark:bg-white/5 rounded-xl p-5 border border-slate-200 dark:border-white/10">
                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2.5 py-1.5 rounded-md text-xs font-medium bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                    >
                      <img src={tech.icon} alt={tech.name} className={`w-3.5 h-3.5 ${tech.invert ? 'dark:invert' : ''}`} />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Role & Timeline */}
              <div className="space-y-6">
                {project.role && (
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      Rôle
                    </h3>
                    <p className="text-base font-medium text-slate-900 dark:text-white">{project.role}</p>
                    {project.responsibilities && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{project.responsibilities}</p>
                    )}
                  </div>
                )}
                {project.timeline && (
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      Période
                    </h3>
                    <p className="text-base font-medium text-slate-900 dark:text-white">{project.timeline}</p>
                    {project.duration && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{project.duration}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer / Actions */}
        <div className="border-t border-slate-200 dark:border-white/10 p-6 sm:px-8 bg-white dark:bg-card">
          <div className="flex flex-col sm:flex-row gap-3 justify-end items-center w-full">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm font-medium transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Github className="w-4 h-4" />
                <span>Code Source</span>
              </a>
            )}
            {project.url && (
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Voir le Projet</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
