import React from "react";
import styles from "./ColorCard.module.css";

function ColorCard({ color }) {
  return (
    <div className={styles.colorCard}>
      <div style={{ backgroundColor: color }} className={styles.color}></div>
      <div>
        <p>nombre del color:</p>
        <p className={styles.colorTitle}>periwinkle gray</p>
      </div>
      <p className={styles.codeContainer}>
        hex code: <span>{color}</span>
      </p>
    </div>
  );
}

export default ColorCard;
