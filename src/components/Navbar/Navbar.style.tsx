import { styled } from "styled-components";


export const NavbarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    background-color: #f7f9fa;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 5px 40px;
    border-bottom: 0.2px solid #00A1E0;
    font-size: 1rem;
    height: 7vh;
    position: fixed; /* Adiciona fixação da Navbar */
    top: 0; /* Posiciona a Navbar no topo */
    width: 100%; /* Garante que a Navbar ocupe toda a largura da tela */
    z-index: 1000; /* Garante que a Navbar fique acima de outros elementos */
`;

export const Options = styled.nav`
  display: flex;
  width: 10%;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Link = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #032D60;
    font-weight: 500;
    font-size: 1.2rem;
    transition: 0.3s;

    &:hover {
        color: #00A1E0;
    }
`;

export const Img = styled.img`
    width: 3.7rem;
    margin-top: 5px;
    cursor: pointer;

`;

export const MobileMenu = styled.div`
    display: none;
    cursor: pointer;
    color: black;
    @media (max-width: 768px) {
        display: flex;
        background-color: white;
        flex-direction: column;
        width: 120px;
        height: 150px;
        position: absolute;
        right: 0;
        top: 0;
    }
    border: 1px solid #032D60;
`;

export const MobileBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const MobileLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #000;
    font-weight: 500;
    font-size: 1.2rem;
    transition: 0.3s;

    &:hover {
        color: #00A1E0;
    }
`;

export const Menu = styled.div`

    display: none;
    cursor: pointer;
    color: black;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 30px;
        height: 20px;
        margin-left: auto;
    }
`;

export const IconImg = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
    @media (min-width: 768px) {
      display: none;
    }
`;

export const CloseDiv = styled.div`
  width: 100%;
`;

export const Close = styled.p`
  text-align: right;
  margin-right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
`;
