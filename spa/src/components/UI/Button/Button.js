import styles from "./Button.module.css";

const Button = ({children, onClick ,css}) => {
  return (
    <div className={styles[css]}>
      <button  onClick={onClick}>
       {children}
      </button>
    </div>
  );
};
export default Button;
