import { createContext, useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2'
export const CartContext = createContext()

const { Provider } = CartContext
const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad_total, setCantidad_total] = useState(0)



    const addItem = (prod, count) => {
        if (isInCart(prod.id)) {
            const indexActualizar = carrito.findIndex(element => element.item.id === prod.id)
            carrito[indexActualizar].count = carrito[indexActualizar].count + count
            setCantidad_total(cantidad_total + count)
            Swal.fire(`Agregaste ${prod.nombre} al carrito, cantidad: ${count}.`)            

        } else {
            Swal.fire(`Agregaste ${prod.nombre} al carrito, cantidad: ${count}.`)            
            const nuevoCarrito = {
                item: prod,
                count: count
            }
            setCarrito([...carrito, nuevoCarrito])
        }
    }

    const removeItem = (id) => {
        const carritoActualizado = carrito.filter(element => element.item.id !== id)
        setCarrito(carritoActualizado)
    }

    const clear = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        return carrito.some(element => element.item.id === id)
    }


    const precioTotal = () => {
        return carrito.reduce((accum, element) => accum = accum + (element.item.precio * element.count), 0)
    }

    useEffect(() => {
        if (carrito.length > 0) {
            let cantidad = 0
            carrito.forEach(item => cantidad = cantidad + item.count)
            setCantidad_total(cantidad)
        } else {
            setCantidad_total(0)
        }

    }, [carrito])


    const valorDelContexto = { carrito, cantidad_total, addItem, removeItem, clear, isInCart, precioTotal }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CartProvider