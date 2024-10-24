import React from "react";
import { Star } from "react-feather";
import Tag from "../Tag/Tag";
import styles from "./ContrastEvaluation.module.css";
import { range } from "../../utils";

function ContrastEvaluation({ type, stars }) {
  const className = `${styles.contrastEval} ${
    type === "yes" ? styles.yes : styles.no
  }`;

  return (
    <article className={className}>
      <div className={styles.title}>
        <p className={styles.contrast}>21.00 : 1.00</p>
        <div className={styles.raiting}>
          <span>increíble</span>
          <div className={styles.stars}>
            {range(stars).map((star) => (
              <Star key={star} size={13} fill="current-color" />
            ))}
            {range(5 - stars).map((star) => (
              <Star key={5 - star} size={14} strokeWidth={1} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.header}>Tipo de elemento</p>
        <p className={styles.header}>AA</p>
        <p className={styles.header}>AAA</p>
        <p>
          <span className={styles.smallText}>Aa</span>Texto Normal
        </p>
        <Tag type="yes" />
        <Tag type="no" />
        <p>
          <span className={styles.bigText}>Aa</span>Texto Grande
        </p>
        <Tag type="yes" />
        <Tag type="yes" />
      </div>
    </article>
  );
}

export default ContrastEvaluation;
