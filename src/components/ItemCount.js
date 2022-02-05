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
        onAdd(contador)
    }



    return (
        <div>

            <div className="boxCount">
                <div className="cantidadElegida">
                    <button className="btnconfirmar" onClick={disminuirContador}>-</button>
                    <p className="numero-contador"> {contador} </p>
                    <button className="btnconfirmar" onClick={aumentarContador}>+</button>
                <button onClick={confirmarCantidad} className="btnconfirmar">Confirmar</button>
                </div>
            <p className="stock">Stock: {stock}</p>
            </div>

        </div>
    )
}

export default ItemCount
