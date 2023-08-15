import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Navbar, Nav, Form, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context';
import logo from '../assets/images/navbar_logo.png';
import { BsCart3 } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";

function NavigationBar({ title, withLinks, withCart, withSearch }) {
  const { total, buscar, busqueda, usuario } = useContext(Context);
  return (
    <Navbar className=" bg-img-navbar text-light bg-dark">
      <Container>
    
      <Navbar.Brand>
        <img src={logo} alt='logo' className='logo' style={{width: "110px"}}></img>
      </Navbar.Brand>
      {withLinks && 

          <Nav className="justify-content-end">
            <NavLink to='/' className='text-decoration-none p-2 text-white with-zoom '>HOME</NavLink>
            <NavLink to='/Nosotros' className='text-decoration-none p-2 text-white with-zoom'>NOSOTROS</NavLink>
            <NavLink to='/Tienda' className='text-decoration-none p-2 text-white with-zoom'>TIENDA</NavLink>
            <NavLink to='/Contacto' className='text-decoration-none p-2 text-white with-zoom'>CONTACTO</NavLink>
            <NavLink to='/Reviews' className='text-decoration-none p-2 text-white with-zoom'>RESEÑAS</NavLink>

            <Dropdown className='mx-3'>
              <Dropdown.Toggle style={{backgroundColor:"#874421", borderColor:"#874421"}} id="dropdown-basic">
              <FaRegCircleUser size={'2em'}/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {!usuario &&
                <Dropdown.Item>
                  <NavLink to='/Login' className='text-decoration-none text-dark'>INICIAR SESION</NavLink>
                </Dropdown.Item>
              }
              {usuario &&
                <Dropdown.Item>
                  <NavLink to='/MiPerfil' className='text-decoration-none text-dark'>MI PERFIL</NavLink>
                </Dropdown.Item>  
              }  
              {!usuario &&
                <Dropdown.Item>
                  <NavLink to='/Registre' className='text-decoration-none text-dark'>REGISTRATE</NavLink>
                </Dropdown.Item>
              }   
              {usuario && 
                <Dropdown.Item>
              <NavLink to='/Comment' className='text-decoration-none text-dark'>COMENTARIOS</NavLink>
                </Dropdown.Item>
              }  
              {usuario && usuario.rol === "admin" &&
                <Dropdown.Item>
                  <NavLink to='/AddProduct' className='text-decoration-none text-dark'>AGREGAR PRODUCTOS</NavLink>
                </Dropdown.Item>
              }    
              {usuario && usuario.rol === "admin" &&
                <Dropdown.Item>
                  <NavLink to='/Usuarios' className='text-decoration-none text-dark'>USUARIOS</NavLink>
                </Dropdown.Item>
              }   
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