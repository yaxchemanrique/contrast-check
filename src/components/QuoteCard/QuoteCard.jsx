import { useContext, useId, useState } from "react";
import { CheckSquare, Square } from "react-feather";

import { ColorsContext } from "../../providers/ColorsProvider";

import styles from "./QuoteCard.module.css";

export function QuoteCardWithoutSelection({ background, foreground }) {
  return (
    <article
      style={{ backgroundColor: background, color: foreground }}
      className={`${styles.quoteCard} ${styles.quoteCardWithoutSelection}`}
    >
      <p className={styles.title}>Quote no.28</p>
      <p className={styles.content}>
        I like design, I like details, to me it is just another form of
        self-expression.
      </p>
      <address rel="author">John Malkovich</address>
    </article>
  );
}

function QuoteCard({ id, background, foreground }) {
  const [isChecked, setIsChecked] = useState(false);
  const { handleComboSelection } = useContext(ColorsContext);

  const idHook = useId();
  const checkboxId = `${idHook}-${id}`;

  return (
    <article
      style={{ backgroundColor: background, color: foreground }}
      className={styles.quoteCard}
    >
      <label htmlFor={checkboxId}>
        <span className={`${styles.checkbox} `}>
          <CheckSquare
            className={`${isChecked ? styles.show : styles.hidden}`}
            size={20}
          />
          <Square
            className={`${isChecked ? styles.hidden : styles.show}`}
            size={20}
          />
        </span>
        <input
          type="checkbox"
          id={checkboxId}
          value={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            if (e.target.checked) {
              handleComboSelection("add", id);
            } else {
              handleComboSelection("remove", id);
            }
          }}
        />
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
