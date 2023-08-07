import { Button, Form } from "react-bootstrap";

function FormularioContacto ({ setName, setEmail,setPhone, setMessage, agregarComentarioContacto}){
    
    return (
        <Form className="formulario" style={{maxWidth:"35rem" }}>
            <Form.Group>
                <Form.Control 
                type="text" 
                placeholder="Nombre Completo"
                id="name"
                onChange={(e) => setName(e.target.value)}
                required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Correo Electrónico"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Numero Telefónico"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control 
                as="textarea" 
                type="text" 
                placeholder="Mensaje"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                required
                />
            </Form.Group>
            <Button 
            type="submit" 
            className="m-3 with-zoom" 
            style={{backgroundColor:"#b4764f", borderColor:"#b4764f", width:"15rem"}}
            onClick={agregarComentarioContacto}
            >ENVIAR</Button>
        </Form>
    )
}

export default FormularioContacto