import { CartContext } from "./CartContext"
import { useContext, useState } from "react"
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

        const pedido = addDoc(coleccionProductos,orden)

        pedido
        .then((resultado)=>{
            return Swal.fire (
                `N° de Orden:  ${resultado.id}`,
                `
                El total de tu compra es $${orden.total}.
                ¡Gracias por tu compra!
                `,
                'success',
                clear()
            )
        })
        .catch((error)=>{
            return Swal.fire(error)
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

                
                    
                <button className="btn_finalizar" onClick={crearOrden} >Finalizar compra</button>
                <button className="btn_vaciar" onClick={clear}>Vaciar carrito</button>
            </div>
        )
    }
}

export default Cart
