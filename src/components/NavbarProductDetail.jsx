import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context';
import logo from '../assets/images/navbar-logo.png';

function NavbarProductDetail() {
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
        <h1 className='mx-auto'>DETALLE DEL PRODUCTO</h1>
        <NavLink to='/ShopCart' className='fw-bold text-light text-decoration-none px-5'>
              <FaShoppingCart size={'2em'}/> ${total}
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default NavbarProductDetail;