import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#"><h3>MARVELSTUDIO</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href= "#">About</Nav.Link>
                            <Nav.Link href="#">Login</Nav.Link>
                        </Nav>
                        <br></br>
                        <i class="bi bi-cart3"></i>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;