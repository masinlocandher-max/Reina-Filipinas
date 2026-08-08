import PageIntro from '../components/PageIntro.jsx'
import SourceRecord from '../components/SourceRecord.jsx'
import { franchiseTimeline } from '../data/content.js'

export default function MissGrandPhilippines() {
  return (
    <>
      <PageIntro
        description="The Reina Filipinas Grand International title carries the national mandate to the Miss Grand International stage."
        index="04"
        label="Miss Grand Philippines"
        title={<>The country’s next Miss Grand campaign begins with <em>Angelica Lopez.</em></>}
      />

      <section className="winner-feature">
        <div className="shell winner-feature__grid">
          <figure>
            <img alt="Angelica Lopez, Reina Filipinas Grand International 2026" decoding="async" height="1400" src="/images/angelica-lopez.webp" width="1119" />
            <figcaption>Reina Filipinas Grand International 2026</figcaption>
          </figure>
          <div className="winner-feature__copy">
            <p className="eyeline">Palawan · Philippines</p>
            <h2>Angelica<br />Lopez</h2>
            <p>Seasoned, composed and exacting onstage, Angelica Lopez earned the inaugural primary crown and the responsibility of carrying the Philippine campaign to Miss Grand International 2026.</p>
            <dl className="winner-facts">
              <div><dt>National title</dt><dd>Reina Filipinas Grand International 2026</dd></div>
              <div><dt>International stage</dt><dd>Miss Grand International 2026</dd></div>
              <div><dt>Host country</dt><dd>India</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <article className="angelica-story">
        <div className="shell angelica-story__grid">
          <header>
            <p className="eyeline">Why she won</p>
            <h2>A technically complete coronation-night performance.</h2>
          </header>
          <div className="angelica-story__body">
            <p className="article-lede">Angelica Lopez entered the inaugural edition with international experience and left with the organization’s principal national title.</p>
            <p>Representing Palawan, Lopez achieved a perfect swimsuit score and earned the Best in Swimsuit, Reina Pasarela and Reina Urban Smiles distinctions. The combination reflected the consistency demanded across runway execution, camera presence and sponsor representation.</p>
            <p>In the final question-and-answer round, she positioned Reina Filipinas as a platform that goes beyond the stage by combining personal development, entertainment and business. Her answer aligned closely with the organization’s focus on preparing winners for both international competition and professional brand work.</p>
            <p>Lopez previously held the Binibining Pilipinas International 2023 title and represented the Philippines at Miss International 2024. That experience now becomes part of the country’s campaign for Miss Grand International 2026 in India.</p>
          </div>
          <aside className="angelica-story__awards" aria-label="Angelica Lopez coronation awards">
            <p className="eyeline">Coronation distinctions</p>
            <div><span>01</span><strong>Best in Swimsuit</strong></div>
            <div><span>02</span><strong>Reina Pasarela</strong></div>
            <div><span>03</span><strong>Reina Urban Smiles</strong></div>
          </aside>
        </div>
      </article>

      <section className="timeline-section">
        <div className="shell">
          <div className="timeline-section__heading">
            <p className="eyeline">The national pathway</p>
            <h2>A franchise shaped across four eras.</h2>
            <p>The stewardship of the Miss Grand Philippines pathway has evolved over more than a decade, arriving in 2026 under Reina Filipinas.</p>
          </div>
          <div className="timeline-list">
            {franchiseTimeline.map((item) => (
              <article key={item.year}>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SourceRecord title="Follow the Miss Grand Philippines transition" />
    </>
  )
}
