import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/navbar-logo.png';

function NavbarNosotros() {
  return (
    
    <Navbar expand="lg" className="bg-dark text-light">
      
        <Navbar.Brand href="#" className='text-light fw-bold'>
        <img src={logo} width="60" className="align-top" alt=''
            />{' '}

        </Navbar.Brand>
        <h1 className='mx-auto'>Sobre Nosotros</h1>
    </Navbar>
  );
}

export default NavbarNosotros;