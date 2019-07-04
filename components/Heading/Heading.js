import styled from "@emotion/styled";

const Heading = ({ className, mobileOnly, children }) => {
  return (
    <h1 className={`${className} ${mobileOnly ? "mobileOnly" : ""}`}>
      {children}
    </h1>
  );
};

const StyledHeading = styled(Heading)`
  display: block;
  font-family: Roboto Mono;
  font-weight: 200;
  font-style: italic;
  font-size: 30px;

  &.mobileOnly {
    display: none;

    @media (max-width: 820px) {
      & {
        display: block;
      }
    }
  }
`;

export default StyledHeading;
