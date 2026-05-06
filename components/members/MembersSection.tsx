'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MEMBERS, type RoleKey } from '@/data/members'
import styles from './MembersSection.module.css'
import CellLoader from '@/components/CellLoader'

type Filter = 'all' | RoleKey

const FILTERS: { key: Filter; label: string; count: number }[] = [
  { key: 'all',    label: 'Todos',              count: MEMBERS.length },
  { key: 'coord',  label: 'Coordenação',        count: MEMBERS.filter(m => m.roleKey === 'coord').length  },
  { key: 'colab',  label: 'Colaboradores',      count: MEMBERS.filter(m => m.roleKey === 'colab').length  },
  { key: 'dout',   label: 'Doutorandos',        count: MEMBERS.filter(m => m.roleKey === 'dout').length   },
  { key: 'mest',   label: 'Mestrandos',         count: MEMBERS.filter(m => m.roleKey === 'mest').length   },
  { key: 'ic',     label: 'Iniciação Científica', count: MEMBERS.filter(m => m.roleKey === 'ic').length   },
]

const AVATAR_GRADS = [
  ['#6f3780', '#50275c'],
  ['#925aa3', '#6f3780'],
  ['#cbb0d4', '#925aa3'],
  ['#a87cb4', '#50275c'],
  ['#e0cce5', '#6f3780'],
  ['#6f3780', '#3d1e46'],
  ['#925aa3', '#50275c'],
  ['#f0e6f2', '#6f3780'],
]

const ORDER: Record<RoleKey, number> = { coord: 0, dout: 1, mest: 2, ic: 3, colab: 4 }

function hash(s: string) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(p => p.length > 0 && !/^(da|de|do|das|dos)$/i.test(p))
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

const LattesIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="2" y="1" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M4.5 4.5h5M4.5 7h5M4.5 9.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

export default function MembersSection() {
  const [active, setActive] = useState<Filter>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [isLoading, setIsLoading] = useState(true)

  // Simular carregamento inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Ajustar itens por página conforme tela
  useEffect(() => {
    const updateItems = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 4 : 12)
    }
    updateItems()
    window.addEventListener('resize', updateItems)
    return () => window.removeEventListener('resize', updateItems)
  }, [])

  const sortedMembers = [...MEMBERS].sort((a, b) => {
    if (a.roleKey !== b.roleKey) return ORDER[a.roleKey] - ORDER[b.roleKey]
    return a.name.localeCompare(b.name, 'pt-BR')
  })

  const visible = active === 'all' ? sortedMembers : sortedMembers.filter(m => m.roleKey === active)
  const totalPages = Math.ceil(visible.length / itemsPerPage)

  const handleFilterChange = (key: Filter) => {
    setActive(key)
    setCurrentPage(1)
  }

  const pagedMembers = visible.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <>
      {isLoading && <CellLoader />}
      <section id="integrantes">
        <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-kicker">03 · Integrantes</div>
            <h2 className="section-title">Quem faz a <em>pesquisa</em> acontecer.</h2>
          </div>
          <p className="section-lede">
            Uma equipe multidisciplinar integrando pós-doutorandos, pós-graduandos e
            estudantes de iniciação científica.
          </p>
        </div>

        {/* Filtros */}
        <div className={`${styles.membersHead} reveal`}>
          <div className={styles.filters} role="tablist">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                role="tab"
                aria-selected={active === f.key}
                className={`${styles.filter} ${active === f.key ? styles.filterActive : ''}`}
                onClick={() => handleFilterChange(f.key)}
              >
                {f.label}
                <span className={styles.count}>{f.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid de membros */}
        <div className={styles.grid}>
          {pagedMembers.map((m) => {
            const [c1, c2] = AVATAR_GRADS[hash(m.name) % AVATAR_GRADS.length]
            return (
              <article key={m.lattes} className={`${styles.member} ${m.roleKey === 'colab' ? styles.colabCard : ''}`}>
                <div className={styles.avatarWrapper}>
                  {m.photo ? (
                    <div className={styles.avatar} style={{ position: 'relative' }}>
                      <Image
                        src={'/fotos/' + encodeURIComponent(m.photo)}
                        alt={m.name}
                        fill
                        className={styles.avatarImg}
                        sizes="80px"
                        style={{ 
                          objectPosition: m.photoOffset ? `center ${m.photoOffset}` : 'center'
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className={styles.avatar}
                      style={{ background: `linear-gradient(140deg, ${c1}, ${c2})` }}
                    >
                      {initials(m.name)}
                    </div>
                  )}
                </div>

                <div>
                  <div className={styles.memberName}>{m.name}</div>
                  <div style={{ marginTop: 6 }}>
                    <span className={`${styles.memberRole} ${styles[`role-${m.roleKey}`]}`}>
                      {m.role}
                    </span>
                  </div>
                </div>

                <p className={`${styles.memberProject} ${!m.project ? styles.empty : ''}`}>
                  {m.project || 'Projeto em definição'}
                </p>

                <div
                  className={styles.memberFoot}
                  style={!m.email || m.roleKey === 'colab' ? { justifyContent: 'flex-end' } : undefined}
                >
                  {m.email && m.roleKey !== 'colab' && (
                    <a
                      className={styles.memberEmail}
                      href={`mailto:${m.email}`}
                      title={m.email}
                    >
                      {m.email}
                    </a>
                  )}
                  <a
                    className={styles.lattesBtn}
                    href={m.lattes}
                    target="_blank"
                    rel="noreferrer"
                    title={`Currículo Lattes de ${m.name}`}
                    aria-label={`Lattes de ${m.name}`}
                  >
                    <LattesIcon />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.pageBtn}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Página anterior"
            >
              &larr;
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`${styles.pageBtn} ${currentPage === page ? styles.pageActive : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            <button
              className={styles.pageBtn}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Próxima página"
            >
              &rarr;
            </button>
          </div>
        )}
      </div>
    </section>
    </>
  )
}
