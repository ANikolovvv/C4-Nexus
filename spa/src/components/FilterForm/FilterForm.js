import styles from "./Filter.module.css";

import { filteredData } from "../../utils/helpers";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import Label from "../UI/Label/Label";
import Button from "../UI/Button/Button";

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
        {title}
        {mobile && (
          <AiOutlinePlus
            size={16}
            onClick={handlerMobileFilter}
            className={styles.plus}
          />
        )}
      </h3>
      <div
        className={
          mobile && !open ? styles.mobile_container : styles.filter_container
        }
      >
        {!open && mobile && (
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
            <Label
              key={color}
              type={color}
              array={checkedColors}
              handleTypeChange={handleColorChange}
            />
          ))}
        </div>
        <h4 className={styles.sub_title}>Prices:</h4>
        <div className={styles.filter_box}>
          <Label
            key={"15-30"}
            type={"15-30"}
            array={checkedPrice}
            handleTypeChange={handlePriceChange}
          />
          <Label
            key={"30-60"}
            type={"30-60"}
            array={checkedPrice}
            handleTypeChange={handlePriceChange}
          />
          <Label
            key={"60-100"}
            type={"60-100"}
            array={checkedPrice}
            handleTypeChange={handlePriceChange}
          />
        </div>
        <div className={styles.btn_box}>
          <Button onClick={handleFilter}>Filter</Button>
          <Button onClick={handleFilterReset}>Reset</Button>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
