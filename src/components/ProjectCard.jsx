import { Eye, Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <CardContainer className="inter-var w-full">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
          
          {/* Title */}
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
          >
            {project.title}
          </CardItem>

          {/* Timeline */}
          {project.timeline && (
            <CardItem
              as="time"
              translateZ="40"
              className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 block"
            >
              {project.timeline}
            </CardItem>
          )}
          
          {/* Description */}
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300 mb-4"
          >
            {project.description}
          </CardItem>

          {/* Image */}
          <CardItem translateZ="100" className="w-full mt-4">
            {project.coverImage && (
              <img
                src={project.coverImage}
                alt={project.title}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              />
            )}
          </CardItem>

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <CardItem translateZ="50" className="w-full mt-4">
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-medium bg-white/50 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-white/20"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </CardItem>
          )}

          {/* Actions */}
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              as="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              Voir détails →
            </CardItem>
            
            <div className="flex gap-2">
              {project.githubUrl && (
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  Code
                </CardItem>
              )}
              
              {project.url && (
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Voir
                </CardItem>
              )}
            </div>
          </div>
        </CardBody>
      </CardContainer>

      <ProjectModal 
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
