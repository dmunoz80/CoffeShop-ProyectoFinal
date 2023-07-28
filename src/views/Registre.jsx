import React from 'react';
import Formregistre from "../components/Formregistre"
import FooterNavigation from '../components/FooterNavigation';
import Navbar from "../components/Navbar";
import {Row, Col} from "react-bootstrap";

const Registre = () => {
    return (
        <div className="container-fluid justify-content-center p-0" >
            <Navbar title={"REGISTRATE"} />
            <div className="registro d-flex align-items-center">
            <Row className="container-fluid gap-2 mt-3" style={{minWidth:"300px"}}>

            <Col style={{minWidth:"300px"}}>
            <Formregistre />
            </Col>
            <Col style={{minWidth:"300px"}}>
                    <p className="fw-bold fs-3 text-justify">Nos encanta recibir de nuestros clientes todas sus dudas, consultas y observaciones, que siempre son bien recibidos. Nos ayudan a asegurarnos de que cada experiencia que tengas sea la mejor de las posible.</p>
            </Col>
            </Row>
            </div>
            <FooterNavigation />
        </div>
    );
}

export default Registre;
