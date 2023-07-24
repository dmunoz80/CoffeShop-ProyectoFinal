import React from 'react';
import Formregistre from "../components/Formregistre"
import FooterNavigation from '../components/FooterNavigation';
import Navbar from "../components/Navbar";

const Registre = () => {
    return (
        <div style={{backgroundColor:"#cd966c"}} >
            <Navbar title={"REGISTRATE"} />
            <Formregistre />
            <FooterNavigation />
        </div>
    );
}

export default Registre;
