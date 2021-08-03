import * as React from "react";
import styled from "@emotion/styled";
import * as CSS from "csstype";
import { Interpolation, Theme } from "@emotion/react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string,
  variation: "primary" | "secondary",
}

type ButtonVariations = {
  primary: CSS.Properties,
  secondary: CSS.Properties,
}

const commonStyles: CSS.Properties = {
  padding: "12px 16px",
}

const variantStyles: ButtonVariations = {
  primary: {
    backgroundColor: 'blue',
    color: 'white',
  },
  secondary: {
    backgroundColor: "transparent",
    border: "1px solid blue",
  },
};

export const CssPropButton = ({ children, variation, ...props }: ButtonProps) => {
  const type = variantStyles[variation];
  return <button css={[commonStyles, type] as Interpolation<Theme>} type="button" {...props}>{children}</button>
}


interface StyledButtonProps {
  children: string,
  variation: "primary" | "secondary",
}

export const StyledButton = styled.button<StyledButtonProps>(
  (commonStyles as Interpolation<Theme>),
  ({variation}) => variantStyles[variation] as Interpolation<Theme>
)
