import { createContext, useEffect } from 'react';
import { useState } from 'react';


export const CartContext = createContext(/*{      Nombre del contexto. Importante exportarlo, ya que lo uso fuera de este componente
    carrito : [],
    precio_total : 0,
    cantidad_total : 0
}*/)

//Patron Provider
const { Provider } = CartContext      //Destructuring. Podria obviarlo y usar CartCotext.Provider

const CartProvider = ({ children }) => {        //PROOVEDOR DEL CONTEXTO!  -  children es una prop por defecto. Es todo lo que tengo dentro del commponente

    const [carrito, setCarrito] = useState([])
    const [precio_total, setPrecio_total] = useState(0)
    const [cantidad_total, setCantidad_total] = useState(0)



    const addItem = (prod, count) => {
        if (isInCart(prod.id)) {
            const indexActualizar = carrito.findIndex(element => element.item.id === prod.id)
            carrito[indexActualizar].count = carrito[indexActualizar].count + count
            setCantidad_total(cantidad_total + count)


        } else {
            console.log(`Agregaste ${prod.nombre}, cantidad ${count} `);
            const nuevoCarrito = {
                item: prod,
                count: count
            }
            setCarrito([...carrito, nuevoCarrito])
            setPrecio_total(precio_total + (prod.precio * count))
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
        //return true : false
    }

    useEffect(() => {
        if(carrito.length > 0){
            let cantidad = 0
            carrito.forEach(item => cantidad = cantidad + item.count)
            setCantidad_total(cantidad)
        }else{
            setCantidad_total(0)
        }

    },[carrito])



    const valorDelContexto = { carrito, cantidad_total, addItem, removeItem, clear, isInCart, precio_total /* Todo lo que paso como prop */ }

    return (
        <Provider value={valorDelContexto}>     {/*Lo que pase como prop, se puede utilizar en todos los "children"*/}
            {children}
        </Provider>
    )
}

export default CartProvider