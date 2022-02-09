

const CartItem = ({ product, removeItem }) => {
    return (
        <div>
            <article className="tarjeta_cart">
                <img className="img_cart" src={product.item.portada} alt={product.item.nombre} />
                <h3>{product.item.nombre}</h3>
                <p>Unidades: {product.count}</p>
                <p>Precio unitario: ${product.item.precio}</p>
                <p>Precio total: ${product.item.precio * product.count}</p>
                <button className="btn" onClick={() => removeItem(product.item.id)}>x</button>
            </article>
        </div>
    )
}



export default CartItem
