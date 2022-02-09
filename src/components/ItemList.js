import Item from "./Item"

const ItemList = ({ productos, indice }) => {


    return (
        <section className="seccion-productos">
            {productos.map((producto, indice) => {
                return <Item producto={producto} key={indice} />
            })}
        </section>
    )

}



export default ItemList
