
import React from 'react';
import comentariosData from '../comentarios.json';
import { Card } from 'react-bootstrap';

const ComentariosCard = () => {
    return (
        <div className="container">
            <div className="row">
                {comentariosData.comentarios.map((comentario, index) => (

                    <Card className='mt-5' style={{ width: '600px', borderColor: "#b4764f", marginLeft: '20px', marginBottom: '20px' }}>
                        <Card.Body>
                            <Card.Title>{comentario.usuario}</Card.Title>
                            <hr />
                            <Card.Text>{comentario.producto}</Card.Text>

                            <Card.Text>{comentario.comentario}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ComentariosCard;



