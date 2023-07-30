import styles from "./Template.module.css";
import { useState } from "react";
import { sortingHandler } from "../../utils/helpers";

import FilterForm from "../FilterForm/FilterForm";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

import SortGrid from "../SortGrid/SortGrid";
import Card from "../Card/Card";


const Template = ({ data, title, desc }) => {
  const [stock, setStock] = useState(data.slice(0, 4));
  const [showMore, setShowMore] = useState(true);
  const [sort,setSort] = useState([])

  
  const handleFilter = (e) => {
    let filter = e.length > 0 ? e.slice(0, 4) : stock;
    setStock(filter);
  };

  const handleSearch = (e) => {
    let find = sortingHandler(data, e);
    setSort(find)
    let top = find.slice(0, 4);
    setStock(top);
  };

  const loadHandler = (e) => {
    if (showMore) {
      let current=sort.length > 0 ? sort : data
      setStock(current);
    } else {
      setStock(data.slice(0, 4));
    }

    setShowMore(!showMore);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header_box}>
        <FilterForm data={data} onFilter={handleFilter} />
        <Title data={data} category={title} description={desc} stock={stock} />
        <SortGrid data={data} onSearch={handleSearch} />
      </div>
      <div className={styles.cards_box}>
        {stock.map((x) => (
          <Card key={x.image} info={x} />
        ))}
      </div>
      <div className={styles.btn_box}>
        <Button onClick={loadHandler}  stock={stock} />
      </div>
    </div>
  );
};

export default Template;
