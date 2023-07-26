import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function App() {
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        // Simulamos la obtención de datos desde un archivo JSON
        fetch('/comentarios.json')
            .then((response) => response.json())
            .then((data) => setComentarios(data))
            .catch((error) => console.error('Error al cargar los comentarios:', error));
    }, []);

    return (

        <div className="d-flex flex-wrap justify-content-center gap-3 p-3">
            <div >
                {comentarios.map((comentario, index) => (
                    <div key={index}  >
                        <Card>
                            <Card.Body style={{ width: "500px", borderColor: "#b4764f"}} >
                                <Card.Title className=' fs-4 text-center text-capitalize' >{comentario.usuario}</Card.Title>
                                <hr />
                                <div className='d-flex flex-column gap-3' >
                                    <p className="card-text text-center">{comentario.comentario}</p>
                                </div>
                                <h4 className="card-text">{comentario.titulo}</h4>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

