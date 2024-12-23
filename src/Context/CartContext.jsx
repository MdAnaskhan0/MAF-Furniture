import { createContext, useEffect, useState } from "react";
import { set } from "react-hook-form";

export const CartContext = createContext();

const cartContextProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product) => {
        setCartItem((pre) => {
            const isItemExist = pre.find((item) => item.id === product.id);

            if (isItemExist) {
                return pre.map((item) => (
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ))
            }

            return [...pre, { ...product, quantity: 1 }]
        })
    }


    // Remove Product from Cart
    const removeProductCart = (id) => {
        setCartItem((pre) => pre.filter((item) => item.id !== id))
    }

    // Clear all Product from Cart
    const clearProductCart = () => {
        setCartItem([]);
    }

    // Update Quentity for a specific Product
    const updateProductQuantity = (id, quantity) => {
        setCartItem((pre) => pre.map((item) => (
            item.id === id ? { ...item, quantity } : item
        )))
    }


    return (
        <CartContext.Provider value={{ cartItem, addToCart, removeProductCart, clearProductCart, updateProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default cartContextProvider;