import { useState } from 'react'
import { socialLinks } from '../data/content.js'
import ArrowIcon from './ArrowIcon.jsx'

const initialForm = { name: '', email: '', subject: 'General inquiry', message: '' }

export default function InquiryComposer() {
  const [form, setForm] = useState(initialForm)
  const [prepared, setPrepared] = useState(false)
  const [copied, setCopied] = useState(false)

  const composedMessage = `REINA FILIPINAS INQUIRY\n\nName: ${form.name}\nEmail: ${form.email}\nTopic: ${form.subject}\n\n${form.message}`

  const update = (event) => {
    setPrepared(false)
    setCopied(false)
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const prepare = (event) => {
    event.preventDefault()
    setPrepared(true)
  }

  const copy = async () => {
    await navigator.clipboard.writeText(composedMessage)
    setCopied(true)
  }

  return (
    <div className="inquiry-composer">
      <form className="inquiry-form" onSubmit={prepare}>
        <div className="field-row">
          <label>
            <span>Name</span>
            <input name="name" onChange={update} required type="text" value={form.name} />
          </label>
          <label>
            <span>Email</span>
            <input name="email" onChange={update} required type="email" value={form.email} />
          </label>
        </div>
        <label>
          <span>Topic</span>
          <select name="subject" onChange={update} value={form.subject}>
            <option>General inquiry</option>
            <option>Media & press</option>
            <option>Partnerships & sponsorships</option>
            <option>Candidate information</option>
          </select>
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" onChange={update} required rows="6" value={form.message} />
        </label>
        <p className="form-note">This form prepares your message locally. No personal information is uploaded or stored.</p>
        <button className="button button--gold" type="submit">Prepare inquiry <ArrowIcon /></button>
      </form>

      {prepared && (
        <div className="prepared-message" role="status">
          <p className="eyeline">Your inquiry is ready</p>
          <h3>Copy it, then message the official Reina Filipinas account.</h3>
          <pre>{composedMessage}</pre>
          <div className="prepared-message__actions">
            <button className="button button--light" onClick={copy} type="button">
              {copied ? 'Copied' : 'Copy inquiry'}
            </button>
            {socialLinks.map((link) => (
              <a className="text-link text-link--light" href={link.href} key={link.href} rel="noreferrer" target="_blank">
                Open {link.label} <ArrowIcon direction="external" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
