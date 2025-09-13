import "./main.css";
import {Link, Outlet} from 'react-router-dom';

function Navbar() {
    return (
        <>
            <ul className="nav">
                <li>
                    <Link id="homeId" to="/">DynTable</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
}

export default Navbar;