import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Img, MainBox, MainSection } from './Home.style';

const Home: React.FC = () => {
    return (
        <>
        <Navbar />
        <MainSection>
            <MainBox>
                <Img src="https://login.salesforce.com/img/logo214.svg" alt="Logo da empresa" />
                <h1>Welcome to Salesforce</h1>
            </MainBox>
        </MainSection>
        </>
    );
}

export default Home;