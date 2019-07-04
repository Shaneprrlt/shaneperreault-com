import React from "react";
import Nav from "../components/Nav/Nav";
import PageLayout, { PageContainer } from "../layouts/PageLayout/PageLayout";
import Heading from "../components/Heading/Heading";

const Education = () => (
  <PageLayout nav={<Nav />}>
    <PageContainer>
      <Heading>Education</Heading>
      <Heading>Academic Awards</Heading>
    </PageContainer>
  </PageLayout>
);

export default Education;
