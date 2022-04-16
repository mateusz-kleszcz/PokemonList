import { useSelector } from "react-redux";
import { AppState } from "store";

export const usePokemonSelector = () =>
  useSelector((state: AppState) => state.pokemonReducer);
