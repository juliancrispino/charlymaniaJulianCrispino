import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { cantidad_total } = useContext(CartContext)

    if (cantidad_total === 0) {
        return (<p></p>)

    } else {
        return (
            <div>
                <Link to="/cart">
                    <span className="material-icons cartIcon">
                        shopping_cart
                    </span>
                    {cantidad_total}
                </Link>
            </div>
        )
    }
}

export default CartWidget
