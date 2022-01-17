

const CartItem = ({product, removeItem}) => {
    return (
        <div>
            <article className="tarjeta_cart">
                <img className="img_cart" src={product.item.portada} alt={product.item.nombre} />
                <h3>{product.item.nombre}</h3>
                <p>Unidades: {product.count}</p>
                <p>Precio: ${product.item.precio}</p>
                <button onClick={() => removeItem(product.item.id)}>Eliminar</button>
            </article>
        </div>
    )
}



export default CartItem
