import Navbar from "../components/Navbar";
import {Container, Row, Col} from "react-bootstrap"
import nosotrosCafeteria from "../assets/images/nosotrosCafeteria.jpg"
import InfoNosotros from "../components/InfoNosotros";
import FooterNavigation from "../components/FooterNavigation";

const Nosotros = () => {
  return (
    <>
      <Navbar title={"NOSOTROS"} />
      <Container className="mt-5 my-5">
        <Row>
          <Col>
             <InfoNosotros
              title={"Nuestra Historia"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus neque euismod quam rhoncus, at blandit nulla ultricies. Pellentesque sollicitudin nunc purus, id ornare lorem condimentum eu. Mauris lacinia eu dui at lobortis. Phasellus ex arcu, finibus et justo eget, aliquet rhoncus enim. Nulla ipsum orci, pretium eu tellus nec, imperdiet sodales lorem."}
             />
            <InfoNosotros
              title={"Nuestra Historia"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus neque euismod quam rhoncus, at blandit nulla ultricies. Pellentesque sollicitudin nunc purus, id ornare lorem condimentum eu. Mauris lacinia eu dui at lobortis. Phasellus ex arcu, finibus et justo eget, aliquet rhoncus enim. Nulla ipsum orci, pretium eu tellus nec, imperdiet sodales lorem."}
             />
             <InfoNosotros
              title={"Nuestra Historia"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus neque euismod quam rhoncus, at blandit nulla ultricies. Pellentesque sollicitudin nunc purus, id ornare lorem condimentum eu. Mauris lacinia eu dui at lobortis. Phasellus ex arcu, finibus et justo eget, aliquet rhoncus enim. Nulla ipsum orci, pretium eu tellus nec, imperdiet sodales lorem. "}
             />
          </Col>
          <Col>
          <img src={nosotrosCafeteria} alt="" style={{borderRadius: "50px"}}></img>
          </Col>
        </Row>
      </Container>
      <FooterNavigation/>
    </>
  )
}
  
export default Nosotros;


