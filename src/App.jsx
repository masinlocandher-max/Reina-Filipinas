import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import MotionController from './components/MotionController.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ThePageant from './pages/ThePageant.jsx'
import AllStars from './pages/AllStars.jsx'
import MissGrandPhilippines from './pages/MissGrandPhilippines.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

const siteUrl = 'https://reinafilipinas.com'

const pageMeta = {
  '/': {
    title: 'Reina Filipinas | Official Website',
    description: 'The Philippine national platform for Miss Grand International and MGI All Stars.',
    image: '/media/reina-hero-poster.webp',
  },
  '/about': {
    title: 'About | Reina Filipinas',
    description: 'Meet the leadership, purpose and international partnership behind Reina Filipinas.',
    image: '/images/reina-filipinas-logo.webp',
  },
  '/the-pageant': {
    title: 'The Inaugural Pageant | Reina Filipinas',
    description: 'Read the story, results and official royal court of the inaugural Reina Filipinas coronation night.',
    image: '/images/titleholders-2026.webp',
  },
  '/mgi-all-stars': {
    title: 'MGI All Stars | Reina Filipinas',
    description: 'Meet Reina Filipinas MGI All Stars titleholders Alexie Brooks and Anne Patricia Diaz.',
    image: '/images/alexie-brooks-anne-diaz.webp',
  },
  '/miss-grand-philippines': {
    title: 'Miss Grand Philippines | Reina Filipinas',
    description: 'Meet Reina Filipinas Grand International 2026 Angelica Lopez and follow the Philippine campaign.',
    image: '/images/angelica-lopez.webp',
  },
  '/contact': {
    title: 'Contact | Reina Filipinas',
    description: 'Connect with Reina Filipinas for partnerships, press, candidate information and general inquiries.',
    image: '/images/reina-filipinas-logo.webp',
  },
}

function Metadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const normalizedPath = pathname === '/' ? pathname : pathname.replace(/\/+$/, '')
    const metadata = pageMeta[normalizedPath] || {
      title: 'Page not found | Reina Filipinas',
      description: 'Return to the official Reina Filipinas website.',
      image: '/images/reina-filipinas-logo.webp',
    }
    const canonicalUrl = `${siteUrl}${normalizedPath === '/' ? '' : normalizedPath}`
    const imageUrl = `${siteUrl}${metadata.image}`

    document.title = metadata.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description)
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', imageUrl)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description)
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', imageUrl)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = canonicalUrl
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Metadata />
      <ScrollToTop />
      <MotionController />
      <Header />
      <main id="main-content">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<ThePageant />} path="/the-pageant" />
          <Route element={<AllStars />} path="/mgi-all-stars" />
          <Route element={<MissGrandPhilippines />} path="/miss-grand-philippines" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
