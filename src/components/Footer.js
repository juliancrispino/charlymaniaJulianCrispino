import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="menu-nav">
            <div className='titulo-logo'>
                <h1 className="titulo-nav">CharlyManía</h1>
            </div>
            <div className="copy">Copyright - Charly 2021</div>
            <div>
                <ul className="lista">
                    <li className="item-lista"><Link to="/categoria/disco">DISCOS</Link></li>
                    <li className="item-lista"><Link to="/categoria/remera">REMERAS</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
