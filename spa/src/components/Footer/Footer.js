import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import PngsBox from "../UI/Pngs/Pngs";

const Footer = (css) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_links}>
        <Link to="/terms-and-conditions">T&C</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/contact-us">Contact Us</Link>
        <PngsBox css={"png_box_footer"} />
      </div>
      <p>&copy; 2023 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
