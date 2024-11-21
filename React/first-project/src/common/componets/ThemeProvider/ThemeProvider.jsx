import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggle = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  }
  return (
  <ThemeContext.Provider value={{theme,toggle}}>
    {children}
  </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
