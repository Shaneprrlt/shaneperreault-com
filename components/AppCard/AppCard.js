import React from "react";
import Button from "../Button/Button";
import { CardWrapper, AppName, AppDescription } from "./Style";

const AppCard = ({ app }) => {
  return (
    <CardWrapper>
      <img src={app.photoUrl} title={app.name} alt={app.name} />
      <AppName>{app.name}</AppName>
      <AppDescription>{app.description}</AppDescription>
      <Button onClick={e => window.open(app.url, "_blank")}>Open App</Button>
    </CardWrapper>
  );
};

export default AppCard;
