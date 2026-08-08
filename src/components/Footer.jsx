import { Link } from 'react-router-dom'
import { navigation, socialLinks } from '../data/content.js'
import ArrowIcon from './ArrowIcon.jsx'
import BrandMark from './BrandMark.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__identity">
          <BrandMark />
          <p>The Philippine national platform for Miss Grand International and MGI All Stars.</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <nav className="footer-links" aria-label="Footer navigation">
            {navigation.slice(1).map((item) => (
              <Link key={item.to} to={item.to}>{item.label}</Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="footer-label">Follow</p>
          <div className="footer-links">
            {socialLinks.map((item) => (
              <a href={item.href} key={item.href} rel="noreferrer" target="_blank">
                <span>{item.label}</span>
                <ArrowIcon direction="external" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>© {new Date().getFullYear()} Reina Filipinas</p>
        <p>Beauty · Body · Business · Brains · Brand Leadership</p>
      </div>
    </footer>
  )
}
