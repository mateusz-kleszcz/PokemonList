import React from "react";
import { useDispatch } from "react-redux";
import { filterByName } from "actions/pokemonActions/filterByName";
import { usePokemonSelector } from "hooks/usePokemonSelector";
import { useLayoutSelector } from "hooks/useLayoutSelector";

const NameInput = () => {
  const dispatch = useDispatch();

  const { filteredName } = usePokemonSelector();
  const { isDarkTheme } = useLayoutSelector();

  const handleFilterByName = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    dispatch(filterByName(name));
  };

  return (
    <input
      type="text"
      placeholder="name"
      value={filteredName}
      onChange={handleFilterByName}
      style={{
        background: isDarkTheme ? "#121212" : "white",
        color: isDarkTheme ? "white" : "black",
        border: isDarkTheme ? "none" : "1px solid black",
      }}
    />
  );
};

export default NameInput;
