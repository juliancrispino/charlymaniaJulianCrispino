import Item from "./Item"
import { useEffect, useState } from "react"

const ItemList = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(<Item />)
            }, 2000)
        })

        promesa.then((productos) => {
            setLoading(false)
            setProductos(productos)
        })

    })




    return (
        <div className="contenedor-producto">
            {loading ? <p>Cargando...</p> : <Item />}
        </div>
    )
}



export default ItemList
