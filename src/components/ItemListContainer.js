import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../firebase"
import { collection, getDoc, getDocs, query, where } from "firebase/firestore"


// const items = [
//     { id: 1, nombre: "Yendo de la cama al living", año: 1982, portada: "/img/yendo de la cama al living.jpg", precio: 800, stock: 25, descripcion: "Primer disco de estudio del artista Charly Garcia.", categoria: "disco" },
//     { id: 2, nombre: "Clics modernos", año: 1983, portada: "/img/clics modernos.jpg", precio: 1000, stock: 31, descripcion: "Segundo disco de estudio del artista Charly Garcia.", categoria: "disco" },
//     { id: 3, nombre: "Piano bar", año: 1984, portada: "/img/piano bar.jpg", precio: 700, stock: 16, descripcion: "Tercer disco de estudio del artista Charly Garcia.", categoria: "disco" },
//     { id: 4, nombre: "Parte de la religion", año: 1987, portada: "/img/parte de la religion.jpg", precio: 650, stock: 13, descripcion: "Cuarto disco de estudio del artista Charly Garcia.", categoria: "disco" },
//     { id: 5, nombre: "Como conseguir chicas", año: 1989, portada: "/img/como conseguir chicas.jpg", precio: 700, stock: 33, descripcion: "Quinto disco de estudio del artista Charly Garcia.", categoria: "disco" },
//     { id: 6, nombre: "Remera negra SNM", portada: "/img/remera.png", precio: 300, stock: 13, descripcion: "Remera negra sublimada, alta calidad.", categoria: "remera" },
//     { id: 7, nombre: "Remera negra rostro dibujo", portada: "/img/remera2.png", precio: 350, stock: 11, descripcion: "Remera negra sublimada, alta calidad.", categoria: "remera" },
//     { id: 8, nombre: "Remera negra SNM poco contraste", portada: "/img/remera3.png", precio: 290, stock: 24, descripcion: "Remera negra sublimada, alta calidad.", categoria: "remera" },
//     { id: 9, nombre: "Remera blanca rostro animado", portada: "/img/remera4.png", precio: 310, stock: 16, descripcion: "Remera blanca sublimada, alta calidad.", categoria: "remera" },
//     { id: 10, nombre: "Remera negra charly dibujo", portada: "/img/remera5.png", precio: 300, stock: 8, descripcion: "Remera negra sublimada, alta calidad.", categoria: "remera" },

// ]



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { nombreCat } = useParams()




    useEffect(() => {

        const coleccionProductos = collection(db, "productos") //El segundo parametro es el nombre de la coleccion, como string.

        if (nombreCat) {
            const filtro = where("categoria", "==", nombreCat)  //Establezco una comparacion entre un campo deseado y un valor. Ideal para filtrar
            const consulta = query(coleccionProductos, filtro)
            const pedido = getDocs(consulta)
            pedido
            .then((resultado) => {
                const docs = resultado.docs     //Ahora si puedo hacer un map. NO en "resultado", si en "resultado.docs", que es el array
                const docs_formateado = docs.map(doc => {
                    const producto = {
                        id: doc.id,     //Agrego el ID que me da Firebase por defecto, para poder filtrar luego con getDoc
                        ...doc.data()
                    }

                    return producto
                })
                setProductos(docs_formateado)        //Aca tengo mis productos! (desde la base de datos propia)
                setLoading(false)
            })

            .catch((error) => {
                console.log(error)
            })
        } else {
            const pedido = getDocs(coleccionProductos)  //Un truco de firebase -> La coleccion es una instancia de la clase Query, es tomada como query.
            //getDocs (y getDoc) me devuelve siempre una PROMESA.
            pedido
                .then((resultado) => {
                    const docs = resultado.docs     //Ahora si puedo hacer un map. NO en "resultado", si en "resultado.docs", que es el array
                    const docs_formateado = docs.map(doc => {
                        const producto = {
                            id: doc.id,     //Agrego el ID que me da Firebase por defecto, para poder filtrar luego con getDoc
                            ...doc.data()
                        }
    
                        return producto
                    })
                    setProductos(docs_formateado)        //Aca tengo mis productos! (desde la base de datos propia)
                    setLoading(false)
                })
    
                .catch((error) => {
                    console.log(error)
                })
        }

        // const promesa = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         res(items)
        //     }, 2000)
        // })

        // if (nombreCat) {
        //     // console.log("aca pediria productos de la categoria" + id);
        //     promesa.then((productos) => {
        //         setLoading(false)
        //         setProductos(productos.filter(idx => idx.categoria === nombreCat))
        //     })


        // } else {
        //     // console.log("aca todos los productos");
        //     promesa.then((productos) => {
        //         setLoading(false)
        //         setProductos(productos)
        //     })
        // }

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
