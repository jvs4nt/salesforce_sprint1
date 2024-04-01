import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Box1, Box2, Button, ButtonDiv, Card, CardImage, Img, MainBox, MainSection, SecButton, SecondaryBox } from './Home.style';

const Home: React.FC = () => {
    return (
        <>
        <Navbar />
        <MainSection>
            <MainBox>
                <Box1>
                    <h1>Conheça nossos</h1>
                    <h1>produtos e se torne</h1>
                    <h1>um cliente Salesforce</h1>
                    <p>Atendemos todos os serviços de CRM com suporte 24h e um teste</p>
                    <p>grátis para garantir a qualidade sem se arrepender de nada!</p>
                <ButtonDiv>
                    <Button>Faça o teste grátis</Button>
                    <SecButton>Saiba mais</SecButton>
                </ButtonDiv>  
                </Box1>
                <Box2>
                    <Img src="https://i.ibb.co/VgLY7pt/Salesforce1.png" alt="Logo da empresa" />
                </Box2>
            </MainBox>
            <SecondaryBox>
                <Card>
                    <CardImage src='https://i.ibb.co/Y0KWH0n/div-card-image-wrapper.png'/>
                </Card>
                <Card>
                    <CardImage src='https://i.ibb.co/Y0KWH0n/div-card-image-wrapper.png'/>
                </Card>
                <Card>
                    <CardImage src='https://i.ibb.co/Y0KWH0n/div-card-image-wrapper.png'/>
                </Card>
            </SecondaryBox>
        </MainSection>
        </>
    );
}

export default Home;