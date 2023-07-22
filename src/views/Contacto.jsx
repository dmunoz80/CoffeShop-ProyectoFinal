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
            <Navbar title={"Contacto"}/>
            <div className="contacto">
                <Row>
                    <Col>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloribus corrupti ab blanditiis debitis quibusdam quasi</p>
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