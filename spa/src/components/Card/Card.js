import styles from "./Card.module.css";

const Card = ({ info }) => {
  const handleAddToCart = () => {
    alert("Product added to cart successfully!");
  };

  return (
    <>
      <div className={[styles.card]}>
        <div className={[styles.img_box]}>
          <img src={info.image} alt="product" className={styles.image} />
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
        <button onClick={handleAddToCart} className={styles.add_button}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Card;
