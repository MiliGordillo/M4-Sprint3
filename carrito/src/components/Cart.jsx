import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

const Cart = ({ open, setOpen }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        "fixed top-0 right-0 h-full w-full max-w-xs sm:w-96 sm:max-w-md z-40 transition-transform duration-300 " +
        (open ? "translate-x-0" : "translate-x-full") +
        " shadow-lg " +
        (darkMode ? "bg-purple-900 text-yellow-300" : "bg-white text-purple-900")
      }
    >
      <button
        className="absolute top-4 right-4 text-2xl"
        onClick={() => setOpen(false)}
      >
        ×
      </button>
      <div className="p-2 pt-12 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-300">Carrito</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500 italic">El carrito está vacío.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className={
                  "flex items-center gap-2 p-2 rounded-lg shadow border " +
                  (darkMode
                    ? "bg-purple-800 border-purple-700"
                    : "bg-purple-400 border-purple-300")
                }
                style={{ minHeight: "56px", maxHeight: "72px" }}
              >
                {/* Imagen pequeña */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-md border-2 border-yellow-300"
                  style={{ flexShrink: 0 }}
                />
                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-0.5 truncate">{item.name}</h3>
                  <p className="text-xs">
                    <span className="font-bold">${item.price}</span> x {item.quantity}
                  </p>
                </div>
                {/* Controles */}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className={
                        "w-6 h-6 flex items-center justify-center rounded-full font-bold text-base transition " +
                        (darkMode
                          ? "bg-yellow-300 text-purple-900 hover:bg-yellow-200"
                          : "bg-purple-200 text-purple-900 hover:bg-purple-300")
                      }
                    >
                      −
                    </button>
                    <span className="px-1 font-bold text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className={
                        "w-6 h-6 flex items-center justify-center rounded-full font-bold text-base transition " +
                        (darkMode
                          ? "bg-yellow-300 text-purple-900 hover:bg-yellow-200"
                          : "bg-purple-200 text-purple-900 hover:bg-purple-300")
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-0.5 rounded-full hover:bg-red-600 text-xs mt-1 transition"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
            <p className="text-xl font-bold text-right text-yellow-300">Total: ${totalPrice}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
