import "./main.css";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
        <>
            {/* Full viewport width, no gaps */}
            <nav className="fixed top-0 left-0 w-full bg-black text-[#803BB2] z-50">
                <div className="flex flex-wrap items-center justify-between px-6 py-5">
                    <Link
                        id="homeId"
                        to="/"
                        className="text-xl font-bold flex-shrink-0"
                    >
                        DynTable
                    </Link>

                    <ul className="flex flex-wrap items-center gap-4 ml-auto">
                        <li>
                            <Link to="/" className="nav-link block px-2 py-1">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link block px-2 py-1">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="pt-16">
                <Outlet />
            </div>
        </>
    );
}

export default Navbar;