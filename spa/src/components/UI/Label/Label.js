import styles from "./Label.module.css";

const Label = ({ type, array, handleTypeChange }) => {
  return (
    <label key={type} htmlFor={type} className={styles.label_box}>
      {type}
      <input
        id={type}
        type="checkbox"
        value={type}
        checked={array.includes(type) || false}
        onChange={handleTypeChange}
      />
    </label>
  );
};
export default Label;
