import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Box1, Button, ButtonDiv, Img, MainBox, MainSection, SecButton } from './Home.style';

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
                </Box1>
                
                <ButtonDiv>
                    <Button>Faça o teste grátis</Button>
                    <SecButton>Saiba mais</SecButton>
                </ButtonDiv>  

                <Img src="https://login.salesforce.com/img/logo214.svg" alt="Logo da empresa" />
                
            </MainBox>
        </MainSection>
        </>
    );
}

export default Home;