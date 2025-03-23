import { Link } from "react-router-dom";
import computerIcon from "../assets/win95.css/assets/icons/computer-3.png";
import { useState } from "react";

function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-95">
            <Link className="navbar-brand" to="/">
                <img src={computerIcon} alt="Computer Icon"/> RH Development
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                onClick={handleNavCollapse}
                aria-controls="navbarNavDropdown"
                aria-expanded={!isNavCollapsed}
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;