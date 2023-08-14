import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import { useContext } from 'react';
//import Context from '../Context';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const urlBaseServer = "http://localhost:3000";

const ProductCard = () => {
    const [products , setProducts] = useState([]);

    const getProducts = async () => {
        const { data: products } = await axios.get(urlBaseServer + "/comentarios");
        setProducts([...products]);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="d-flex flex-wrap justify-content-center gap-3 p-3">
            {products.map((products, index) => (
                < Card className='mt-5 with-zoom' key={products.id} style={{ width: '16rem', borderColor: "#b4764f" }}>
                    <Card.Img className='img-card' src={products.img} alt={products.name} />
                    <Card.Body>
                        <Card.Title className='fs-4 text-center text-capitalize' >{(products.name)}</Card.Title>
                        <hr />
                        <h5 className='text-center'>
                            Precio: ${products.price}
                        </h5>
                        <div className='d-flex flex-column gap-3'>
                            <Button
                                variant="outline-dark"
                                onClick={() => navigate(`/product/${products.id}`)}
                                style={{ borderColor: "#b4764f" }}>
                                Ver más
                            </Button>

                            <Button
                                onClick={() => handleClick(products)}
                                variant="outline-dark"
                                style={{ borderColor: "#b4764f" }}>
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
