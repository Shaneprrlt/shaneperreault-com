import React from "react";
import { CardWrapper, CompanyName, WorkDuration, Description } from "./Styles";

const WorkCard = ({ workExperience }) => {
  return (
    <CardWrapper>
      <CompanyName>
        {workExperience.company} - {workExperience.position}
      </CompanyName>
      <WorkDuration>
        {workExperience.startDate} - {workExperience.endDate}
      </WorkDuration>
      <Description>
        <ul>
          {workExperience.description.split("/").map((item, i) => (
            <li key={`${workExperience.company}-${i}`}>{item}</li>
          ))}
        </ul>
      </Description>
    </CardWrapper>
  );
};

export default WorkCard;
