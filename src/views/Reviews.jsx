import React from 'react';
import FooterNavigation from '../components/FooterNavigation';
import Navbar from "../components/Navbar";
import Comentarios from "../components/Comentarios"
//import fondocomentario from "../assets/images/fondocomentario.jpg"


const Reviews = () => {
    return (
        <>
            <Navbar title={"RESEÑAS DE CLIENTES"} />

            <div  >
                < Comentarios />
            </div>

            <FooterNavigation />
        </>
    );
}

export default Reviews;
