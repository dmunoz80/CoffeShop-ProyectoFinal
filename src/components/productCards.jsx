import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';


const urlBaseServer = "http://localhost:3000";
const MarketPlace = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isError, setIsError] = useState(false);
    const [handleClick] = useContext


    const getProducts = async () => {
        try {
            const response = await axios.get(urlBaseServer + "/productos");
            console.log(response)
            setProducts(response.data);
            setIsError(false);
        } catch (error) {
            setIsError(true);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter((product) => {
        return product.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            {isError ?
                (<div className="noconexion">
                    -sin conexión al servidor-
                </div>)
                :
                (<div>
                    <div className='Search'>
                        <input
                            type="text"
                            className="form"
                            placeholder="Buscar cafe"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>

                    <div className="d-flex flex-wrap justify-content-center gap-3 p-3">
                        {filteredProducts.map((product) => {
                            const src = `/product/${product.id}`;
                            return (
                                <Card className='mt-5 with-zoom' style={{ width: '16rem', borderColor: "#b4764f" }} >
                                    <Card.body key={product.id}>
                                        <Card.img to={src}>
                                            <img src={product.imagen} alt="" className='img-card' />
                                        </Card.img>
                                        <Card.Title className='fs-4 text-center text-capitalize'  >
                                            <Link to={src}>
                                                {product.nombre}
                                            </Link>
                                        </Card.Title>
                                        <Card.Text>
                                            <p>{product.descripcion}</p>
                                        </Card.Text>
                                        <Card.Text className="productPrice">
                                            ${product.precio}
                                        </Card.Text>
                                        <Button
                                            onClick={() => handleClick(products)}
                                            variant="outline-dark"
                                            style={{ borderColor: "#b4764f" }}>
                                            Añadir al carro
                                        </Button>
                                    </Card.body>
                                </Card>
                            );
                        })}
                    </div>
                </div>)
            }
        </div>
    );
};

export default MarketPlace;