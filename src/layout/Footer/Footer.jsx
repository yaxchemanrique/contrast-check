import { GitHub, Instagram } from "react-feather";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.meshTitle}>
          <div>
            <object data="/contrast-mesh.svg"></object>
          </div>
          <address rel="author" className={styles.authorTag}>
            by Yaxche Manrique
          </address>
        </div>
        <ul>
          <li>
            <a href="https://github.com/yaxchemanrique/" target="_blank">
              <GitHub color={"var(--clr-neutral-50)"} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yaxchemanrique/" target="_blank">
              <Instagram color={"var(--clr-neutral-50)"} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
