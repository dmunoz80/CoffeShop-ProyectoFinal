import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Container, Navbar, Nav, Form} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/navbar-logo.png';
import { FaShoppingCart } from "react-icons/fa";

function NavigationBar({title, withLinks, withCart, withSearch}) {
  
  return (
    
    <Navbar className="fw-bold text-light bg-dark">
      <Container>
      <Navbar.Brand>
        <img src={logo} className='logo w-20' style={{width: "65px"}}></img>
      </Navbar.Brand>
      {withLinks && 
          <Nav className="justify-content-end">
            <NavLink to='/' className='text-decoration-none p-2 text-white '>HOME</NavLink>
            <NavLink to='/Nosotros' className='text-decoration-none p-2 text-white'>NOSOTROS</NavLink>
            <NavLink to='/Tienda' className='text-decoration-none p-2 text-white'>TIENDA</NavLink>
            <NavLink to='/' className='text-decoration-none p-2 text-white'>COMENTARIOS</NavLink>
            <NavLink to='/Contacto' className='text-decoration-none p-2 text-white'>CONTACTO</NavLink>
          </Nav>
       
      }
      {title && 
        <h1 className='mx-auto'>{title}</h1>
      }
      {withSearch && 
        <div className='d-flex gap-3'>
          <Form className="d-flex">
            <Form.Control
            
            onChange = {() => {}}
            type="text"
            placeholder="Busca tu producto favorito"
            />
          </Form>
        </div>}
      {withCart && 
        <NavLink to='/ShopCart' className='fw-bold text-light text-decoration-none px-5'>
          <FaShoppingCart size={'2em'}/> ${0}
        </NavLink>
      }
      </Container>
    </Navbar>
      
  );
}
    
export default NavigationBar;