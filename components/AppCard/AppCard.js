import React, { useState } from "react";
import Button from "../Button/Button";
import { CardWrapper, AppName, AppDescription } from "./Styles";
import Lightbox from "react-image-lightbox";

const AppCard = ({ app }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <CardWrapper>
        <img
          src={app.photoUrl}
          title={app.name}
          alt={app.name}
          onClick={() => setLightboxOpen(true)}
        />
        <AppName>{app.name}</AppName>
        <AppDescription>{app.description}</AppDescription>
        <Button onClick={e => window.open(app.url, "_blank")}>Open App</Button>
      </CardWrapper>

      {lightboxOpen && (
        <Lightbox
          mainSrc={app.photoUrl}
          imageTitle={app.name}
          imageCaption={app.url}
          onCloseRequest={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

export default AppCard;
