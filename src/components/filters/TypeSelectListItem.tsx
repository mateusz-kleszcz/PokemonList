import styles from "styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { filterByType } from "actions/pokemonActions/filterByType";
import { usePokemonSelector } from "hooks/usePokemonSelector";
import { useLayoutSelector } from "hooks/useLayoutSelector";

interface TypeSelectListItemProps {
  type: string;
}

const TypeSelectListItem = ({ type }: TypeSelectListItemProps) => {
  const dispatch = useDispatch();

  const { isDarkTheme } = useLayoutSelector();
  // in case of re-render we checking is type select in reducer
  const { filteredTypes } = usePokemonSelector();

  const [isToggled, setIsToggled] = useState<boolean>(
    filteredTypes.includes(type)
  );

  const handleListItemToggle = () => {
    dispatch(filterByType(type));
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={styles.selectItem}
      onClick={handleListItemToggle}
      style={{
        backgroundColor: isToggled
          ? "lightgray"
          : isDarkTheme
          ? "black"
          : "white",
      }}
    >
      {type}
      <FontAwesomeIcon
        icon={faCheck}
        style={{ display: isToggled ? "block" : "none" }}
      />
    </div>
  );
};

export default TypeSelectListItem;
