import { Link } from 'react-router-dom'
import ArrowIcon from './ArrowIcon.jsx'

export default function QueenCard({ queen, priority = false }) {
  return (
    <article className="queen-card">
      <Link aria-label={`Read about ${queen.name}`} className="queen-card__image-wrap" to={queen.to}>
        <img
          alt={`${queen.name}, ${queen.title}`}
          className="queen-card__image"
          decoding="async"
          height="2048"
          loading={priority ? 'eager' : 'lazy'}
          src={queen.image}
          style={{ objectPosition: queen.imagePosition || 'center center' }}
          width="1639"
        />
      </Link>
      <div className="queen-card__meta">
        <p className="eyeline">{queen.title}</p>
        <h3>{queen.name}</h3>
        <div className="queen-card__line">
          <span>{queen.locality}</span>
          <span>{queen.assignment}</span>
        </div>
        <Link className="text-link" to={queen.to}>View profile <ArrowIcon /></Link>
      </div>
    </article>
  )
}
