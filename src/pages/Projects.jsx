import { useEffect, useRef, useState } from 'react'
import { projectsData } from '../data/projects'
import { useNavigate } from 'react-router-dom'
import { FaRocket, FaEye, FaCode, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  const navigate = useNavigate()
  const projectsRef = useRef(null)
  const [visibleProjects, setVisibleProjects] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id
            if (id) {
              setVisibleProjects(prev => new Set([...prev, id]))
            }
          }
        })
      },
      { 
        threshold: 0.15, // Trigger when 15% of the card is visible
        rootMargin: '0px 0px -50px 0px' // Slightly offset the trigger point
      }
    )

    const cards = projectsRef.current?.querySelectorAll('.project-card')
    cards?.forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div id="projects" className="pb-20 bg-gradient-to-br from-white to-slate-50 dark:from-[#0A0A0A] dark:to-slate-900 overflow-hidden" ref={projectsRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4 animate-fade-in">
            <FaRocket className="text-primary text-sm" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my full-stack development projects, from concept to deployment
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const isVisible = visibleProjects.has(String(project.id))
            
            return (
              <div
                key={project.id}
                data-id={project.id}
                className={`project-card group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transform ${
                  isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
                }`}
                style={{ 
                  // Stagger effect based on grid position for desktop
                  transitionDelay: `${(index % 3) * 100}ms`,
                }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    src={project.image || 'https://via.placeholder.com/1200x800?text=Project+Image'}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = `https://placehold.co/1200x800/6366f1/FFFFFF?text=${encodeURIComponent(project.title)}`
                    }}
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Quick action buttons on image */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-primary hover:text-white transition-all duration-300 shadow-xl"
                        title="View Live"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-primary hover:text-white transition-all duration-300 shadow-xl"
                        title="View Code"
                      >
                        <FaCode className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.mainTech?.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies?.length > 3 && (
                      <span className="text-[11px] font-medium text-slate-400 self-center">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="flex-1 px-4 py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Details</span>
                      <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => project.liveLink && window.open(project.liveLink, '_blank')}
                      className="px-4 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                    >
                      <FaEye className="text-base" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {projectsData.length === 0 && (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-lg italic">
              Terminal offline: No active projects found in directory.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects