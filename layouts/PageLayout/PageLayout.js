import React, { useState } from "react";
import Head from "../../components/head";
import DesktopOnly from "../../components/DesktopOnly/DesktopOnly";
import MobileOnly from "../../components/MobileOnly/MobileOnly";
import { Wrapper, HeadingContainer, CenterContainer } from "./Styles";
import styled from "@emotion/styled";
import SocialLink from "../../components/SocialLinks/SocialLinks";

const Heading = styled.h1`
  font-family: Roboto Mono;
  font-weight: 500;
  font-style: italic;
  font-size: 18px;
`;

const DesktopNavigationContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;

  @media (max-width: 820px) {
    & {
      display: none;
    }
  }
`;

const MobileNavigationContainer = styled(({ className, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <div className="controls">
        <a href="#" onClick={e => setOpen(!open)}>
          <img src="/static/menu-icon.svg" alt="Menu" title="Menu" />
        </a>
      </div>
      <div className={`container ${open ? "open" : "closed"}`}>{children}</div>
    </div>
  );
})`
  display: none;

  .controls {
    margin: 30px;
  }

  .container {
    background-color: #1c1c1c;
    padding: 30px;
    border-top: 1px solid #464646;
    border-bottom: 1px solid #464646;
    overflow: hidden;

    &.closed {
      height: 0px;
      padding: 0px;
      border-top: none;
      border-bottom: none;
    }
  }

  @media (max-width: 820px) {
    & {
      display: block;
    }
  }
`;

const PageLayout = ({ children, nav }) => {
  return (
    <>
      <Head title="Shane Perreault - Software Engineer" />
      <MobileNavigationContainer>{nav}</MobileNavigationContainer>
      <Wrapper>
        <DesktopOnly>
          <HeadingContainer>
            <Heading>Shane Perreault</Heading>
            <SocialLink />
          </HeadingContainer>
        </DesktopOnly>
        <DesktopNavigationContainer>{nav}</DesktopNavigationContainer>
        {children}

        <MobileOnly>
          <CenterContainer>
            <SocialLink />
          </CenterContainer>
        </MobileOnly>
      </Wrapper>
    </>
  );
};

export const PageContainer = styled.div`
  max-width: 580px;
  margin: 0 auto;
  margin-top: 100px;

  @media (max-width: 820px) {
    margin: 0px 30px;
    margin-top: 0px;
    margin-bottom: 50px;
  }
`;

export default PageLayout;
