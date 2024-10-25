import React from "react";
import { range } from "../../utils";
import { Star } from "react-feather";

import Tag from "../Tag/Tag";

import styles from "./ContrastEvaluation.module.css";

function ContrastEvaluation({ type, stars, contrast, large, small, overall }) {
  const className = `${styles.contrastEval} ${
    type === "yes" ? styles.yes : styles.no
  }`;

  const contrastString = contrast.slice(0, 5);
  const noramalAA = small === "AA" || small === "AAA" ? "yes" : "no";
  const largeAA = large === "AA" || large === "AAA" ? "yes" : "no";
  const noramalAAA = small === "AAA" ? "yes" : "no";
  const largeAAA = large === "AAA" ? "yes" : "no";

  const overallString = overall === 'Yup' ? 'increíble' : overall === 'Kinda' ? 'hmmm...' : 'nope'

  return (
    <article className={className}>
      <div className={styles.title}>
        <p className={styles.contrast}>{contrastString} : 1.00</p>
        <div className={styles.raiting}>
          <span>{overallString}</span>
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
        <Tag type={noramalAA} />
        <Tag type={noramalAAA} />
        <p>
          <span className={styles.bigText}>Aa</span>Texto Grande
        </p>
        <Tag type={largeAA} />
        <Tag type={largeAAA} />
      </div>
    </article>
  );
}

export default ContrastEvaluation;
