import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  max-width: 445px;
`;

export const FormSection = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    font-style: italic;
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  background-color: #ffffff;
  color: #000000;
  outline: none;
  border: 1px solid #ffffff;
  height: 45px;
  font-size: 18px;
  font-family: SFMono;
  font-weight: 200;
  padding: 0px 12px;
  width: calc(100% - 24px);
`;

export const TextArea = styled.textarea`
  background-color: #ffffff;
  color: #000000;
  outline: none;
  border: 1px solid #ffffff;
  min-height: 120px;
  font-size: 18px;
  line-height: 24px;
  font-family: SFMono;
  font-weight: 200;
  padding: 12px;
  width: calc(100% - 24px);
`;
