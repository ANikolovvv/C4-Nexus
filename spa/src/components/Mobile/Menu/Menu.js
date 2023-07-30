import { useState } from "react";
import styles from "./Menu.module.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Menu = () => {
  const [toggle, setToggle] = useState(false);
  const navigationHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div onClick={navigationHandler}>
      {toggle ? (
        <div className={styles.small}>
          <div className={styles["icon"]}>
            <AiOutlineClose />
          </div>
          <div>
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
        </div>
      ) : (
        <div>
          <AiOutlineMenu size={25} color="black" />
        </div>
      )}
    </div>
  );
};
export default Menu;
