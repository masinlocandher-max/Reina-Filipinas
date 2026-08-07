import { Link } from 'react-router-dom'

export default function BrandMark({ compact = false }) {
  return (
    <Link className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`} to="/" aria-label="Reina Filipinas home">
      <img className="brand-mark__image" alt="" aria-hidden="true" src="/images/reina-filipinas-wordmark.png" />
      <span className="sr-only">Reina Filipinas</span>
    </Link>
  )
}
