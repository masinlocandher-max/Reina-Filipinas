import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navigation } from '../data/content.js'
import BrandMark from './BrandMark.jsx'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <header className="site-header">
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
      <div className={`mobile-nav${isOpen ? ' mobile-nav--open' : ''}`} id="mobile-navigation">
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
