import React from 'react';
import FooterNavigation from '../components/FooterNavigation';
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap"
import Comentarios from "../components/Comentarios"


const Comments = () => {
    return (
        <div >
            <Navbar title={"Comentarios"} />
            <div style={{ backgroundColor: "#cd966c" }} >

                            < Comentarios />

       
            </div>
            <FooterNavigation />
        </div >
    );
}

export default Comments;
