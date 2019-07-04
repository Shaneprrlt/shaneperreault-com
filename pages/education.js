import React from "react";
import Nav from "../components/Nav/Nav";
import PageLayout, { PageContainer } from "../layouts/PageLayout/PageLayout";
import Heading from "../components/Heading/Heading";
import EducationCard from "../components/EducationCard/EducationCard";
import AcademicAwardCard from "../components/AcademicAwardCard/AcademicAwardCard";
import withData from "../utils/apollo";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const EDUCATION_QUERY = gql`
  query EducationQuery {
    educationExperiences {
      institution
      degreeProgram
      startDate
      endDate
      description
    }

    academicAwards {
      award
      institution
      year
      description
    }
  }
`;

const Education = () => {
  const { loading, error, data } = useQuery(EDUCATION_QUERY, {
    notifyOnNetworkStatusChange: true
  });

  return (
    <PageLayout nav={<Nav />}>
      <PageContainer>
        <Heading>Education</Heading>
        {loading || error ? (
          <div>Loading...</div>
        ) : (
          data.educationExperiences.map(educationExperience => {
            return (
              <EducationCard
                key={educationExperience.institution}
                educationExperience={educationExperience}
              />
            );
          })
        )}
        <Heading>Academic Awards</Heading>

        {loading || error ? (
          <div>Loading...</div>
        ) : (
          data.academicAwards.map(academicAward => {
            return (
              <AcademicAwardCard
                key={academicAward.award}
                academicAward={academicAward}
              />
            );
          })
        )}
      </PageContainer>
    </PageLayout>
  );
};
export default withData(Education);
