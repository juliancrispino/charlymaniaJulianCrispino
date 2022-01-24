import { CartContext } from "./CartContext"
import { useContext } from "react"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"



const Cart = () => {

    const { carrito, removeItem, clear, precio_total } = useContext(CartContext)


    if (carrito.length === 0) {
        return (
            <div className="carritoVacio">
                <p>No hay productos para mostrar.</p>
                <Link to="/">¡Click aquí para empezar a comprar!</Link>
            </div>
        )
    } else {
        return (
            <div className="carritoLleno">
                {carrito.map(prod => <CartItem key={prod.item.id} product={prod} removeItem={removeItem} />)}
                <div className="precio_total">
                    <p>Total: $ { precio_total }</p>
                </div>
                    
                <button className="btn_finalizar" >Finalizar compra</button>
                <button className="btn_vaciar" onClick={clear}>Vaciar carrito</button>
            </div>
        )
    }
}

export default Cart
