
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
                {posts.map((posts) => (
                    <Card className='mt-5' style={{ width: '600px', borderColor: "#b4764f", marginLeft: '20px', marginBottom: '20px' }}>
                        <Card.Body>
                            <div className='d-flex align-items-center mx-3 gap-3'>
                            <Card.Img className='img-user' style={{ width: '5rem'}}/>    
                            <Card.Title>{posts.titulo}</Card.Title>
                            </div>
                            <div>
                            <hr />
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



