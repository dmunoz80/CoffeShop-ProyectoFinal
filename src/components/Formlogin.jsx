import React, { useState } from 'react';
import usersData from "../users.json"

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
            <h2>Inicio de Sesión</h2>
            <div>
                <label htmlFor="username">Usuario:</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button onClick={handleLogin}>Iniciar sesión</button>
            {loginError && <p style={{ color: 'red' }}>Usuario o contraseña incorrectos.</p>}
        </div>
    );
};

export default Formlogin;
