import { useState, useEffect } from 'react'
import { FaClock, FaArrowRight } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [time, setTime] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Projects', path: '#projects' },
    { name: 'Skills', path: '#skills' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-lg shadow-lg'
          : 'bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md'
      } border-b border-slate-200 dark:border-slate-800`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-white text-xl">
                  code
                </span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                Roksana
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Full Stack Developer</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.path)
                }}
                className="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Time Display */}
            <div className="flex items-center space-x-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <FaClock className="text-primary text-sm" />
              <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
                {time}
              </span>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#contact')
              }}
              className="group flex items-center space-x-2 px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 font-medium text-sm"
            >
              <span>Let's Talk</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.path)
                  }}
                  className="flex items-center justify-between px-4 py-3 text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary rounded-lg transition-all group"
                >
                  <span className="font-medium">{link.name}</span>
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
              <div className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#contact')
                  }}
                  className="flex items-center justify-center space-x-2 w-full px-5 py-3 bg-primary text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-md font-medium"
                >
                  <span>Let's Talk</span>
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
