import { Container, Nav, Navbar, Tooltip, OverlayTrigger } from 'react-bootstrap';
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Weather App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <OverlayTrigger
                        key="bottom"
                        placement="bottom"
                        overlay={<Tooltip id="tooltip-bottom">Work in Progress</Tooltip>}>
                        <Nav className="d-flex align-items-center">
                            <Nav.Link eventKey="disabled" disabled>Favoris</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>Map</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>°C / °F</Nav.Link>
                        </Nav>
                    </OverlayTrigger>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
export default Header