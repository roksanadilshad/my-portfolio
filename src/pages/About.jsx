import { useEffect, useRef } from 'react'
import { FaBriefcase, FaRocket, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

const About = () => {
  const aboutRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  const highlightsRef = useRef(null)

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

    const content = contentRef.current
    const image = imageRef.current
    const highlights = highlightsRef.current?.querySelectorAll('.highlight-card')

    if (content) observer.observe(content)
    if (image) observer.observe(image)
    highlights?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const handleDownloadCV = () => {
    const cvUrl = 'https://drive.google.com/uc?export=download&id=1eHs89ofnHb55whrRSWSWiD8-0gZRAHCD'
    window.open(cvUrl, '_blank')
  }

  const highlights = [
    {
      icon: FaBriefcase,
      title: 'Status',
      description: 'Fresh Graduate & Aspiring Developer',
    },
    {
      icon: FaRocket,
      title: 'Focus',
      description: 'Frontend Development & UI/UX Design',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      description: 'Based in Dhaka, Bangladesh',
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'Creating seamless user experiences',
    },
  ]

  const expertise = [
    'React & Next.js',
    'Tailwind CSS',
    'JavaScript (ES6+)',
    'Responsive Design',
    'REST APIs',
    'Git & GitHub',
  ]

  return (
    <div id="about" className="py-20 bg-white dark:bg-[#0A0A0A]" ref={aboutRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="section-title text-center mb-16">About Me</h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Column - Content */}
          <div ref={contentRef} className="opacity-0 space-y-6">
            {/* Intro */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
                Hello, I'm <span className="text-primary">Roksana</span>!
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                A dedicated <span className="font-semibold text-slate-800 dark:text-white">Frontend Developer</span> with a strong focus on building modern, user-friendly, and visually polished web applications.
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I enjoy transforming ideas into real digital experiences using <span className="font-medium text-primary">React</span>, <span className="font-medium text-primary">Tailwind CSS</span>, <span className="font-medium text-primary">JavaScript</span>, and clean UI/UX principles.
              </p>
              <p>
                I've built several personal projects including booking systems, pet-care platforms, event management apps, and dynamic dashboards. Through these projects, I've developed strong problem-solving skills and learned to create interfaces that feel smooth and intuitive.
              </p>
              <p>
                My goal is simple: build meaningful products that help people, look great, and run fast. I'm eager to bring my skills to a professional team and continue growing as a developer. When I'm not coding, I explore UI trends, learn new technologies, and work on personal projects to sharpen my creativity.
              </p>
            </div>

            {/* Expertise Tags */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-slate-800 dark:text-white mb-3 uppercase tracking-wide">
                Core Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={handleDownloadCV}
                className="group inline-flex items-center space-x-3 px-6 py-3 bg-primary text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span className="font-medium">Download Resume</span>
                <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
                  download
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Image & Card */}
          <div ref={imageRef} className="opacity-0 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img
                  alt="Roksana - Frontend Developer"
                  className="w-full max-w-md h-auto object-cover"
                  src="https://i.pinimg.com/1200x/1e/e6/54/1ee654f04d664cf6d985c4fd8996a38e.jpg"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">
                      Available for Work
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Open to opportunities
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div ref={highlightsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="highlight-card opacity-0 group bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-primary hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary text-4xl mb-3 group-hover:scale-110 transition-transform">
                  <IconComponent />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About
