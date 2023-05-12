import { FC, useRef, FormEvent } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { styled } from 'styled-components';
import emailjs from '@emailjs/browser';

import Toast from './shared/Toast';

const ContactContainer = styled(Row)`
    margin-top: 30px;
`;

const Title = styled.h2`
    margin-bottom: 30px;
`;

const ContactForm: FC = () => {
    const form = useRef(null);

    const confirmEmail = () => {
        (document.getElementById('contact-form') as HTMLFormElement).reset();

        Toast.fire({
            icon: 'success',
            title: 'Email send successfully'
        });
    }

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_email_service,
            import.meta.env.VITE_email_template, 
            form.current || "", 
            import.meta.env.VITE_email_public_key
        ).then(() => {
            confirmEmail();
        }, (error) => {
            console.error(error.text);
        });
    };

    return (
        <ContactContainer id="contactMe">
            <form id="contact-form" ref={form} onSubmit={sendEmail} >
                <Col>
                    <Title>Contact Me</Title>
                    <Form.Group className="mb-3">
                        <Form.Label>Who am I?</Form.Label>
                        <Form.Control 
                            id="from"
                            name="from"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>What are you looking for?</Form.Label>
                        <Form.Control 
                            id="subject"
                            name="subject"
                            type="text"     
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Your message</Form.Label>
                        <Form.Control 
                            id="message"
                            name="message"
                            as="textarea"
                            rows={6}
                        />
                    </Form.Group>
                    <div className='d-flex justify-content-end'>
                        <Button variant="dark" type='submit' >
                            Send Message
                        </Button>
                    </div>
                </Col>
            </form>
        </ContactContainer>
    );
}

export default ContactForm;
