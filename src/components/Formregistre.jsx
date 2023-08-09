import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


function Registre() {
    const navigate = useNavigate() 
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        password: '',
        image: ''
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
        axios.post("http://localhost:3000/sign_in",userData)
        .then(() => {
            alert("su cuenta ha sido creada con exito") 
            navigate("/Login")
        })
        .catch(() => {
            alert("su cuenta no ha sido creada")
        })
    };

    return (


        <Form onSubmit={handleSubmit} className="formulario" style={{width:"25rem"}}>
        
            <Form.Group className="mb-3">
                <Form.Control type="text" id="firstName" name="firstName" value={userData.firstName} onChange={handleInputChange} placeholder="Nombre " />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="text" id="lastName" name="lastName" value={userData.lastName} onChange={handleInputChange} placeholder="Apellido" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="Correo Electrónico" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control  type="text" id="address" name="address" value={userData.address} onChange={handleInputChange} placeholder="Direccion" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control  type="password" id="password" name="password" value={userData.password} onChange={handleInputChange} placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control  
                    type="text" 
                    id="image" 
                    name="image" 
                    value={userData.image} 
                    onChange={handleInputChange} 
                    placeholder="Url de Imagen" 
                    pattern="^(https?:\/\/)?(?:www\.)?.+\.(jpg|jpeg|png|gif|bmp)$" 
                    title="Por favor, ingrese una URL válida de imagen (jpg, jpeg, png, gif o bmp)." 
                    />
            </Form.Group>
            <Button type="submit" className="m-3 with-zoom" style={{ backgroundColor: "#b4764f", borderColor: "#b4764f" }}>REGISTRATE</Button>
        </Form>
    );
}

export default Registre;
