import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  margin-bottom: 60px;

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

export const Name = styled.h1`
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
`;

export const Duration = styled.h2`
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 26px;
`;

export const Description = styled.div`
  ul {
    li {
      margin-bottom: 8px;
    }

    li:last-child {
      margin-bottom: 0;
    }
  }
`;
