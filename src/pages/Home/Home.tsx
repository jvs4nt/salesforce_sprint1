import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { MainSection } from './Home.style';

const Home: React.FC = () => {
    return (
        <>
        <Navbar />
        <MainSection>
            <h1>Welcome to the Home Page</h1>
        </MainSection>
        </>
    );
}

export default Home;