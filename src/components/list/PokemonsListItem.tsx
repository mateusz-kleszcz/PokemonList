import { Pokemon } from "types/PokemonTypes";
import styles from "styles/Home.module.scss";
import { useState } from "react";
import PokemonDetailsPopup from "./PokemonDetailsPopup";
import { AnimatePresence } from "framer-motion";
import { useLayoutSelector } from "hooks/useLayoutSelector";

const PokemonsListItem = (pokemon: Pokemon) => {
  const [isPokemonDetailsToggled, setIsPokemonDetailsToggled] =
    useState<boolean>(false);

  const handleTogglePokemonDetails = (): void => {
    setIsPokemonDetailsToggled(!isPokemonDetailsToggled);
  };

  const { isDarkTheme } = useLayoutSelector();

  return (
    <div className={styles.pokemonListItem}>
      {
        <div
          className={styles.pokemonListItemBox}
          onClick={handleTogglePokemonDetails}
          style={{
            boxShadow: isDarkTheme
              ? "5px 5px 10px rgba(255, 255, 255, 0.25)"
              : "0px 0px 10px rgba(0, 0, 0, 0.25)",
            backgroundColor: isDarkTheme ? "#121212" : "white",
          }}
        >
          <img src={pokemon.sprite} alt={pokemon.name} />
          <div>Name: {pokemon.name}</div>
          <div>Type: {pokemon.type}</div>
          <AnimatePresence>
            {isPokemonDetailsToggled && (
              <PokemonDetailsPopup
                isToggled={isPokemonDetailsToggled}
                togglePokemonDetails={handleTogglePokemonDetails}
                pokemon={pokemon}
              />
            )}
          </AnimatePresence>
        </div>
      }
    </div>
  );
};

export default PokemonsListItem;
