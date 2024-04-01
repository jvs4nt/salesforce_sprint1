import React from 'react';
import { Img, Link, NavbarStyle, Options } from './Navbar.style';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    function handleLogin() {
        navigate('/login');
    }

    function handleTeam() {
        navigate('/team');
    }

    function handleHome() {
        navigate('/home');
    }

    return (
            <NavbarStyle className="navbar">
                <div>
                <Img src="https://login.salesforce.com/img/logo214.svg" alt="Logo da empresa" />
                </div>
                <div>
                <Options className="navbar-nav">
                    <li className="nav-item">
                        <Link onClick={handleHome} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={handleTeam} className="nav-link">Equipe</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={handleLogin} className="nav-link">Sair</Link>
                    </li>
                </Options>
                </div>
                
            </NavbarStyle>
        
    );
}

export default Navbar;  