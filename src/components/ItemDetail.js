
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({producto, onAdd, agregado}) => {


    return (
        <div className="detalle-producto">
            <img src={producto.portada} alt={producto.nombre} className="img-producto" />
            <div className="info-producto">
                <p className="nombre-producto">{producto.nombre}</p>
                {producto.categoria === "disco" ? <p className="año-producto">Año: {producto.año}</p> : null}
                <p className="precio-producto">Precio: $ {producto.precio}</p>
                <p>Info: {producto.descripcion}</p>
                {agregado ? <button className="btnconfirmar"><Link to="/cart">Finalizar compra</Link></button> : <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>}
            </div>
        </div>
    )
}



export default ItemDetail
