import ItemCount from "./ItemCount"


const Item = ({elemento}) => {
return(
    <article>
        <h2>{elemento.nombre}</h2>
        <img src={elemento.portada} alt={elemento.nombre} className="img-producto" />
        <p className="precio-producto">Precio: ${elemento.precio}</p>
        <ItemCount stock={elemento.stock} initial={1} />
    </article>
)
}

export default Item
