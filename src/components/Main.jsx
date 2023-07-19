import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/imagen1.png';
import img2 from '../assets/images/imagen2.png';
import img3 from '../assets/images/imagen3.png';
import { Container } from 'react-bootstrap';


function Main() {

    return (
    <Carousel>
    <Carousel.Item>
        <img
        className="w-100"
        src={img1}
        alt="First slide"
        />
    </Carousel.Item>

    <Carousel.Item>
        <img
        className=" w-100"
        src={img2}
        alt="Second slide"
        />
    </Carousel.Item>

    <Carousel.Item>
        <img
        className=" w-100"
        src={img3}
        alt="Third slide"
        />
    </Carousel.Item>
    </Carousel>
    
);
}

export default Main;