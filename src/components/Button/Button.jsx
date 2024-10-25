import styles from './Button.module.css'

function Button({ icon, clickFunction, children }) {
  const className = `${children ? styles.buttonWithText : styles.buttonIcon}`
  
  return (
    <button className={className} onClick={clickFunction}>
      {children && <span>{children}</span>}
      {icon}
    </button>
  );
}

export default Button;
