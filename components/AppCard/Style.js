import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  margin-bottom: 60px;

  max-width: 445px;

  img {
    max-width: 80%;
  }

  @media (max-width: 820px) {
    img {
      max-width: 100%;
    }
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const AppName = styled.h1`
  font-size: 18px;
  font-style: italic;
  font-weight: 500;
`;

export const AppDescription = styled.p`
  margin-bottom: 30px;
`;
