import React from 'react';
import { Card } from 'react-bootstrap';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams} from "react-router-dom";

const urlBaseServer = "http://localhost:3000";
const token =sessionStorage.getItem("token");

const MisComentariosCard = () => { 
  const [posts, setPosts] = useState([]);
  
  const getPost = async (id) => {
    const { data: posts } = await axios.get(urlBaseServer + `/comentarios/${id}`);
    setPosts([...posts]);
  };

  useEffect(() => {
    getPost();
  }, []);

  console.log(posts);
    return (
        <div className="container">
            <div className="row">
                {posts.map((posts) => (
                    <Card className='mt-5' style={{ width: '600px', borderColor: "#b4764f", marginLeft: '20px', marginBottom: '20px' }}>
                        <Card.Body>
                        <Card.Img className='img-user' style={{ width: '5rem'}} src={posts.img}/>
                            <div className='d-flex gap-2'>
                            <Card.Text className='fs-2'>{posts.id.nombre}</Card.Text>
                            <Card.Text className='fs-2'>{posts.apellido}</Card.Text>
                            </div>
                            <div className='d-flex'>
                            <Card.Title>{posts.titulo}</Card.Title>
                            </div>
                            <div>
                            <Card.Text>{posts.comentario}</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default MisComentariosCard;