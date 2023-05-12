import { FC } from 'react';
import { styled } from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Profile from '../../components/Profile';
import ProjectList from '../../components/ProjectList';
import ContactForm from '../../components/ContactForm';
import ContactCard from '../../components/ContactCard';

const MainContainer = styled.div`
    max-width: 60%;
    margin: auto;
`;

const Portfolio:FC = () => {

    const x = import.meta.env.VITE_email_service.toString();
    const y = import.meta.env.VITE_email_template.toString();
    const z = import.meta.env.VITE_email_public_key.toString();

    return (
        <>
            <Header />
            <MainContainer>
                <>
                    {x}<br/>
                    {y}<br/>
                    {z}<br/>
                </>
                <Profile />
                <ProjectList />
                <ContactForm />
                <ContactCard />
            </MainContainer>
            <Footer />
        </>
    )
};

export default Portfolio;