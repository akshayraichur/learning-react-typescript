import React, { createContext, useState } from "react";
import { theme, themeType } from "./Theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

// interface ThemeProps {
//   dispatch: React.Dispatch<any>;
//   state: themeType;
// }

export const ThemeContext = createContext(theme);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [themeState, setThemeState] = useState(theme);
  //   return <ThemeContext.Provider value={{ themeState, setThemeState }}>{children}</ThemeContext.Provider>;
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
