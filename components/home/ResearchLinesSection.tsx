import styles from './ResearchLinesSection.module.css'

const LINES = [
  {
    num: '01',
    title: 'Bioprospecção Computacional e Experimental de Compostos Bioativos na Oncologia',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <circle cx="13" cy="13" r="2" fill="currentColor" opacity=".5"/>
        <ellipse cx="13" cy="13" rx="11" ry="4.5"/>
        <ellipse cx="13" cy="13" rx="11" ry="4.5" transform="rotate(60 13 13)"/>
        <ellipse cx="13" cy="13" rx="11" ry="4.5" transform="rotate(-60 13 13)"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Descoberta e Validação de Biomarcadores do Microambiente Tumoral para diagnóstico e prognóstico',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <circle cx="13" cy="13" r="4"/>
        <circle cx="13" cy="13" r="9"/>
        <path d="M13 2v4M13 20v4M2 13h4M20 13h4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Avaliação Nutricional, Inflamação e Inovação Diagnóstica em Oncologia',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M9.5 4v8.5L4 22h18L16.5 12.5V4" strokeLinejoin="round" strokeLinecap="round"/>
        <path d="M8.5 4h9" strokeLinecap="round"/>
        <path d="M7 18.5h12" strokeOpacity=".4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Inovação Diagnóstica e Equidade em Saúde na Atenção Oncológica',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <circle cx="13" cy="8" r="3.5"/>
        <path d="M5 23c0-4.5 3.5-7 8-7s8 2.5 8 7"/>
        <circle cx="4" cy="11" r="2.5"/>
        <path d="M1 23c0-3 1.5-5 3-5"/>
        <circle cx="22" cy="11" r="2.5"/>
        <path d="M25 23c0-3-1.5-5-3-5"/>
      </svg>
    ),
  },
]

export default function ResearchLinesSection() {
  return (
    <section
      id="linhas"
      style={{ background: 'linear-gradient(180deg, transparent, var(--lilac-50) 20%, var(--lilac-50) 80%, transparent)' }}
    >
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-kicker">02 · Linhas de pesquisa</div>
            <h2 className="section-title">Onde nossa <em>ciência</em> acontece.</h2>
          </div>
          <p className="section-lede">
            Quatro eixos interdependentes que articulam bioprospecção de compostos,
            descoberta de biomarcadores, avaliação nutricional e equidade no cuidado oncológico.
          </p>
        </div>

        <div className={styles.grid}>
          {LINES.map((line, i) => (
            <article
              key={line.num}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <span className={styles.lineNum}>LINHA · {line.num}</span>
              <div className={styles.lineIcon}>{line.icon}</div>
              <h3 className={styles.lineTitle}>{line.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
