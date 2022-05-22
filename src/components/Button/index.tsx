import * as React from "react";
import { IButtonProp } from "./models";
import { ButtonDefaultTheme } from "./themes";
import styled from "styled-components";

const RawButton = (props: IButtonProp) => {
  const { text, className } = props;
  return (
    <button
      className={className}
      onClick={() => alert("Clicked a style component")}
    >
      {text}
    </button>
  );
};
export const Button = styled(RawButton)`
  ${(props) => {
    return { ...ButtonDefaultTheme };
  }}
`;
