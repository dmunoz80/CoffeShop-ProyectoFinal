import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/img1_carrusel_Home.png';
import img2 from '../assets/images/img2_carrusel_Home.png';
import img3 from '../assets/images/img3_carrusel_Home.png';


function Main() {

    return (
    <Carousel className='carousel-inner my-2'>
    <Carousel.Item>
        <img
        className="img-Carousel w-100"
        src={img1}
        alt="First slide"
        />
    </Carousel.Item>

    <Carousel.Item>
        <img
        className="img-Carousel w-100"
        src={img2}
        alt="Second slide"
        />
    </Carousel.Item>

    <Carousel.Item>
        <img
        className="img-Carousel w-100"
        src={img3}
        alt="Third slide"
        />
    </Carousel.Item>
    </Carousel>
    
);
}

export default Main;