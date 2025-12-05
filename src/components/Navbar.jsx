import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [time, setTime] = useState('')

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
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 md:px-8 py-6">
        <div className="flex justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-primary text-2xl">
                code
              </span>
              <h3 className="text-xl font-display font-bold text-slate-800 dark:text-white">
                Roksana
              </h3>
            </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-10 text-sm flex-1 justify-center">
            {navLinks.map((link, index) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.path)
                }}
                className={`${
                  index === 0
                    ? 'font-medium text-slate-800 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white'
                } transition-colors`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-6 text-sm">
            <span className="hidden sm:inline text-gray-600 dark:text-gray-400">
              {time} | UTC +7
            </span>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#contact')
              }}
              className="btn-elegant"
            >
              <span className="btn-elegant-text">Let's Talk</span>
              <div className="btn-elegant-icon">
                <span className="material-symbols-outlined text-white dark:text-slate-800">
                  arrow_forward
                </span>
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 dark:text-white hover:text-primary focus:outline-none"
            >
              <span className="material-symbols-outlined">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.path)
                  }}
                  className="block px-3 py-2 text-slate-800 dark:text-slate-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
