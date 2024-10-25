import React from "react";
import { Copy } from "react-feather";

import styles from "./ColorCardDescription.module.css";

function ColorCardDescription({ background, foreground }) {
  const clipboardText = `background-color: ${background}; color: ${foreground};`;

  async function handleCopyClick() {
    try {
      await window.navigator.clipboard.writeText(clipboardText);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      alert("Copy to clipboard failed.");
    }
  }

  return (
    <div className={styles.colorCardDescription}>
      <div className={styles.iconContainer}>
        <button onClick={handleCopyClick}>
          <Copy size={18} />
        </button>
      </div>
      <p>
        fondo: <span>{background}</span>
      </p>
      <p>
        texto: <span>{foreground}</span>
      </p>
    </div>
  );
}

export default ColorCardDescription;
