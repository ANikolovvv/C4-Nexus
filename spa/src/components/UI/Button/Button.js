import { useState } from "react";
import styles from "./Button.module.css";

const Button = ({ onClick ,showMore }) => {
  return (
    <div className={styles.load_box}>
      <button className={styles.load_btn} onClick={onClick}>
      {showMore ? 'Load More' : 'Load Less'}
      </button>
    </div>
  );
};
export default Button;
