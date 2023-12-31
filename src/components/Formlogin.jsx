import React, { useState } from 'react';
import usersData from "../users.json"
import { Button, Form } from "react-bootstrap";



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

        <Form  className="formulario">
            <Form.Group>
                <Form.Control type="text" id="username" value={username} onChange={handleUsernameChange} placeholder="Nombre de usuario" />
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control type="password" id="password" style={{ borderColor: "#b4764f" }} value={password} onChange={handlePasswordChange} placeholder=" Contraseña" />
            </Form.Group>
            <Button  onClick={handleLogin} type="submit" className="m-3 with-zoom" style={{ backgroundColor: "#b4764f", borderColor: "#b4764f" }}>ENVIAR</Button>
        </Form>

    );
};

export default Formlogin;
