import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  // State
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      background: 'rgb(240, 240, 240)',
      color: 'black'
    },
    drark: {
      background: 'rgb(39, 39, 39)',
      color: 'white',
    }
  });

  // Fn to toggle theme
  const toggleTheme = () => {
    setTheme(prev => ({
      ...theme,
      isLightTheme: !prev.isLightTheme
    }))
  }

  // context data
  const themeContextData = {
    theme,
    toggleTheme
  }

  // return provider

  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;

