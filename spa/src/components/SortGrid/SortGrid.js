import styles from "./SortGrid.module.css";

const SortGrid = ({ onSearch }) => {
  const handleSortChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    onSearch(selectedValues);
  };

  return (
    <div className={styles.filter_container}>
      <h3 className={styles.title_sort}>Sort</h3>
      <select
        className={styles.select}
        name="sorting"
        onChange={handleSortChange}
      >
        <option value="">Select an option</option>
        <option value="alphabeticalA-Z">Alphabetical a-z</option>
        <option value="AlphabeticalZ-A">Alphabetical z-a</option>
        <option value="PriceAscending">Price ascending</option>
        <option value="Price descending">Price descending</option>
      </select>
    </div>
  );
};

export default SortGrid;
