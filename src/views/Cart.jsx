import { useContext } from "react";
import Context from "../Context";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FooterNavigation from "../components/FooterNavigation";
import Navbar from "../components/Navbar";


const Cart = () => {
    const { ShopCart, AddItem, SubtractItem, total } = useContext(Context);

    return (
        <>
        <Navbar title={"CARRO DE COMPRAS"}/>
        <div className="carro-compras">
            <ListGroup className='d-flex flex-column align-items-center'>
                <ListGroup.Item style={{borderColor:"#b4764f"}}>
                    {ShopCart.map((e) => (
                        <Card key={e.id} className='d-flex flex-row align-items-center mt-2 gap-3 with-zoom' style={{borderColor:"#b4764f"}}>
                            <Card.Img src={e.img} alt={e.name} style={{ width: '7rem' }} />
                            <Card.Title className="text-capitalize">{e.name}</Card.Title>
                            <Card.Body>
                                <div className="d-flex justify-content-end align-items-center gap-3">
                                    <span className='fw-bold'>
                                        ${e.price * e.quantity}
                                    </span>
                                    <Button className='fw-bold bg-danger border-danger' onClick={() => SubtractItem(e.id)}>-</Button>
                                    <span className='fw-bold'>
                                        {e.quantity}
                                    </span>
                                    <Button className='fw-bold bg-success border-success' onClick={() => AddItem(e.id)}>+</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                    <h3 className="mt-3">Total Pedido: ${total}</h3>

                    <Button 
                        className='mx-3'
                        variant="outline-dark"
                        style={{borderColor:"#b4764f"}}>Ir a Pagar</Button>
                </ListGroup.Item>
            </ListGroup>
        </div>

        <FooterNavigation />
        </>
    )
}

export default Cart;