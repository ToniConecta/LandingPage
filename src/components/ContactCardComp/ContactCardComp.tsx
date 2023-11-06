import React from "react";
import { Linkedin } from "../Icons/LinkedinIcon/Linkedin";
import { colorPalette } from "../../styles/partials/colors";
import { Col, Container, Row } from "react-bootstrap";

export const ContactCardComp = () => {
  return (
    <Container
      style={{
        width: "10rem",
        justifyContent: "center",
        padding: "4px",
        backgroundColor: `${colorPalette.midAzure}`,
      }}
    >
      <Row>
        <Col>
          <a
            href="https://www.linkedin.com/in/braulioestradaalfonso/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin
              width="100px"
              height="100px"
              color={colorPalette.midAzure}
            />
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Vistit my linkedIn Page to see more details of my career</p>
        </Col>
      </Row>
    </Container>
  );
};
