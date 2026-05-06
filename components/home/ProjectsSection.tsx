import styles from './ProjectsSection.module.css'

const PROJECTS = [
  {
    num: '01',
    title: 'Triagem de metabólitos prebióticos com atividade anticâncer: uma abordagem in silico e in vitro a partir da modulação do microbioma intestinal',
  },
  {
    num: '02',
    title: 'Critérios GLIM vs. ESPEN para o diagnóstico de desnutrição precoce e sua correlação com o perfil de mediadores inflamatórios em pacientes oncológicos',
  },
  {
    num: '03',
    title: 'Avaliação da expressão diferencial de componentes da matriz extracelular como biomarcadores de diagnóstico e prognóstico de neoplasias gastrointestinais',
  },
  {
    num: '04',
    title: 'Inovação diagnóstica e equidade racial no controle do câncer do colo do útero em Pernambuco: implantação do teste DNA-HPV e análise da linha de cuidado',
  },
]

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
          {PROJECTS.map((project, i) => (
            <article
              key={project.num}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <span className={styles.num}>PROJETO · {project.num}</span>
              <h3 className={styles.title}>{project.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
