import React, { useReducer } from "react";

export enum AT {
  TOGGLE_DARK_THEME = "TOGGLE_DARK_THEME",
}

export type A = {
  type: AT;
};

const toggleDarkModeReducer = (state: boolean, action: A) => {
  console.log(action.type);
  switch (action.type) {
    case AT.TOGGLE_DARK_THEME:
      return !state;
    default:
      return state;
  }
};

// export { AT as ToggleDarkModeAT, A as ToggleDarkModeA };
export default function useToggleDarkMode(): [boolean, () => void] {
  const [isDarkMode, dispatch] = useReducer(toggleDarkModeReducer, false);
  const toggleDarkMode = () => dispatch({ type: AT.TOGGLE_DARK_THEME });
  return [isDarkMode, toggleDarkMode];
}
