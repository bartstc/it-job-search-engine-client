import React, { createContext, useContext, useState, ReactNode } from "react";

import { darkTheme, lightTheme, Theme } from "./theme";

type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeName = localStorage.getItem("themeName") ?? "light";
  const [theme, setTheme] = useState(
    themeName === "light" ? lightTheme : darkTheme
  );

  const toggleTheme = () => {
    theme.name === "light" ? setTheme(darkTheme) : setTheme(lightTheme);
    localStorage.setItem(
      "themeName",
      theme.name === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeConsumer = (): ThemeContextProps => {
  const contextValue = useContext(ThemeContext);

  if (!contextValue) {
    throw new Error(`useThemeConsumer must be used within a ThemeProvider`);
  }
  return contextValue;
};

export { ThemeProvider, useThemeConsumer };
