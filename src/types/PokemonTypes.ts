// what we get from API when we load list of pokemons
export interface PokemonsListItem {
  name: string;
  url: string; // url to specific pokemon data
}

// structure describing pokemon data
export interface Pokemon {
  name: string;
  type: string;
  sprite: string;
  weight: number;
  height: number;
}

export interface PokemonReducerType {
  loadedPokemons: Pokemon[]; // array with all pokemons we get from API
  numberOfLoadedPokemons: number; // total number of all loaded pokemons
  isLoading: boolean; // is browser requested API call
  filteredName: string; // name user currently want to find
  filteredTypes: string[]; // types user currently want to find
  error: string; // error message
}
