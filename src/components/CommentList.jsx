import React from 'react';

const CommentList = ({ comments }) => {
    return (
        <div>
            <h2>Comentarios</h2>
            {comments.map((comment, index) => (
                <div key={index}>
                    <h3>{comment.name}</h3>
                    <p>{comment.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
