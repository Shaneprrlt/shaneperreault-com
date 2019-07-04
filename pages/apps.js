import React from "react";
import Nav from "../components/Nav/Nav";
import PageLayout, { PageContainer } from "../layouts/PageLayout/PageLayout";
import Heading from "../components/Heading/Heading";

const Apps = () => (
  <PageLayout nav={<Nav />}>
    <PageContainer>
      <Heading>Apps</Heading>
    </PageContainer>
  </PageLayout>
);

export default Apps;
