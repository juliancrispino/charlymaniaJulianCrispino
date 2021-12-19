import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="menu-nav">
            <div className='titulo-logo'>
                <h1 className="titulo-nav">Cajitas Malu</h1>
                <img className="logo" src="/logo.png" alt="Logo cajitas malu" />
            </div>
            <div>
                <ul className="lista">
                    <li className="item-lista"><a href="#">Home</a></li>
                    <li className="item-lista"><a href="#">Nosotros</a></li>
                    <li className="item-lista"><a href="#">Contacto</a></li>
                </ul>
            </div>
            <CartWidget />
        </div>
    )
}


export default NavBar