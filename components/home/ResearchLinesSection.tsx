import styles from './ResearchLinesSection.module.css'

const LINES = [
  {
    num: '01',
    title: 'Mecanismos de proliferação e migração celular',
    desc: 'Estudo dos processos celulares que governam o crescimento e a disseminação de células tumorais em diferentes neoplasias.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <circle cx="13" cy="13" r="9"/>
        <circle cx="13" cy="13" r="4"/>
        <circle cx="10" cy="10" r="1" fill="currentColor"/>
        <circle cx="16" cy="14" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Compostos bioativos e metabólitos prebióticos',
    desc: 'Avaliação do potencial anticâncer de extratos vegetais, proteínas microalgais e metabólitos produzidos por fermentação prebiótica.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M4 18c3-6 6-6 9 0s6 6 9 0"/>
        <path d="M4 14c3-6 6-6 9 0s6 6 9 0"/>
        <circle cx="13" cy="13" r="10" opacity=".3"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Biomarcadores de diagnóstico e prognóstico',
    desc: 'Expressão diferencial de proteínas como ADAM-10 e ADAMTS-13 como biomarcadores em neoplasias gastrintestinais, pancreáticas e colorretais.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <rect x="5" y="5" width="16" height="16" rx="2"/>
        <path d="M9 9h3M9 13h8M9 17h6"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Epidemiologia molecular e saúde pública',
    desc: 'Impacto da detecção precoce de cânceres, distribuição diagnóstica em populações vulneráveis e estudos clínicos aplicados em oncologia.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M13 3l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/>
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
            Quatro eixos interdependentes que articulam investigação de mecanismos celulares,
            avaliação de compostos bioativos e epidemiologia molecular do câncer.
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
              <p className={styles.lineDesc}>{line.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
