import React from 'react';
import Formlogin from "../components/Formlogin"
import FooterNavigation from '../components/FooterNavigation';
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap"


const Login = () => {
    return (
        <div>
            <Navbar />
            <div style={{ backgroundColor: "#cd966c" }} >
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
        </div>
    )
}

export default Login;
