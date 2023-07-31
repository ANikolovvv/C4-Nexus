import styles from "./PngsBox.module.css";
import { Link } from "react-router-dom";

const PngsBox = ({ css }) => {
  return (
    <div className={styles[css]}>
      <Link className={styles.pngs} to="/">
        <img src="image002.png" alt="png" />
      </Link>
      <Link className={styles.pngs} to="/">
        <img src="image003.png" alt="png" />
      </Link>
      <Link className={styles.pngs} to="/">
        <img src="image004.png" alt="png" />
      </Link>
      <Link className={styles.pngs} to="/">
        <img src="image005.png" alt="png" />
      </Link>
    </div>
  );
};
export default PngsBox;
