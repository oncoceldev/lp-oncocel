'use client'

import { useState } from 'react'
import { PUBLICATIONS, type PublicationCategory } from '@/data/publications'
import styles from './PublicationsSection.module.css'

const TABS: { key: PublicationCategory; label: string }[] = [
  { key: 'artigos',   label: 'Artigos científicos'     },
  { key: 'congressos', label: 'Trabalhos em congresso' },
  { key: 'resumos',   label: 'Resumos publicados'      },
]

export default function PublicationsSection() {
  const [activeTab, setActiveTab] = useState<PublicationCategory>('artigos')

  const filtered = PUBLICATIONS.filter(p => p.category === activeTab)

  return (
    <section id="publicacoes">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-kicker">06 · Publicações</div>
            <h2 className="section-title">Produção <em>científica</em>.</h2>
          </div>
          <p className="section-lede">
            Artigos, trabalhos em congressos e resumos publicados pelo grupo ao longo
            das últimas temporadas de pesquisa.
          </p>
        </div>

        <div className="reveal">
          {/* Tabs */}
          <div className={styles.tabs} role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Lista */}
          <div className={styles.list}>
            {filtered.length === 0 ? (
              <div className={styles.empty}>
                Lista de publicações em atualização.
                <br />
                <span className={styles.emptySub}>
                  Para referências atualizadas, consulte os currículos Lattes dos integrantes.
                </span>
              </div>
            ) : (
              filtered.map((pub, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.year}>{pub.year}</div>
                  <div className={styles.body}>
                    <h4>{pub.title}</h4>
                    <p>{pub.authors}</p>
                  </div>
                  <span className={styles.venue}>{pub.venue}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
