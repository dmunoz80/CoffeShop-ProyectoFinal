import Navbar from "../components/Navbar";
import {Container, Row, Col} from "react-bootstrap"
import nosotrosCafeteria from "../assets/images/nosotrosCafeteria.jpg"
import InfoNosotros from "../components/InfoNosotros";
import FooterNavigation from "../components/FooterNavigation";

const Nosotros = () => {
  return (
    <>
      <Navbar title={"NOSOTROS"} />
      <Container className="nosotros">
        <Row>
          <Col>
             <InfoNosotros
              title={"Nuestra Historia"}
              content={"Tres Jovenes que para conservar la energía durante largas y arduas horas de trabajo se hicieron fanáticos del café. Esos primeros granos de café, que probaron entre una intensa variedad y especias del mundo se encontraban en cada taza de café que bebían. Es por esto que decideron ofrecer a cada cliente una invitación a llevarse parte de ese mundo -su mundo- a sus hogares. Y especialmente, compartirlo. "}
             />
            <InfoNosotros
              title={"Nuestra Misión"}
              content={"Entregar alegría y proveer de energía el espíritu humano para avanzar en tu día a día."}
             />
             <InfoNosotros
              title={"Nuestros Productos"}
              content={"El aroma al café y a unos granos recién tostados, es la mejor bienvenida para brindarles nuestros productos. Pero eso es sólo el comienzo, ya que también tenemos accesorios para fanáticos que necesitan alegrar su día."}
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


