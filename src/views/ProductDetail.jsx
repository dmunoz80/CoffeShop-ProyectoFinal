import { useContext } from "react";
import { useParams} from "react-router-dom";
import Context from "../Context";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FooterNavigation from "../components/FooterNavigation";
import Navbar from "../components/Navbar";

const ProductDetail = () => {
    const { id } = useParams();
    const { products, handleClick } = useContext(Context);
    const productInfo = products.find(product => product.id.toString() === id);

    return (
        <>
        {/* TODO Pasar datos del carro por props o por context al navbar */}
        <Navbar title={"DETALLE DEL PRODUCTO"} withCart />

        <div className=" main-product d-flex flex-wrap justify-content-center p-5">
            <Card className="d-flex flex-row mt-5" style={{width: '80rem', borderColor:"#b4764f"}}>
                <Card.Img className="img-product-detail m-4" src={productInfo.img} alt={productInfo.name} />
                <Card.Body className=" d-flex flex-column m-4 gap-4">
                    <Card.Title 
                        style={{backgroundColor:"#874421", borderColor:"#874421"}} 
                        className='fs-1 text-center text-light'
                        >{(productInfo.name)}</Card.Title>
                    <Card.Text>
                        {productInfo.desc}
                    </Card.Text>
                    <hr/>
                    <span className="fw-bold fs-3">
                        Precio: ${productInfo.price}
                    </span>
                    <div className='d-flex flex-row justify-content-around'>
                        <Button
                        variant="outline-dark"
                        className='fw-bold m-3' 
                        onClick={() => handleClick(productInfo)} 
                        style={{borderColor:"#b4764f"}}
                        >Añadir al carro</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>

        <FooterNavigation />

        </>
        
    )
}

export default ProductDetail;