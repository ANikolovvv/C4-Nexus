import styles from "./Card.module.css";
const Card = ({ info }) => {
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
          <p className={[styles.price]}>Price: {info.price}</p>
          <div className={[styles.rating]}>
            <span>{info.rating}</span>
            <span className={[styles.star]}>&#9733;</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
