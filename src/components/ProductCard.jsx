import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import Context from '../Context';
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {
    const {handleClick, resultadoBusqueda } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-wrap justify-content-center gap-3 p-3">
            {resultadoBusqueda.map((e) => (
                < Card className='mt-5' key={e.id} style={{ width: '18rem', border:"solid",borderColor:"#874421"}}>
                    <Card.Img src={e.img} alt={e.name} />
                    <Card.Body>
                        <Card.Title className='fs-3 text-center text-capitalize' >{(e.name)}</Card.Title>
                        <hr />
                        <h3 className='fw-bold text-center'>
                            Precio: ${e.price}
                        </h3>
                        <div className='d-flex flex-column gap-3'>
                            <Button 
                                variant="outline-dark"
                                onClick={() => navigate(`/product/${e.id}`)}
                                style={{border:"solid", borderColor:"#b4764f"}}>
                                Ver más
                            </Button>

                            <Button 
                                onClick={() => handleClick(e)}
                                variant="outline-dark"
                                style={{border:"solid", borderColor:"#b4764f"}}>
                                Añadir al carro
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default ProductCard;