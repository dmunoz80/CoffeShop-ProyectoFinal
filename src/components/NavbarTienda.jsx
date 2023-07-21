import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context';
import logo from '../assets/images/navbar-logo.png';

function NavbarTienda() {
  const { total } = useContext(Context);
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
        <h1>TIENDA</h1>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button>Search</Button>
          </Form>

            <NavLink to='/ShopCart' className='fw-bold text-light text-decoration-none mx-3'>
              🛒 ${total}
            </NavLink>

      </Container>
    </Navbar>
  );
}

export default NavbarTienda;