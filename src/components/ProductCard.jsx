import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
//import { useContext } from 'react';
//import Context from '../Context';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const MarketPlace = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isError, setIsError] = useState(false);

    const getProducts = async () => {
        try {
            const response = await axios.get('https://proyectofinaltiendaback.up.railway.app/products');
            setProducts(response.data.data.products);
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
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
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
                        <i class="fa-solid fa-magnifying-glass fa-flip-horizontal icon"></i>
                        <input
                            type="text"
                            className="form"
                            placeholder="Busca tu juego aquí"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>

                    <div className="container">
                        {filteredProducts.map((product) => {
                            const src = `/product/${product.id}`;
                            return (
                                <div className='product'>
                                    <div key={product.id}>
                                        <div>
                                            <Link to={src}>
                                                <img src={product.img} alt="" />
                                            </Link>
                                        </div>
                                        <div className="productName">
                                            <Link to={src}>
                                                {product.name}
                                            </Link>
                                        </div>
                                        <div className="productPrice">
                                            ${product.price}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>)
            }
        </div>
    );
    

};
export default MarketPlace;