
function CartItem({itemProp, quantityProp}) {
    const { name, description, price, img } = itemProp;
    const quantity = quantityProp;

    return (
        <div className="item">
            <img src={img} alt="" />
            <div className="text">
                <h2>{name}</h2>
                <p className="price">${price}</p>
                <p>Quantity: {quantity}</p>
            </div>
        </div>
    )
}

export default CartItem