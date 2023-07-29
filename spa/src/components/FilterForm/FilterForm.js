import styles from "./FilterForm.module.css";
import React, { useState } from "react";

const FilterForm = ({ onFilter }) => {
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ price, rating });
    setPrice("");
    setRating("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={[styles.form_container]}>
        <h1 className={[styles.box_title]}>Filter Form</h1>
        <div>
          <label className={[styles.form_label]}>
            Price:
            <input
              className={[styles.form_input]}
              type="number"
              value={price}
              onChange={handlePriceChange}
            />
          </label>
        </div>
        <div>
          <label className={[styles.form_label]}>
            Rating:
            <input
              type="number"
              value={rating}
              className={[styles.form_input]}
              onChange={handleRatingChange}
            />
          </label>
        </div>
        <div>
          <button className={[styles.form_btn]} type="submit">
            Apply Filter
          </button>
        </div>
      </form>
    </>
  );
};

export default FilterForm;
