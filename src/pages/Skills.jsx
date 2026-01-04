import { useEffect, useRef, useState } from 'react'
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
  FaChartLine,
} from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'

const Skills = () => {
  const skillsRef = useRef(null)
  const [visibleCards, setVisibleCards] = useState(new Set())

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FaPalette,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/10',
      borderColor: 'border-blue-200 dark:border-blue-800',
      skills: [
        { name: 'HTML5', level: 95, icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', level: 90, icon: SiCss3, color: '#1572B6' },
        { name: 'JavaScript', level: 90, icon: SiJavascript, color: '#F7DF1E' },
        { name: 'React', level: 85, icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', level: 80, icon: SiNextdotjs, color: '#000000' },
        { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend Development',
      icon: FaCog,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/10',
      borderColor: 'border-green-200 dark:border-green-800',
      skills: [
        { name: 'Node.js', level: 85, icon: FaNodeJs, color: '#339933' },
        { name: 'Express.js', level: 82, icon: SiExpress, color: '#000000' },
        { name: 'MongoDB', level: 80, icon: SiMongodb, color: '#47A248' },
        { name: 'REST APIs', level: 85, icon: FaPlug, color: '#FF6B6B' },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: FaTools,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/10',
      borderColor: 'border-purple-200 dark:border-purple-800',
      skills: [
        { name: 'Git & GitHub', level: 88, icon: FaGithub, color: '#181717' },
        { name: 'Firebase', level: 75, icon: FaFire, color: '#FFCA28' },
        { name: 'Figma', level: 70, icon: FaFigma, color: '#F24E1E' },
        { name: 'VS Code', level: 90, icon: FaLaptopCode, color: '#007ACC' },
      ],
    },
  ]

  const stats = [
    { number: '10+', label: 'Personal Projects', icon: FaCalendarAlt, color: 'text-blue-500' },
    { number: '12+', label: 'Technologies Learned', icon: FaBolt, color: 'text-yellow-500' },
    { number: '100%', label: 'Commitment to Learning', icon: FaRocket, color: 'text-green-500' },
    { number: '∞', label: 'Passion for Coding', icon: FaStar, color: 'text-purple-500' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index
            if (index) {
              setVisibleCards(prev => new Set([...prev, parseInt(index)]))
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    const cards = skillsRef.current?.querySelectorAll('.skill-card')
    cards?.forEach((card, index) => {
      card.dataset.index = index
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, color = '#A855F7' }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const strokeDasharray = `${circumference} ${circumference}`
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-slate-200 dark:text-slate-700"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{
              filter: `drop-shadow(0 0 6px ${color}40)`
            }}
          />
        </svg>
        <span className="absolute text-xl font-bold text-slate-800 dark:text-white">
          {percentage}%
        </span>
      </div>
    )
  }

  return (
    <div id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" ref={skillsRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <FaChartLine className="text-primary" />
            <span className="text-sm font-medium text-primary">Professional Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive showcase of my technical abilities across the full development stack
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            const isVisible = visibleCards.has(categoryIndex)
            
            return (
              <div
                key={categoryIndex}
                className={`skill-card ${category.bgColor} ${category.borderColor} rounded-3xl p-8 border-2 shadow-xl hover:shadow-2xl transition-all duration-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg mb-4`}>
                    <CategoryIcon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    return (
                      <div
                        key={skillIndex}
                        className="text-center group"
                        style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms` }}
                      >
                        {/* Circular Progress */}
                        <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                          <CircularProgress 
                            percentage={isVisible ? skill.level : 0} 
                            size={80} 
                            strokeWidth={6}
                            color={skill.color}
                          />
                        </div>
                        
                        {/* Skill Info */}
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <SkillIcon 
                            className="text-lg group-hover:scale-125 transition-transform duration-300" 
                            style={{ color: skill.color }}
                          />
                          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Technology Stack Visualization */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
              Technology Stack
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Technologies I work with on a daily basis
            </p>
          </div>
          
          <div className="relative">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 rounded-3xl"></div>
            
            {/* Tech Stack Grid */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-8">
              {skillCategories.flatMap(cat => cat.skills).map((tech, index) => {
                const TechIcon = tech.icon
                return (
                  <div
                    key={index}
                    className="group flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <TechIcon 
                        className="text-2xl" 
                        style={{ color: tech.color }}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 text-center">
                      {tech.name}
                    </span>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1 mt-2">
                      <div
                        className="h-1 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${tech.level}%`,
                          backgroundColor: tech.color
                        }}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon
            return (
              <div
                key={index}
                className="skill-card text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-700 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <StatIcon className={`text-3xl ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-slate-800 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
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