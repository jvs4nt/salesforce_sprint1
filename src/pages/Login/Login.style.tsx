import { styled } from "styled-components";

export const MainSection = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #f7f9fa;
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
    
`;

export const FormBox = styled.form`
    display: flex;
    padding: 20px;
    flex-direction: column;
    color: #516e82;
    height: 360px;
    width: 470px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #d0d8db;
    margin-bottom: 30px;
`;

export const Input = styled.input`
    padding: 10px;
    width: 100%;
    border: 1px solid gray;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-top: 5px;
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

export const ButtonLink = styled.a`
    text-decoration: none;
    color: #077bf7;
    cursor: pointer;
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid gray;
    margin-left: 10px;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #077bf7;
    cursor: pointer;
`;

export const DivLink = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const Img = styled.img`
    width: 14rem;
    height: 14rem;
    margin-bottom: 20px;
    margin: 0 auto;
    margin-bottom: 20px;
`;

export const Checkbox = styled.input`
    margin-right: 10px;
`;

export const Linha = styled.hr`
    width: 100%;
    border: 0.3px solid #d0d8db;
    margin-top: 20px;
    margin-bottom: 20px;
`;