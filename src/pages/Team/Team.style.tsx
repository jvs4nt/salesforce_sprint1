import { styled } from "styled-components";

export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 95vh;
    background-color: white;
    align-items: center;
`;

export const MainBox = styled.div`
    display: flex;
    background-color: white;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const MainText = styled.h1`
    font-size: 2.5rem;
    color: #032D60;
    margin-top: 5%;
    margin-bottom: 5%;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    height: 100%;
    border: 1px solid #d0d8db;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CardImage = styled.img`
    width: 50%;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10%;
    border: 5px solid #d0d8db;
    transition: 0.3s;

    &:hover {
        border: 2px solid #0176D3;
    }
`;

export const CardText = styled.p`
    color: #032D60;
    font-size: 1.6rem;
    text-align: center;
`;

export const CardRM = styled.p`
    color: #000;
    font-size: 1.2rem;
    margin-bottom: 20px;
    cursor: pointer;
`;