import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className={
        "flex items-center justify-center p-2 rounded-full transition shadow text-xl " +
        (darkMode
          ? "bg-yellow-300 text-purple-900 hover:bg-yellow-200"
          : "bg-purple-200 text-purple-900 hover:bg-purple-300")
      }
      aria-label="Cambiar tema"
      title={darkMode ? "Modo claro" : "Modo oscuro"}
    >
      <i className={darkMode ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
    </button>
  );
};

export default ThemeButton;
