import { FC } from 'react';
import { styled } from 'styled-components';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import Icon from './Icon';

const NavbarContainer = styled(Container)`
    max-width: 60%;
    margin: auto;
`;

const Footer:FC = () => {

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
        <Navbar bg="light">
            <NavbarContainer fluid>
                <Navbar.Brand>
                    {
                        icons.map((icon, index) => (
                            <Icon key={index}  {...icon} />
                        ))
                    }    
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Offcanvas placement="end">
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Navbar.Brand> { "<" } Sebastian Vargas R. { " />" } </Navbar.Brand>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </NavbarContainer>
        </Navbar>
    );
}

export default Footer;