import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function FooterNavigation() {
  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container className='d-flex flex-column text-center p-2'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='m-3'  style={{bordercolor:"white"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='d-flex gap-4 '>
            <NavLink to='/' className='text-decoration-none text-light with-zoom'>HOME</NavLink>
            <NavLink to='/Nosotros' className='text-decoration-none text-light with-zoom'>NOSOTROS</NavLink>
            <NavLink to='/Tienda' className='text-decoration-none text-light with-zoom'>TIENDA</NavLink>
            <NavLink to='/Contacto' className='text-decoration-none text-light with-zoom'>CONTACTO</NavLink>
            <NavLink to='/Login' className='text-decoration-none text-white with-zoom'>INICIAR SESION</NavLink>
            <NavLink to='/Registre' className='text-decoration-none text-white with-zoom'>REGISTRATE</NavLink>
            <NavLink to='/Reviews' className='text-decoration-none text-white with-zoom'>RESEÑAS</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text className='text-light m-2'>Ⓒ 2023.Cofee Shop Company. Reservados todos los derechos</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default FooterNavigation;