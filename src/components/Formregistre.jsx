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
                    <Col style={{ textAlign: "center", marginBottom: "50px" }} > <form onSubmit={handleSubmit}>
                        <div>
                            <Col><label htmlFor="firstName"></label></Col>
                            <input type="text" id="firstName" name="firstName" value={userData.firstName} onChange={handleInputChange} required placeholder='Nombre'/>
                        </div>
                        <div>
                            <Col><label htmlFor="lastName"></label></Col>
                            <input type="text" id="lastName" name="lastName" value={userData.lastName} onChange={handleInputChange} required placeholder='Apellido'/>
                        </div>
                        <Col><label htmlFor="address"></label></Col>
                        <input type="text" id="address" name="address" value={userData.address} onChange={handleInputChange} required placeholder='Dirección' />
                        <div>
                            <Col> <label htmlFor="email"></label></Col>
                            <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} required placeholder='Correo Electrónico' />
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
