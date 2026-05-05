import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.css'
import logoImg from '@/assets/logos/oncocel-hero.png'

const STATS = [
  { num: '30', sup: '+', label: 'Pesquisadores ativos',    sub: 'Pós-doc, pós-graduação e IC' },
  { num: '04', sup: '',  label: 'Linhas de pesquisa',      sub: 'Oncologia celular experimental' },
  { num: '20', sup: '+', label: 'Projetos em andamento',   sub: 'IC, mestrado, doutorado, pós-doc' },
  { num: '01', sup: '',  label: 'Objetivo comum',          sub: 'Contribuir com o avanço científico' },
]

const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Hero() {
  return (
    <header id="top" className={styles.hero}>
      {/* Stage */}
      <div className={`${styles.heroStage} reveal`}>
        <div className={styles.heroAurora} aria-hidden="true" />

        <div className={styles.heroLayout}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowPill}>ONCOCEL</span>
              <span>Oncologia Celular Experimental</span>
              <span className={styles.eyebrowSep}>·</span>
              <span>Grupo de Pesquisa</span>
            </span>

            <h1 className={styles.heroTitle}>
              Ciência celular a<br />
              serviço do <em>combate&nbsp;ao&nbsp;câncer</em>.
            </h1>

            <p className={styles.heroLede}>
              O ONCOCEL é um grupo de pesquisa da{' '}
              <strong>Universidade de Pernambuco</strong> dedicado ao estudo de
              processos celulares associados ao câncer — com foco em mecanismos de
              proliferação, migração celular e avaliação de compostos bioativos com
              potencial terapêutico.
            </p>

            <div className={styles.heroActions}>
              <Link href="/#linhas" className="btn btn-primary">
                Conheça nossa pesquisa
                <span className="arrow"><ArrowIcon /></span>
              </Link>
              <Link href="/#juntar" className="btn btn-ghost">
                Junte-se ao grupo
                <span className="arrow"><ArrowIcon /></span>
              </Link>
            </div>
          </div>

          <div className={`${styles.heroVisual} ${styles.desktopOnly}`}>
            <div className={styles.logoWrapper}>
              <Image
                src={logoImg}
                alt="Logo ONCOCEL"
                priority
                className={styles.logoImg}
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        <div className={styles.heroMeta}>
          <div className={styles.metaCoordSection}>
            <div>
              <div className={styles.metaKey}>Coordenação</div>
              <div className={styles.metaVal}>Prof.ª Luiza Rayanna A. de Lima</div>
            </div>
            <Link href="/coordenacao" className={`btn btn-ghost ${styles.coordBtn}`}>
              Conhecer
              <span className="arrow"><ArrowIcon /></span>
            </Link>
          </div>
          <div className={styles.metaDivider} />
          <div>
            <div className={styles.metaKey}>Instituição</div>
            <div className={styles.metaVal}>UPE · Campus Garanhuns</div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="container">
        <div className={`${styles.stats} reveal`} style={{ transitionDelay: '.1s' }}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statNum}>
                {s.num}
                {s.sup && <sup>{s.sup}</sup>}
              </div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statSub}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
