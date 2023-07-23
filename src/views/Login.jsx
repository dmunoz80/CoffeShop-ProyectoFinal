import React from 'react';
import Formlogin from "../components/Formlogin"
import FooterNavigation from '../components/FooterNavigation';
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap"
import fotologin from "../assets/images/fotologin1.png"


const Login = () => {
    return (
        <>
        <Navbar title={"INICIO DE SESIÓN"}/>
        <div className='login'>
            <Container>
                <Row>
                    <Col>
                        <Formlogin />
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
        <FooterNavigation />
        </>
    );
}

export default Login;
