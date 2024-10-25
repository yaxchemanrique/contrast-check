import styles from "./ColorCard.module.css";

function ColorCard({ color, name }) {
  return (
    <div className={styles.colorCard}>
      <div style={{ backgroundColor: color }} className={styles.color}></div>
      <div>
        <p>nombre del color:</p>
        <p className={styles.colorTitle}>{name}</p>
      </div>
      <p className={styles.codeContainer}>
        hex code: <span>{color}</span>
      </p>
    </div>
  );
}

export default ColorCard;
