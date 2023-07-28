import React from 'react';
import Formlogin from "../components/Formlogin"
import FooterNavigation from '../components/FooterNavigation';
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap"


const Login = () => {
    return (
        <div className="container-fluid justify-content-center align-items-center p-0">
            <Navbar  title={"INICIO DE SESIÓN"} />
            <div className='login d-flex align-items-center'>
                <Container>
                    <Row className="container-fluid gap-2 mt-3" style={{minWidth:"300px"}}>
                        
                        <Col style={{minWidth:"300px"}}>
                        <Formlogin />
                        </Col>
                        <Col className='d-flex  align-items-center text-center' style={{minWidth:"300px"}}>
                        <p className="text-light fs-3 text-justify">Nos encanta recibir a nuestros clientes. inicia sesión para que puedas realizar tus compras o dejarnos un comentario.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterNavigation />
        </div>
    )
}

export default Login;
