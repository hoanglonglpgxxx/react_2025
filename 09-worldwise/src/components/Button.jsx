import styles from "./Button.module.css";
function Button({ children, onClick, type, isSubmit = false }) {
  return (
    <button
      type={!isSubmit ? "button" : "submit"}
      className={`${styles.btn} ${styles[type]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
