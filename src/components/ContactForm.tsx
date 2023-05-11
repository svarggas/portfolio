import { FC } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { styled } from 'styled-components';

const ContactContainer = styled(Row)`
    margin-top: 30px;
`;

const Title = styled.h2`
    margin-bottom: 30px;
`;

const ContactForm: FC = () => (
    <ContactContainer id="contactMe">
        <Col>
            <Title>Contact Me</Title>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Who am I?</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="subject">
                <Form.Label>What are you looking for?</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
                <Form.Label>Your message</Form.Label>
                <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <div className='d-flex justify-content-end'>
                <Button variant="dark" type="submit">
                    Send Message
                </Button>
            </div>
        </Col>
    </ContactContainer>
);

export default ContactForm;
