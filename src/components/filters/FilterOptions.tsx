import NameInput from "./NameInput";
import TypeSelectList from "./TypeSelectList";
import styles from "styles/Home.module.scss";

const FilterOptions = () => {
  return (
    <div className={styles.filterOptions}>
      <NameInput />
      <TypeSelectList />
    </div>
  );
};

export default FilterOptions;
