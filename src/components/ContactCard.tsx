import { FC } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { styled } from 'styled-components';

import Icon from './Icon';

const ContactCardContainer = styled(Card)`
    margin-top: 100px;
    margin-bottom: 50px;
    padding: 10%;
`;

const Title = styled(Card.Title)`
    margin-bottom: 15px;
`;

const CustomText = styled.p`
    margin-bottom: 20px;
    font-size: 1.2rem;
`;

const ContactCard: FC = () => {

    const icons = [
        { 
            name: "LinkedIn", 
            icon: "bi-linkedin", 
            href: "https://www.linkedin.com/in/svarggas/" 
        },
        { 
            name: "GitHub", 
            icon: "bi-github", 
            href: "https://github.com/svarggas" 
        },
        { 
            name: "CV", 
            icon: "bi-file-earmark-person", 
            href: "#",
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
                    <Col xs={12}>
                        <CustomText>
                            <i className='bi bi-whatsapp' />{ " " }
                            (+506) 5713-0084
                        </CustomText>
                    </Col>
                    <Col xs={12}>
                        <CustomText>
                            <i className='bi bi-envelope' />{ " " }
                            s.varggas@gmail.com
                        </CustomText>
                    </Col>
                    <Col xs={12}>
                        <CustomText>
                            <i className='bi bi-geo' />{ " " }
                            Costa Rica
                        </CustomText>
                    </Col>
                    <Col xs={12}>
                        <CustomText>
                            {
                                icons.map((icon, index) => (
                                    <Icon key={index} {...icon} />
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
