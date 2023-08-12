import React from 'react';
import { Card } from 'react-bootstrap';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const urlBaseServer = "http://localhost:3000";

const ComentariosCard = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data: posts } = await axios.get(urlBaseServer + "/comentarios");
    setPosts([...posts]);
  };

  useEffect(() => {
    getPosts();
  }, []);

    return (
        <div className="container">
            <div className="row">
                {posts.map((posts, index) => (
                    <Card key={index} className='card-reseña mt-5' style={{ width: '600px', borderColor: "#b4764f", marginLeft: '20px', marginBottom: '20px' }}>
                        <Card.Body >
                        <Card.Img className='img-user' style={{ width: '5rem'}} src={posts.img}/>
                            <div className='d-flex gap-2'>
                            <Card.Text className='fs-2'>{posts.nombre}</Card.Text>
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

export default ComentariosCard;



