import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon.jsx'

export default function Home() {
  return (
    <>
      <section className="home-hero home-hero--video">
        <video
          aria-hidden="true"
          autoPlay
          className="home-hero__video"
          disablePictureInPicture
          loop
          muted
          playsInline
          poster="/media/reina-hero-poster.webp"
          preload="metadata"
          tabIndex="-1"
        >
          <source src="/media/reina-hero.mp4" type="video/mp4" />
        </video>

        <div className="shell home-hero__minimal">
          <div className="home-hero__minimal-copy">
            <h1 className="hero-title" aria-label="Reina Filipinas 2026">
              <span className="hero-title__main" data-text="REINA" aria-hidden="true">Reina</span>
              <span className="hero-title__lower" aria-hidden="true">
                <span className="hero-title__name">Filipinas</span>
                <span className="hero-title__year">2026</span>
              </span>
            </h1>
            <p>Highlights from the inaugural Grand Coronation Night at Newport Performing Arts Theater.</p>
            <div className="button-row">
              <Link className="button button--gold" to="/the-pageant">Read the coronation story <ArrowIcon /></Link>
              <Link className="button button--ghost" to="/about">About Reina Filipinas</Link>
            </div>
            <div className="home-hero__details" aria-label="Grand Coronation Night at Newport Performing Arts Theater in Pasay City">
              <span>Grand Coronation Night</span>
              <span>Newport Performing Arts Theater · Pasay City</span>
            </div>
          </div>
          <a className="home-hero__scroll" href="#home-institution">
            <span>Explore</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

      <article className="home-journal">
        <section className="home-journal__institution" id="home-institution">
          <div className="shell home-journal__institution-grid">
            <div className="home-journal__number" aria-hidden="true">01</div>
            <div className="home-journal__copy">
              <p className="eyeline">A new national institution</p>
              <h2>Built to prepare Philippine representatives for the global Miss Grand stage.</h2>
              <p className="article-lede">Reina Filipinas is the national organization selecting and preparing delegates for Miss Grand International and MGI All Stars.</p>
              <p>Spearheaded by President and CEO Jojo Bragais, with Emma Mary Tiglao as National Director and Nawat Itsaragrisil as Executive Partner, the organization connects national competition, delegate development and international representation within one focused platform.</p>
              <Link className="text-link" to="/about">Meet the organization <ArrowIcon /></Link>
            </div>
            <figure className="home-journal__logo-frame">
              <img alt="Reina Filipinas official logo" decoding="async" height="1400" loading="lazy" src="/images/reina-filipinas-logo.webp" width="1400" />
            </figure>
          </div>
        </section>

        <section className="home-journal__coronation">
          <div className="shell home-journal__coronation-grid">
            <figure>
              <img alt="The three inaugural Reina Filipinas titleholders" decoding="async" height="1400" loading="lazy" src="/images/titleholders-2026.webp" width="1120" />
              <figcaption>Angelica Lopez, Alexie Brooks and Anne Patricia Diaz</figcaption>
            </figure>
            <div className="home-journal__copy home-journal__copy--light">
              <p className="eyeline">The inaugural coronation</p>
              <h2>Twenty-one delegates. Three crowns. One defining first night.</h2>
              <p>At Newport Performing Arts Theater, the inaugural competition crowned Angelica Lopez for Miss Grand International and Alexie Brooks and Anne Patricia Diaz for MGI All Stars.</p>
              <p>The evening brought together an international judging panel, a four-person hosting team and a final royal court that established Reina Filipinas as a new force in Philippine pageantry.</p>
              <div className="home-journal__figures" aria-label="Twenty-one delegates, three crowns, inaugural edition">
                <div><strong>21</strong><span>Delegates</span></div>
                <div><strong>03</strong><span>Crowns</span></div>
                <div><strong>01</strong><span>Inaugural edition</span></div>
              </div>
              <Link className="text-link text-link--light" to="/the-pageant">Read the full coronation article <ArrowIcon /></Link>
            </div>
          </div>
        </section>

        <section className="home-journal__pathways">
          <div className="shell">
            <header className="home-journal__pathways-heading">
              <p className="eyeline">The international pathways</p>
              <h2>Three women carry the first Reina Filipinas campaign.</h2>
            </header>
            <div className="home-pathway-grid">
              <article>
                <figure><img alt="Angelica Lopez of Palawan" decoding="async" height="1400" loading="lazy" src="/images/angelica-lopez.webp" width="1119" /></figure>
                <div>
                  <p className="eyeline">Miss Grand International · India</p>
                  <h3>Angelica Lopez</h3>
                  <p>The Reina Filipinas Grand International 2026 titleholder begins the country’s next Miss Grand International campaign.</p>
                  <Link className="text-link" to="/miss-grand-philippines">Follow her national assignment <ArrowIcon /></Link>
                </div>
              </article>
              <article>
                <figure><img alt="Alexie Brooks and Anne Patricia Diaz" decoding="async" height="1400" loading="lazy" src="/images/alexie-brooks-anne-diaz.webp" width="1120" /></figure>
                <div>
                  <p className="eyeline">MGI All Stars · Thailand</p>
                  <h3>Alexie Brooks & Anne Patricia Diaz</h3>
                  <p>Two experienced titleholders represent the Philippines at the second edition of the international All Stars competition.</p>
                  <Link className="text-link" to="/mgi-all-stars">Meet the All Stars <ArrowIcon /></Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="home-campaign">
          <div className="shell home-campaign__inner">
            <h2>Follow the first Reina Filipinas international campaign.</h2>
            <nav aria-label="International campaign links" className="home-campaign__links">
              <Link to="/miss-grand-philippines"><span>Miss Grand Philippines</span><ArrowIcon /></Link>
              <Link to="/mgi-all-stars"><span>MGI All Stars</span><ArrowIcon /></Link>
              <Link to="/contact"><span>Official channels</span><ArrowIcon /></Link>
            </nav>
          </div>
        </section>
      </article>
    </>
  )
}
