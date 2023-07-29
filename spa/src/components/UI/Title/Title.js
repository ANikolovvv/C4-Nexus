import styles from "./Title.module.css";

const Title = ({ category,description }) => {
  return (
    <div className={styles.head_box}>
      <h2 className={styles.head}>{category}</h2>
      <p className={styles.desc_title}>{description}</p>
    </div>
  );
};

export default Title;
