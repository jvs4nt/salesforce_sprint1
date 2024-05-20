import { styled } from "styled-components";

export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 120vh;
    background-color: white;
    font-family: 'Roboto', sans-serif;
    padding-top: 7%;

    @media (max-width: 1150px) {
        min-height: 150vh;
        min-width: 100vw;
    }
`;

export const MainBox = styled.div`
    display: flex;
    margin-top: 5rem;
    margin-left: 5rem;
    width: 90%;

    @media (max-width: 1150px) {
        flex-direction: column;
        align-items: center;
        margin-left: 0;
    }
`;

export const Img = styled.img`
    width: 100%;
    border-radius: 20px;
    margin-top: 3rem;
    align-self: center;
    @media (max-width: 1150px) {
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
        font-size: 3rem;
        font-family: 'Roboto', sans-serif;
        color: #032D60;
        margin: 0;
    }

    @media (max-width: 1150px) {
        width: 100%;
        padding: 0 20px;

        h1 {
            font-size: 1.7rem;
        
        }
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

    @media (max-width: 1050px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ThirdBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5rem;
    width: 100%;

    h1 {
        font-size: 2.5rem;
        color: #032D60;
        margin-bottom: 20px;
    }
`;

export const TextBox = styled.div`
    text-align: center;
    margin: 0 auto;
    padding-left: 5%;
    padding-right: 5%;

    @media (max-width: 768px) {
        width: 80%;
        h1 {
            font-size: 1.7rem;
        }
    }
`;

export const ElementsBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-left: 5%;
    padding-right: 5%;
    margin-bottom: 10rem;

    @media (max-width: 1150px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Element = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23%;
    padding: 20px;
    border-radius: 10px;
    transition: 0.3s;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    @media (max-width: 1150px) {
        width: 80%;
        margin-bottom: 20px;
        border: 0.5px solid grey;

        &:hover {
            border: 0.5px solid #f0f0f0;
        }
    }
`;

export const ElementImage = styled.img`
    width: 80%;
    margin-bottom: 20px;

    @media (max-width: 1150px) {
        width: 50%;
    }
`;

export const ElementText = styled.h3`
    color: #032D60;
`;

export const ElementP = styled.p`
    color: #032D60;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 28%;
    border: none;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 20px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 1050px) {
        width: 80%;
    }
`;

export const CardBox = styled.div`
    padding: 20px;
`;

export const CardImage = styled.img`
    width: 100%;
    padding: 5px;
    border-radius: 20px;
    cursor: pointer;
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