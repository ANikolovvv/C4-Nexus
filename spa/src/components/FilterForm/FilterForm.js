import { filteredData } from "../../utils/helpers";
import styles from "./FilterForm.module.css";
import React, { useState } from "react";

const FilterForm = ({ data, onFilter }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    applyFilter(selectedOption);
  };

  const applyFilter = (selectedOption) => {
    console.log(selectedOption)
    const [selectedColor, selectedPrice] = selectedOption.split("|");
    let filtered = filteredData(data, selectedColor, selectedPrice);
    onFilter(filtered);
  };

  return (
    <div className={styles.filter_container}>
      <h3 className={styles.title_filter}>Filter</h3>
      <select
        className={styles.select}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="|">All Colors and Prices </option>
        {data.map((item) => (
          <option key={item.image} value={`${item.color}|${item.price}`}>
            {item.color} - ${item.price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterForm;
