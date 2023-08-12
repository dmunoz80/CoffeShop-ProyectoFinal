import FormularioContacto from "../components/FormularioContacto";
import Navbar from "../components/Navbar";
import FooterNavigation from "../components/FooterNavigation";
import {Row, Col} from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

const urlBaseServer = "http://localhost:3000";

function Contacto() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
  
  
    const agregarComentarioContacto = async () => {
      const post = { name,email,phone,message };
      await axios.post(urlBaseServer + "/contacto", post);
    };
  
    return (
        <div className="container-fluid justify-content-center p-0">
            <Navbar title={"CONTACTO"}/>
            <div className="contacto d-flex align-items-center">
                <Row className="container-fluid gap-2 mt-3" style={{minWidth:"300px"}}>
                    <Col style={{minWidth:"300px"}}>
                        <p className="text-light fs-3 text-justify">Nos encanta recibir de nuestros clientes todas sus dudas, consultas y observaciones, que siempre son bien recibidos. Nos ayudan a asegurarnos de que cada experiencia que tengas sea la mejor de las posible.</p>
                        <p className="text-light fs-3 text-justify">Si nos quieres contactar comercialmente también puedes utilizar este formulario</p>
                    </Col>
                    <Col style={{minWidth:"300px"}}>
                     <FormularioContacto
                     setName={setName}
                     setEmail={setEmail}
                     setPhone={setPhone}
                     setMessage={setMessage}
                     agregarComentarioContacto={agregarComentarioContacto}
                     
                     />
                    </Col>
                </Row>
            </div>
            <FooterNavigation/>
            </div>
    )
}

export default Contacto;