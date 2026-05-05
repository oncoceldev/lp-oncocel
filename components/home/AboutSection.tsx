import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="section-kicker">01 · Sobre o grupo</div>
        <div className={styles.grid}>

          <div className={`${styles.copy} reveal`}>
            <p className={styles.lead}>
              Somos um grupo vinculado à <em>Universidade de Pernambuco</em> dedicado à
              oncologia experimental e biologia celular.
            </p>
            <p>
              Atuamos na investigação de mecanismos celulares envolvidos na progressão
              tumoral e na avaliação de substâncias com potencial terapêutico — com especial
              interesse em metabólitos secundários, proteínas bioativas e biomarcadores de
              diagnóstico e prognóstico.
            </p>
            <p>
              Além da produção científica, o ONCOCEL tem como missão central a{' '}
              <strong>formação de recursos humanos</strong> na área de oncologia experimental,
              integrando estudantes de iniciação científica, mestrado, doutorado e
              pós-doutorado em um ambiente colaborativo e rigoroso.
            </p>
          </div>

          <aside className={`${styles.card} reveal`} style={{ transitionDelay: '.1s' }}>
            <h3 className={styles.cardTitle}>Identidade do grupo</h3>
            {[
              { k: 'Sigla',       v: 'ONCOCEL' },
              { k: 'Área',        v: 'Oncologia Celular Experimental' },
              { k: 'Instituição', v: 'Univ. de Pernambuco · UPE' },
              { k: 'Campus',      v: 'Garanhuns, PE' },
              { k: 'Coord.',      v: 'Luiza R. Amorim de Lima' },
              { k: 'Vinculado a', v: 'PPGSDS · PPGCS' },
            ].map((row) => (
              <div key={row.k} className={styles.infoRow}>
                <span className={styles.infoKey}>{row.k}</span>
                <span className={styles.infoVal}>{row.v}</span>
              </div>
            ))}
          </aside>

        </div>
      </div>
    </section>
  )
}
