import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  // eslint-disable-next-line
  const [light, setLight] = useState({
    syntax: '#555',
    ui: '#ddd',
    bg: 'gray',
    nav: 'primary',
    drkModeBtn: 'dark'
  });
  // eslint-disable-next-line
  const [dark, setDark] = useState({
    syntax: '#ddd',
    ui: '#333',
    bg: 'white',
    nav: 'black',
    drkModeBtn: 'light'
  });
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };
  return (
    <ThemeContext.Provider
      value={{
        isLightTheme,
        light,
        dark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
