import { Dispatch } from "redux";
import getPokemon from "functions/getPokemon";
import {
  AppActions,
  GET_DISPLAYED_POKEMONS_FAIL,
  GET_DISPLAYED_POKEMONS_REQUEST,
  GET_DISPLAYED_POKEMONS_SUCCESS,
} from "types/actions";
import { Pokemon, PokemonsListItem } from "types/PokemonTypes";
import { POKEMON_LIMIT } from "constant/const";

const getDisplayedPokemonsRequest = (): AppActions => ({
  type: GET_DISPLAYED_POKEMONS_REQUEST,
});

const getDisplayedPokemonsSuccess = (pokemons: Pokemon[]): AppActions => ({
  type: GET_DISPLAYED_POKEMONS_SUCCESS,
  displayedPokemons: pokemons,
});

const getDisplayedPokemonsFail = (error: string): AppActions => ({
  type: GET_DISPLAYED_POKEMONS_FAIL,
  error,
});

export const getDisplayedPokemons =
  (offset: number) => async (dispath: Dispatch<AppActions>) => {
    try {
      // set isLoading to true
      dispath(getDisplayedPokemonsRequest());
      // call API to get pokemons list
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}pokemon?offset=${offset}&limit=${POKEMON_LIMIT}`
      );
      const json = await res.json();
      const { results } = json;
      // for each pokemon get info about him
      const pokemons: Pokemon[] = await Promise.all(
        results.map(
          async (pokemon: PokemonsListItem): Promise<Pokemon> =>
            await getPokemon(pokemon.url)
        )
      );
      dispath(getDisplayedPokemonsSuccess(pokemons));
    } catch (err) {
      console.log(err);
      dispath(getDisplayedPokemonsFail("Can't connect to server!"));
    }
  };
