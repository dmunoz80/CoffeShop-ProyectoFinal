import FooterNavigation from "../components/FooterNavigation";
import FormularioContacto from "../components/FormularioContacto";
import Navbar from "../components/Navbar";
import {Row, Col} from "react-bootstrap";



const Contacto = () => {
    const onSubmit = (event) => {
        event.preventDefault()
        const params = {
            name:event.target[0].value,
            email:event.target[1].value,
            phone:event.target[2].value,
            message:event.target[3].value
        }
        console.debug("Enviando Formulario", params)
    }
    return (
        <>
            <Navbar title={"CONTACTO"}/>
            <div className="contacto">
                <Row>
                    <Col>
                    <h2 className="text-light">Nos encanta recibir de nuestros clientes todas sus dudas, consultas y observaciones, que siempre son bien recibidos. Nos ayudan a asegurarnos de que cada experiencia que tengas sea la mejor de las posible.</h2>
                        <h2 className="text-light">Si nos quieres contactar comercialmente también puedes utilizar este formulario</h2>
                    </Col>
                    <Col>
                     <FormularioContacto onSubmit={onSubmit}/>
                    </Col>
                </Row>
            </div>
            <FooterNavigation/>
        </>
    )
}

export default Contacto;