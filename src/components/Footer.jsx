import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <Navbar expand="lg" className="fw-bold text-light bg-dark">
      <Container>
      <Navbar.Brand className='fw-bold text-light'></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className='text-decoration-none'>HOME</NavLink>
            <NavLink to='/' className='text-decoration-none'>NOSOTROS</NavLink>
            <NavLink to='/Tienda' className='text-decoration-none'>TIENDA</NavLink>
            <NavLink to='/' className='text-decoration-none'>COMENTARIOS</NavLink>
            <NavLink to='/' className='text-decoration-none'>CONTACTO</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text className='text-light m-2'>Ⓒ 2023.Cofee Shop Company. Reservados todos los derechos</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;