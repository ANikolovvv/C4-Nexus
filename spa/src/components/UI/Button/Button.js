import styles from "./Button.module.css";

const Button = ({ onClick, stock }) => {
  return (
    <div className={styles.load_box}>
      <button className={styles.load_btn} onClick={onClick}>
        {stock.length <= 4 ? "Load More" : "Load Less"}
      </button>
    </div>
  );
};
export default Button;
