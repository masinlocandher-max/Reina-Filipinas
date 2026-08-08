import PageIntro from '../components/PageIntro.jsx'
import SourceRecord from '../components/SourceRecord.jsx'

export default function AllStars() {
  return (
    <>
      <PageIntro
        description="Two experienced competitors carry the Philippines to the second edition of MGI All Stars in Thailand."
        index="03"
        label="MGI All Stars"
        title={<>Experience returns to the stage with <em>something new to prove.</em></>}
      />

      <section className="duo-feature">
        <div className="shell duo-feature__grid">
          <figure>
            <img alt="MGI All Stars titleholders Alexie Brooks and Anne Patricia Diaz wearing their Reina Filipinas crowns" decoding="async" height="1400" src="/images/alexie-brooks-anne-diaz.webp" width="1120" />
            <figcaption>Reina Filipinas MGI All Stars 2026</figcaption>
          </figure>
          <div className="duo-feature__copy">
            <p className="eyeline">Two titles · One assignment</p>
            <h2>The All Stars.</h2>
            <p>MGI All Stars creates an international stage for accomplished competitors to return with deeper experience, refined perspective and a new mandate.</p>
            <div className="duo-names">
              <article>
                <span>01</span>
                <h3>Alexie Brooks</h3>
                <p>Iloilo City</p>
                <p>A former international titleholder and varsity athlete whose Reina Filipinas performance united stage command with commercial strength.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Anne Patricia Diaz</h3>
                <p>Manila</p>
                <p>The first transgender woman to win a Reina Filipinas crown, expanding the possibilities of representation on a mainstream national stage.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <article className="all-stars-story">
        <div className="shell all-stars-story__grid">
          <header>
            <p className="eyeline">The national representatives</p>
            <h2>Experience, resilience and a wider idea of who belongs onstage.</h2>
          </header>
          <div className="all-stars-story__intro">
            <p className="article-lede">The two Reina Filipinas MGI All Stars crowns were created for women whose competitive experience can become an advantage, not a closed chapter.</p>
            <p>Alexie Brooks and Anne Patricia Diaz enter the international assignment through different paths. Together, they represent a platform built around the return of proven competitors and the value of lived experience.</p>
          </div>
          <section className="all-stars-profile">
            <span>01</span>
            <div>
              <p className="eyeline">Iloilo City</p>
              <h3>Alexie Brooks</h3>
              <p>Brooks entered Reina Filipinas as Miss Eco International 2025 and a varsity track-and-field athlete. On coronation night, she earned Best in Evening Gown, Best Seller and the Reina KSerene distinction before receiving one of the two All Stars crowns.</p>
              <p>Her campaign combines the discipline of an athlete, the composure of an international titleholder and the commercial fluency expected under the organization’s expanded judging framework.</p>
            </div>
          </section>
          <section className="all-stars-profile">
            <span>02</span>
            <div>
              <p className="eyeline">Manila</p>
              <h3>Anne Patricia Diaz</h3>
              <p>Diaz joined the inaugural field after a Top 6 finish at Miss International Queen 2025. Her victory made her the first transgender woman to receive a primary Reina Filipinas crown.</p>
              <p>Her title gives visible form to a broader shift in Philippine pageantry, where transgender and cisgender women can be evaluated within the same national competition and international pathway.</p>
            </div>
          </section>
        </div>
      </article>

      <section className="assignment-section">
        <div className="shell assignment-section__grid">
          <div>
            <p className="eyeline">International assignment</p>
            <h2>MGI All Stars<br /><em>Second Edition</em></h2>
          </div>
          <div className="assignment-stamp">
            <span>Destination</span>
            <strong>Thailand</strong>
            <p>Representing the Philippines under the Miss Grand International umbrella.</p>
          </div>
        </div>
      </section>
      <SourceRecord title="Reporting on the inaugural titleholders" />
    </>
  )
}
