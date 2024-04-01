import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Card, CardBox, CardImage, CardRM, CardText, MainBox, MainSection, MainText } from './Team.style';
import profile from './../../assets/profile-pic.jpeg';
import profileWill from './../../assets/profilewill.jpeg'
import profileRyan from './../../assets/profileryan.jpeg'

const Team: React.FC = () => {
    return (
        <>
        <Navbar />
        <MainSection>
            <MainText>Equipe de desenvolvimento:</MainText>
            <MainBox>
                <Card>
                    <CardImage src={profile}/>
                    <CardBox>
                        <CardText>João Santos</CardText>
                        <CardRM>RM554328</CardRM>
                    </CardBox>
                </Card>
                <Card>
                    <CardImage src={profileWill}/>
                    <CardBox>
                        <CardText>Willian Daniel</CardText>
                        <CardRM>RM554328</CardRM>
                    </CardBox>
                </Card>
                <Card>
                    <CardImage src={profileRyan}/>
                    <CardBox>
                        <CardText>Ryan Azanha</CardText>
                        <CardRM>RM554328</CardRM>
                    </CardBox>
                </Card>
                </MainBox>
        </MainSection>
        </>
    );
}

export default Team;