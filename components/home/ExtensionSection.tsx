import styles from './ExtensionSection.module.css'

const EXT_ITEMS = [
  {
    title: 'Eventos científicos',
    desc: 'Organização de simpósios, palestras e workshops',
  },
  {
    title: 'Divulgação científica',
    desc: 'Redes sociais, blog e plataformas digitais',
  },
  {
    title: 'Materiais educativos',
    desc: 'Conteúdo sobre câncer, biologia celular e saúde',
  },
  {
    title: 'Ações acadêmicas',
    desc: 'Iniciativas voltadas à comunidade universitária',
  },
  {
    title: 'Integração com IC',
    desc: 'Estudantes interessados em pesquisa e iniciação científica',
  },
]

export default function ExtensionSection() {
  return (
    <section id="extensao">
      <div className="container">
        <div className={`${styles.wrap} reveal`}>
          <div className={styles.extGrid}>

            <div>
              <div className="section-kicker">05 · Extensão</div>
              <h2 className="section-title" style={{ maxWidth: '16ch' }}>
                Aproximando a <em>ciência</em> da sociedade.
              </h2>
              <p className={styles.extLede}>
                O ONCOCEL desenvolve atividades de extensão com o objetivo de promover
                divulgação científica e contribuir para a formação crítica da população —
                tornando o conhecimento sobre câncer e biologia celular mais acessível.
              </p>
            </div>

            <ul className={styles.extList}>
              {EXT_ITEMS.map((item) => (
                <li key={item.title} className={styles.extItem}>
                  <span className={styles.dot} />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}
