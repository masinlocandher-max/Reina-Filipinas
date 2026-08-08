export default function ArrowIcon({ direction = 'right', className = '' }) {
  if (direction === 'external') {
    return (
      <svg
        aria-hidden="true"
        className={`arrow-icon ${className}`.trim()}
        fill="none"
        viewBox="0 0 18 18"
      >
        <path d="M5 13 13 5M7 5h6v6" />
      </svg>
    )
  }

  return (
    <svg
      aria-hidden="true"
      className={`arrow-icon ${className}`.trim()}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path d="M3 10h13M11.5 5.5 16 10l-4.5 4.5" />
    </svg>
  )
}
