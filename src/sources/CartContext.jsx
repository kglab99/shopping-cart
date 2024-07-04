import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, quantity) => {
        const existingIndex = cartItems.findIndex((cartItem) => cartItem.item.id === item.id);

        if (existingIndex !== -1) {
            const newCartItems = [...cartItems];
            newCartItems[existingIndex].quantity += quantity;
            setCartItems(newCartItems);
        } else {
            setCartItems([...cartItems, { item: item, quantity: quantity }]);
        }
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, cartItem) => total + (cartItem.item.price * cartItem.quantity), 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, calculateTotalPrice, getCartCount }}>
            {children}
        </CartContext.Provider>
    );
};
