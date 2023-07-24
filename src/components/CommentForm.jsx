import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap"

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
        <Container>
            <Row>
                <form onSubmit={handleSubmit}>
                    <div style={{ alignItems: "center" }} >
                        <Row><label htmlFor="name">Nombre:</label></Row>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Row><label htmlFor="comment">Comentario:</label></Row>
                        <textarea
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                        />
                    </div>
                    <button variant="outline-dark"
                        style={{ borderColor: "#b4764f", marginTop: "20px", width: "200px", marginBottom: "40px" }} type="submit">Enviar comentario</button>
                </form>
            </Row>
        </Container>
    );
};

export default CommentForm;
