import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { styled } from 'styled-components';

const NavbarContainer = styled(Container)`
    max-width: 60%;
    margin: auto;
`;

const Footer:FC = () => {
  return (
    <Navbar bg="light">
        <NavbarContainer fluid>
            <Navbar.Brand> Sebastian Vargas R. </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        Offcanvas
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Profile</Nav.Link>
                        <Nav.Link href="#action2">Projects</Nav.Link>
                        <Nav.Link href="#action2">Contact Me</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </NavbarContainer>
    </Navbar>
  )
}

export default Footer;