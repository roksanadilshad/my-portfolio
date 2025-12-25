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
<section className="relative min-h-screen flex items-center justify-center py-20 lg:py-0 overflow-hidden bg-slate-50 dark:bg-[#0B0F1A]">
  {/* Abstract Background Shapes for Visual Interest */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Column - Content */}
      <div className="space-y-10 text-center lg:text-left">
        {/* Status Badge */}
        <div className="hero-badge inline-flex items-center space-x-2 px-4 py-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-full shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-slate-600 dark:text-slate-300">
            Available for new projects
          </span>
        </div>

        {/* Main Heading */}
        <div className="hero-title space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Roksana</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-slate-500 dark:text-slate-400 font-mono">
            &lt;FullStackDeveloper /&gt;
          </h2>
        </div>

        {/* Description */}
        <p className="hero-description text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
          I build high-performance, accessible, and visually stunning web applications. Turning complex problems into elegant, user-centric digital solutions.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons flex flex-wrap justify-center lg:justify-start gap-5">
          <button
            onClick={() => scrollToSection('#projects')}
            className="group px-10 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_10px_20px_rgba(124,58,237,0.3)] hover:shadow-primary/40 hover:-translate-y-1 flex items-center space-x-3 font-bold"
          >
            <span>Explore Work</span>
            <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <a
            href="https://drive.google.com/uc?export=download&id=YOUR_ID"
            className="group px-10 py-4 bg-transparent text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 transition-all duration-300 flex items-center space-x-3 font-bold backdrop-blur-sm"
          >
            <span>Get Resume</span>
            <span className="material-symbols-outlined group-hover:animate-bounce">download</span>
          </a>
        </div>

        {/* Trust/Quick Stats */}
        <div className="hero-stats flex justify-center lg:justify-start gap-10 pt-6 border-t border-slate-200 dark:border-slate-800/50 max-w-md mx-auto lg:mx-0">
          <div>
            <p className="text-3xl font-black text-slate-900 dark:text-white">10+</p>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Projects</p>
          </div>
          <div className="w-[1px] bg-slate-200 dark:bg-slate-800"></div>
          <div>
            <p className="text-3xl font-black text-slate-900 dark:text-white">12+</p>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Stack</p>
          </div>
        </div>
      </div>

      {/* Right Column - Image with Interactive Feel */}
      <div className="hero-image relative flex justify-center lg:justify-end perspective-1000">
        <div className="relative group">
          {/* Animated Glow Behind Image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 transform transition-all duration-700 group-hover:scale-[1.02]">
            <img
              alt="Roksana"
              className="w-full max-w-sm md:max-w-md h-auto object-cover"
              src={myImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-5 border border-white/20 animate-float">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-primary/20">
                <FaLaptopCode className="text-primary text-2xl" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-900 dark:text-white leading-none">Creative</p>
                <p className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold mt-1">Full-Stack Dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Refined Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center">
    <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center p-1">
      <div className="w-1 h-2 bg-primary rounded-full animate-scroll-dot"></div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Home
