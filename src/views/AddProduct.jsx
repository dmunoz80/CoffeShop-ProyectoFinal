import FooterNavigation from "../components/FooterNavigation";
import Navbar from "../components/Navbar";
import {Row, Col} from "react-bootstrap";
import nosotrosCafeteria from "../assets/images/nosotrosCafeteria.jpg"
import FormProduct from "../components/FormProduct";


const AddProduct = () => {
    const onSubmit = (event) => {
        event.preventDefault()
        const params = {
            name:event.target[0].value,
            desc:event.target[1].value,
            price:event.target[2].value
        }
        console.debug("Enviando Formulario", params)
    }
    return (
        <>
            <Navbar title={"INGRESO DE PRODUCTOS"}/>
            <div className="agregar-producto m-3">
                <Row>
                    <Col>
                        <img src={nosotrosCafeteria} alt="" style={{borderRadius: "50px"}}></img>
                    </Col>
                    <Col>
                        <FormProduct onSubmit={onSubmit}/>

                        <hr />
                        <p > Para Incorporar productos a la BD, debes tener perfil de ususario administrador.</p>
                    </Col>

                </Row>
            </div>
            <FooterNavigation/>
        </>
    )
}

export default AddProduct;