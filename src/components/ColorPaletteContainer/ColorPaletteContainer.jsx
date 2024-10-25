import styles from './ColorPaletteContainer.module.css'

function ColorPaletteContainer({children}) {
  return (
    <section className={styles.colorPaletteContainer}>{children}</section>
  )
}

export default ColorPaletteContainer