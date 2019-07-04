import React from "react";
import { CardWrapper, Name, Duration, Description } from "./Styles";

const AcademicAwardCard = ({ academicAward }) => {
  return (
    <CardWrapper>
      <Name>{academicAward.award}</Name>
      <Duration>
        {academicAward.institution} - {academicAward.year}
      </Duration>
      <Description>{academicAward.description}</Description>
    </CardWrapper>
  );
};

export default AcademicAwardCard;
