'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from './Nav.module.css'
import logoHeader from '@/assets/logos/oncocel-header.png'

const NAV_LINKS = [
  { label: 'Sobre',       href: '/#sobre',       anchor: 'sobre'       },
  { label: 'Pesquisa',    href: '/#linhas',      anchor: 'linhas'      },
  { label: 'Integrantes', href: '/integrantes',  route: '/integrantes' },
  { label: 'Extensão',    href: '/#extensao',    anchor: 'extensao'    },
  { label: 'Publicações', href: '/publicacoes',  route: '/publicacoes' },
  { label: 'Contato',     href: '/#contato',     anchor: 'contato'     },
] as const

const HOME_SECTIONS = ['sobre', 'linhas', 'integrantes', 'projetos', 'extensao', 'publicacoes', 'juntar', 'contato']

export default function Nav() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('sobre')

  useEffect(() => {
    if (pathname !== '/') return

    const handleScroll = () => {
      const y = window.scrollY + 120
      let current = 'sobre'
      HOME_SECTIONS.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  function isActive(link: (typeof NAV_LINKS)[number]) {
    if ('route' in link) return pathname === link.route
    if (pathname !== '/') return false
    return activeSection === link.anchor
  }

  return (
    <nav className={styles.nav} aria-label="Principal">
      <div className={styles.navInner}>
        <Link href="/" className={styles.brand}>
          <div className={styles.logoWrapper}>
            <Image
              src={logoHeader}
              alt="ONCOCEL"
              priority
              className={styles.logoImg}
            />
          </div>
        </Link>

        <div className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${styles.navLink} ${isActive(link) ? styles.navLinkActive : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/#juntar" className={styles.navCta}>
          <span className={styles.dot} />
          Faça parte
        </Link>
      </div>
    </nav>
  )
}
