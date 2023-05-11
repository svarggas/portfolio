import { FC } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
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
        <Navbar bg="light" className="mb-3">
            <NavbarContainer fluid>
                <Navbar.Brand> { "<" } Sebastian Vargas R. { ">" } </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Offcanvas placement="end">
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link onClick={() => scrollFunction('profile')}>Profile</Nav.Link>
                            <Nav.Link onClick={() => scrollFunction('projects')}>Projects</Nav.Link>
                            <Nav.Link onClick={() => scrollFunction('contactMe')}>Contact Me</Nav.Link>
                            <Nav.Link onClick={() => scrollFunction('contactInformation')}>Contact Information</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </NavbarContainer>
        </Navbar>
    )
}

export default Header;