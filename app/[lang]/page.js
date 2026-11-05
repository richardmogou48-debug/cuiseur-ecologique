import Link from "next/link";
import { dict, waMsg } from "../../lib/dictionary";

export default async function Home({ params }) {
  const { lang } = await params;
  const d = dict[lang];
  return (
    <>
      <section className="hero">
        <div className="hero-in stitch">
          <div className="hero-text">
            <h1>{d.hero.title}</h1>
            <p>{d.hero.sub}</p>
            <div className="btns">
              <a className="btn gold" href={waMsg(d.hero.orderMsg)}>{d.hero.cta1}</a>
              <Link className="btn line" href={`/${lang}/partenariats`}>{d.hero.cta2}</Link>
            </div>
          </div>
          <img className="hero-photo" src="/cuiseur-hero.png" alt="Cuiseur écologique et plat mijoté aux légumes" width="960" height="600" />
        </div>
      </section>

      <section className="wrap">
        <h2>{d.stepsTitle}</h2>
        <ol className="steps">
          {d.steps.map((s, i) => (
            <li key={s.t}>
              <span className="n">{i + 1}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>{d.whyTitle}</h2>
          <div className="why">
            {d.why.map((w) => (
              <div key={w.t}>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap image-gallery" aria-label="Le cuiseur en situation">
        <figure><img src="/cuiseur-usage.png" alt="Préparation d'un plat dans le cuiseur écologique" width="800" height="600" /><figcaption>Préparer, couvrir, laisser mijoter.</figcaption></figure>
        <figure><img src="/cuiseur-detail.png" alt="Détail du cuiseur écologique en terre cuite" width="800" height="600" /><figcaption>Un objet simple, durable et chaleureux.</figcaption></figure>
      </section>

      <section className="wrap proof-section">
        <div className="section-intro">
          <p className="eyebrow">{d.proof.eyebrow}</p>
          <h2>{d.proof.title}</h2>
          <p>{d.proof.intro}</p>
        </div>
        <div className="proof-grid">
          {d.proof.stats.map((stat) => (
            <div className="proof-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="testimonial-grid">
          {d.proof.testimonials.map((testimonial) => (
            <figure className="testimonial" key={testimonial.name}>
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>{testimonial.name} <span>{testimonial.role}</span></figcaption>
            </figure>
          ))}
        </div>
        <p className="placeholder-note">{d.proof.note}</p>
      </section>

      <section className="wrap">
        <h2>{d.pricesTitle}</h2>
        <table className="prices">
          <thead>
            <tr>{d.cols.map((c) => <th key={c}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {d.rows.map((r) => (
              <tr key={r[0]}>{r.map((c) => <td key={c}>{c}</td>)}</tr>
            ))}
          </tbody>
        </table>
        <p className="note">{d.pricesNote}</p>
      </section>

      <section className="wrap split">
        <div className="stitch">
          <h3>{d.audience[0].t}</h3>
          <p>{d.audience[0].d}</p>
          <a className="btn navy" href={waMsg(d.hero.orderMsg)}>{d.audience[0].cta}</a>
        </div>
        <div className="stitch dark">
          <h3>{d.audience[1].t}</h3>
          <p>{d.audience[1].d}</p>
          <Link className="btn gold" href={`/${lang}/partenariats`}>{d.audience[1].cta}</Link>
        </div>
      </section>
    </>
  );
}
