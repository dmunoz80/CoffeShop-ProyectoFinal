import React from 'react';
import { Container, Row, Col } from "react-bootstrap"

const CommentList = ({ comments }) => {
    return (
        <div>
            <Container>
                <Row style={{textAlign:"center"}}>
                    <Col>
                        <h2>Comentarios</h2>
                    </Col>
                    {comments.map((comment, index) => (
                        <div  key={index}>
                            <h3>{comment.name}</h3>
                            <p>{comment.comment}</p>
                        </div>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default CommentList;
