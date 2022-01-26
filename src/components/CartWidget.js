import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { cantidad_total } = useContext(CartContext)

    if (cantidad_total === 0) {
        return (null)
    } else {
        return (
            <div>
                <Link to="/cart" className="cart_widget">
                    <span className="material-icons cartIcon">
                        shopping_cart
                    </span>
                    <div className="cuadro_carrito">
                        {cantidad_total}
                    </div>
                </Link>
            </div>
        )
    }
}

export default CartWidget
