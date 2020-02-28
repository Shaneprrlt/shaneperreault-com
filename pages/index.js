import React from "react";
import Nav from "../components/Nav/Nav";
import PageLayout, { PageContainer } from "../layouts/PageLayout/PageLayout";
import { Paragraph, ButtonContainer } from "./Styles";
import Button from "../components/Button/Button";
import Heading from "../components/Heading/Heading";
import Router from "next/router";
import withData from "../utils/apollo";

const RESUME_PDF_URL =
  "https://shaneprrlt-s3.s3.amazonaws.com/Shane+Perreault+Resume+v3.pdf";

const Home = () => {
  const openResume = () => {
    window.open(RESUME_PDF_URL, "_blank");
  };

  return (
    <PageLayout nav={<Nav />}>
      <PageContainer>
        <Heading mobileOnly={true}>Shane Perreault</Heading>

        <img
          src="/static/profile-pic.png"
          style={{ width: "64px" }}
          alt="Shane Perreault"
          title="Shane Perreault"
        />

        <Paragraph>
          Full stack software engineer with 3+ years of experience working in
          internet startups.
        </Paragraph>

        <Paragraph>
          I am passionate about shipping beautiful products built using React
          and powered by GraphQL and REST APIs written in both Node and Rails.
        </Paragraph>

        <Paragraph>
          <div style={{ marginBottom: "16px" }}>
            <strong>Favorite technologies & tools</strong>
          </div>

          <img
            src="/static/favorite-technologies.svg"
            alt="React, GraphQL, Node.JS, Ruby on Rails, Postgres, SQL, AWS Lambda, Amazon Web Services, AWS"
            title="React, GraphQL, Node.JS, Ruby on Rails, Postgres, SQL, AWS Lambda, Amazon Web Services, AWS"
          />
        </Paragraph>

        <ButtonContainer>
          <Button style="primary" onClick={e => Router.push("/contact")}>
            Talk to me
          </Button>
          <Button style="secondary" onClick={openResume}>
            Download Resume (PDF)
          </Button>
        </ButtonContainer>
      </PageContainer>
    </PageLayout>
  );
};

export default withData(Home);
