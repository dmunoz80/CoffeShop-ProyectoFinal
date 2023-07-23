import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import facebooklogo from "../assets/images/logo_facebook.png"
import twitterlogo from "../assets/images/logo_twitter.png"
import instagramlogo from "../assets/images/logo_instagram.png"
import snapchatlogo from "../assets/images/logo_snapchat.png"



function Footer() {
  return (
    <Navbar expand="lg" className="fw-bold text-light bg-dark justify-content-center d-flex flex-column">
      <div className='redes'>
        <a href='https://www.facebook.com'>
        <img src={facebooklogo} alt='facebook'></img>
        </a>
        <a href='https://www.twitter.com'>
        <img src={twitterlogo} alt='twitter'></img>
        </a>
        <a href='https://www.instagram.com'>
        <img src={instagramlogo} alt='instagram'></img>
        </a>
        <a href='https://www.snapchat.com'>
        <img src={snapchatlogo} alt='snapchat'></img>
        </a>
      </div>
        <Navbar.Text className='text-light'>Ⓒ 2023.Cofee Shop Company. Reservados todos los derechos</Navbar.Text>
    </Navbar>
  );
}

export default Footer;