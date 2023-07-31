import { AiOutlineHeart } from "react-icons/ai";
import styles from "./Card.module.css";

const Card = ({ info }) => {
  const discount = info.discountedPrice ? true : false;

  const handleAddToCart = () => {
    alert("Product added to cart successfully!");
  };

  return (
    <>
      <div className={[styles.card]}>
        <div className={styles.heart}>
          <AiOutlineHeart size={25} />
        </div>
        <div className={[styles.img_box]}>
          <img src={info.image} alt="product" className={styles.image} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{info.name}</h3>
          <p className={styles.desc}>Product Description: {info.description}</p>
          <p className={styles.color}>Color: {info.color}</p>
          <div className={styles.prices}>
            <p className={`${styles.price} ${discount ? styles.discount : ""}`}>
              {info.price}$
            </p>
            {discount && (
              <p className={styles.price}>{info.discountedPrice}$</p>
            )}
          </div>
          <div className={[styles.rating]}>
            <span>{info.rating}</span>
            <span className={styles.star}>&#9733;</span>
          </div>
        </div>
        <button onClick={handleAddToCart} className={styles.add_button}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Card;
