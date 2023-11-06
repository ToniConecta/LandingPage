import React from "react";
import { Col, Row } from "react-bootstrap";
import { colorPalette } from "../../styles/partials/colors";
import { EntrieCompProps } from "../../types/interfaces/EntrieCompProps";

export const BlogEntrieComp = ({
  title,
  img,
  content,
  date,
}: EntrieCompProps) => {
  return (
    <Row
      style={{
        padding: "1rem",
        backgroundColor: "white",
        borderRadius: "1rem",
        marginBottom: "1rem",
        boxShadow: "0px 6px 12px rgba(20, 63, 156, 0.2)",
      }}
    >
      <Col>
        <Row style={{ marginBottom: "1rem" }}>
          <Col lg={1}>
            <img
              src={img}
              width="100%"
              alt=" "
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col lg={11}>
            <h3
              className="entrie-title"
              style={{
                color: colorPalette.strongAzure,
                fontWeight: "700",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                color: colorPalette.paragraphBaseline,
              }}
            >
              {new Date(date).toLocaleDateString()}
            </p>
          </Col>
        </Row>
        <p
          style={{
            fontSize: "1.2rem",
            color: colorPalette.paragraphBaseline,
          }}
        >
          {content}
        </p>
      </Col>
    </Row>
  );
};
