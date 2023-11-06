import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ExpProps } from "../../types/interfaces/ExpProps";
import { colorPalette } from "../../styles/partials/colors";

export const ExpComp = ({ experiences, type }: ExpProps) => {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h3
            style={{
              color: colorPalette.strongAzure,
              fontSize: "2rem",
              paddingBottom: "1.5rem",
            }}
          >
            {type}
          </h3>
        </Col>
      </Row>
      {experiences.map(({ id, date, company, role, description }) => {
        return (
          <Row key={id}>
            <Col
              xs={2}
              xxl={6}
              style={{
                textAlign: "right",
                borderRight: `1px groove ${colorPalette.neutralGray2}`,
                paddingBottom: "5rem",
              }}
            >
              <p
                style={{
                  color: colorPalette.neutralGray3,
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: 0,
                }}
              >
                {date}
              </p>
            </Col>
            <Col xs={10} xxl={6} style={{ overflow: "auto" }}>
              <p
                style={{
                  color: colorPalette.strongAzure,
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: 0,
                }}
              >
                {company}
              </p>
              <p
                style={{
                  color: colorPalette.midAzure,
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: 0,
                }}
              >
                {role}
              </p>
              <p
                style={{
                  color: colorPalette.paragraphBaseline,
                  fontSize: "1rem",
                  fontWeight: 400,
                  marginBottom: 0,
                }}
              >
                {description}
              </p>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};
