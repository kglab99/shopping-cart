import React from "react";
import { useCart } from "../sources/CartContext";
import Item from "../components/Item";
import CartItem from "./CartItem";

const CartPopup = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, calculateTotalPrice } = useCart();

    const handleRemoveItem = (index) => {
        removeFromCart(index);
    };

    return (
        <>
            {isOpen && (
                <div className="cart-popup">
                    <div className="cart-items">
                        {cartItems.map((cartItem, index) => (
                            <div key={index} className="cart-item">
                                <CartItem itemProp={cartItem.item} quantityProp={cartItem.quantity} />
                                <button onClick={() => handleRemoveItem(index)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
                    </div>
                    <button className="close" onClick={onClose}>Close</button>
                </div>
            )}
        </>
    );
};

export default CartPopup;
