import React from "react";
import styles from "./ColorCombosContainer.module.css";

function ColorCombosContainer({ children }) {
  return <section className={styles.colorCombosContainer}>{children}</section>;
}

export default ColorCombosContainer;
