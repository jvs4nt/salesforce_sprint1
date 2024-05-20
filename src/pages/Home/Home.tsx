import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Box1, Box2, Button, ButtonDiv, Card, CardBox, CardImage, CardLink, CardText, Element, ElementImage, ElementP, ElementText, ElementsBox, Img, MainBox, MainSection, SecButton, SecondaryBox, TextBox, ThirdBox } from './Home.style';
import card1 from './../../assets/card1.png';
import card3 from './../../assets/card3.png';
import { useNavigate } from 'react-router-dom';
import mainimg from './../../assets/mainimg.png';
import element1 from './../../assets/element1.png';
import element2 from './../../assets/element2.png';
import element3 from './../../assets/element3.png';
import element4 from './../../assets/element4.png';

const Home: React.FC = () => {
    const navigate = useNavigate();

    function handleTeam() {
        navigate('/team');
    }

    function handleExternalLink(url: string) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

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
                    <Img src={mainimg} alt="Logo da empresa" />
                </Box2>
            </MainBox>
            <SecondaryBox>
                <Card>
                    <CardImage src={card1}  onClick={() => handleExternalLink('https://www.salesforce.com/br/products/')}/>
                    <CardBox>
                        <CardText>Temos diversos produtos disponíveis para atender suas necessidades</CardText>
                        <CardLink href='https://www.salesforce.com/br/products/' target='_blank'>Conheça os produtos</CardLink>
                    </CardBox>
                </Card>
                <Card>
                    <CardImage src='https://i.ibb.co/Y0KWH0n/div-card-image-wrapper.png' onClick={handleTeam}/>
                    <CardBox>
                        <CardText>Nossa equipe é determinada e mantemos o foco na exatidão e garantia</CardText>
                        <CardLink onClick={handleTeam}>Conheça a equipe</CardLink>
                    </CardBox>
                </Card>
                <Card>
                    <CardImage src={card3}  onClick={() => handleExternalLink('https://www.salesforce.com/br/form/contact/contactme/?d=cta-header-9')}/>
                    <CardBox>
                        <CardText>Tiramos todas as suas dúvidas através do nosso contato 24h</CardText>
                        <CardLink href='https://www.salesforce.com/br/form/contact/contactme/?d=cta-header-9' target='_blank'>Entre em contato conosco</CardLink>
                    </CardBox>
                </Card>
            </SecondaryBox>
            <ThirdBox>
                <TextBox>
                    <h1>Saiba como o Salesforce ajuda você a trabalhar de maneira mais inteligente e a crescer com mais rapidez. </h1>
                </TextBox>
                <ElementsBox>
                    <Element>
                        <ElementImage src={element1} />
                        <ElementText>Pequenas empresas</ElementText>
                        <ElementP>Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.</ElementP>
                    </Element>
                    <Element>
                        <ElementImage src={element2} />
                        <ElementText>Vendas</ElementText>
                        <ElementP>Feche mais negócios e acelere o crescimento com o CRM nº1.</ElementP>
                    </Element>
                    <Element>
                        <ElementImage src={element3} />
                        <ElementText>Atendimento</ElementText>
                        <ElementP>Gaste menos com serviços escaláveis que os clientes adoram.</ElementP>
                    </Element>
                    <Element>
                        <ElementImage src={element4} />
                        <ElementText>Veja todos os produtos</ElementText>
                        <ElementP>Descubra como nossas ofertas do Customer 360 proporcionam sucesso imediato.</ElementP>
                    </Element>
                </ElementsBox>
            </ThirdBox>
        </MainSection>
        </>
    );
}

export default Home;