import { styled } from "styled-components";


export const NavbarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    background-color: #f7f9fa;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 5px 40px;
    border-bottom: 3px solid #00A1E0;
    font-size: 1rem;
    height: 7vh;
`;

export const Options = styled.nav`
  display: flex;
  width: 10%;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const Link = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #000;
    font-weight: 600;
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
