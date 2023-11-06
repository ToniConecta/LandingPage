import React from "react";
import { StrongProps } from "../../types/interfaces/StrongComp";

export const StrongComp = ({ children, color }: StrongProps) => {
  return (
    <strong style={{ color: color, fontWeight: "900" }}>{children}</strong>
  );
};
