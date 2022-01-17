import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { cantidad_total }  = useContext(CartContext)

    return (
        <div>
            <Link to="/cart">
            <span className="material-icons cartIcon">
                shopping_cart
            </span>
            { cantidad_total } 
            </Link>
        </div>
    )
}

export default CartWidget
