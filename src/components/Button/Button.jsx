import styles from './Button.module.css'
function Button({ icon, clickFunction, children }) {
  return (
    <button className={styles.button} onClick={clickFunction}>
      <span>{children}</span>
      {icon}
    </button>
  );
}

export default Button;
