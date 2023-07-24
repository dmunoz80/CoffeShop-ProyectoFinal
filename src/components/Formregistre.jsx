import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap"

function Registre() {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userData);
        setUserData({
            firstName: '',
            lastName: '',
            address: '',
            email: '',
        });
    };

    return (


        <div className="container">
            <Container>
                <Row>

                    <h1 style={{ textAlign: "center" }} >Registro de Usuarios</h1>

                    <Col style={{ textAlign: "center", marginBottom: "50px" }} > <form onSubmit={handleSubmit}>
                        <div>
                            <Col><label htmlFor="firstName">Nombre:</label></Col>
                            <input type="text" id="firstName" name="firstName" value={userData.firstName} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <Col><label htmlFor="lastName">Apellido:</label></Col>
                            <input type="text" id="lastName" name="lastName" value={userData.lastName} onChange={handleInputChange} required />
                        </div>
                        <Col><label htmlFor="address">Dirección:</label></Col>
                        <input type="text" id="address" name="address" value={userData.address} onChange={handleInputChange} required />
                        <div>
                            <Col> <label htmlFor="email">Correo electrónico:</label></Col>
                            <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} required />
                        </div>
                        <button
                            variant="outline-dark"
                            style={{ borderColor: "#b4764f", marginTop: "20px" }}
                            type="submit">Registrarse</button>
                    </form> </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Registre;
