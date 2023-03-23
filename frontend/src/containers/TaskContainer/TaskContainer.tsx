import React from "react";
import { Container } from "@mui/material";

export const TaskContainer: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return <Container role="main">{children}</Container>;
};
