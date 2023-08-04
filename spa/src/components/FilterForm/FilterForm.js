import styles from "./Filter.module.css";
import Label from "../UI/Label/Label";
import Button from "../UI/Button/Button";

import { filteredData } from "../../utils/helpers";
import { AiOutlineClose, AiOutlineDown, AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";

const FilterForm = ({ data, onFilter, title, mobile, set, stock }) => {
  const [checkedColors, setCheckedColors] = useState([]);
  const [checkedPrice, setCheckedPrice] = useState([]);
  const [open, setOpen] = useState(true);

  const [openColors, setOpenColors] = useState(false);
  const [openPrices, setOpenPrices] = useState(false);

  const colorArr = data.map((x) => x.color);
  const uniqueArr = [...new Set(colorArr)];
  const priceRangeArray = ["15-30", "30-60", "60-90"];

  useEffect(() => {
    if (!mobile) {
      setOpenColors(true);
      setOpenPrices(true);
    }
  }, [mobile]);

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

  const handleOpenColors = () => {
    setOpenColors(!openColors);
  };

  const handleOpenPrices = () => {
    setOpenPrices(!openPrices);
  };
  return (
    <div>
      <h3 className={styles.filter_title}>
        {title}
        {mobile && <AiOutlinePlus size={16} onClick={handlerMobileFilter} />}
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
        <h4 className={styles.sub_title}>
          Colors
          {mobile && (
            <AiOutlineDown size={16} onClick={handleOpenColors} color="black" />
          )}
        </h4>
        {!mobile && (
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
        )}
        {mobile && openColors && (
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
        )}
        <h4 className={styles.sub_title}>
          Prices
          {mobile && (
            <AiOutlineDown size={16} onClick={handleOpenPrices} color="black" />
          )}
        </h4>
        {!mobile && (
          <div className={styles.filter_box}>
            {priceRangeArray.map((range) => (
              <Label
                key={range}
                type={range}
                array={checkedPrice}
                handleTypeChange={handlePriceChange}
              />
            ))}
          </div>
        )}
        {mobile && openPrices && (
          <div className={styles.filter_box}>
            {priceRangeArray.map((range) => (
              <Label
                key={range}
                type={range}
                array={checkedPrice}
                handleTypeChange={handlePriceChange}
              />
            ))}
          </div>
        )}

        <div className={styles.btn_box}>
          <Button onClick={handleFilter}>
            {!mobile ? "Filter" : `Filter ${stock.length}/${data.length}`}
          </Button>
          <Button onClick={handleFilterReset}>Reset</Button>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
