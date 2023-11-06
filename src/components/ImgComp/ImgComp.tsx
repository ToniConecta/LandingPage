import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function ImgComp() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image
            src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg"
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ImgComp;
