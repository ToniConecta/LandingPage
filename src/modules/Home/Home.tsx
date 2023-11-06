import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { colorPalette } from "../../styles/partials/colors";
import { StrongComp } from "../../components/StrongComp/StrongComp";
import HomeImg from "../../assets/homeImg/giftoni.gif";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  const headingStyle = {
    fontWeight: 400,
    fontSize: "2rem",
    color: "white",
  };

  return (
    <Container
      id="home"
      fluid="xxl"
      className="home"
      style={{
        paddingInline: "5%",
        display: "flex",
        height: "100%",
        paddingBlock: "10%",
        marginBottom: "10%",
      }}
    >
      <Container
        style={{
          paddingBlock: "3%",
          height: "min-content",
        }}
      >
        <Row>
          <Col
            lg={8}
            xxl={8}
            style={{
              marginBlock: "5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "right",
              textAlign: "right",
            }}
          >
            <h1 style={headingStyle}>
              Transformando talleres en{" "}
              <StrongComp color={colorPalette.midAzure}>
                Negocios Digitalmente Exitosos
              </StrongComp>
            </h1>
          </Col>
          <Col
            lg={4}
            xxl={4}
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              margin: "0 auto",
            }}
          >
            <Image
              src={HomeImg}
              style={{
                width: "291px",
                height: "576px",
                margin: "0 auto",
                marginTop: "4px",
                objectFit: "contain",
                rotate: "-5deg",
              }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
