import FooterNavigation from "../components/FooterNavigation";
import Navbar from "../components/Navbar";
import {Row, Col} from "react-bootstrap";
import imgaddproduct from "../assets/images/img-addproduct.png";
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
     
        <div className="container-fluid justify-content-center">
            <Navbar title={"INGRESO DE PRODUCTOS"}/>

            <div className="agregar-producto d-flex align-items-center m-5">
                <Row className="gap-3">
                    <Col>
                        <img className="img-fluid" src={imgaddproduct} alt="" style={{minWidth:"300px" , borderRadius: "50px"}}></img>
                    </Col>
                    <Col>
                        <FormProduct onSubmit={onSubmit}/>

                        <hr className="m-3"/>
                        <h4 className="m-3"> Importante!!! Para Incorporar productos a la BD, debes tener perfil de ususario administrador.</h4>
                    </Col>

                </Row>
            </div>
            <FooterNavigation/>
            </div>
       
    )
}

export default AddProduct;