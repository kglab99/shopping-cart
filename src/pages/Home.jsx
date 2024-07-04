import React, { useState } from "react";
import Item from "../components/Item";
import { items } from "../sources/items";
import { useCart } from "../sources/CartContext";
import Bio from "../components/Bio";

function Home() {
    const { addToCart } = useCart();
    const [quantities, setQuantities] = useState(items.reduce((acc, item) => {
        acc[item.id] = 1; // Initialize quantity for each item to 1
        return acc;
    }, {}));

    const handleQuantityChange = (id, newQuantity) => {
        setQuantities({
            ...quantities,
            [id]: newQuantity
        });
    };

    return (
        <div className="body">
            {/* <h1>Get inspired with new collection</h1> */}
            <div className="items">
                {items.map((item) => (
                    <div key={item.id} className="item-container">
                        <Item
                            itemProp={{
                                name: item.name,
                                description: item.description,
                                price: item.price,
                                img: item.img
                            }}
                        />
                        <input
                            type="number"
                            value={quantities[item.id]}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                            min="1"
                        />
                        <button onClick={() => addToCart(item, quantities[item.id])}>Add to Cart</button>
                    </div>
                ))}
            </div>
          <Bio />
        </div>
    );
}

export default Home;
