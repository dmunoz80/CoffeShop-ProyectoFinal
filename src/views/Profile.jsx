import React, { useState } from 'react';


// Credenciales de usuarios (ejemplo)
const usersData = [
    { id: 1, username: 'john_doe', password: 'password123', name: 'John Doe' },
    { id: 2, username: 'jane_smith', password: 'password456', name: 'Jane Smith' }
];

function UserItem({ user }) {
    return (
        <div className="user-item">
            <h2>{user.name}</h2>
            <p><strong>Nombre de usuario:</strong> {user.username}</p>
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
        <div className="App">
            {loggedInUser ? (
                <div>
                    <h1>Bienvenido</h1>
                    <UserItem user={loggedInUser} />
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
