import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#"><h3>Products</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="">Home</Nav.Link>
                            <Nav.Link href="https://unsplash-video-ads.imgix.video/GSWRK_CAN_Acquire_Custom_Urgency_EDN1VIDOWL_SignUp_1x1%20(1).mp4?fm=mp4&res=medium">About</Nav.Link>
                            <Nav.Link href="https://getbootstrap.com/docs/5.2/examples/sign-in/">Login</Nav.Link>
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