import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../sources/CartContext";
import { cart } from "../sources/sources";
import CartPopup from "../components/CartPopup";

function TopBar() {
    const { getCartCount } = useCart(); // Ensure useCart is correctly imported and used
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <>
            <div className="top-bar">
                <h2>Supreme</h2>
                <div className="cart" onClick={toggleCart}>
                    <img src={cart} alt="" />
                    <p>Cart</p>
                    <p className="cart-count">{getCartCount()}</p> {/* Display cart count */}
                </div>
            </div>
            <CartPopup isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}

export default TopBar;
