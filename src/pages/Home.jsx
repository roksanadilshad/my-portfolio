import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import myImg from '../assets/myImg.jpg'
import { FaCode, FaRocket, FaLaptopCode, FaArrowDown } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    // Hero section animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      })

      gsap.from('.hero-description', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      })

      gsap.from('.hero-buttons', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      })

      gsap.from('.hero-stats', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })

      // Hero image fade-in animation
      gsap.from('.hero-image', {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        delay: 0.3,
        ease: 'power2.out',
      })

      // Floating animation for decorative elements
      gsap.to('.float-element', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div id="home" className="relative min-h-screen" ref={heroRef}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl float-element"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl float-element" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="hero-badge inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-primary">Available for opportunities</span>
              </div>

              {/* Main Heading */}
              <div className="hero-title space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                  Hi, I'm{' '}
                  <span className="text-primary">Roksana</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-700 dark:text-slate-300">
                  Frontend Developer
                </h2>
              </div>

              {/* Description */}
              <p className="hero-description text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                I craft beautiful, responsive, and user-friendly web applications using modern technologies. Passionate about creating seamless digital experiences that make a difference.
              </p>

              {/* CTA Buttons */}
              <div className="hero-buttons flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('#projects')}
                  className="group px-8 py-4 bg-primary text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 font-medium"
                >
                  <span>View My Work</span>
                  <FaRocket className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://drive.google.com/uc?export=download&id=1eHs89ofnHb55whrRSWSWiD8-0gZRAHCD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-2 border-slate-300 dark:border-slate-700 rounded-lg hover:border-primary hover:text-primary transition-all duration-300 flex items-center space-x-2 font-medium"
                >
                  <span>Download Resume</span>
                  <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
                    download
                  </span>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="hero-stats flex flex-wrap gap-8 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FaCode className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800 dark:text-white">10+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Projects</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FaLaptopCode className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800 dark:text-white">12+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Technologies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hero-image relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transform hover:scale-105 transition-transform duration-500">
                  <img
                    alt="Roksana - Frontend Developer"
                    className="w-full max-w-md h-auto object-cover"
                    src={myImg}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 border border-slate-200 dark:border-slate-700 transform hover:scale-110 transition-transform">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <FaRocket className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-white">
                        Ready to Work
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Let's build together
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#projects')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce cursor-pointer hover:text-primary transition-colors group"
        >
          <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-primary">Scroll to explore</span>
          <FaArrowDown className="text-primary text-xl" />
        </button>
      </section>
    </div>
  )
}

export default Home
