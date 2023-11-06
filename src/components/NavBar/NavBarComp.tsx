import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavBarProps } from "../../types/interfaces/NavBarProps";
import { MAIN_ROUTES } from "../../constants/routes";
import { colorPalette } from "../../styles/partials/colors";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/navIcon/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

function NavBarComp({ tabItems }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    if (tabItems && tabItems.length) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const matchingTab = tabItems.find(({ routePath }) => {
          const target = document.querySelector(`#${routePath}`);
          if (target instanceof HTMLElement) {
            const targetPosition = target.offsetTop;
            return (
              scrollPosition >= targetPosition &&
              scrollPosition < targetPosition + target.clientHeight
            );
          }
          return false;
        });

        if (matchingTab) {
          setActiveTab(matchingTab.id);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [activeTab, tabItems]);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ boxShadow: `0px 6px 12px rgba(20, 63, 156, 0.2)` }}
      sticky="top"
    >
      <Container fluid="xxl">
        <Navbar.Brand href={`#${MAIN_ROUTES.HOME}`}>
          <Image src={Logo} style={{ width: "180px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {tabItems && tabItems.length && (
            <Nav variant="underline" activeKey={activeTab}>
              {tabItems.map(({ id, label, routePath }) => (
                <Nav.Item key={id}>
                  <Nav.Link
                    key={id}
                    eventKey={id}
                    as={HashLink}
                    to={`#${routePath}`}
                    style={{
                      color: colorPalette.midAzure,
                    }}
                  >
                    {label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;
