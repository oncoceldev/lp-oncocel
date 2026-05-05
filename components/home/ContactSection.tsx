import styles from './ContactSection.module.css'

const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CONTACT_CARDS = [
  {
    href: 'mailto:pesquisaoncocelupe@gmail.com',
    label: 'E-mail',
    value: 'pesquisaoncocelupe@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="4" width="14" height="10" rx="2"/>
        <path d="M2 6l7 5 7-5"/>
      </svg>
    ),
  },
  {
    href: 'https://instagram.com/onco.bio',
    label: 'Instagram',
    value: '@onco.bio',
    target: '_blank',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="2" width="14" height="14" rx="4"/>
        <circle cx="9" cy="9" r="3"/>
        <circle cx="13" cy="5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    href: undefined,
    label: 'Localização',
    value: 'Garanhuns, Pernambuco',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 16s6-4.5 6-9a6 6 0 10-12 0c0 4.5 6 9 6 9z"/>
        <circle cx="9" cy="7" r="2"/>
      </svg>
    ),
  },
  {
    href: undefined,
    label: 'Instituição',
    value: 'UPE — Campus Garanhuns',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 15V5a2 2 0 012-2h8a2 2 0 012 2v10M3 15h12M6 8h6M6 11h4"/>
      </svg>
    ),
  },
]

export default function ContactSection() {
  return (
    <section id="contato">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-kicker">08 · Contato</div>
            <h2 className="section-title">Fale <em>conosco</em>.</h2>
          </div>
        </div>

        <div className={`${styles.grid} reveal`}>
          <div className={styles.cards}>
            {CONTACT_CARDS.map((card) => {
              const Tag = card.href ? 'a' : 'div'
              return (
                <Tag
                  key={card.label}
                  className={styles.card}
                  {...(card.href ? { href: card.href } : {})}
                  {...(card.target ? { target: card.target, rel: 'noreferrer' } : {})}
                >
                  <div className={styles.cardIcon}>{card.icon}</div>
                  <div className={styles.cardKey}>{card.label}</div>
                  <div className={styles.cardVal}>{card.value}</div>
                </Tag>
              )
            })}
          </div>

          <div>
            <h3 className={styles.ctaTitle}>Interessado em colaborar?</h3>
            <p className={styles.ctaDesc}>
              Para colaborações de pesquisa, parcerias interinstitucionais ou apoio a
              atividades de extensão, entre em contato pelos canais ao lado ou escreva-nos
              diretamente.
            </p>
            <a
              className={`btn btn-primary ${styles.ctaBtn}`}
              href="mailto:pesquisaoncocelupe@gmail.com"
            >
              Enviar mensagem
              <span className="arrow"><ArrowIcon /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
