import React, { useState } from "react";
import { Linkedin } from "../Icons/LinkedinIcon/Linkedin";
import { colorPalette } from "../../styles/partials/colors";
import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { SubtitleComp } from "../SubtitleComp/SubtitleComp";

export const Footer = () => {
  const [LinkedInHovered, setLinkedInHovered] = useState(false);

  const handleLinkedInMouseEnter = () => {
    setLinkedInHovered(true);
  };

  const handleLinkedInMouseLeave = () => {
    setLinkedInHovered(false);
  };

  const renderTooltip = (message: string) => (
    <Tooltip id="button-tooltip">{message}</Tooltip>
  );

  return (
    <footer className="bg-light text-center text-lg-start text-muted">
      <div className="mt-auto"></div>
      <div
        className="text-center p-3"
        style={{ background: "rgba(0, 0, 0, 0.05)", position: "relative" }}
      >
        <Container>
          <Row>
            <Col>
              <SubtitleComp>Contacto</SubtitleComp>
            </Col>
          </Row>
          <Row style={{ height: "40%" }}>
            <Col xxl={12} sm={12} style={{ padding: "16px" }}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 200, hide: 200 }}
                overlay={renderTooltip("Ve nuestro perfil de LinkedIn")}
              >
                <a href="https://www.linkedin.com/company/toniconecta/about/">
                  <Linkedin
                    onMouseEnter={handleLinkedInMouseEnter}
                    onMouseLeave={handleLinkedInMouseLeave}
                    height="25px"
                    width="25px"
                    color={colorPalette.strongestAzure}
                    style={{
                      marginInline: "4px",
                      cursor: "pointer",
                      transform: LinkedInHovered ? "scale(1.25)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </a>
              </OverlayTrigger>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};
