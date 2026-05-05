import styles from './CellLoader.module.css'

export default function CellLoader() {
  return (
    <div className={styles.loaderOverlay}>
      <svg width="0" height="0" className={styles.svgFilter}>
        <defs>
          <filter id="mitosis-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className={styles.mitosisContainer}>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.nucleus}></div>
      </div>
      
      <p className={styles.loadingText}>Preparando ambiente celular...</p>
    </div>
  )
}
