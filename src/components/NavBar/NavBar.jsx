import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CarWidget";

const NavBar = () => {
    return (
        <div>
            <nav className="nav">
                <Link to="/">
                    <h1>OBSEQUIOS</h1>
                </Link>
                <div>
                    <div className="nav_btn categorias">
                        
                        <NavLink className="Link" to="/category/remeras">
                            REMERAS
                        </NavLink>
                        <NavLink className="Link" to="/category/pantalones">
                            PANTALONES
                        </NavLink>
                        <NavLink className="Link" to="/category/tazas">
                            TAZAS
                        </NavLink>
                    </div>
                    
                </div>

                <CartWidget />
            </nav>
            
        </div>
    );
};

export default NavBar;
