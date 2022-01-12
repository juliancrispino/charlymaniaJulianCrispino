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
        onAdd(contador)
    }



    return (
        <div>

            <p className="stock">Stock:{stock}</p>
            <div className="boxCount">
                <div className="cantidadElegida">
                    <button className="modificarContador" onClick={disminuirContador}>-</button>
                    <p className="numero-contador"> {contador} </p>
                    <button className="modificarContador" onClick={aumentarContador}>+</button>
                <button onClick={confirmarCantidad} className="btnconfirmar">Confirmar</button>
                </div>
            </div>

        </div>
    )
}

export default ItemCount
