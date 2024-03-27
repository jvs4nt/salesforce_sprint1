import { styled } from "styled-components";

export const MainSection = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: pink;
    width: 50vw;
    height: 50vh;
`;

export const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`;

export const Input = styled.input`
    padding: 10px;
    margin: 10px;
    width: 90%;
`;

export const Button = styled.button`
    padding: 10px;
    margin: 10px;
    width: 95%;
    background-color: rgb(0, 112, 210);
    color: white;
    border: none;
    cursor: pointer;
`;

export const Link = styled.a`
    text-decoration: underline;
    color: blue;
    cursor: pointer;
`;

export const Img = styled.img`
    width: 140px;
    height: 140px;
    margin-bottom: 20px;
`;