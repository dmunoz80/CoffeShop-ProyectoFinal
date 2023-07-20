import { useContext } from "react";
import { useParams} from "react-router-dom";
import Context from "../Context";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FooterNavigation from "../components/FooterNavigation";
import NavbarProductDetail from "../components/NavbarProductDetail";

const ProductDetail = () => {
    const { id } = useParams();
    const { pizzas, handleClick } = useContext(Context);

    const pizzaInfo = pizzas.find(pizza => pizza.id.toString() === id);

    return (
        <>
<NavbarProductDetail />

        <div className= " d-flex flex-wrap justify-content-center p-5">
            <Card className="d-flex flex-row mt-5" style={{width: '80rem', borderColor:"#874421"}}>
                <Card.Img className="m-4" src={pizzaInfo.img} alt={pizzaInfo.name} />
                <Card.Body className=" d-flex flex-column m-4 gap-4">
                    <Card.Title style={{backgroundColor:"#874421", borderColor:"#874421"}} className='fs-1 text-center text-light'>{(pizzaInfo.name)}</Card.Title>
                    <Card.Text>
                        {pizzaInfo.desc}
                    </Card.Text>
                    <hr/>
                    <span className="fw-bold fs-3">
                        Precio: ${pizzaInfo.price}
                    </span>
                    <div className='d-flex flex-row justify-content-around'>
                        <Button className='fw-bold m-3' onClick={() => handleClick(pizzaInfo)} style={{backgroundColor:"#5b1f00", borderColor:"#5b1f00"}}>Añadir al carro</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>

        <FooterNavigation />
        </>
        
    )
}

export default ProductDetail;