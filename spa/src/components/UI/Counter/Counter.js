import styles from "./Counter.module.css";

const Counter = ({ count, total }) => {
  return (
    <div className={styles["counter"]}>
      {count}/{total} total products
    </div>
  );
};
export default Counter;
