import { Button, Form } from "react-bootstrap";

function FormularioContacto ({onSubmit}) {
    return (
        <Form onSubmit={(event) => onSubmit(event)}>
            <Form.Group>
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Numero Telefónico</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" type="text"/>
            </Form.Group>
            <Button type="submit">Enviar</Button>
        </Form>
    )
}

export default FormularioContacto