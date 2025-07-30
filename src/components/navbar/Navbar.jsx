import { Link } from 'react-router-dom';
import "./Navbar.scss";
import Logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <header className="navbar">
            <nav className="navbar__container wrapper">
                <Link 
                    to="/" 
                    className="navbar__logo"
                    onClick={() => setShowNav(false)}
                >
                    <img src={Logo} alt="logo" />
                </Link>

                <ul className={`nav-links ${showNav ? "show" : ""}`}>
                    <li onClick={() => setShowNav(false)}>
                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <Link to="/umkm">UMKM</Link>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <Link to="/wisata">Wisata</Link>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <Link to="/tentang">Tentang Kami</Link>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <Link to="/berita">Berita Desa</Link>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <Link to="/report">Report</Link>
                    </li>
                </ul>

                <div className="navbar__btns">
                    <Link to="/login">Login</Link>
                    <Link to="/register" className="btn">
                        Register
                    </Link>
                </div>

                <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
                    {showNav ? <IoMdClose /> : <IoMenu />}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;