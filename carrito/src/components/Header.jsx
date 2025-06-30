import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
import ThemeButton from "./ThemeButton";

const Header = ({ categoryNames, selectedCategory, setSelectedCategory }) => {
  const { cart } = useContext(CartContext);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="bg-purple-700 dark:bg-purple-900 text-white dark:text-yellow-300 shadow transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-2xl">
          <i className="bi bi-bag-heart-fill text-yellow-300"></i>
          <span className="text-yellow-300">funkypigeon</span>
        </div>
        {/* Categorías centradas */}
        <nav className="flex gap-4 flex-1 justify-center">
          {categoryNames.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={
                "px-3 py-1 rounded font-semibold transition " +
                (selectedCategory === cat
                  ? "bg-yellow-300 text-purple-900"
                  : "hover:bg-purple-600")
              }
            >
              {cat}
            </button>
          ))}
        </nav>
        {/* Botón de tema */}
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;