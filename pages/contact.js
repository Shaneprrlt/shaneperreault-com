import React from "react";
import Nav from "../components/Nav/Nav";
import PageLayout, { PageContainer } from "../layouts/PageLayout/PageLayout";
import Heading from "../components/Heading/Heading";

const Contact = () => (
  <PageLayout nav={<Nav />}>
    <PageContainer>
      <Heading>Contact</Heading>
    </PageContainer>
  </PageLayout>
);

export default Contact;
