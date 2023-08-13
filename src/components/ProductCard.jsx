import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import Context from '../Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductCard = () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const {handleClick, resultadoBusqueda } = useContext(Context);
    const navigate = useNavigate();
    const [productos, setProductos] = useState([]);
    
    useState(() => {
        axios.get('URL')
        .then(response => {
            setProductos(response.data);
        })
        .catch(error => {
            console.error('error al obtener datos de productos', error);
        });
    }, [])

    return (
        <div className="d-flex flex-wrap justify-content-center gap-3 p-3">
            {resultadoBusqueda.map((e) => (
                < Card className='mt-5 with-zoom' key={e.id} style={{ width: '16rem',borderColor:"#b4764f"}}>
                    <Card.Img className='img-card' src={e.img} alt={e.name} />
                    <Card.Body>
                        <Card.Title className='fs-4 text-center text-capitalize' >{(e.name)}</Card.Title>
                        <hr />
                        <h5 className='text-center'>
                            Precio: ${e.price}
                        </h5>
                        <div className='d-flex flex-column gap-3'>
                            <Button 
                                variant="outline-dark"
                                onClick={() => navigate(`/product/${e.id}`)}
                                style={{borderColor:"#b4764f"}}>
                                Ver más
                            </Button>

                            <Button 
                                onClick={() => handleClick(e)}
                                variant="outline-dark"
                                style={{borderColor:"#b4764f"}}>
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