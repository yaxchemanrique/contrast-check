import { Check, X } from "react-feather";
import styles from "./Tag.module.css";

function Tag({ type }) {
  
  if (type === "yes") {
    return (
      <div className={`${styles.tag} ${styles.yes}`}>
        <span>sí</span>
        <Check size={18} />
      </div>
    );
  }

  if (type === "no") {
    return (
      <div className={`${styles.tag} ${styles.no}`}>
        <span>no</span>
        <X size={18} />
      </div>
    );
  }
}

export default Tag;
