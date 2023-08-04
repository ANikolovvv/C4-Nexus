import styles from "./Template.module.css";
import { useState } from "react";
import { sortingHandler } from "../../utils/helpers";

import FilterForm from "../FilterForm/FilterForm";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

import Card from "../Card/Card";
import Sort from "../Sort/Sort";

const Template = ({ data, title, desc }) => {
  const [stock, setStock] = useState(data.slice(0, 4));
  const [showMore, setShowMore] = useState(true);
  const [sort, setSort] = useState([]);

  const handleFilter = (e) => {
    setStock(e);
  };

  const handleSearch = (e) => {
    let find = sortingHandler(data, e);
    let top = find.slice(0, 4);
    if (stock.length > 4) {
      setStock(find);
    } else {
      setStock(top);
    }
    setSort(find);
  };

  const headlerLoadMore = (e) => {
    if (showMore) {
      if (stock.length > 4) {
        setShowMore(!showMore);
        setStock(stock.slice(0, 4));
      } else {
        let current = sort.length > 0 ? sort : data;
        setStock(current);
        setShowMore(!showMore);
      }
    } else {
      let current = sort.length > 0 ? sort : data;
      setStock(current);
      setShowMore(!showMore);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.desktop}>
        <FilterForm
          data={data}
          onFilter={handleFilter}
          set={setStock}
          title="Filter"
          mobile={false}
          stock={stock}
        />
      </div>

      <div className={styles.main_box}>
        <div className={styles.mian_title_box}>
          <div className={styles.mobile}>
            <FilterForm
              data={data}
              stock={stock}
              onFilter={handleFilter}
              set={setStock}
              title="Open Filter"
              mobile={true}
            />
          </div>
          <Title
            data={data}
            category={title}
            description={desc}
            stock={stock}
          />
          <Sort data={data} onSearch={handleSearch} />
        </div>
        <div className={styles.cards_box}>
          {stock.map((x) => (
            <Card key={x.id} info={x} />
          ))}
        </div>
        <div className={styles.btn_box}>
          <Button onClick={headlerLoadMore} css={"load_box"}>
            {(!showMore && stock.length === 4) ||
            (showMore && stock.length === 4)
              ? "Load More"
              : "Load Less"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Template;
