import ArrowIcon from '../components/ArrowIcon.jsx'
import InquiryComposer from '../components/InquiryComposer.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { socialLinks } from '../data/content.js'

export default function Contact() {
  return (
    <>
      <PageIntro
        description="For partnerships, press, candidate information and general inquiries, begin here."
        index="05"
        label="Contact"
        title={<>Let’s create the next chapter of <em>Philippine representation.</em></>}
      />
      <section className="contact-section">
        <div className="shell contact-section__grid">
          <div className="contact-section__aside">
            <p className="eyeline">Official channels</p>
            <h2>Direct, public and verified.</h2>
            <p>Reina Filipinas currently handles public contact through its official social accounts. Prepare your message, then continue the conversation on your preferred platform.</p>
            <div className="contact-socials">
              {socialLinks.map((link) => (
                <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                  <span>{link.label}</span><ArrowIcon direction="external" />
                </a>
              ))}
            </div>
          </div>
          <InquiryComposer />
        </div>
      </section>
      <article className="contact-guide">
        <div className="shell contact-guide__grid">
          <header>
            <p className="eyeline">Before you send</p>
            <h2>Help the right conversation begin clearly.</h2>
          </header>
          <div className="contact-guide__items">
            <section>
              <span>01</span>
              <h3>Media and interviews</h3>
              <p>Include your publication, intended topic, interview format and requested deadline.</p>
            </section>
            <section>
              <span>02</span>
              <h3>Brand partnerships</h3>
              <p>Share the campaign objective, expected deliverables, timing and the titleholder or event involved.</p>
            </section>
            <section>
              <span>03</span>
              <h3>Candidate inquiries</h3>
              <p>State your represented locality and the specific application or competition information you need.</p>
            </section>
          </div>
        </div>
      </article>
    </>
  )
}
