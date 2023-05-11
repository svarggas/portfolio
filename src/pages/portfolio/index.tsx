import { FC } from 'react';
import { styled } from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Profile from '../../components/Profile';
import ProjectList from '../../components/ProjectList';
import Contact from '../../components/Contact';

const MainContainer = styled.div`
    max-width: 60%;
    margin: auto;
`;

const Portfolio:FC = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <Profile />
                <ProjectList />
                <Contact />
            </MainContainer>
            <Footer />
        </>
    )
};

export default Portfolio;