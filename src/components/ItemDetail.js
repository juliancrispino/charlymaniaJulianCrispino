import ItemCount from "./ItemCount"


const ItemDetail = ({producto}) => {

    
    return (
        <div className="detalle-producto">
            <img src={producto.portada} alt={producto.nombre} className="img-producto" />
            <div className="info-producto">
                <p className="nombre-producto">{producto.nombre}</p>
                {producto.categoria === "disco" ? <p className="año-producto">Año: {producto.año}</p> : <p/>}
                <p className="precio-producto">Precio: ${producto.precio}</p>
                <p>Info: {producto.descripcion}</p>
                <ItemCount stock={producto.stock} initial={1} />
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}



export default ItemDetail
