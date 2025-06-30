import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const categories = [
	{
		name: "Tecnología",
		products: [
			{ id: 1, name: "Computadora", price: 1000, image: "https://cdn.pixabay.com/photo/2021/01/10/06/14/macbook-pro-5904175_1280.jpg" },
			{ id: 2, name: "Auriculares", price: 200, image: "https://acdn-us.mitiendanube.com/stores/884/018/products/gamma-hogar-2022-10-25t104326-7711-f545577cf5cc3a201b16667059054363-640-0.jpg" },
			{ id: 3, name: "Mouse", price: 50, image: "https://i0.wp.com/hardcorecomputacion.com.ar/wp-content/uploads/2021/01/mouse-logitech-G203-LIGHTSYNC.jpg?fit=880%2C880&ssl=1" },
			{ id: 4, name: "Teclado", price: 150, image: "https://www.simplestore.com.ar/v2/wp-content/uploads/2024/02/p33-015_1665673073-6348277139b55-jpg.webp" },
		]
	},
	{
		name: "Hogar",
		products: [
			{ id: 5, name: "Lámpara LED", price: 40, image: "https://ardiaprod.vtexassets.com/arquivos/ids/342772/Lampara-Led-Cla75-9W-Ledvance-Luz-Fria-1-Ud-_1.jpg?v=638719462988770000" },
			{ id: 6, name: "Aspiradora", price: 250, image: "https://http2.mlstatic.com/D_NQ_NP_681371-MLU70742748649_072023-O.webp" },
			{ id: 7, name: "Tostadora", price: 70, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7ympXgFN07-9EXDlBNrvAFhMaCLfeEiAPw&s" },
			{ id: 8, name: "Cafetera", price: 120, image: "https://pintureriasagitario.com.ar/wp-content/uploads/2025/03/Acwb02.jpg" }
		]
	},
	{
		name: "Ropa",
		products: [
			{ id: 9, name: "Remera", price: 25, image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa71a2b20/products/AD_GK8179/AD_GK8179-1.JPG" },
			{ id: 10, name: "Zapatillas", price: 90, image: "https://celadasa.vtexassets.com/arquivos/ids/364785-800-auto?v=638610723326900000&width=800&height=auto&aspect=true" },
			{ id: 11, name: "Campera", price: 120, image: "https://sportotalar.vtexassets.com/arquivos/ids/507601/IC0433-1074-BLACK-WHITE_1.jpg?v=638488915700670000" },
			{ id: 12, name: "Gorra", price: 30, image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f741ee400734272aa6c91263c9aca65_9366/Gorra_de_Beisbol_New_Logo_Rojo_JP0396_01_00_standard.jpg" }
		]
	},
	{
		name: "Deportes",
		products: [
			{ id: 13, name: "Pelota de fútbol", price: 35, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxCycY6PkL5eB8ZE9W282--HLzECrW6fAT9w&s" },
			{ id: 14, name: "Bicicleta", price: 500, image: "https://biciurbana.com.ar/16746/bicicleta-rodado-29-mtb-modelo-patagonia.jpg" },
			{ id: 15, name: "Mancuernas", price: 60, image: "https://acdn-us.mitiendanube.com/stores/002/293/786/products/mancuernas-2kg-negras-c8c73826ebe4b74e1217364444109345-480-0.jpg" },
			{ id: 16, name: "Raqueta de tenis", price: 180, image: "https://sportotalar.vtexassets.com/arquivos/ids/426108/UTRVFV037BT-13129-NEGRO_1.jpg?v=638194139078000000" }
		]
	}
];

function ProductList({ onAddToCart, selectedCategory }) {
    const { darkMode } = useContext(ThemeContext);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const category = categories.find(cat => cat.name === selectedCategory);

    if (!category) return null;

    const productsToShow = isMobile
        ? category.products.slice(0, 4)
        : category.products;

    return (
        <div className="p-4 space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {productsToShow.map((product) => (
                    <div
                        key={product.id}
                        className={
                            "rounded-xl shadow-lg p-4 flex flex-col items-center " +
                            (darkMode ? "bg-purple-800 text-yellow-300" : "bg-purple-300 text-purple-900")
                        }
                        style={{ maxWidth: "270px", margin: "0 auto" }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-28 h-28 object-cover mb-3 rounded-lg"
                        />
                        <h3 className="text-lg font-semibold mb-1 text-center">{product.name}</h3>
                        <p className="text-xl font-bold mb-3">${product.price}</p>
                        <button
                            className={
                                "px-4 py-2 rounded font-bold text-base transition " +
                                (darkMode
                                    ? "bg-yellow-300 text-purple-900 hover:bg-yellow-200"
                                    : "bg-purple-700 text-yellow-300 hover:bg-purple-800")
                            }
                            onClick={() => onAddToCart(product)}
                        >
                            Agregar al carrito
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export const categoryNames = categories.map(cat => cat.name);

export default ProductList;

