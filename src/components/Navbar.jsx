import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Container, Navbar, Nav, Form, Dropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context';
import logo from '../assets/images/navbar-logo.png';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function NavigationBar({title, withLinks, withCart, withSearch}) {
  const { total,buscar, busqueda } = useContext(Context);
  return (
    <Navbar className="text-light bg-dark">
      <Container>
      <Navbar.Brand>
        <img src={logo} className='logo w-20' style={{width: "65px"}}></img>
      </Navbar.Brand>
      {withLinks && 
          <Nav className="justify-content-end">
            <NavLink to='/' className='text-decoration-none p-2 text-white with-zoom '>HOME</NavLink>
            <NavLink to='/Nosotros' className='text-decoration-none p-2 text-white with-zoom'>NOSOTROS</NavLink>
            <NavLink to='/Tienda' className='text-decoration-none p-2 text-white with-zoom'>TIENDA</NavLink>
            <NavLink to='/Comment' className='text-decoration-none p-2 text-white with-zoom'>COMENTARIOS</NavLink>
            <NavLink to='/Contacto' className='text-decoration-none p-2 text-white with-zoom'>CONTACTO</NavLink>
            
      <Dropdown className='mx-3'>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
        <FaUserCircle size={'2em'}/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item>
          <NavLink to='/Login' className='text-decoration-none text-dark'>INICIAR SESION</NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink to='/Registre' className='text-decoration-none text-dark'>REGISTRATE</NavLink>
        </Dropdown.Item>    
        </Dropdown.Menu>
      </Dropdown>

          </Nav>
      }
      {title && 
        <h1 className='mx-auto'>{title}</h1>
      }
      {withSearch && 
        <div className='d-flex gap-3'>
          <Form className="d-flex">
            <Form.Control
              value={buscar}
              onChange = {busqueda}
              type="text"
              placeholder="Busca tu producto favorito"
            />
          </Form>
        </div>}
      {withCart && 
        <NavLink to='/ShopCart' className='text-light text-decoration-none px-5'>
          <FaShoppingCart size={'2em'}/> ${total}
        </NavLink>
      }
      </Container>
    </Navbar>
      
  );
}
    
export default NavigationBar;