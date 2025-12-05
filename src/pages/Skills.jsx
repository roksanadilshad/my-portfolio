import { useEffect, useRef } from 'react'
import {
  FaPalette,
  FaCode,
  FaCss3Alt,
  FaBolt,
  FaReact,
  FaWind,
  FaCog,
  FaNodeJs,
  FaTrain,
  FaLeaf,
  FaPlug,
  FaTools,
  FaGithub,
  FaFire,
  FaBullseye,
  FaLaptopCode,
  FaCalendarAlt,
  FaRocket,
  FaStar,
} from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

const Skills = () => {
  const skillsRef = useRef(null)
  const techBadgesRef = useRef(null)
  const skillCardsRef = useRef(null)
  const statsRef = useRef(null)

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FaPalette,
      skills: [
        { name: 'HTML5', level: 95, icon: FaCode },
        { name: 'CSS3', level: 90, icon: FaCss3Alt },
        { name: 'JavaScript', level: 90, icon: FaBolt },
        { name: 'React', level: 85, icon: FaReact },
        { name: 'Next.js', level: 80, icon: SiNextdotjs },
        { name: 'Tailwind CSS', level: 88, icon: FaWind },
      ],
    },
    {
      title: 'Backend Development',
      icon: FaCog,
      skills: [
        { name: 'Node.js', level: 85, icon: FaNodeJs },
        { name: 'Express.js', level: 82, icon: FaTrain },
        { name: 'MongoDB', level: 80, icon: FaLeaf },
        { name: 'REST APIs', level: 85, icon: FaPlug },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: FaTools,
      skills: [
        { name: 'Git & GitHub', level: 88, icon: FaGithub },
        { name: 'Firebase', level: 75, icon: FaFire },
        { name: 'Figma', level: 70, icon: FaBullseye },
        { name: 'VS Code', level: 90, icon: FaLaptopCode },
      ],
    },
  ]

  const technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'Tailwind CSS',
    'Firebase',
    'Git',
    'Figma',
  ]

  const stats = [
    { number: '10+', label: 'Personal Projects', icon: FaCalendarAlt },
    { number: '12+', label: 'Technologies Learned', icon: FaBolt },
    { number: '100%', label: 'Commitment to Learning', icon: FaRocket },
    { number: '∞', label: 'Passion for Coding', icon: FaStar },
  ]

  // CSS animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    // Animate tech badges
    const badges = techBadgesRef.current?.querySelectorAll('.tech-badge')
    badges?.forEach((badge) => observer.observe(badge))

    // Animate skill cards
    const cards = skillCardsRef.current?.querySelectorAll('.skill-category-card')
    cards?.forEach((card) => observer.observe(card))

    // Animate stats
    const statsElements = statsRef.current?.querySelectorAll('.stat-card')
    statsElements?.forEach((stat) => observer.observe(stat))

    return () => observer.disconnect()
  }, [])

  return (
    <div id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50" ref={skillsRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title skills-title">Skills & Expertise</h2>
          <p className="skills-subtitle mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various technologies and tools
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="skills-grid grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" ref={skillCardsRef}>
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <div
                key={categoryIndex}
                className="skill-category-card opacity-0 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary transition-all duration-300 border border-slate-200 dark:border-slate-700 group"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <CategoryIcon className="text-3xl text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    return (
                      <div key={skillIndex} className="space-y-2 group/skill cursor-default">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <SkillIcon className="text-lg text-primary group-hover/skill:scale-125 group-hover/skill:rotate-12 transition-all duration-300" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/skill:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs font-semibold text-primary group-hover/skill:scale-110 transition-transform">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden group-hover/skill:h-3 transition-all duration-300">
                          <div
                            className="skill-progress-bar h-full bg-gradient-to-r from-primary to-purple-600 rounded-full group-hover/skill:shadow-lg group-hover/skill:shadow-primary/50 transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Technology Stack Section */}
        <div className="tech-stack-section" ref={techBadgesRef}>
          <h3 className="text-2xl font-semibold text-center text-slate-800 dark:text-white mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="tech-badge group relative px-6 py-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-full hover:border-primary hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-default opacity-0"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary group-hover:font-semibold transition-all">
                  {tech}
                </span>
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-grid mt-16 grid grid-cols-2 md:grid-cols-4 gap-6" ref={statsRef}>
          {stats.map((stat, index) => {
            const StatIcon = stat.icon
            return (
              <div
                key={index}
                className="stat-card opacity-0 text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105 transition-all duration-300 group cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <StatIcon className="text-4xl text-primary mx-auto mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">{stat.number}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
