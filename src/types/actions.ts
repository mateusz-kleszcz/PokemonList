import { Pokemon } from "./PokemonTypes";

export const GET_DISPLAYED_POKEMONS_REQUEST = "GET_DISPLAYED_POKEMONS_REQUEST";
export const GET_DISPLAYED_POKEMONS_SUCCESS = "GET_DISPLAYED_POKEMONS_SUCCESS";
export const GET_DISPLAYED_POKEMONS_FAIL = "GET_DISPLAYED_POKEMONS_FAIL";
export const CHANGE_THEME = "CHANGE_THEME";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";

export interface GetDisplayedPokemonsRequest {
  type: typeof GET_DISPLAYED_POKEMONS_REQUEST;
}

export interface GetDisplayedPokemonsSuccess {
  type: typeof GET_DISPLAYED_POKEMONS_SUCCESS;
  displayedPokemons: Pokemon[];
}

export interface GetDisplayedPokemonsFail {
  type: typeof GET_DISPLAYED_POKEMONS_FAIL;
  error: string;
}

export interface FilterByName {
  type: typeof FILTER_BY_NAME;
  filteredName: string;
}

export interface FilterByType {
  type: typeof FILTER_BY_TYPE;
  filteredType: string;
}

export type PokemonActionsTypes =
  | GetDisplayedPokemonsRequest
  | GetDisplayedPokemonsSuccess
  | GetDisplayedPokemonsFail
  | ChangeTheme
  | FilterByName
  | FilterByType;

export interface ChangeTheme {
  type: typeof CHANGE_THEME;
}

export type LayoutActionsTypes = ChangeTheme;

export type AppActions = PokemonActionsTypes | LayoutActionsTypes;
