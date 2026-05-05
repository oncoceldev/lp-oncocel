import Image from 'next/image'
import Link from 'next/link'
import styles from './Coordenacao.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coordenação — ONCOCEL · UPE',
  description: 'Conheça a mente coordenadora do ONCOCEL, Prof.ª Luiza Rayanna A. de Lima.',
}

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
)

export default function CoordenacaoPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        
        <div className={styles.backNav}>
          <Link href="/" className={styles.backLink}>
            <ArrowIcon /> Voltar para a página inicial
          </Link>
        </div>

        <section className={styles.profileSection}>
          <div className={`${styles.header} reveal`}>
            <div className="section-kicker">Liderança Científica</div>
            <h1 className="section-title">
              Conheça a <em>mente coordenadora</em> do ONCOCEL.
            </h1>
          </div>

          <div className={`${styles.contentGrid} reveal`} style={{ transitionDelay: '.1s' }}>
            
            {/* Coluna da Foto */}
            <div className={styles.photoColumn}>
              <div className={styles.photoWrapper}>
                <Image
                  src="/fotos/Luiza Rayanna Amorim - Coordenadora.jpg"
                  alt="Prof.ª Luiza Rayanna A. de Lima"
                  fill
                  className={styles.photo}
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className={styles.photoDecoration}></div>
              </div>
              
              <div className={styles.infoCard}>
                <h3 className={styles.infoName}>Prof.ª Luiza Rayanna A. de Lima</h3>
                <div className={styles.infoRole}>Coordenadora Geral</div>
                
                <div className={styles.infoLinks}>
                  <a href="mailto:luiza.amorim@upe.br" className={styles.infoLink}>
                    luiza.amorim@upe.br
                  </a>
                  <a href="http://lattes.cnpq.br/3525637613163584" target="_blank" rel="noreferrer" className={styles.infoLink}>
                    Currículo Lattes ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna do Texto */}
            <div className={styles.bioColumn}>
              <div className={styles.bioProse}>
                <p>
                  Professora associada e Livre Docente da Universidade de Pernambuco (UPE) Campus Garanhuns, 
                  Bolsista de Produtividade Pernambucana da FACEPE, vice-coordenadora do Programa de 
                  Pós-Graduação em Saúde e Desenvolvimento Socioambiental, docente do Programa de Pós-Graduação 
                  em Ciências da Saúde, do Mestrado Profissional em Ensino de Biologia em Rede Nacional - PROFBIO 
                  e membro do Conselho Técnico Científico da UNIPECLIN (Unidade de Pesquisa Clínica) da UPE.
                </p>
                <p>
                  Biomédica pela Universidade Federal de Pernambuco (2010), Mestre em Ciências Biológicas pela UFPE (2011) 
                  e Doutora em Biologia Aplicada à Saúde pela UFPE (2015). Realizou doutorado sanduíche na Universidade 
                  do Minho, Portugal, com bolsa financiada pela Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES).
                </p>
                <p>
                  Ministra aulas das disciplinas Citologia, Histologia, Embriologia e Patologia para os cursos de 
                  Bacharelado em Medicina e Licenciatura em Ciências Biológicas. Possui dissertação e tese defendidas 
                  na área de oncologia e, atualmente, investiga a expressão de proteínas da matriz extracelular atuando 
                  como biomarcadores de diagnóstico e prognóstico do câncer, e bioprospecção de moléculas para o tratamento 
                  de neoplasias.
                </p>
                <p>
                  Além disso, orienta estudantes de Doutorado, Mestrado e Iniciação Científica com bolsas financiadas pelo 
                  Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq), Fundação de Amparo à Ciência e 
                  Tecnologia do Estado de Pernambuco (FACEPE), CAPES e Programa de Fortalecimento Acadêmico da UPE.
                </p>
                <p>
                  Desenvolve pesquisa em colaboração com pesquisadores do Laboratório de Imunomodulação e Novas Abordagens 
                  Terapêuticas Suely Galdino - UFPE, Laboratório Integrado em Biotecnologia Aplicada (LIBAS) - ICB/UPE, 
                  Laboratório de Biotecnologia de Proteínas (LABIOPROT) - UFRPE e do Centro de Engenharia Biológica da 
                  Universidade do Minho (Portugal).
                </p>
                <p>
                  Líder do grupo de pesquisa Oncologia Celular (certificado pelo CNPq) cujos esforços concentram-se na 
                  investigação dos processos bioquímicos e celulares a partir de células tumorais <em>in vitro</em> ou amostras 
                  de pacientes obtidas por biópsia por meio de estudos morfológicos e de expressão de biomarcadores tumorais.
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  )
}
