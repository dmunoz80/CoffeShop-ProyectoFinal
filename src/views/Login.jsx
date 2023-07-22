import React from 'react';
import Formlogin from "../components/Formlogin"
import FooterNavigation from '../components/FooterNavigation';
import Navbar from "../components/Navbar";

const Login = () => {
    return (
        <div>
            <Navbar />
            <Formlogin />
            <FooterNavigation />

        </div>
    );
}

export default Login;
