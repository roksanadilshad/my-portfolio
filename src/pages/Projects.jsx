import { projectsData } from '../data/projects'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate = useNavigate()
  return (
    <div id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12 animate-fade-in">
          <h2 className="section-title">projects</h2>
          <a
            className="flex items-center hover:text-primary transition-colors text-slate-600 dark:text-slate-400"
            href="#"
          >
            View all{' '}
            <span className="material-symbols-outlined ml-1">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${project.id * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={project.image || 'https://via.placeholder.com/1200x800?text=Project+Image'}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = `https://placehold.co/1200x800/A855F7/FFFFFF?text=${encodeURIComponent(project.title)}&font=raleway`
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quick action buttons on image */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg"
                      title="View Live"
                    >
                      <span className="material-symbols-outlined text-lg">open_in_new</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg"
                      title="View Code"
                    >
                      <span className="material-symbols-outlined text-lg">code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies?.length > 4 && (
                    <span className="px-3 py-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="flex-1 px-4 py-2 bg-primary text-white text-center text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Details</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-center text-sm font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                      title="Live Demo"
                    >
                      <span className="material-symbols-outlined text-base">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {projectsData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No projects yet. Add your projects in src/data/projects.js
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
