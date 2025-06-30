import ThemeButton from "./ThemeButton";

const Footer = () => (
  <footer className="bg-purple-900 dark:bg-purple-900 text-white dark:text-yellow-300 py-4 mt-12 transition-colors duration-500">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-2 sm:px-6">
      {/* Botón de tema a la izquierda */}
      <div className="order-1">
        <ThemeButton />
      </div>
      {/* Copy en el centro */}
      <span className="flex items-center gap-2 font-semibold order-2 mx-auto">
        <i className="bi bi-bag-heart-fill text-yellow-300"></i>
        <span className="text-yellow-300">
          funkypigeon &copy; {new Date().getFullYear()}
        </span>
      </span>
      {/* Espacio a la derecha para mantener el centro */}
      <div className="order-3 w-8 h-8"></div>
    </div>
  </footer>
);

export default Footer;