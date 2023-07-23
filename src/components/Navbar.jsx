import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Navbar, Nav, Form, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context';
import logo from '../assets/images/navbar-logo.png';
import { BsCart3 } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";

function NavigationBar({ title, withLinks, withCart, withSearch }) {
  const { total, buscar, busqueda } = useContext(Context);
  return (
    <Navbar className=" bg-img-navbar text-light bg-dark">
      <Container>
    
      <Navbar.Brand>
        <img src={logo} className='logo' style={{width: "110px"}}></img>
      </Navbar.Brand>
      {withLinks && 

          <Nav className="justify-content-end">
            <NavLink to='/' className='text-decoration-none p-2 text-white with-zoom '>HOME</NavLink>
            <NavLink to='/Nosotros' className='text-decoration-none p-2 text-white with-zoom'>NOSOTROS</NavLink>
            <NavLink to='/Tienda' className='text-decoration-none p-2 text-white with-zoom'>TIENDA</NavLink>
            <NavLink to='/Comment' className='text-decoration-none p-2 text-white with-zoom'>COMENTARIOS</NavLink>
            <NavLink to='/Contacto' className='text-decoration-none p-2 text-white with-zoom'>CONTACTO</NavLink>
            
            <Dropdown className='mx-3'>
              <Dropdown.Toggle style={{backgroundColor:"#874421", borderColor:"#874421"}} id="dropdown-basic">
              <FaRegCircleUser size={'2em'}/>
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
          <Form className="d-flex" style={{width:"300px"}}>
            <Form.Control
              value={buscar}
              onChange = {busqueda}
              type="text"
              placeholder="Busca tu producto favorito"
            />
          </Form>
        </div>}
      {withCart && 
        <NavLink to='/ShopCart' className='text-light text-decoration-none px-3'>
          <BsCart3 size={'2em'}/> ${total}
        </NavLink>
      }
      </Container>
    </Navbar>

  );
}

export default NavigationBar;