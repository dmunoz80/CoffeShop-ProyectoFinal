
import React from 'react';
import comentariosData from '../comentarios.json';

const ComentariosCard = () => {
    return (
        <div className="container">
            <div className="row">
                {comentariosData.comentarios.map((comentario, index) => (
                    <div style={{borderColor:'#b4764f'}} key={index} className="col-md-6">
                        <div className="card my-3" >
                            <div className="card-body"  >
                                <h5 className="card-title">{comentario.usuario}</h5>
                                <hr/>
                                <h6 className="card-subtitle mb-2 text-muted">{comentario.producto}</h6>
                                <hr/>
                                <p className="card-text">{comentario.comentario}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComentariosCard;



