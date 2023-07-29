import styles from "./Home.module.css";
import data from "../../data.json";
import { useState } from "react";

import Card from "../Card/Card";
import FilterForm from "../FilterForm/FilterForm";
import SortGrid from "../SortGrid/SortGrid";
import Title from "../UI/Title/Title";

const Home = () => {
  const [stock, setStock] = useState(data.shorts.slice(0, 3));

  function handleFilter(e) {
    const { price, rating } = e;

    let filtredData = data.shorts.filter((x) => {
      if (Number(price) && Number(price) <= x.price) {
        return true;
      }
      if (Number(rating) && Number(rating) <= x.rating) {
        return true;
      }

      return false;
    });

    let filter = filtredData.length > 0 ? filtredData.slice(0, 3) : stock;

    setStock(filter);
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.filter}>
          <FilterForm onFilter={handleFilter} />
        </div>
        <div className={[styles.page_box]}>
          <div className={[styles.title_box]}>
            <Title>Shorts:Best shorts this summer</Title>
            <SortGrid />
          </div>

          <div className={styles.cards_box}>
            {stock.map((x) => (
              <Card key={x.image} info={x} />
            ))}
          </div>
        </div>
      </div>
      <button className={[styles.btn]}>Loading More</button>
    </>
  );
};

export default Home;
