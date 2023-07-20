import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/navbar-logo.png';

function NavbarProductDetail() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='bg-dark text-light p-3'>
        <Navbar.Brand href="#" className=' d-flex gap-3 text-light fw-bold'>
        <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <h2>COFFE SHOP</h2>
        </Navbar.Brand>
        <h1>DETALLE PRODUCTO</h1>
        <h1></h1>
      </Container>
    </Navbar>
  );
}

export default NavbarProductDetail;