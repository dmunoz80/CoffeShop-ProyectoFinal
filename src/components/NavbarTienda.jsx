import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context';
import logo from '../assets/images/navbar-logo.png';

function NavbarTienda() {
  const { total, buscar, busqueda } = useContext(Context);
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
              value={buscar}
              onChange = {busqueda}
              type="text"
              placeholder="Busca tu café favorito"
            />
          </Form>

            <NavLink to='/ShopCart' className='fw-bold text-light text-decoration-none mx-3'>
            <FaShoppingCart size={'2em'}/> ${total}
            </NavLink>

      </Container>
    </Navbar>
  );
}

export default NavbarTienda;