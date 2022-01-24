import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        // <article className="tarjeta-producto">
        //     <h2>{producto.nombre}</h2>
        //     <img src={producto.portada} alt={producto.nombre} className="img-producto" />
        //     <p className="precio-producto">Precio: ${producto.precio}</p>
        //     <Link to={`/item/${producto.id}`} className="caja-link">
        //         <div className="link-ver-mas">Ver mas</div>
        //     </Link>

        // </article>

        <article className="card">
            <div className="imgBox">
                <img src={producto.portada} alt={producto.nombre} className="mouse" />
            </div>

            <div className="contentBox">
                <h3>{producto.nombre}</h3>
                <h2 className="price">$ {producto.precio}</h2>
                <Link to={`/item/${producto.id}`} className="buy">Comprar</Link>
            </div>
        </article>

    )
}

export default Item
