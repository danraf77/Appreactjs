import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="/categoria/1">Hombres</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/categoria/2">Mujeres</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/categoria/3">Niños</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/cart">Carrito</Link>
                    </li>

                
            </ul>
        </>
    )
}
export default Nav