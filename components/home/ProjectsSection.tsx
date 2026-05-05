import styles from './ProjectsSection.module.css'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      style={{ background: 'linear-gradient(180deg, transparent, var(--lilac-50) 30%, transparent)' }}
    >
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-kicker">04 · Projetos</div>
            <h2 className="section-title">Iniciativas em <em>andamento</em>.</h2>
          </div>
          <p className="section-lede">
            Projetos de pesquisa que organizam a investigação científica do grupo em torno
            de objetivos comuns e parcerias estratégicas.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.featured} reveal`}>
            <span className={styles.tag}>Projeto em destaque</span>
            <h3 className={styles.title}>
              Potencial anticâncer de metabólitos secundários da fermentação prebiótica
            </h3>
            <p className={styles.desc}>
              Investigação integrada do efeito antiproliferativo e citotóxico de metabólitos
              produzidos por probióticos e fungos do gênero <em>Aspergillus</em> em linhagens
              de câncer colorretal e pulmonar.
            </p>
            <a className={styles.link} href="#">
              Ver detalhes do projeto <ArrowIcon />
            </a>
          </article>

          <article className={`${styles.card} reveal`} style={{ transitionDelay: '.05s' }}>
            <span className={styles.tag}>Em desenvolvimento</span>
            <h3 className={styles.title}>
              ADAMTS-13 e ADAM-10 como biomarcadores em neoplasias
            </h3>
            <p className={styles.desc}>
              Avaliação da expressão diferencial dessas proteínas como biomarcadores de
              diagnóstico e prognóstico em neoplasias gastrintestinais, pancreáticas e colorretais.
            </p>
            <a className={styles.link} href="#">
              Ver detalhes do projeto <ArrowIcon />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
