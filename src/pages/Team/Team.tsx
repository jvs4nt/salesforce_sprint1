import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Card, CardBox, CardImage, CardLink, CardText, MainSection } from './Team.style';

const Team: React.FC = () => {
    return (
        <>
        <Navbar />
        <MainSection>
        <Card>
            <CardImage src='https://i.ibb.co/DthS4fF/Link-Fortalec-a-a-empresa-do-seu-cliente-com-dados-unificados-e-em-tempo-real-data-cloud-card-png.png'/>
            <CardBox>
                <CardText>João Santos</CardText>
                <CardLink>LinkedIn</CardLink>
            </CardBox>
        </Card>
        <Card>
            <CardImage src='https://i.ibb.co/Y0KWH0n/div-card-image-wrapper.png'/>
            <CardBox>
                <CardText>Willian Daniel</CardText>
                <CardLink>LinkedIn</CardLink>
            </CardBox>
        </Card>
        <Card>
            <CardImage src='https://i.ibb.co/WBZg8y6/Link-Marketing-no-Whats-App-O-que-e-e-como-integrar-a-sua-estrate-gia-de-marketing-digital-php-mk-wh.png'/>
            <CardBox>
                <CardText>Ryan Azanha</CardText>
                <CardLink>LinkedIn</CardLink>
            </CardBox>
        </Card>
        </MainSection>
        </>
    );
}

export default Team;