import { POKEMON_LIMIT } from "constant/const";
import {
  FILTER_BY_NAME,
  FILTER_BY_TYPE,
  GET_DISPLAYED_POKEMONS_FAIL,
  GET_DISPLAYED_POKEMONS_REQUEST,
  GET_DISPLAYED_POKEMONS_SUCCESS,
  PokemonActionsTypes,
} from "types/actions";
import { PokemonReducerType } from "types/PokemonTypes";

const initState: PokemonReducerType = {
  loadedPokemons: [], //
  numberOfLoadedPokemons: 0,
  isLoading: false,
  filteredName: "",
  filteredTypes: [],
  error: "",
};

const pokemonReducer = (
  state = initState,
  action: PokemonActionsTypes
): PokemonReducerType => {
  switch (action.type) {
    case GET_DISPLAYED_POKEMONS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DISPLAYED_POKEMONS_SUCCESS:
      return {
        ...state,
        loadedPokemons: [...state.loadedPokemons, ...action.displayedPokemons],
        numberOfLoadedPokemons: state.numberOfLoadedPokemons + POKEMON_LIMIT,
        isLoading: false,
      };
    case GET_DISPLAYED_POKEMONS_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        filteredName: action.filteredName,
      };
    case FILTER_BY_TYPE:
      // if type is in array we want to remove it, otherwise we want to add it
      let newFilteredTypes = [];
      if (state.filteredTypes.includes(action.filteredType)) {
        newFilteredTypes = state.filteredTypes.filter(
          (type) => type !== action.filteredType
        );
      } else {
        newFilteredTypes = [...state.filteredTypes, action.filteredType];
      }
      return {
        ...state,
        filteredTypes: newFilteredTypes,
      };
    default:
      return { ...state };
  }
};

export default pokemonReducer;
