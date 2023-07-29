import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import FooterNavigation from "../components/FooterNavigation";
import {Row, Container, Col, Button, Card} from "react-bootstrap"
import CardProfile from '../components/CardProfile';


// Credenciales de usuarios (ejemplo)
const usersData = [
    { id: 1, username: 'john_doe', password: 'password123', name: 'John', secondname: 'Doe', email: 'johndoe@correo.com', address:'Av.Providencia, Santiago, Chile' },
    { id: 2, username: 'jane_smith', password: 'password456', name: 'Jane', secondname: 'Smith', email: 'janesmith@correo.com', address:'Av.Pedro Montt, Valparaíso, Chile'  }
];

function UserItem({ user }) {
    return (
        <div className="user-item">
            <h2>{user.name}</h2>
            <p><strong>Nombre de usuario:</strong> {user.username}</p>
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Apellido:</strong> {user.secondname}</p>
            <p><strong>Correo:</strong> {user.email}</p>
            <p><strong>Dirección:</strong> {user.address}</p>
        </div>
    );
}

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar las credenciales ingresadas con las credenciales almacenadas
        const user = usersData.find(
            (userData) => userData.username === username && userData.password === password
        );

        if (user) {
            onLogin(user);
        } else {
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            setUsername('');
            setPassword('');
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h1>Iniciar sesión</h1>
            <div>
                <label>Usuario:</label>
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
            </div>
            <div>
                <label>Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogin = (user) => {
        setLoggedInUser(user);
    };

    const handleLogout = () => {
        setLoggedInUser(null);
    };

    return (
       <div className="container-fluid justify-content-center p-0">
            <Navbar title={"MI PERFIL"} />
            <div>
            <CardProfile />
                        {loggedInUser ? (
                        <div className='d-flex flex-column m-5'>
                        <h1>Bienvenido</h1>
                        <UserItem user={loggedInUser} />
                        <Button onClick={handleLogout} style={{backgroundColor:"#874421", borderColor:"#874421"}} >Cerrar sesión</Button>
                        </div>
                        ) : (
                        <LoginForm onLogin={handleLogin} />
                        )}

            </div>
            <FooterNavigation />
        </div>
    );
}

export default App;
