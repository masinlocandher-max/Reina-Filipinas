import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const motionSelectors = [
  '.page-intro__grid > *',
  '.home-journal section .shell > *',
  '.about-brief__grid > *',
  '.about-origin__grid > *',
  '.about-leadership__heading > *',
  '.leadership-list > article',
  '.coronation-story section .shell > *',
  '.winner-editorial-grid > article',
  '.competition-progression > article',
  '.special-awards__list > article',
  '.judge-list > article',
  '.royal-court-grid > article',
  '.all-stars-story__grid > *',
  '.angelica-story__grid > *',
  '.timeline-list > article',
  '.contact-section__grid > *',
  '.contact-guide__items > section',
  '.source-record__grid > *',
].join(',')

export default function MotionController() {
  const { pathname } = useLocation()

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const frame = window.requestAnimationFrame(() => {
      const elements = [...document.querySelectorAll(motionSelectors)]

      elements.forEach((element, index) => {
        element.classList.add('motion-reveal')
        if (element.matches('figure, article') || element.querySelector(':scope > figure')) {
          element.classList.add('motion-reveal--media')
        }
        element.style.setProperty('--motion-order', String(index % 4))
      })

      if (reducedMotion || !('IntersectionObserver' in window)) {
        elements.forEach((element) => element.classList.add('motion-reveal--visible'))
        return
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('motion-reveal--visible')
          observer.unobserve(entry.target)
        })
      }, {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.08,
      })

      elements.forEach((element) => observer.observe(element))
      window.__reinaMotionObserver = observer
    })

    return () => {
      window.cancelAnimationFrame(frame)
      window.__reinaMotionObserver?.disconnect()
      delete window.__reinaMotionObserver
    }
  }, [pathname])

  return null
}
