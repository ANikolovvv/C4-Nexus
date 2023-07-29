
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
       <div className={styles.footer_links}>
        <Link to="/terms-and-conditions">T&C</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;