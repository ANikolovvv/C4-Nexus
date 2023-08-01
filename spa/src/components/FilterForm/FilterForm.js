import { filteredData } from "../../utils/helpers";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

import styles from "./Filter.module.css";
import { useState } from "react";

const FilterForm = ({ data, onFilter, title, mobile, set }) => {
  const [checkedColors, setCheckedColors] = useState([]);
  const [checkedPrice, setCheckedPrice] = useState([]);
  const [open, setOpen] = useState(true);

  const colorArr = data.map((x) => x.color);
  const uniqueArr = [...new Set(colorArr)];

  const handleColorChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedColors((prevColors) => [...prevColors, value]);
    } else {
      setCheckedColors((prevColors) =>
        prevColors.filter((color) => color !== value)
      );
    }
  };

  const handlePriceChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedPrice((prevPrice) => [...prevPrice, value]);
    } else {
      setCheckedPrice((prevPrice) =>
        prevPrice.filter((price) => price !== value)
      );
    }
  };

  const handleFilter = () => {
    let filtered = filteredData(data, checkedColors, checkedPrice);
    onFilter(filtered);
    setOpen(!open);
  };
  
  const handleFilterReset = () => {
    setCheckedColors([]);
    setCheckedPrice([]);
    setOpen(!open);
    set(data.slice(0, 4));
  };

  const handlerMobileFilter = () => {
    setOpen(!open);
  };
  return (
    <div>
      <h3 className={styles.filter_title}>
        {title}{" "}
        {mobile && (
          <AiOutlinePlus
            size={16}
            color="#1d6e6b99"
            onClick={handlerMobileFilter}
          />
        )}
      </h3>
      <div
        className={
          mobile && !open ? styles.mobile_container : styles.filter_container
        }
      >
        {!open && (
          <div className={styles.icon_box}>
            <AiOutlineClose
              color="black"
              size={20}
              onClick={handlerMobileFilter}
              className={styles.icon}
            />
          </div>
        )}
        <h4 className={styles.sub_title}>Colors:</h4>
        <div className={styles.filter_box}>
          {uniqueArr.map((color) => (
            <label key={color} htmlFor={color} className={styles.label_box}>
              {color}
              <input
                id={color}
                className={styles.check}
                type="checkbox"
                value={color}
                checked={checkedColors.includes(color) || false}
                onChange={handleColorChange}
              />
            </label>
          ))}
        </div>
        <h4 className={styles.sub_title}>Prices:</h4>
        <div className={styles.filter_box}>
          <label htmlFor="price" className={styles.label_box}>
            14:30
            <input
              className={styles.check}
              type="checkbox"
              value="14-30"
              checked={checkedPrice.includes("14-30") || false}
              onChange={handlePriceChange}
            />
          </label>
          <label htmlFor="price" className={styles.label_box}>
            30:60
            <input
              className={styles.check}
              type="checkbox"
              value="30-60"
              checked={checkedPrice.includes("30-60") || false}
              onChange={handlePriceChange}
            />
          </label>
          <label htmlFor="price" className={styles.label_box}>
            60:100
            <input
              className={styles.check}
              type="checkbox"
              value="60-100"
              checked={checkedPrice.includes("60-100") || false}
              onChange={handlePriceChange}
            />
          </label>
        </div>
        <div className={styles.btn_box}>
          <button onClick={handleFilter}>Filter</button>
          <button onClick={handleFilterReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
