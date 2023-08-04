import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import PngsBox from "../UI/PngsBox/PngsBox";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_links}>
        <Link to="/">T&C</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Contact Us</Link>
        <PngsBox css={"png_box_footer"} />
      </div>
      <p>&copy; 2023 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
