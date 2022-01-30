import ItemDetail from "./ItemDetail"
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "./CartContext"
import { collection, getDoc, doc } from "firebase/firestore"
import { db } from "../firebase"
import Swal from "sweetalert2"


const ItemDetailContainer = () => {


    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [agregado, setAgregado] = useState(false)
    const { id } = useParams()
    const { addItem } = useContext(CartContext)


    useEffect(() => {

        const coleccionProductos = collection(db, "productos")
        const docRef = doc(coleccionProductos, id)
        const pedido = getDoc(docRef)

        pedido
            .then((resultado) => {
                const producto = resultado.data()
                setProducto({ ...producto, id })
                setLoading(false)
            })

            .catch((error) => {
                return Swal.fire({
                    icon: 'error',
                    text: 'Algo salio mal',
                })
            })

    }, [id])

    const onAdd = (contador) => {
        addItem(producto, contador)
        setAgregado(true)
    }


    return (
        loading ? <div className='spinner'></div> : <ItemDetail producto={producto} onAdd={onAdd} agregado={agregado} />
    )
}

export default ItemDetailContainer
