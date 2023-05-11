import { FC } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { styled } from 'styled-components';

import Icon from './Icon';

const ContactCardContainer = styled(Card)`
    margin-top: 100px;
    margin-bottom: 50px;
    padding: 5%;
    border: none;
    color: white;
    background-image: radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% );
    box-shadow: 0 25px 35px 0 rgba(0,0,0,0.4);
`;

const Title = styled(Card.Title)`
    margin-bottom: 15px;
`;

const CustomText = styled.p`
    margin-bottom: 20px;
    font-size: 1.2rem;
`;

const CustomIcon = styled.i`
    font-size: 1.5rem;
    margin-right: 5px;
`;

interface ContactInfoProps {
    icon: string;
    title: string;
}

const ContactInformation: FC<ContactInfoProps> = ({ icon, title }) => (
    <Col xs={12}>
        <CustomText>
            <CustomIcon className={`bi ${icon}`} />{ " " }
            { title }
        </CustomText>
    </Col>
);

const ContactCard: FC = () => {

    const contactInformation = [
        { icon: "bi-whatsapp", title: "(+506) 5713-0084" },
        { icon: "bi-envelope", title: "s.varggas@gmail.com" },
        { icon: "bi-geo", title: "Costa Rica" },
    ];

    const horizontalIcons = [
        { 
            name: "LinkedIn", 
            icon: "bi-linkedin", 
            href: "https://www.linkedin.com/in/svarggas/",
            variant: "outline-light",
        },
        { 
            name: "GitHub", 
            icon: "bi-github", 
            href: "https://github.com/svarggas",
            variant: "outline-light",
        },
        { 
            name: "CV", 
            icon: "bi-file-earmark-person", 
            href: "#",
            variant: "outline-light",
        },
    ];

    return (
        <ContactCardContainer id="contactInformation">
            <Card.Body>
                <Row>
                    <Col xs={12}>
                        <Title>
                            <h2>Contact Information</h2> 
                        </Title>
                        <Card.Text>
                            <CustomText>
                                You can contact me through the form above, or with some of the options below. I will reach to it as soon as possible.
                            </CustomText>
                        </Card.Text>
                    </Col>
                    {
                        contactInformation.map((info, index) => (
                            <ContactInformation key={index} {...info} />
                        ))
                    }
                    <Col xs={12}>
                        <CustomText>
                            {
                                horizontalIcons.map((icon, index) => (
                                    <span key={index} className='mx-2'>
                                        <Icon  {...icon} />
                                    </span>
                                ))
                            }
                        </CustomText>
                    </Col>
                </Row>
            </Card.Body>
        </ContactCardContainer>
    );
};

export default ContactCard;
