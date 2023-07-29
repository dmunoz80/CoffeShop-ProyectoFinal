import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";

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


        <Form onSubmit={handleSubmit} className="formulario">
            <Form.Group>
                <Form.Control type="text" id="firstName" name="firstName" value={userData.firstName} onChange={handleInputChange} placeholder="Nombre " />
            </Form.Group>
            <Form.Group>
            <Form.Label></Form.Label>
                <Form.Control type="text" id="lastName" name="lastName" value={userData.lastName} onChange={handleInputChange} placeholder="Apellido" />
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="Correo Electrónico" />
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control  type="text" id="address" name="address" value={userData.address} onChange={handleInputChange} placeholder="Direccion" />
            </Form.Group>
            <Button type="submit" className="m-3 with-zoom" style={{ backgroundColor: "#b4764f", borderColor: "#b4764f" }}>REGISTRATE</Button>
        </Form>
    );
}

export default Registre;
