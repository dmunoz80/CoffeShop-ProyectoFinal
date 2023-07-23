import React, { useState } from 'react';
import usersData from "../users.json"
import { Container, Row, Col } from "react-bootstrap"


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
            <Container style={{textAlign: "center"}}>
                <Row>
                    <Col>
                        <h2 style={{marginTop: "50px"}}>Inicio de Sesión</h2>
                    </Col>
                    <div style={{marginTop: "15px"}}>
                        <Col> <label htmlFor="username" style={{textAlign: "center"}} >Usuario:</label></Col>
                        <Col> <input type="text" id="username" value={username} onChange={handleUsernameChange} /></Col>
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    
                    <button  
                    onClick={handleLogin} 
                    variant="outline-dark" 
                    style={{borderColor:"#b4764f", marginTop: "20px" }} >Iniciar sesión
                    </button>

                    {loginError && <p style={{ color: 'red' }}>Usuario o contraseña incorrectos.</p>}

                </Row>
            </Container>
        </div >
    );
};

export default Formlogin;
