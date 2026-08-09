import { useState } from 'react'
import { candidates } from '../data/content.js'

export default function CandidateDirectory() {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLocaleLowerCase()
  const visibleCandidates = normalizedQuery
    ? candidates.filter(({ locality, name, status }) =>
        `${name} ${locality} ${status}`.toLocaleLowerCase().includes(normalizedQuery),
      )
    : candidates

  return (
    <section className="candidate-directory" aria-labelledby="candidate-directory-title">
      <div className="shell">
        <div className="candidate-directory__heading">
          <div>
            <p className="candidate-directory__year">2026</p>
            <h2 id="candidate-directory-title">Meet the Reinas</h2>
            <p className="candidate-directory__intro">The 21 women who formed the inaugural class of Reina Filipinas.</p>
          </div>
          <div className="candidate-search">
            <label htmlFor="candidate-search-input">Search by name, locality or result</label>
            <div className="candidate-search__control">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" />
              </svg>
              <input
                autoComplete="off"
                id="candidate-search-input"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try Palawan or Top 11"
                type="search"
                value={query}
              />
              {query ? (
                <button aria-label="Clear candidate search" onClick={() => setQuery('')} type="button">
                  Clear
                </button>
              ) : null}
            </div>
            <p aria-live="polite">
              Showing {visibleCandidates.length} of {candidates.length} delegates
            </p>
          </div>
        </div>

        <div className={`candidate-list${normalizedQuery ? ' candidate-list--filtered' : ''}`} role="list">
          {visibleCandidates.length ? visibleCandidates.map((candidate) => (
            <article key={candidate.name} role="listitem">
              <figure>
                <img
                  alt={`${candidate.name}, Reina Filipinas 2026 representative of ${candidate.locality}`}
                  decoding="async"
                  height="1440"
                  loading="lazy"
                  src={candidate.image}
                  width="1080"
                />
                <span>{String(candidates.indexOf(candidate) + 1).padStart(2, '0')}</span>
              </figure>
              <div className="candidate-list__identity">
                <h3>{candidate.name}</h3>
                <p>{candidate.locality}</p>
                <strong>{candidate.status}</strong>
              </div>
            </article>
          )) : (
            <div className="candidate-list__empty">
              <p className="eyeline">No matching delegate</p>
              <h3>Try another name or locality.</h3>
              <button className="text-link" onClick={() => setQuery('')} type="button">Show every delegate</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
