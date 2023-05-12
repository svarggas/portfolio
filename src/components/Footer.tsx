import { FC } from 'react';
import { styled } from 'styled-components';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const NavbarContainer = styled(Container)`
    max-width: 60%;
    margin: auto;
`;

const Footer:FC = () => {
    return (
        <Navbar bg="light">
            <NavbarContainer fluid>
                <Navbar.Offcanvas placement="end">
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Navbar.Brand> { "</" } Sebastian V. { " >" } </Navbar.Brand>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </NavbarContainer>
        </Navbar>
    );
}

export default Footer;