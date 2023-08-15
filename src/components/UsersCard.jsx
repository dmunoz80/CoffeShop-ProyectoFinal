import React from 'react';
import { Card} from 'react-bootstrap';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const urlBaseServer = "http://localhost:3000";

const UsersCard = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const {id} = useParams();

  const getUsers = async () => {
    const { data: usuarios } = await axios.get(urlBaseServer + "/usuarios");
    setUsuarios([...usuarios]);
  };

  const UpdateUser = async () => {
    const rol = "admin"
    await axios.put(urlBaseServer + `/usuarios/${id}`,{rol});
    getUsers();
  };
  useEffect(() => {
    getUsers();
  }, []);

    return (
        <div className="container">
            <div className="row">
                {usuarios.map((usuarios) => (
                    <Card key={usuarios.id} className='card-reseña mt-5' style={{ width: '600px', borderColor: "#b4764f", marginLeft: '20px', marginBottom: '20px' }}>
                        <Card.Body >
                        <Card.Img className='img-user' style={{ width: '5rem'}} src={usuarios.img}/>
                            <div className='d-flex gap-2'>
                            <Card.Text className='fs-2'>{usuarios.nombre}</Card.Text>
                            <Card.Text className='fs-2'>{usuarios.apellido}</Card.Text>
                            </div>
                            <Card.Text className='fs-3'>{usuarios.rol}</Card.Text>
                            <div>

                              <div className='d-flex gap-3'>
                                <div>
                                  <input type="checkbox"onChange={() => navigate(`/Usuarios/${usuarios.id}`)}/>
                                </div>
                                <div>
                                  <p>Check Selección Usuario</p>
                                </div>
                              </div>

                              <div className='d-flex gap-3'>
                                <div>
                                  <input type="checkbox" onChange={() => UpdateUser(usuarios.id)}/>
                                </div>
                                <div>
                                  <p>Check Rol Admin</p>
                                </div>
                              </div>

                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default UsersCard;