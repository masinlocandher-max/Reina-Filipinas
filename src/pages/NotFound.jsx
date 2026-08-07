import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="shell">
        <p className="eyeline">404 · Page not found</p>
        <h1>This crown is<br /><em>somewhere else.</em></h1>
        <Link className="button button--gold" to="/">Return home <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  )
}
