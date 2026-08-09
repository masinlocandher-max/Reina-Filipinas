import { Link } from 'react-router-dom'
import { navigation, socialLinks } from '../data/content.js'
import ArrowIcon from './ArrowIcon.jsx'
import BrandMark from './BrandMark.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <section className="shell footer-powered" aria-labelledby="footer-powered-title">
        <div className="footer-powered__copy">
          <p className="footer-label">Special announcement</p>
          <h2 id="footer-powered-title">Powered by <em>SENZ</em></h2>
          <p>Strategic Communications and Digital Solutions</p>
          <a href="https://senzpr.com" rel="noreferrer" target="_blank">
            <span>Visit senzpr.com</span>
            <ArrowIcon direction="external" />
          </a>
        </div>
        <a className="footer-powered__media" href="https://senzpr.com" rel="noreferrer" target="_blank">
          <img
            alt="SENZ PR, Marketing and Digital Solutions. Influence through clarity."
            decoding="async"
            height="720"
            loading="lazy"
            src="/images/senz-powered-by.webp"
            width="1280"
          />
        </a>
      </section>
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
