import { Button, Form } from "react-bootstrap";

function FormProduct ({onSubmit}) {
    return (
        <Form className="my-3" style={{minWidth:"300px"}} onSubmit={(event) => onSubmit(event)}>
            <Form.Group>
                <Form.Control type="text" placeholder="Nombre del Producto" style={{borderColor:"#b4764f"}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control type="textarea" placeholder="Descripción" style={{borderColor:"#b4764f"}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Imagen" style={{borderColor:"#b4764f"}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control type="number" placeholder="Price" style={{borderColor:"#b4764f"}}/>
            </Form.Group>
            
            <Button type="submit" className=" justify-content-center mt-5 with-zoom" style={{backgroundColor:"#b4764f", borderColor:"#b4764f", width:"12rem"}}>Enviar</Button>
        </Form>
    )
}

export default FormProduct