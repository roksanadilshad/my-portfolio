import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import myImg from '../assets/myImg.jpg'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    // Hero section animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: -30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      })

      gsap.from('.hero-description', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      })

      gsap.from('.hero-buttons', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.9,
        ease: 'power3.out',
      })

      // Hero image fade-in animation
      gsap.from('.hero-image', {
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      })

      // Feature cards animation
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: '.feature-cards',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })

      // CTA section animation
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'back.out(1.7)',
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
    <div id="home" className="min-h-[calc(100vh-4rem)]" ref={heroRef}>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Hi, I'm a web designer and{' '}
                <span className="text-primary">front-end developer</span>
              </h1>
              <p className="hero-subtitle mt-4 text-slate-600 dark:text-slate-400">
                I'm currently into Frontend Dev, Backend Dev 
              </p>
              <button
                onClick={() => scrollToSection('#projects')}
                className="hero-buttons mt-8 btn-primary flex items-center"
              >
                Scroll Down{' '}
                <span className="material-symbols-outlined ml-2">
                  arrow_downward
                </span>
              </button>
            </div>
            <div className="hero-image relative flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  alt="Portrait"
                  className="w-full max-w-sm h-auto object-cover rounded-2xl"
                  src={myImg}
                />
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
              </div>
              {/* Status badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
                <p className="text-sm flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full inline-block mr-2 animate-pulse"></span>
                  <span className="text-slate-800 dark:text-white font-medium">
                    Available for work
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 flex justify-center feature-cards">
        <div className="border border-slate-400 dark:border-slate-700 p-8 max-w-2xl w-full relative feature-card">
          <span className="text-6xl absolute -top-8 left-4 text-slate-500 dark:text-slate-600">
            "
          </span>
          <p className="text-center text-lg text-slate-800 dark:text-white">
            Let yourself be silently drawn by what you love — that is where true success begins.
          </p>
          <span className="text-6xl absolute -bottom-12 right-4 text-slate-500 dark:text-slate-600">
            "
          </span>
          <div className="text-right mt-4 p-2 border border-slate-400 dark:border-slate-700 inline-block float-right">
            - Rumi
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
