import React, { useState } from "react";
import { LinkCompProps } from "../../types/interfaces/LinkProps";
import { colorPalette } from "../../styles/partials/colors";

export const LinkComp = ({ children, link }: LinkCompProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    paddingInline: "0.5rem",
    borderRadius: "5px",
    color: "white",
    backgroundColor: colorPalette.strongAzure,
    textDecoration: "none",
    transition: "all 100ms",
  };

  const linkHoverStyle = {
    color: colorPalette.strongestAzure,
    paddingInline: "0.5rem",
    borderRadius: "5px",
    backgroundColor: colorPalette.lightAzure,
    textDecoration: "none",
    transition: "all 100ms",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <a
      href={link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isHovered ? linkHoverStyle : linkStyle}
    >
      {children}
    </a>
  );
};
