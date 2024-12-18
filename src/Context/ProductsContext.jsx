import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://dummyjson.com/products");

      // Filter furniture category
      const furnitureProducts = response.data.products.filter(
        (product) => product.category === "furniture"
      );
      setProducts(furnitureProducts);
    } catch (err) {
      setError("Failed to fetch products. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, error, isLoading, refetch: fetchProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
