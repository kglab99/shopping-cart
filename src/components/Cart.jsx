// import React from "react";
// import Item from "./Item";
// import CartItem from "./CartItem";

// function Cart({ cartItems, removeFromCart, calculateTotalPrice }) {
//     return (
//         <div className="cart">
//             <h2>Shopping Cart</h2>
//             {cartItems.length === 0 ? (
//                 <p>Your cart is empty</p>
//             ) : (
//                 <>
//                     {cartItems.map((cartItem, index) => (
//                         <div key={index} className="cart-item">
//                             <CartItem itemProp={cartItem.item} />
//                             <p>Quantity: {cartItem.quantity}</p>
//                             <button onClick={() => removeFromCart(index)}>Remove</button>
//                         </div>
//                     ))}
//                     <div className="total-price">
//                         <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }

// export default Cart;
