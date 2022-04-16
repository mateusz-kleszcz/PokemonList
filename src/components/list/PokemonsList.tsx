import { filterPokemons } from "functions/filterPokemons";
import styles from "styles/Home.module.scss";
import PokemonsListItem from "./PokemonsListItem";
import { usePokemonSelector } from "hooks/usePokemonSelector";

const PokemonsList = () => {
  const { loadedPokemons, filteredName, filteredTypes } = usePokemonSelector();

  return (
    <div className={styles.pokemonsList}>
      {filterPokemons(loadedPokemons, filteredName, filteredTypes).map(
        (pokemon, index) => (
          <PokemonsListItem {...pokemon} key={index} />
        )
      )}
    </div>
  );
};

export default PokemonsList;
