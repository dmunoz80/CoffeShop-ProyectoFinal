import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="comment">Comentario:</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Enviar comentario</button>
        </form>
    );
};

export default CommentForm;
