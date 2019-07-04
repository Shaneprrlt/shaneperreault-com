import React from "react";
import { CardWrapper, Name, Duration, Description } from "./Styles";

const EducationCard = ({ educationExperience }) => {
  return (
    <CardWrapper>
      <Name>
        {educationExperience.institution} - {educationExperience.degreeProgram}
      </Name>
      <Duration>
        {educationExperience.startDate} - {educationExperience.endDate}
      </Duration>
      <Description>{educationExperience.description}</Description>
    </CardWrapper>
  );
};

export default EducationCard;
