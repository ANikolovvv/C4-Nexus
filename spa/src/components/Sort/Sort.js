import styles from "./Sort.module.css";

const Sort = ({ onSearch }) => {
  const handleSortChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    onSearch(selectedValues);
  };

  return (
    <div className={styles.sort_container}>
      <h3 className={styles.sort_title}>Sort</h3>
      <select
        className={styles.select}
        name="sorting"
        onChange={handleSortChange}
      >
        <option value="">Select an Option</option>
        <option value="alphabeticalA-Z">Alphabetical a-z</option>
        <option value="AlphabeticalZ-A">Alphabetical z-a</option>
        <option value="PriceAscending">Price ascending</option>
        <option value="PriceDescending">Price descending</option>
      </select>
    </div>
  );
};

export default Sort;
