import React, { useState } from 'react';
import { Row } from "react-bootstrap"
import { Button, Form } from "react-bootstrap";


const CommentForm = ({ onCommentSubmit }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onCommentSubmit({ name, comment });
        setName('');
        setComment('');
    };

    return (

        <Form onSubmit={handleSubmit} style={{marginTop:'50px'}} >
            <Form.Group style={{ alignItems: "center" }} >
                <Row><label htmlFor="name"></label></Row>
                <Form.Control style={{ width:'300px', height:'50px', marginBottom:'20px'}}
                    type="text"
                    id="name"
                    placeholder='Nombre'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group style={{ alignItems: "center" }} >
                <Row><label htmlFor="name"></label></Row>
                <Form.Control style={{ width:'300px', height:'50px', marginBottom:'20px'}}
                    type="text"
                    id="name"
                    placeholder='Producto'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Row ><label htmlFor="comment"></label></Row>
                <Form.Control style={{ width:'300px', height:'100px'}}
                    placeholder='Dejanos tú comentario'
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="outline-dark"
            
            className="m-3"
                style={{ borderColor: "#b4764f", marginTop: "20px", width: "200px", marginBottom: "40px", color:'#FFFFFF' }} type="submit">Enviar comentario</Button>
        </Form>

    );
};


export default CommentForm;
