import ItemCount from './ItemCount';


const ItemListContainer = ({greeting}) => {

    const onAdd = () => {}

    return (
        <div>
            {greeting}
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer
