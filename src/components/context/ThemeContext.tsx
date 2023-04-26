import React, { createContext, useState } from "react";
import { theme, themeType } from "./Theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

// interface ThemeProps {
//   dispatch: React.Dispatch<any>;
//   state: themeType;
// }

// solution
type ThemeContextType = {
  themeState: themeType;
  setThemeState: React.Dispatch<React.SetStateAction<themeType>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [themeState, setThemeState] = useState<themeType>(theme);
  return <ThemeContext.Provider value={{ themeState, setThemeState }}>{children}</ThemeContext.Provider>;
  // return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
