import { Link } from 'react-router-dom'

export default function BrandMark({ compact = false }) {
  return (
    <Link className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`} to="/" aria-label="Reina Filipinas home">
      <img
        alt=""
        aria-hidden="true"
        className="brand-mark__image"
        decoding="async"
        height="267"
        fetchPriority="high"
        src="/images/reina-filipinas-wordmark.webp"
        width="800"
      />
      <span className="sr-only">Reina Filipinas</span>
    </Link>
  )
}
