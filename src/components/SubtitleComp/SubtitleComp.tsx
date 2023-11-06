import React from "react";
import { SubtitleCompProps } from "../../types/interfaces/SubtitleCompProps";
import { colorPalette } from "../../styles/partials/colors";
import { StrongComp } from "../StrongComp/StrongComp";

export const SubtitleComp = ({ children }: SubtitleCompProps) => {
  const subHeadingStyle = {
    color: colorPalette.strongestAzure,
    fontWeight: "lighter",
  };
  return (
    <h2 style={subHeadingStyle}>
      <StrongComp color={colorPalette.strongestAzure} children={children} />
    </h2>
  );
};
