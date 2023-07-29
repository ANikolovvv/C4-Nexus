import styles from "../FilterForm/FilterForm.module.css";
import React, { useState } from "react";

const SortGrid = ({ onSearch }) => {
  const handleSortChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    onSearch(selectedValues);
  };

  return (
    <div className={styles.filter_container}>
      <h3 className={styles.title_filter}>Sort by</h3>
      <select  className={styles.select}  name="sorting" onChange={handleSortChange}>
        <option value="alphabeticalA-Z">Alphabetical a-z</option>
        <option value="AlphabeticalZ-A">Alphabetical z-a</option>
        <option value="PriceAscending">Price ascending</option>
        <option value="Price descending">Price descending</option>
      </select>
    </div>
  );
};

export default SortGrid;
