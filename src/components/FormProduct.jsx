import { Button, Form } from "react-bootstrap";

function FormProduct ({onSubmit}) {
    return (
        <Form onSubmit={(event) => onSubmit(event)}>
            <Form.Group>
                <Form.Control type="text" placeholder="Nombre del Producto"/>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control type="textarea" placeholder="Descripción"/>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control type="number" placeholder="Price"/>
            </Form.Group>
            
            <Button type="submit" className=" justify-content-center mt-2">Enviar</Button>
        </Form>
    )
}

export default FormProduct