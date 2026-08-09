import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon.jsx'
import PageIntro from '../components/PageIntro.jsx'
import SourceRecord from '../components/SourceRecord.jsx'
import { leadership } from '../data/content.js'
import { responsiveImage } from '../utils/images.js'

export default function About() {
  return (
    <>
      <PageIntro
        description="The organization, leadership and international partnership behind the Philippines’ new Miss Grand pathway."
        index="01"
        label="About"
        title={<>The national organization behind a <em>new pageant era.</em></>}
      />

      <section className="about-brief">
        <div className="shell about-brief__grid">
          <figure className="about-brief__mark">
            <img alt="Reina Filipinas official wordmark" decoding="async" height="1400" loading="lazy" {...responsiveImage('/images/reina-filipinas-logo.webp', '(max-width: 720px) 92vw, 45vw')} width="1400" />
          </figure>
          <div className="about-brief__copy">
            <p className="eyeline">What it is</p>
            <h2>A national platform with a direct international purpose.</h2>
            <p>Reina Filipinas is the organization responsible for selecting and preparing Philippine delegates for Miss Grand International and MGI All Stars. Established in 2026, it brings the national selection process, delegate development and international assignments under one focused management team.</p>
            <p>The organization combines pageant preparation with communication, commercial discipline and brand representation. Its inaugural edition awarded one Reina Filipinas Grand International crown and two Reina Filipinas MGI All Stars titles.</p>
            <Link className="text-link" to="/the-pageant">Read the inaugural story <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <article className="about-origin">
        <div className="shell about-origin__grid">
          <header>
            <p className="eyeline">Why it was formed</p>
            <h2>A strategic realignment in Philippine pageantry.</h2>
          </header>
          <div className="about-origin__body">
            <p className="article-lede">The establishment of Reina Filipinas in 2026 created a purpose-built national management body for the Philippines’ participation across the expanding Miss Grand International system.</p>
            <p>The organization followed the transfer of the Miss Grand Philippines franchise from ALV Pageant Circle to an executive team led by Jojo Bragais. The new structure places national selection, delegate preparation, commercial partnerships and international coordination under one leadership group.</p>
            <p>Bragais serves as President and CEO. Miss Grand International 2025 Emma Mary Tiglao serves as National Director, bringing the perspective of a reigning international titleholder into candidate preparation. Miss Grand International founder and president Nawat Itsaragrisil participates as Executive Partner, creating direct alignment with the international platform.</p>
            <p>Its first edition introduced three primary crowns: one national title for Miss Grand International and two national titles for MGI All Stars. Together, they establish a year-round pathway for both emerging competitors and experienced titleholders.</p>
          </div>
          <aside className="about-origin__facts" aria-label="Reina Filipinas organization facts">
            <div><span>Established</span><strong>2026</strong></div>
            <div><span>President & CEO</span><strong>Jojo Bragais</strong></div>
            <div><span>National Director</span><strong>Emma Mary Tiglao</strong></div>
            <div><span>Executive Partner</span><strong>Nawat Itsaragrisil</strong></div>
          </aside>
        </div>
      </article>

      <section className="leadership-section about-leadership">
        <div className="shell">
          <div className="about-leadership__heading">
            <div>
              <p className="eyeline">Executive leadership</p>
              <h2>Who is behind Reina Filipinas.</h2>
            </div>
            <p>Reina Filipinas is spearheaded by Jojo Bragais, founder of Jojo Bragais Shoes, who serves as President and CEO. He is joined by National Director Emma Mary Tiglao and Executive Partner Nawat Itsaragrisil.</p>
          </div>
          <div className="leadership-list">
            {leadership.map((leader) => (
              <article key={leader.name}>
                <span>{leader.number}</span>
                <figure className="leadership-list__portrait">
                  <img
                    alt={`${leader.name}, ${leader.role} of Reina Filipinas`}
                    decoding="async"
                    loading="lazy"
                    {...responsiveImage(leader.image, '(max-width: 720px) 290px, 170px')}
                    style={{ objectPosition: leader.imagePosition }}
                  />
                </figure>
                <div>
                  <p className="eyeline">{leader.role}</p>
                  <h3>{leader.name}</h3>
                </div>
                <p>{leader.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SourceRecord title="The reporting behind Reina Filipinas" />
    </>
  )
}
