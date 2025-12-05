import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = (ref, animations) => {
  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      animations.forEach(({ selector, options }) => {
        gsap.from(selector, {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            ...options.scrollTrigger,
          },
          ...options,
        })
      })
    }, ref)

    return () => ctx.revert()
  }, [ref, animations])
}
