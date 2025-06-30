import Header from "./components/Header";
import ProductList, { categoryNames } from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { useContext, useState, useRef } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { CartContext } from "./context/CartContext";

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  const { cart, addToCart } = useContext(CartContext);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryNames[0]);
  const [animateCartBtn, setAnimateCartBtn] = useState(false);
  const cartBtnRef = useRef(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    // Animación del botón "Ver carrito"
    setAnimateCartBtn(true);
    setTimeout(() => setAnimateCartBtn(false), 700); // Duración de la animación
  };

  return (
    <div
      className={
        "min-h-screen flex flex-col p-0 border-0 transition-all duration-500 ease-in-out " +
        (darkMode
          ? "bg-purple-950 text-purple-100"
          : "bg-blue-50 text-gray-800")
      }
    >
      <Header
        categoryNames={categoryNames}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <main className="flex-1 flex flex-col">
        <h1
          className={
            "text-3xl font-bold mb-6 text-center mt-8 " +
            (darkMode ? "text-yellow-300" : "text-purple-700")
          }
        >
        {selectedCategory}
        </h1>
        <ProductList onAddToCart={handleAddToCart} selectedCategory={selectedCategory} />
        <Cart open={cartOpen} setOpen={setCartOpen} />
        {cart.length > 0 && !cartOpen && (
          <button
            ref={cartBtnRef}
            onClick={() => setCartOpen(true)}
            className={
              "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 mb-24 px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg z-50 font-bold text-base transition " +
              (darkMode
                ? "bg-yellow-300 text-purple-900 hover:bg-yellow-200"
                : "bg-purple-700 text-yellow-300 hover:bg-purple-800") +
              (animateCartBtn ? " animate-bounce" : "")
            }
            style={{ pointerEvents: "auto" }}
          >
            <i className="bi bi-basket me-2"></i>
            Ver carrito ({cart.length})
          </button>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;

