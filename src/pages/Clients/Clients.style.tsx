import { styled } from "styled-components";

export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    min-height: 90vh;
    background-color: white;
    align-items: center;
    padding: 5%;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: #032D60;
    margin-top: 50px;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
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

export const TableBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5%;
    border: 1px solid #032D60;
`;

