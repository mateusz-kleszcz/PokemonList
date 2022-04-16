import { Pokemon } from "types/PokemonTypes";

// function takes one argument - url to API with info about specific pokemon
// and returns information we need to display or throws error
const getPokemon = async (url: string): Promise<Pokemon> => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    const { name, types, sprites, weight, height } = json;
    const pokemon: Pokemon = {
      name,
      type: types.map((type: any) => type.type.name).join(" | "),
      sprite: sprites.front_default,
      weight,
      height,
    };
    return pokemon;
  } catch (err) {
    throw new Error("Can't connect to server");
  }
};

export default getPokemon;
