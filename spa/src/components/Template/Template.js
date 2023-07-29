import styles from "./Template.module.css";

import { useState } from "react";

import FilterForm from "../FilterForm/FilterForm";
import Button from "../UI/Button/Button";
import { sortingHandler } from "../../utils/helpers";
import Title from "../UI/Title/Title";
import SortGrid from "../SortGrid/SortGrid";
import Card from "../Card/Card";

const Template = ({ data, title, desc }) => {
  const [stock, setStock] = useState(data.slice(0, 4));
  const [showMore, setShowMore] = useState(true);

  const handleFilter = (e) => {
    let filter = e.length > 0 ? e.slice(0, 4) : stock;
    setStock(filter);
  };

  const handleSearch = (e) => {
    let find = sortingHandler(data, e);
    let top = find.slice(0, 4);
    console.log(top,'top')
    setStock(top);
  };

  const loadHandler = (e) => {
    if (showMore) {
      setStock(data);
    } else {
      setStock(data.slice(0, 4));
    }

    setShowMore(!showMore);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header_box}>
          <FilterForm data={data} onFilter={handleFilter} />
          <Title category={title} description={desc} />
          <SortGrid data={data} onSearch={handleSearch} />
        </div>
        <div className={styles.cards_box}>
          {stock.map((x) => (
            <Card key={x.image} info={x} />
          ))}
        </div>
        <Button onClick={loadHandler} showMore={showMore} />
      </div>
    </>
  );
};

export default Template;
