import Menu from "../Mobile/Menu/Menu";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <header className={styles.sticky}>
      <nav className={styles.container}>
        <Link className={styles.logo} to="/">
          <img src="image006.jpg" alt="logo"></img>
        </Link>
        <div className={styles["nav-mobile"]}>
          <Menu />
        </div>
        <div className={styles.icon}>
          <AiOutlineUser size={25} color="black" />
        </div>
        <div className={styles.ul_container}>
          <ul className={styles.box}>
            <li>
              <Link to="/">Shorts</Link>
            </li>
            <li>
              <Link to="/shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/shirts">T-shirts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
