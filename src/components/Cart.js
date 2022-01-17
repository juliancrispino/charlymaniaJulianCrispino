import { CartContext } from "./CartContext"
import { useContext } from "react"
import CartItem from "./CartItem"



const Cart = () => {

    const { carrito, removeItem, clear } = useContext(CartContext)


    return (
        <div>
            {carrito.map(prod => <CartItem key={prod.item.id} product={prod} removeItem={removeItem} /> )}
            <button className="btn_vaciar" onClick={clear}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
