import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Cart from './Cart'
import { Routes, Route } from 'react-router-dom';

/**
 * /
 * 
 * /item/?
 * /categoria/?
 * /carrito
 * 
 */


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categoria/:nombreCat" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            
        </main>
    )
}



export default Main
