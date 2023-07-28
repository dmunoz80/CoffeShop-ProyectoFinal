import React from 'react';
import FooterNavigation from '../components/FooterNavigation';
import Navbar from "../components/Navbar";
import Comentarios from "../components/Comentarios"


const Reviews = () => {
    return (
   <>
            <Navbar title={"RESEÑAS DE CLIENTES"} />
            
            <div style={{ backgroundColor: "#cd966c" }} >
            < Comentarios />
            </div>

            <FooterNavigation />
            </>
    );
}

export default Reviews;
