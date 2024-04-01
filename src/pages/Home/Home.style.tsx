import { styled } from "styled-components";

export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 120vh;
    background-color: white;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        min-height: 150vh;
    }
`;

export const MainBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 5rem;
    margin-left: 5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-left: 0;
    }
`;

export const Img = styled.img`
    width: 100%;
    margin-bottom: 20px;
    margin: 0 auto;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Box1 = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    text-align: left;
    margin-bottom: 20px;

    h1 {
        font-size: 2rem;
        font-family: 'Roboto', sans-serif;
        color: #032D60;
        margin: 0;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const Box2 = styled.div`
    width: 40%;
`;

export const ButtonDiv = styled.div`
    display: flex;
    width: 80%;
    gap: 20px;
    margin-top: 20px;
`;

export const Button = styled.button`
    padding: 10px;
    width: 100%;
    margin-bottom:20px;
    background-color: rgb(0, 112, 210);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
        background-color: rgb(0, 84, 157);
    }
`;

export const SecButton = styled.button`
    padding: 10px;
    width: 100%;
    margin-bottom:20px;
    background-color: #fff;
    border: 1px solid #0176D3;
    color: #0176D3;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
        background-color: #fff;
    }
`;

export const SecondaryBox = styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    border: none;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 20px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    &:hover {
        border: 1px solid #0176D3;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const CardBox = styled.div`
    padding: 20px;
`;

export const CardImage = styled.img`
    width: 100%;
    padding: 5px;
    rounded: 0px;
`;

export const CardText = styled.p`
    color: #032D60;
`;

export const CardLink = styled.a`
    text-decoration: underline;
    color: #0176D3;
    margin-bottom: 20px;
    cursor: pointer;
`;