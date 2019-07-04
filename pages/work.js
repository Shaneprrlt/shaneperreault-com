import React from "react";
import Nav from "../components/Nav/Nav";
import PageLayout, { PageContainer } from "../layouts/PageLayout/PageLayout";
import Heading from "../components/Heading/Heading";
import withData from "../utils/apollo";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const WORK_QUERY = gql`
  query WorkQuery {
    workExperiences {
      company
      position
      startDate
      endDate
      description
    }
  }
`;

const Work = () => {
  const { loading, error, data } = useQuery(WORK_QUERY, {
    notifyOnNetworkStatusChange: true
  });

  return (
    <PageLayout nav={<Nav />}>
      <PageContainer>
        <Heading>Past Work</Heading>
        {loading || error ? (
          <div>Loading...</div>
        ) : (
          <span>{data.workExperiences.length} Work Experiences</span>
        )}
      </PageContainer>
    </PageLayout>
  );
};

export default withData(Work);
