import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore"



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { nombreCat } = useParams()

    useEffect(() => {

        const coleccionProductos = collection(db, "productos")

        if (nombreCat) {
            const filtro = where("categoria", "==", nombreCat) 
            const consulta = query(coleccionProductos, filtro)
            const pedido = getDocs(consulta)
            pedido
            .then((resultado) => {
                const docs = resultado.docs 
                const docs_formateado = docs.map(doc => {
                    const producto = {
                        id: doc.id,  
                        ...doc.data()
                    }

                    return producto
                })
                setProductos(docs_formateado)
                setLoading(false)
            })

            .catch((error) => {
                console.log(error)
            })
        } else {
            const pedido = getDocs(coleccionProductos)

            pedido
                .then((resultado) => {
                    const docs = resultado.docs 
                    const docs_formateado = docs.map(doc => {
                        const producto = {
                            id: doc.id,
                            ...doc.data()
                        }
    
                        return producto
                    })
                    setProductos(docs_formateado) 
                    setLoading(false)
                })
    
                .catch((error) => {
                    console.log(error)
                })
        }

    }, [nombreCat])



    if (loading) {
        return (
            <div className='spinner'></div>
        )
    } else {
        return (
            <div className="contenedor-productos">
                <ItemList productos={productos} />
            </div>

        )
    }
}

export default ItemListContainer
