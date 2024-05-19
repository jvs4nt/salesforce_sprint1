import { styled } from "styled-components";

export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    height: 95vh;
    background-color: white;
    align-items: center;
    padding: 5%;
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

    @media (max-width: 768px) {
        font-size: 1.7rem;
    }
`;

