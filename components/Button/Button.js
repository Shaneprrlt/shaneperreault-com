import React from "react";
import styled from "@emotion/styled";

const Button = ({ className, style, children, onClick }) => {
  return (
    <button className={`${className} ${style}`} onClick={onClick}>
      {children}
    </button>
  );
};

const StyledButton = styled(Button)`
  display: block;
  padding: 8px 20px;
  font-family: SFMono;
  font-style: italic;
  font-size: 18px;
  font-weight: 200;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  color: #000000;

  margin-right: 8px;
  cursor: pointer;
  outline: none;

  &:last-child {
    margin-right: 0px;
  }

  @media (max-width: 820px) {
    display: block;
    width: 100%;
    text-align: center;
  }

  &:hover {
    background-color: #f1f1f1;
    border: 1px solid #f1f1f1;
    color: #000000;
  }

  &:active {
    background-color: #ececec;
    border: 1px solid #ececec;
    color: #000000;
  }

  &.primary {
    background-color: #50e3c2;
    border: 1px solid #50e3c2;
    color: #083a2f;

    &:hover {
      background-color: #44c7aa;
      border: 1px solid #44c7aa;
      color: #083a2f;
    }

    &:active {
      background-color: #36b79a;
      border: 1px solid #36b79a;
      color: #030c0a;
    }
  }

  &.secondary {
    background-color: #b5dbd3;
    border: 1px solid #b5dbd3;
    color: #083a2f;

    &:hover {
      background-color: #a4ccc3;
      border: 1px solid #a4ccc3;
      color: #051511;
    }

    &:active {
      background-color: #81b3a8;
      border: 1px solid #81b3a8;
      color: #000000;
    }
  }
`;

export default StyledButton;
