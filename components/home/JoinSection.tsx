import styles from './JoinSection.module.css'

const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LEVELS = [
  {
    title: 'Pós-doutorado',
    num: '01',
    desc: 'Bolsas da FACEPE (DCR, BFP) e CNPq (PDJ, PDS). Candidatos devem enviar proposta alinhada às linhas de pesquisa.',
  },
  {
    title: 'Pós-graduação',
    num: '02',
    desc: 'Mestrado e doutorado via PPGSDS e PPGCS, com seleções geralmente em setembro e possibilidade de bolsa.',
  },
  {
    title: 'Iniciação científica',
    num: '03',
    desc: 'Estudantes de graduação podem integrar o grupo desde os primeiros períodos — a formação acadêmica é valorizada desde o início.',
  },
]

export default function JoinSection() {
  return (
    <section id="juntar">
      <div className="container">
        <div className={`${styles.join} reveal`}>
          <div className={styles.joinInner}>

            <div>
              <div className={`section-kicker ${styles.kicker}`}>07 · Faça parte do grupo</div>
              <h2 className={styles.joinTitle}>
                Pesquise conosco na<br /><em>oncologia experimental.</em>
              </h2>
              <p className={styles.joinLede}>
                O ONCOCEL está aberto a estudantes e pesquisadores em diferentes níveis de
                formação, oferecendo um ambiente dinâmico de aprendizado, desenvolvimento
                acadêmico e colaboração científica.
              </p>
              <div className={styles.joinActions}>
                <a
                  className={`btn btn-ghost ${styles.emailBtn}`}
                  href="mailto:pesquisaoncocelupe@gmail.com"
                >
                  pesquisaoncocelupe@gmail.com
                  <span className="arrow"><ArrowIcon /></span>
                </a>
              </div>
            </div>

            <div className={styles.levels}>
              {LEVELS.map((lv) => (
                <div key={lv.num} className={styles.level}>
                  <h4 className={styles.levelTitle}>
                    {lv.title}
                    <span className={styles.levelNum}>{lv.num}</span>
                  </h4>
                  <p className={styles.levelDesc}>{lv.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
