import styled from "@emotion/styled";

export const CustomBody = styled.body`
  background-color: #202020;
  color: #ffffff;
  font-family: SFMono, monospace, sans-serif;
  font-weight: 200;
  margin: 0;
  padding: 0;
  height: 100%;
`;

export const Paragraph = styled.div`
  margin-top: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;

  @media (max-width: 820px) {
    display: block;

    button {
      margin-bottom: 16px;
    }

    button:last-child {
      margin-bottom: 0px;
    }
  }
`;

export const ContactParagraph = styled.div`
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  margin-bottom: 30px;
`;
