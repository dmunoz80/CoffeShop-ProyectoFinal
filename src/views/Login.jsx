import React from 'react';
import Formlogin from "../components/Formlogin"
import FooterNavigation from '../components/FooterNavigation';
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap"
import fotologin from "../assets/images/fotologin.jpeg"


const Login = () => {
    return (
        <div>
            <Navbar title={"INICIO DE SESIÓN"}/>
            <Container>
                <Row>
                    <Col>
                        <Formlogin />
                    </Col>
                    <Col>
                    <img src={fotologin} alt='' style={{ width:"250" , borderRadius: "50px", margin: "10px" }}></img>
                    </Col>
                </Row>
            </Container>
            <FooterNavigation />

        </div>
    );
}

export default Login;
