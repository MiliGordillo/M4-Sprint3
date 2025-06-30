import React, { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === null) return false;
    return savedMode === "true";
  });

  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.add('light');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
