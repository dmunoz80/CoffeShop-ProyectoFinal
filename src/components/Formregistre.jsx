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

                    <Col> <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstName">Nombre:</label>
                            <input type="text" id="firstName" name="firstName" value={userData.firstName} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label htmlFor="lastName">Apellido:</label>
                            <input type="text" id="lastName" name="lastName" value={userData.lastName} onChange={handleInputChange} required />
                        </div>
                        <label htmlFor="address">Dirección:</label>
                        <input type="text" id="address" name="address" value={userData.address} onChange={handleInputChange} required />
                        <div>
                            <label htmlFor="email">Correo electrónico:</label>
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