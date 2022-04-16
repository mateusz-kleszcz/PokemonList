import { CHANGE_THEME, LayoutActionsTypes } from "types/actions";
import { LayoutReducerType } from "types/LayoutTypes";

const initState: LayoutReducerType = {
  isDarkTheme: false,
};

const layoutReducer = (
  state = initState,
  action: LayoutActionsTypes
): LayoutReducerType => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return { ...state };
  }
};

export default layoutReducer;
