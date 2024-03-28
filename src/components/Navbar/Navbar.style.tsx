import { styled } from "styled-components";


export const NavbarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f7f9fa;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 5px 40px;
`;

export const Options = styled.nav`
  display: flex;
  width: 10%;
  justify-content: space-between;
  gap: 40px;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #516e82;
    cursor: pointer;

    &:hover {
        color: #077bf7;
        text-decoration: underline;
    }
`;

export const Img = styled.img`
    width: 4rem;
    height: 4rem;

`;
