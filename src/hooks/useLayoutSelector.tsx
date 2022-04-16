import { useSelector } from "react-redux";
import { AppState } from "store";

export const useLayoutSelector = () =>
  useSelector((state: AppState) => state.layoutReducer);
