import { Button, Form, Row } from "react-bootstrap";

function CommentForm({ setTitle, setComment, agregarPost }) {

    return (

        <Form style={{marginTop:'50px'}} >
            <Form.Group style={{ alignItems: "center" }} >
                <Row><label htmlFor="name"></label></Row>
                <Form.Control style={{ width:'300px', height:'50px', marginBottom:'20px'}}
                    type="text"
                    id="title"
                    placeholder='Titulo'
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Row ><label htmlFor="comment"></label></Row>
                <Form.Control style={{ width:'300px', height:'100px'}}
                    placeholder='Dejanos tú comentario'
                    id="comment"
                    onChange={(e) => setComment(e.target.value)}
                    required
                    as="textarea"
                />
            </Form.Group>
            <Button variant="outline-dark"
            onClick={agregarPost}
            className="m-3"
                style={{ borderColor: "#b4764f", marginTop: "20px", width: "200px", marginBottom: "40px", color:'#FFFFFF' }} type="submit">ENVIAR COMENTARIO</Button>
        </Form>

    );
};


export default CommentForm;
