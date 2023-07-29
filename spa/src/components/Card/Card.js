import { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ info }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);

    setTimeout(() => {
      setIsAddedToCart(false);
    }, 3000);
  };

  return (
    <>
      <div className={[styles.card]}>
        <div className={[styles.img_box]}>
          <img src={info.image} alt="Product Image" className={styles.image} />
        </div>
        <div className={[styles.info]}>
          <h3 className={[styles.title]}>{info.name}</h3>
          <p className={[styles.desc]}>
            Product Description: {info.description}
          </p>
          <p className={[styles.color]}>Color: {info.color}</p>
          <p className={[styles.price]}>Price: {info.price}</p>
          <div className={[styles.rating]}>
            <span>{info.rating}</span>
            <span className={[styles.star]}>&#9733;</span>
          </div>
        </div>
        <button onClick={handleAddToCart} className={styles.add_to_cart_button}>
          Add to Cart
        </button>
        {isAddedToCart && (
          <div className={styles.success_alert}>Product added to cart</div>
        )}
      </div>
    </>
  );
};

export default Card;
