import React, { useState } from 'react';
import Navbar from "./Navbar";
import FooterNavigation from "./FooterNavigation";
import {Container, Button, Card, Form} from "react-bootstrap"




function UserItem({ user }) {
    return (
        <div className="user-item">
            <h2 className='text-center'>{user.name}</h2>
            <hr style={{color:"#b4764f"}} />
            <img src={user.img} alt="" />
            <p className='m-3'><strong>Nombre de usuario:</strong> {user.username}</p>
            <p className='m-3'><strong>Nombre:</strong> {user.name}</p>
            <p className='m-3'><strong>Apellido:</strong> {user.secondname}</p>
            <p className='m-3'><strong>Correo:</strong> {user.email}</p>
            <p className='m-3'><strong>Dirección:</strong> {user.address}</p>
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
        onLogin(username, password);
    
    };

    return (
    <Container>
        <Form onSubmit={handleSubmit} style={{marginTop:'50px'}} >
            <Form.Group style={{ alignItems: "center" }} >
                <Form.Label className='text-light'>USUARIO</Form.Label>
                <Form.Control style={{ width:'300px', height:'50px', marginBottom:'20px'}}
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
            </Form.Group>
            <Form.Group style={{ alignItems: "center" }} >
                <Form.Label  className='text-light'>CONTRASEÑA</Form.Label>
                <Form.Control style={{ width:'300px', height:'50px', marginBottom:'20px'}}
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </Form.Group>

            <Button
            className=" with-zoom m-3 text-light"
                style={{ backgroundColor:"#b4764f", borderColor: "#3f2817", marginTop: "20px", width: "200px", marginBottom: "40px"}} type="submit">Iniciar Sesión</Button>
        </Form>
        </Container>
    );
}

function Profile() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogin = (username, password) => {
        fetch(`${"http://localhost:3000"}/login`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                correo:username,
                contraseña:password
            })
        })
        .then( async (response) => {
            const {token} = await response.json()
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const decodedToken = JSON.parse(atob(base64));
            sessionStorage.setItem("token", token)
            sessionStorage.setItem("usuario", JSON.stringify(decodedToken.usuario))
            setLoggedInUser(decodedToken.usuario);
            
        })
        .catch((error) => {
            console.log(error)
            alert("usuario o contraseña no valido")
        })
        
    };

    const handleLogout = () => {
        setLoggedInUser(null);
    };

    return (
        <>
         <Navbar title={"INICIA TU SESIÓN"} />
       <div className="card-miperfil container-fluid justify-content-center p-0">
            <div className='d-flex justify-content-center'>
                        {loggedInUser ? (
                        <Card className='d-flex m-5'style={{width: '28rem', borderColor:"#b4764f"}}>
                        <Card.Title className='fs-1 text-center'>Bienvenid@ a tu perfil</Card.Title>
                        <Card.Body className='m-1' >
                        <UserItem user={loggedInUser}/>
                        </Card.Body>
                        <Button className='with-zoom m-3' onClick={handleLogout} style={{ backgroundColor:"#b4764f", borderColor: "#b4764f", width:"12rem"}} type="submit" >Cerrar sesión</Button>
                        </Card>
                        ) : (
                        <LoginForm onLogin={handleLogin} />
                        )}
            </div>
        </div>
        <FooterNavigation />
        </>
    );
}

export default Profile;
