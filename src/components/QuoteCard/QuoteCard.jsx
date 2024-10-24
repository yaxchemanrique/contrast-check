import { useState } from "react";
import { CheckSquare, Square } from "react-feather";

import styles from "./QuoteCard.module.css";

function QuoteCard({ id, background, foreground }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <article
      style={{ backgroundColor: background, color: foreground }}
      className={styles.quoteCard}
    >
      <label htmlFor={id}>
        <span className={`${styles.checkbox} `}>
          <CheckSquare className={`${isChecked ? styles.show : styles.hidden}`} size={20}/>
          <Square className={`${isChecked ? styles.hidden : styles.show}`} size={20}/>
        </span>
        <input type="checkbox" id={id} value={isChecked} onChange={(e) => setIsChecked(e.target.checked)}/>
        <p className={styles.title}>Quote no.28</p>
        <p className={styles.content}>
          I like design, I like details, to me it is just another form of
          self-expression.
        </p>
        <address rel="author">John Malkovich</address>
      </label>
    </article>
  );
}

export default QuoteCard;
