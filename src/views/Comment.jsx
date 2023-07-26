import React, { useState, useEffect } from 'react';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import Navbar from "../components/Navbar"
import FooterNavigation from '../components/FooterNavigation';
import { Container, Row, Col } from "react-bootstrap"


const App = () => {
    const [comments, setComments] = useState([]);

    // Cargar comentarios guardados desde el archivo JSON
    useEffect(() => {
        fetch('/commentarios.json')
            .then((response) => response.json())
            .then((data) => setComments(data.comments));
    }, []);

    // Manejar el envío de comentarios y actualizar el archivo JSON simulado
    const handleCommentSubmit = (newComment) => {
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        fetch('/comments.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comments: updatedComments }),
        });
    };

    return (
        <div style={{ backgroundColor: "#cd966c" }}>
            <Navbar title={"ENVIANOS TUS COMENTARIOS"} />
            <Container style={{ display: "flex" }}>
                <Row>
                    <Col>
                        <CommentForm onCommentSubmit={handleCommentSubmit} />
                    </Col>
                </Row>

                <Row>
                    <Col >
                        <CommentList style={{ textAlign: "center" }} comments={comments} /> </Col>
                </Row>
            </Container>
            <FooterNavigation />
        </div>
    );
};

export default App;
