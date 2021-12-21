import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial)

    const disminuirContador = () => {
        if (contador > initial) {
            setContador(contador - 1)
        }
    }


    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const confirmarCantidad = () => {
        console.log(`cantidad confirmada: ${contador}`);
        //onAdd(contador)
    }



    return (
        <div>
            
            <p>Producto X - Stock:{stock}</p>
            <button onClick={disminuirContador}>-</button>
            <p> {contador} </p>
            <button onClick={aumentarContador}>+</button>
            <button onClick={confirmarCantidad}>Confirmar</button>

        </div>
    )
}

export default ItemCount
