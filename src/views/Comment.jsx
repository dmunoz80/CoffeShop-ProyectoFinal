import React, { useState, useEffect } from 'react';
import CommentForm from '../components/CommentForm';
import Navbar from "../components/Navbar"
import FooterNavigation from '../components/FooterNavigation';


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
        <>
        <Navbar title={"ENVIANOS TUS COMENTARIOS"} />

        <div className='envio-comentario' style={{ backgroundColor: "#cd966c" }}>
            <CommentForm onCommentSubmit={handleCommentSubmit} />
        </div>

        <FooterNavigation />

        </>
    );
};

export default App;
