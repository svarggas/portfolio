import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { styled } from 'styled-components';

const NavbarContainer = styled(Container)`
    max-width: 60%;
    margin: auto;
`;

const Header:FC = () => {

    const scrollFunction = (section: string) => {
        const element = document.getElementById(section);
        if (element) element.scrollIntoView({ behavior: 'smooth'});
    }
      
    return (
        <Navbar collapseOnSelect expand="sm" bg="light">
            <NavbarContainer fluid>
                <Navbar.Brand> { "<" }Sebastian V.{ ">" } </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
                        <Nav.Link onClick={() => scrollFunction('profile')}>Profile</Nav.Link>
                        <Nav.Link onClick={() => scrollFunction('projects')}>Projects</Nav.Link>
                        <Nav.Link onClick={() => scrollFunction('contactMe')}>Contact Me</Nav.Link>
                        <Nav.Link onClick={() => scrollFunction('contactInformation')}>Contact Information</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </NavbarContainer>
        </Navbar>
    )
}

export default Header;