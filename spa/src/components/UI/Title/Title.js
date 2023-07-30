import Counter from "../Counter/Counter";
import styles from "./Title.module.css";

const Title = ({ category, description, data, stock }) => {
  return (
    <div className={styles.head_box}>
      <h2 className={styles.head}>{category}</h2>
      <p className={styles.desc_title}>{description}</p>
      <Counter count={stock.length} total={data.length} />
    </div>
  );
};

export default Title;
