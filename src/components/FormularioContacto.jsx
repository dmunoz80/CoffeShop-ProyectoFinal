import { Button, Form } from "react-bootstrap";

function FormularioContacto ({onSubmit}) {
    return (
        <Form onSubmit={(event) => onSubmit(event)} className="formulario">
            <Form.Group>
                <Form.Control type="text" placeholder="Nombre Completo"/>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Correo Electrónico"/>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Numero Telefónico"/>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control as="textarea" type="text" placeholder="Mensaje"/>
            </Form.Group>
            <Button type="submit" className="m-3" style={{backgroundColor:"#b4764f", borderColor:"#b4764f"}}>Enviar</Button>
        </Form>
    )
}

export default FormularioContacto