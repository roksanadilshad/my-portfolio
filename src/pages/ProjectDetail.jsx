import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projectsData } from '../data/projects'
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCheckCircle, FaLightbulb, FaExclamationTriangle } from 'react-icons/fa'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectsData.find((p) => p.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Project Not Found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-purple-700 transition-all"
          >
            Go Back Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="group flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-primary mb-8 transition-colors"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            {project.shortDescription}
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
          >
            <FaExternalLinkAlt />
            <span>View Live Project</span>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 px-6 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-900 dark:hover:bg-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
          >
            <FaGithub />
            <span>View on GitHub</span>
          </a>
        </div>

        {/* Main Technology Stack */}
        <div className="mb-12 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
            <FaCheckCircle className="text-primary" />
            <span>Main Technology Stack</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.mainTech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            About the Project
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* All Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-12 p-6 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-200 dark:border-orange-800">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
            <FaExclamationTriangle className="text-orange-500" />
            <span>Challenges Faced</span>
          </h2>
          <ul className="space-y-3">
            {project.challenges.map((challenge, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 text-slate-700 dark:text-slate-300"
              >
                <span className="text-orange-500 mt-1">•</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Future Improvements */}
        <div className="mb-12 p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-200 dark:border-green-800">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
            <FaLightbulb className="text-green-500" />
            <span>Future Improvements</span>
          </h2>
          <ul className="space-y-3">
            {project.improvements.map((improvement, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 text-slate-700 dark:text-slate-300"
              >
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span>{improvement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl border border-primary/20">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Interested in this project?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Check out the live demo or explore the source code on GitHub
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
            >
              View Live Demo
            </a>
            <button
              onClick={() => navigate('/#contact')}
              className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-2 border-slate-300 dark:border-slate-700 rounded-lg hover:border-primary hover:text-primary transition-all duration-300 font-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
