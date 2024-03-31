import { styled } from "styled-components";

export const MainSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;
    background-color: white;
`;

export const MainBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Img = styled.img`
    width: 14rem;
    height: 14rem;
    margin-bottom: 20px;
    margin: 0 auto;
    margin-bottom: 20px;
`;

export const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 20px;

    h1 {
        font-size: 2rem;
        font-family: 'Roboto', sans-serif;
        color: #032D60;
        margin: 0;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    width: 80%;
    gap: 20px;
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