import { useEffect, useRef } from 'react'
import {
  FaPalette,
  FaCode,
  FaCss3Alt,
  FaBolt,
  FaReact,
  FaCog,
  FaNodeJs,
  FaDatabase,
  FaPlug,
  FaTools,
  FaGithub,
  FaFire,
  FaFigma,
  FaLaptopCode,
  FaCalendarAlt,
  FaRocket,
  FaStar,
  FaCheckCircle,
} from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si'

const Skills = () => {
  const skillsRef = useRef(null)
  const techBadgesRef = useRef(null)
  const skillCardsRef = useRef(null)
  const statsRef = useRef(null)

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FaPalette,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 88 },
      ],
    },
    {
      title: 'Backend Development',
      icon: FaCog,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: FaTools,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'Firebase', level: 75 },
        { name: 'Figma', level: 70 },
        { name: 'VS Code', level: 90 },
      ],
    },
  ]

  const technologies = [
    { name: 'HTML5', icon: FaCode },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaBolt },
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Firebase', icon: FaFire },
    { name: 'Git', icon: FaGithub },
    { name: 'Figma', icon: FaFigma },
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
    <div id="skills" className="py-20 bg-white dark:bg-[#0A0A0A]" ref={skillsRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="skills-grid grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20" ref={skillCardsRef}>
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <div
                key={categoryIndex}
                className="skill-category-card opacity-0 bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-800 group"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <CategoryIcon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <FaCheckCircle className="text-primary text-sm" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Technology Stack Section */}
        <div className="tech-stack-section mb-20" ref={techBadgesRef}>
          <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => {
              const TechIcon = tech.icon
              return (
                <div
                  key={index}
                  className="tech-badge group relative px-6 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 cursor-default opacity-0"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center space-x-3">
                    <TechIcon className="text-xl text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6" ref={statsRef}>
          {stats.map((stat, index) => {
            const StatIcon = stat.icon
            return (
              <div
                key={index}
                className="stat-card opacity-0 text-center p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-105 transition-all duration-300 group cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <StatIcon className="text-3xl text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
