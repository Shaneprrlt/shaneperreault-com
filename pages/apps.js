import React from "react";
import Nav from "../components/Nav/Nav";
import PageLayout, { PageContainer } from "../layouts/PageLayout/PageLayout";
import Heading from "../components/Heading/Heading";
import AppCard from "../components/AppCard/AppCard";
import withData from "../utils/apollo";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const APPS_QUERY = gql`
  query AppsQuery {
    apps {
      name
      photoUrl
      description
      url
    }
  }
`;

const Apps = props => {
  const { loading, error, data } = useQuery(APPS_QUERY, {
    notifyOnNetworkStatusChange: true
  });

  return (
    <PageLayout nav={<Nav />}>
      <PageContainer>
        <Heading>Apps</Heading>

        {loading || error ? (
          <div>Loading...</div>
        ) : (
          data.apps.map(app => {
            return <AppCard key={app.url} app={app} />;
          })
        )}
      </PageContainer>
    </PageLayout>
  );
};

export default withData(Apps);
