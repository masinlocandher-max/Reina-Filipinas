export default function PageIntro({ index, label, title, description, children, tone = 'dark' }) {
  return (
    <section className={`page-intro page-intro--${tone}`}>
      <div className="shell page-intro__grid">
        <div className="section-index">
          <span>{index}</span>
          <span>{label}</span>
        </div>
        <div className="page-intro__copy">
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
