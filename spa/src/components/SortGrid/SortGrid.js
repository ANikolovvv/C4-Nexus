import styles from "./SortGrid.module.css";
import React, { useState } from "react";

const SortGrid = () => {
  const handleSortChange = (event) => {};

  return (
    <div>
      <div className={[styles.sorting_container]}>
        <label htmlFor="sorting">Sort by:</label>
        <select id="sorting" name="sorting" onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="alphabeticalA-Z">Alphabetical a-z</option>
          <option value="AlphabeticalZ-A">Alphabetical z-a</option>
          <option value="PriceAscending">Price ascending</option>
          <option value="Price descending">Price descending</option>
        </select>
      </div>
    </div>
  );
};

export default SortGrid;
