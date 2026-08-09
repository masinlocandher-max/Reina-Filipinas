import PageIntro from '../components/PageIntro.jsx'
import SourceRecord from '../components/SourceRecord.jsx'
import { competitionStages, royalCourt, specialAwards } from '../data/content.js'

const judges = [
  ['Michael Cinco', 'Dubai-based Filipino couture designer'],
  ['Christine Juliane Opiaza', 'Miss Grand International 2024'],
  ['Vanessa Pulgarin', 'Inaugural MGI All Stars winner'],
  ['Nguyen Huong Giang', 'MGI All Stars first runner-up'],
  ['Gotchabell Sarunrat Puagpipat', 'Miss Grand International 2025 runner-up'],
]

export default function ThePageant() {
  return (
    <>
      <PageIntro
        description="Twenty-one delegates, three national crowns and one successful first coronation night for the new organization."
        index="02"
        label="The Pageant"
        title={<>Reina Filipinas opens its story with a <em>successful inaugural night.</em></>}
      />

      <article className="coronation-story">
        <section className="shell coronation-story__opening">
          <div className="coronation-story__lead">
            <p className="eyeline">Grand Coronation Night · August 7, 2026</p>
            <h2>Three crowns marked the beginning of a new Philippine pageant institution.</h2>
            <p className="article-lede">Reina Filipinas concluded its first national competition at the Newport Performing Arts Theater in Pasay City, presenting a polished night of pageantry before a live audience and a panel drawn from fashion, business and the Miss Grand International community.</p>
            <p>From an opening field of 21 delegates, the competition moved through swimsuit, evening gown, final speech and question-and-answer rounds. Seven finalists remained for the closing stages, where the organization named its first three international representatives and completed the inaugural royal court.</p>
          </div>
          <figure className="coronation-story__hero">
            <img alt="The three Reina Filipinas 2026 titleholders wearing their crowns" decoding="async" height="1400" src="/images/titleholders-2026.webp" width="1120" />
            <figcaption>Angelica Lopez, Alexie Brooks and Anne Patricia Diaz · Reina Filipinas 2026</figcaption>
          </figure>
        </section>

        <section className="story-section story-section--winners">
          <div className="shell">
            <header className="story-section__heading">
              <p className="eyeline">Who won</p>
              <h2>The inaugural titleholders.</h2>
            </header>
            <div className="winner-editorial-grid">
              <article>
                <figure><img alt="Angelica Lopez of Palawan" decoding="async" height="1400" loading="lazy" src="/images/angelica-lopez.webp" width="1119" /></figure>
                <p className="eyeline">Reina Filipinas Grand International 2026</p>
                <h3>Angelica Lopez</h3>
                <p>Angelica Lopez of Palawan won the primary national title and will represent the Philippines at Miss Grand International 2026 in India.</p>
              </article>
              <article>
                <figure><img alt="Alexie Brooks and Anne Patricia Diaz" decoding="async" height="1400" loading="lazy" src="/images/alexie-brooks-anne-diaz.webp" width="1120" /></figure>
                <p className="eyeline">Reina Filipinas MGI All Stars 2026</p>
                <h3>Alexie Brooks & Anne Patricia Diaz</h3>
                <p>Alexie Brooks of Iloilo City and Anne Patricia Diaz of Manila earned the two MGI All Stars titles and will represent the Philippines at the competition’s second edition in Thailand. Diaz became the organization’s first transgender titleholder.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="story-section story-section--competition">
          <div className="shell">
            <header className="story-section__heading story-section__heading--competition">
              <div>
                <p className="eyeline">How the night unfolded</p>
                <h2>From 21 delegates to three national crowns.</h2>
              </div>
              <p>The inaugural competition moved through swimsuit, evening gown, final speech and question-and-answer rounds before the first international assignments were announced.</p>
            </header>
            <div className="competition-progression" aria-label="Competition progression">
              {competitionStages.map((stage) => (
                <article key={stage.number}>
                  <span>{stage.number}</span>
                  <p>{stage.label}</p>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </article>
              ))}
            </div>
            <div className="special-awards">
              <div className="special-awards__intro">
                <p className="eyeline">Special distinctions</p>
                <h3>Performance across the full competition.</h3>
                <p>Stage awards and partner distinctions recognized runway command, evening wear, commercial performance and camera presence.</p>
              </div>
              <div className="special-awards__list">
                {specialAwards.map((item, index) => (
                  <article key={item.award}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h4>{item.award}</h4>
                    <p>{item.winner}</p>
                    <small>{item.locality}</small>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="story-section story-section--people">
          <div className="shell">
            <div className="story-host-feature">
              <figure className="story-host-feature__portrait">
                <img
                  alt="Reina Filipinas hosts Sean Kyle Ortega and Joy Barcoma"
                  decoding="async"
                  height="1167"
                  loading="lazy"
                  src="/images/hosts-sean-kyle-ortega-joy-barcoma.webp"
                  width="1347"
                />
                <figcaption>Sean Kyle Ortega and Joy Barcoma · Main-stage hosts</figcaption>
              </figure>
              <div className="story-host-feature__article">
                <p className="eyeline">Who hosted</p>
                <h2>Sean Kyle Ortega and Joy Barcoma gave the inaugural night its voice.</h2>
                <p className="article-lede">The pair led the main coronation program with the poise and clarity required of a first edition carrying the expectations of a new national pageant organization.</p>
                <p>Their work went beyond announcing names and competition results. They guided the audience through the transitions between the swimsuit, evening gown, final speech and question-and-answer rounds, maintaining the rhythm of the production as the field narrowed from 21 delegates to the inaugural titleholders.</p>
                <p>Ortega and Barcoma brought an assured, formal presence to the stage while allowing the candidates and the significance of the first coronation to remain at the center of the program. Together, they helped give Reina Filipinas a polished public introduction and a hosting identity suited to its international ambitions.</p>
                <dl className="host-list">
                  <div><dt>Main stage</dt><dd>Joy Barcoma · Sean Kyle Ortega</dd></div>
                  <div><dt>Backstage & digital</dt><dd>Gazini Ganados · Fuschia Anne Ravena</dd></div>
                </dl>
              </div>
            </div>
            <div className="story-judges-feature">
              <p className="eyeline">Who judged</p>
              <h2>An international panel.</h2>
              <div className="judge-list">
                {judges.map(([name, role], index) => (
                  <article key={name}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div><h3>{name}</h3><p>{role}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="story-section story-section--court">
          <div className="shell">
            <header className="story-section__heading story-section__heading--court">
              <div><p className="eyeline">The final placements</p><h2>The inaugural royal court.</h2></div>
              <p>Four finalists completed the first Reina Filipinas court as the organization’s official national alternates.</p>
            </header>
            <div className="royal-court-grid">
              {royalCourt.map((queen) => (
                <article key={queen.name}>
                  <div className="royal-court-grid__image">
                    <img alt={`${queen.name} of ${queen.locality}`} decoding="async" height="2048" loading="lazy" src={queen.image} width="1639" />
                    <span>{queen.placement}</span>
                  </div>
                  <h3>{queen.name}</h3>
                  <p>{queen.locality}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </article>
      <SourceRecord title="The reporting behind coronation night" />
    </>
  )
}
