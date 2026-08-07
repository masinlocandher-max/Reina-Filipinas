import { sources } from '../data/content.js'

export default function SourceRecord({ title = 'Press & source record' }) {
  return (
    <aside className="source-record" aria-labelledby="source-record-title">
      <div className="shell source-record__grid">
        <div>
          <p className="eyeline">Editorial record</p>
          <h2 id="source-record-title">{title}</h2>
        </div>
        <div className="source-list">
          {sources.map((source, index) => (
            <a href={source.href} key={source.href} rel="noreferrer" target="_blank">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>
                <strong>{source.title}</strong>
                <small>{source.publication}</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
