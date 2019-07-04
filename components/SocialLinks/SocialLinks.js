import React from "react";
import styled from "@emotion/styled";

const links = [
  {
    key: "github-link",
    icon: "/static/github-logo.svg",
    title: "@Shaneprrlt | GitHub",
    url: "https://github.com/Shaneprrlt"
  },
  {
    key: "linkedin-link",
    icon: "/static/linkedin-button.svg",
    title: "Shane Perreault | LinkedIn",
    url: "https://linkedin.com/in/shaneprrlt"
  }
];

const SocialLinks = ({ className }) => {
  return (
    <div className={className}>
      {links.map(link => {
        return (
          <a href={link.url} key={link.key}>
            <img src={link.icon} title={link.title} alt={link.title} />
          </a>
        );
      })}
    </div>
  );
};

const StyledSocialLinks = styled(SocialLinks)`
  display: flex;

  > * {
    margin-right: 20px;
  }

  > *:last-child {
    margin-right: 0px;
  }
`;

export default StyledSocialLinks;
