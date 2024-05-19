import React from 'react';
import { Close, CloseDiv, IconImg, Img, Link, MobileBox, MobileLink, MobileMenu, NavbarStyle, Options } from './Navbar.style';
import { useNavigate } from 'react-router-dom';
import menuIcon from './../../assets/menu.png'

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);

    function handleLogin() {
        navigate('/login');
    }

    function handleTeam() {
        navigate('/team');
    }

    function handleHome() {
        navigate('/home');
    }

    function handleClients() {
        navigate('/clients');
    }

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <NavbarStyle className="navbar">
                <div>
                <Img onClick={handleHome} src="https://login.salesforce.com/img/logo214.svg" alt="Logo da empresa" />
                </div>
                <div>
                <div onClick={toggleMenu}>
                    <IconImg src={menuIcon} alt="Menu" />
                </div>
                <Options className="navbar-nav">
                    <li className="nav-item">
                        <Link onClick={handleHome} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={handleClients} className="nav-link">Clientes</Link>
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
            {isOpen && (
                <MobileMenu>
                    <MobileBox>
                        <CloseDiv onClick={toggleMenu}>
                            <Close>x</Close>
                        </CloseDiv>
                        <MobileLink onClick={handleHome} className="nav-link">Home</MobileLink>
                        <MobileLink onClick={handleClients} className="nav-link">Clientes</MobileLink>
                        <MobileLink onClick={handleTeam} className="nav-link">Equipe</MobileLink>
                        <MobileLink onClick={handleLogin} className="nav-link">Sair</MobileLink>
                    </MobileBox>
                </MobileMenu>
            )}
        </>
    );
}

export default Navbar;  