import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"

const items = [
    { id: 1, nombre: "Yendo de la cama al living", año: 1982, portada: "/img/yendo de la cama al living.jpg", precio: 800, stock: 25, descripcion: "Primer disco de estudio del artista Charly Garcia." },
    { id: 2, nombre: "Clics modernos", año: 1983, portada: "/img/clics modernos.jpg", precio: 1000, stock: 31, descripcion: "Segundo disco de estudio del artista Charly Garcia." },
    { id: 3, nombre: "Piano bar", año: 1984, portada: "/img/piano bar.jpg", precio: 700, stock: 16, descripcion: "Tercer disco de estudio del artista Charly Garcia." },
    { id: 4, nombre: "Parte de la religion", año: 1987, portada: "/img/parte de la religion.jpg", precio: 650, stock: 13, descripcion: "Cuarto disco de estudio del artista Charly Garcia." },
    { id: 5, nombre: "Como conseguir chicas", año: 1989, portada: "/img/como conseguir chicas.jpg", precio: 700, stock: 33, descripcion: "Quinto disco de estudio del artista Charly Garcia." },
]

const ItemDetailContainer = () => {


    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(items)
            }, 2000)
        })

        promesa.then((producto) => {
            setLoading(false)
            setProducto(producto[0])
        })

    })

    if (loading) {
        return (
            <p> Cargando...</p>
        )
    } else {
        return (
            <ItemDetail producto={producto}/>
        )
    }}

export default ItemDetailContainer
