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
        <div className="container-fluid justify-content-center">
            <Navbar title={"CONTACTO"}/>
            <div className="contacto d-flex align-items-center">
                <Row className="container-fluid gap-2 mt-3" style={{minWidth:"300px"}}>
                    <Col style={{minWidth:"300px"}}>
                        <p className="text-light fs-3 text-justify">Nos encanta recibir de nuestros clientes todas sus dudas, consultas y observaciones, que siempre son bien recibidos. Nos ayudan a asegurarnos de que cada experiencia que tengas sea la mejor de las posible.</p>
                        <p className="text-light fs-3 text-justify">Si nos quieres contactar comercialmente también puedes utilizar este formulario</p>
                    </Col>
                    <Col style={{minWidth:"300px"}}>
                     <FormularioContacto onSubmit={onSubmit}/>
                    </Col>
                </Row>
            </div>
            <FooterNavigation/>
            </div>
    )
}

export default Contacto;