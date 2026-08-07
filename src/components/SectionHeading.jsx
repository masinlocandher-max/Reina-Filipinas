export default function SectionHeading({ number, label, title, description, light = false }) {
  return (
    <div className={`section-heading${light ? ' section-heading--light' : ''}`}>
      <div className="section-index">
        <span>{number}</span>
        <span>{label}</span>
      </div>
      <div className="section-heading__copy">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}
