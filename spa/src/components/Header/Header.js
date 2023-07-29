import styles from "./Header.module.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className={styles.sticky}>
      <nav className={styles.container}>
        <Link className={styles.logo} to="/">
          <img src='image006.jpg'  alt="logo"></img>
        </Link>
        <ul className={styles.box}>
          <li>
            <Link className={styles["link"]} to="/">
              Shorts
            </Link>
          </li>
          <li>
            <Link className={styles["link"]} to="/shoes">
              Shoes
            </Link>
          </li>
          <li>
            <Link className={styles["link"]} to="/shirts">
              T-shirts
            </Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};
export default Header;
