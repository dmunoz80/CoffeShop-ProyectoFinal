import React from 'react';
import FooterNavigation from '../components/FooterNavigation';
import Navbar from "../components/Navbar";
import Comentarios from "../components/Comentarios"


const Comments = () => {
    return (
   <>
            <Navbar title={"Comentarios"} />
            
            <div style={{ backgroundColor: "#cd966c" }} >
            < Comentarios />
            </div>

            <FooterNavigation />
            </>
    );
}

export default Comments;
