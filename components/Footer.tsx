import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'
import logoFooter from '@/assets/logos/oncocel-hero.png'

const FOOTER_LINKS = [
  {
    title: 'Navegação',
    links: [
      { label: 'Sobre o Grupo', href: '/#sobre' },
      { label: 'Linhas de Pesquisa', href: '/#linhas' },
      { label: 'Projetos', href: '/#projetos' },
      { label: 'Publicações', href: '/publicacoes' },
    ]
  },
  {
    title: 'Comunidade',
    links: [
      { label: 'Integrantes', href: '/integrantes' },
      { label: 'Extensão', href: '/#extensao' },
      { label: 'Faça Parte', href: '/#juntar' },
      { label: 'Contato', href: '/#contato' },
    ]
  }
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footTop}>
          <div className={styles.brandSide}>
            <Link href="/" className={styles.brand}>
              <div className={styles.logoWrapper}>
                <Image
                  src={logoFooter}
                  alt="ONCOCEL"
                  className={styles.logoImg}
                />
              </div>
            </Link>
            <p className={styles.brandDesc}>
              Grupo de Pesquisa em Oncologia Celular Experimental da Universidade de Pernambuco. 
              Dedicado ao avanço do conhecimento científico e formação de pesquisadores.
            </p>
          </div>

          <div className={styles.linksGrid}>
            {FOOTER_LINKS.map((group) => (
              <div key={group.title} className={styles.linkGroup}>
                <h4 className={styles.groupTitle}>{group.title}</h4>
                <ul className={styles.linksList}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.footLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.contactSide}>
            <h4 className={styles.groupTitle}>Instituição</h4>
            <p className={styles.instInfo}>
              <strong>UPE · Campus Garanhuns</strong><br />
              R. Cap. Pedro Rodrigues, 105<br />
              São José, Garanhuns - PE<br />
              CEP: 55294-902
            </p>
          </div>
        </div>

        <div className={styles.footBottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} ONCOCEL · Todos os direitos reservados.
          </div>
          <div className={styles.legal}>
            Desenvolvido pela equipe ONCOCEL
          </div>
        </div>
      </div>
    </footer>
  )
}
