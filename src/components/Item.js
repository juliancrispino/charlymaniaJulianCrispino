import ItemCount from "./ItemCount"

const items = [
    { id: 1, nombre: "Yendo de la cama al living", año: 1982, portada: "/img/yendo de la cama al living.jpg", precio: 800, stock: 5 },
    { id: 2, nombre: "Clics modernos", año: 1983, portada: "/img/clics modernos.jpg", precio: 1000, stock: 11 },
    { id: 3, nombre: "Piano bar", año: 1984, portada: "/img/piano bar.jpg", precio: 700, stock: 6 },
    { id: 4, nombre: "Parte de la religion", año: 1987, portada: "/img/parte de la religion.jpg", precio: 650, stock: 3 },
    { id: 5, nombre: "Como conseguir chicas", año: 1989, portada: "/img/como conseguir chicas.jpg", precio: 700, stock: 3 },
]


const Item = () => {
    return (
        items.map((elemento, indice) => {
            return (
                <div key={indice} className="tarjeta-producto">
                    <img src={elemento.portada} alt={elemento.nombre} className="img-producto" />
                    <div className="info-producto">
                        <p className="nombre-producto">{elemento.nombre}</p>
                        <p className="año-producto">Año: {elemento.año}</p>
                        <p className="precio-producto">Precio: ${elemento.precio}</p>
                        <ItemCount stock={elemento.stock} initial={1} />
                    </div>
                </div>
            )
        }
        )
    )
}

export default Item
