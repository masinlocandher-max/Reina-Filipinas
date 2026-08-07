import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ThePageant from './pages/ThePageant.jsx'
import AllStars from './pages/AllStars.jsx'
import MissGrandPhilippines from './pages/MissGrandPhilippines.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

const pageMeta = {
  '/': ['Reina Filipinas', 'The Philippines, represented with purpose.'],
  '/about': ['About | Reina Filipinas', 'Meet the leadership and purpose behind Reina Filipinas.'],
  '/the-pageant': ['The Pageant | Reina Filipinas', 'Read the story of the successful inaugural Reina Filipinas coronation night.'],
  '/mgi-all-stars': ['MGI All Stars | Reina Filipinas', 'Meet the Philippines’ Reina Filipinas MGI All Stars titleholders.'],
  '/miss-grand-philippines': ['Miss Grand Philippines | Reina Filipinas', 'Meet Reina Filipinas Grand International 2026 Angelica Lopez.'],
  '/contact': ['Contact | Reina Filipinas', 'Connect with Reina Filipinas through its official social channels.'],
}

function Metadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const [title, description] = pageMeta[pathname] || ['Page not found | Reina Filipinas', 'Reina Filipinas']
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Metadata />
      <ScrollToTop />
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
