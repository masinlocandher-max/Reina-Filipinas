import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon.jsx'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="shell">
        <p className="eyeline">404 · Page not found</p>
        <h1>This crown is<br /><em>somewhere else.</em></h1>
        <Link className="button button--gold" to="/">Return home <ArrowIcon /></Link>
      </div>
    </section>
  )
}
