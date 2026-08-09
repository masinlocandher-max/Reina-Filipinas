import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import MotionController from './components/MotionController.jsx'
import Metadata from './components/Metadata.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ThePageant from './pages/ThePageant.jsx'
import AllStars from './pages/AllStars.jsx'
import MissGrandPhilippines from './pages/MissGrandPhilippines.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

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
