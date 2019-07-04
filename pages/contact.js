import React from "react";
import Nav from "../components/Nav/Nav";
import PageLayout, { PageContainer } from "../layouts/PageLayout/PageLayout";
import Heading from "../components/Heading/Heading";
import ContactForm from "../components/ContactForm/ContactForm";
import withData from "../utils/apollo";
import { ContactParagraph } from "./Styles";

const Contact = () => (
  <PageLayout nav={<Nav />}>
    <PageContainer>
      <Heading>Contact</Heading>
      <ContactParagraph>
        Looking to hire an experienced software engineer? Leave me a message
        here. I’d love to discuss what you’re working on.
      </ContactParagraph>
      <ContactForm />
    </PageContainer>
  </PageLayout>
);

export default withData(Contact);
