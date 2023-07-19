import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/navbar-logo.png';

function NavigationBar() {

  return (

    <Navbar className="fw-bold text-light bg-dark">
      <img src={logo} className='logo'></img>
      <Container>
      <Navbar.Brand></Navbar.Brand>
          <Nav>
            <NavLink to='/' className='text-decoration-none p-2 text-white '>HOME</NavLink>
            <NavLink to='/' className='text-decoration-none p-2 text-white'>NOSOTROS</NavLink>
            <NavLink to='/Products' className='text-decoration-none p-2 text-white'>TIENDA</NavLink>
            <NavLink to='/' className='text-decoration-none p-2 text-white'>COMENTARIOS</NavLink>
            <NavLink to='/' className='text-decoration-none p-2 text-white'>CONTACTO</NavLink>
          </Nav>
      </Container>
    </Navbar>

  );
}

export default NavigationBar;