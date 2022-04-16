import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDisplayedPokemons } from "actions/pokemonActions/getDisplayedPokemons";
import styles from "styles/Home.module.scss";
import FilterOptions from "./filters/FilterOptions";
import LoadMoreButton from "./list/LoadMoreButton";
import PokemonsList from "./list/PokemonsList";
import SwitchThemeButton from "./theme/SwitchThemeButton";
import Loader from "./loader/Loader";
import { useLayoutSelector } from "hooks/useLayoutSelector";
import { usePokemonSelector } from "hooks/usePokemonSelector";

const Container = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDisplayedPokemons(0));
  }, [dispatch]);

  const { isDarkTheme } = useLayoutSelector();
  const { isLoading, error } = usePokemonSelector();

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: isDarkTheme ? "black" : "white",
        color: isDarkTheme ? "white" : "black",
      }}
    >
      {error === "" ? (
        <>
          <div className={styles.header}>
            <h1>Pokedex</h1>
            <SwitchThemeButton />
          </div>
          {isLoading && <Loader />}
          <FilterOptions />
          <PokemonsList />
          <LoadMoreButton />
        </>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default Container;
