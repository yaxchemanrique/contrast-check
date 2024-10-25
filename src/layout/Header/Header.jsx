import styles from "./Header.module.css";

function Header() {

  return (
    <header className={`${styles.header}`}>
      <div className="wrapper">
        <nav className={styles.nav}>
          <div className={styles.logoContainer}>Yaxche Manrique</div>
          <ul>
            <li>
              <a href="https://flexbox.yaxchemanrique.com/" target="_blank">
                Flexbox
              </a>
            </li>
            <li>
              <a
                href="https://yaxchemanrique.notion.site/Links-Dashboard-f8503b5d94c544aeac3ffe4b5b6c246e"
                target="_blank"
              >
                Más Recursos
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.meshTitle}>
          <h1>contrast check</h1>
          <div>
            <object data="/contrast-mesh.svg"></object>
          </div>
          <address rel="author" className={styles.authorTag}>
            by Yaxche Manrique
          </address>
        </div>
      </div>
    </header>
  );
}

export default Header;
