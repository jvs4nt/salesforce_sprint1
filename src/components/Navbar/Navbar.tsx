import React from 'react';
import { NavbarStyle, Options } from './Navbar.style';

const Navbar: React.FC = () => {
    return (
        <NavbarStyle className="navbar">
            <Options className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="/contact" className="nav-link">Contact</a>
                </li>
                <li className="nav-item">
                    <a href="/login" className="nav-link">Sair</a>
                </li>
            </Options>
        </NavbarStyle>
    );
}

export default Navbar;  