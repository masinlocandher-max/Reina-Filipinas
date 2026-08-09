import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navigation } from '../data/content.js'
import BrandMark from './BrandMark.jsx'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    const updateHeader = () => {
      const currentScrollY = window.scrollY
      const isMobile = window.matchMedia('(max-width: 980px)').matches

      setIsScrolled(currentScrollY > 24)
      if (isMobile && !isOpen) {
        const isMovingDown = currentScrollY > lastScrollY.current + 8
        const isMovingUp = currentScrollY < lastScrollY.current - 8
        if (isMovingDown && currentScrollY > 130) setIsHidden(true)
        if (isMovingUp || currentScrollY < 80) setIsHidden(false)
      } else {
        setIsHidden(false)
      }
      lastScrollY.current = currentScrollY
    }
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [isOpen])

  return (
    <header className={`site-header${isScrolled ? ' site-header--scrolled' : ''}${isOpen ? ' site-header--menu-open' : ''}${isHidden ? ' site-header--hidden' : ''}`}>
      <aside className="announcement-bar" aria-label="Website development announcement">
        <div className="announcement-bar__track">
          {[0, 1].map((repeat) => (
            <p aria-hidden={repeat === 1} className="announcement-bar__message" key={repeat}>
              <span>This website was developed by <strong>FMB&amp;CO.</strong>, founded by Francine Marie Bautista.</span>
              <span>Work with FMB</span>
              <a href="https://www.francinemariebautista.com" rel="noreferrer" target="_blank">www.francinemariebautista.com</a>
              <a href="mailto:withlovefmb@gmail.com">withlovefmb@gmail.com</a>
            </p>
          ))}
        </div>
      </aside>
      <div className="shell site-header__inner">
        <BrandMark compact />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
              end={item.to === '/'}
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          className={`menu-button${isOpen ? ' menu-button--open' : ''}`}
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>
      <div aria-hidden={!isOpen} className={`mobile-nav${isOpen ? ' mobile-nav--open' : ''}`} id="mobile-navigation">
        <nav className="shell mobile-nav__inner" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <NavLink
              className={({ isActive }) => `mobile-nav__link${isActive ? ' mobile-nav__link--active' : ''}`}
              end={item.to === '/'}
              key={item.to}
              onClick={() => setIsOpen(false)}
              to={item.to}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
