import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="fw-bold text-light bg-dark">
      <Container>
      <Navbar.Brand className='fw-bold text-light'>COFFE SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className='text-decoration-none'>HOME</NavLink>
            <NavLink to='/' className='text-decoration-none'>NOSOTROS</NavLink>
            <NavLink to='/Products' className='text-decoration-none'>TIENDA</NavLink>
            <NavLink to='/' className='text-decoration-none'>COMENTARIOS</NavLink>
            <NavLink to='/' className='text-decoration-none'>CONTACTO</NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Inciar Sesión</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ver mi Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Registrate</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;