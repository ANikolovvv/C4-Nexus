import styles from "./Title.module.css";

const Title = ({ children }) => {
  return (
    <div className={styles.head_box}>
      <h1 className={[styles.head]}>{children}</h1>
    </div>
  );
};

export default Title;
