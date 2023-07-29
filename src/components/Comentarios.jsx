
import React from 'react';
import comentariosData from '../comentarios.json';
import { Card, Col, Row } from 'react-bootstrap';

const ComentariosCard = () => {
    return (
        <div className="container">
            <div className="row">
                {comentariosData.comentarios.map((comentario, index) => (
                    <Card className='mt-5' style={{ width: '600px', borderColor: "#b4764f", marginLeft: '20px', marginBottom: '20px' }}>
                        <Card.Body>
                            <div className='d-flex align-items-center mx-3 gap-3'>
                            <Card.Img className='img-user' style={{ width: '5rem'}} src={comentario.img}/>    
                            <Card.Title>{comentario.usuario}</Card.Title>
                            </div>
                            <div>
                            <hr />
                            <Card.Text>{comentario.producto}</Card.Text>
                            <Card.Text>{comentario.comentario}</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ComentariosCard;



