import React, { useState } from 'react';
import usersData from "../users.json"
import { Container, Row, Col, Button } from "react-bootstrap"


const Formlogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        const user = usersData.users.find((user) => user.username === username && user.password === password);
        if (user) {
            // Aquí puedes agregar la lógica de inicio de sesión exitosa
            console.log('Inicio de sesión exitoso');
            setLoginError(false);
        } else {
            // Aquí puedes agregar la lógica para mostrar un mensaje de error
            console.log('Error en el inicio de sesión');
            setLoginError(true);
        }
    };

    return (
        <div>
            <Container style={{ textAlign: "center" }}>
                <Row>
                    <div style={{ marginTop: "15px" }}>
                        <Col> <label htmlFor="username" style={{ textAlign: "center" }}></label></Col>
                        <Col> <input type="text" id="username" value={username} onChange={handleUsernameChange} placeholder='Usuario'/></Col>
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <Col> <label htmlFor="password"></label></Col>
                        <Col>   <input type="password" id="password" style={{borderColor:"#b4764f"}}  value={password} onChange={handlePasswordChange} placeholder='Contraseña' /></Col>
                    </div>
                    <Col>
                    <Button
                    onClick={handleLogin}
                    type="submit" 
                    className="m-3" 
                    style={{backgroundColor:"#b4764f", borderColor:"#b4764f"}}
                    >Iniciar Sesión</Button>
                    </Col>

                    {loginError && <p style={{ color: 'red' }}>Usuario o contraseña incorrectos.</p>}

                </Row>
            </Container>
        </div >
    );
};

export default Formlogin;
