import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import layoutReducer from "./layoutReducer";

export default combineReducers({
  pokemonReducer,
  layoutReducer,
});
