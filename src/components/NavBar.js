import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <div className="menu-nav">
            <div >
                <Link to="/" className='titulo-logo'>
                    <h1 className="titulo-nav">CharlyManía</h1>
                    <img className="logo" src="/logo.png" alt="Logo cajitas malu" />
                </Link>
            </div>
            <div>
                <ul className="lista">
                    <li className="item-lista"><Link to="/categoria/discos">discos</Link></li>
                    <li className="item-lista"><Link to="/categoria/remeras">remeras</Link></li>
                </ul>
            </div>
            <CartWidget />
        </div>
    )
}


export default NavBar