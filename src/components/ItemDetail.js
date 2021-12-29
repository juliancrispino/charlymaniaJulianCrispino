import ItemCount from "./ItemCount"
import producto from "./ItemDetailContainer"


const ItemDetail = ({producto}) => {
    return (
        <div className="detalle-producto">
            <img src={producto.portada} alt={producto.nombre} className="img-producto" />
            <div className="info-producto">
                <p className="nombre-producto">{producto.nombre}</p>
                <p className="año-producto">Año: {producto.año}</p>
                <p className="precio-producto">Precio: ${producto.precio}</p>
                <p>Info:{producto.descripcion}</p>
                <ItemCount stock={producto.stock} initial={1} />
            </div>
        </div>
    )
}



export default ItemDetail
