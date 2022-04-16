import styles from "styles/Home.module.scss";
import { Pokemon } from "types/PokemonTypes";
import { motion } from "framer-motion";
import { useLayoutSelector } from "hooks/useLayoutSelector";

interface PokemonDetailsPopupProps {
  isToggled: boolean;
  togglePokemonDetails: () => void;
  pokemon: Pokemon;
}

const PokemonDetailsPopup = ({
  isToggled,
  togglePokemonDetails,
  pokemon,
}: PokemonDetailsPopupProps) => {
  const { isDarkTheme } = useLayoutSelector();

  const { sprite, type, name, weight, height } = pokemon;

  return (
    <motion.div
      className={styles.pokemonDetailsPopup}
      style={{ display: isToggled ? "flex" : "none" }}
      onClick={togglePokemonDetails}
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.5,
      }}
      exit={{ y: "-100vh" }}
    >
      <div
        className={styles.pokemonCard}
        style={{ backgroundColor: isDarkTheme ? "black" : "white" }}
      >
        <img src={sprite} alt={name} />
        <div>Name: {name}</div>
        <div>Type: {type}</div>
        <div>Weight: {weight}</div>
        <div>Height: {height}</div>
      </div>
    </motion.div>
  );
};

export default PokemonDetailsPopup;
