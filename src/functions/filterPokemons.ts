import { Pokemon } from "types/PokemonTypes";

export const filterPokemons = (
  pokemons: Pokemon[],
  name: string,
  types: string[]
): Pokemon[] => {
  const filteredPokemons = pokemons.filter((pokemon) => {
    // check is name correct
    if (name === "" || pokemon.name.includes(name)) {
      // check is any type selected
      if (types.length === 0) {
        return pokemon;
      } else {
        // get pokemon types
        const pokemonTypes = pokemon.type.split(" | ");
        // check if any selected type is common with pokemon type
        if (types.some((type) => pokemonTypes.includes(type))) {
          return pokemon;
        }
      }
    }
    return false;
  });
  return filteredPokemons;
};
