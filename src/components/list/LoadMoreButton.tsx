import { useDispatch } from "react-redux";
import { getDisplayedPokemons } from "actions/pokemonActions/getDisplayedPokemons";
import styles from "styles/Home.module.scss";
import { usePokemonSelector } from "hooks/usePokemonSelector";

const LoadMoreButton = () => {
  const dispatch = useDispatch();

  const { numberOfLoadedPokemons } = usePokemonSelector();

  const handlePokemonLoad = () => {
    dispatch(getDisplayedPokemons(numberOfLoadedPokemons));
  };

  return (
    <button className={styles.loadMoreButton} onClick={handlePokemonLoad}>
      Load More Pokemons
    </button>
  );
};

export default LoadMoreButton;
