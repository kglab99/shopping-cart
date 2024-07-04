
function Item({itemProp}) {
    const { name, description, price, img } = itemProp;


    return (
        <div className="item">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p className="description">{description}</p>
            <p className="price">${price}</p>
        </div>
    )
}

export default Item