import { CartContext } from "./CartContext"
import { useContext } from "react"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"
import { collection } from "firebase/firestore"
import Swal from 'sweetalert2'
import { db } from "../firebase"
import { addDoc } from "firebase/firestore"

const Cart = () => {
    const { carrito, removeItem, clear, precioTotal } = useContext(CartContext)

    const crearOrden = () => {
        const coleccionProductos = collection(db, "ordenes")

        const usuario = {
            nombre: "Juan",
            email: "mail@gmail.com",
            telefono: "01168697258"
        }

        const orden = {
            usuario,
            carrito,
            total: precioTotal(),
        }

        const pedido = addDoc(coleccionProductos, orden)

        pedido
            .then((resultado) => {
                return Swal.fire(
                    `N° de Orden:  ${resultado.id}`,
                    `
                El total de tu compra es $${orden.total}.
                ¡Gracias por tu compra!
                `,
                    'success',
                    clear()
                )
            })
            .catch((error) => {
                return Swal.fire({
                    icon: 'error',
                    text: 'Algo salio mal',
                })
            })
    }

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
                    <p>Total: $ {precioTotal()}</p>
                </div>
                <button className="cta" onClick={crearOrden}>
                    <span className="hover-underline-animation"> Finalizar compra </span>
                    <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                        <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                    </svg>
                </button>
                <button className="btn vaciar_carrito" onClick={clear}>Vaciar carrito</button>
                <div />
            </div>
        )
    }
}

export default Cart
