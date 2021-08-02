import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: string,
  variation: "primary" | "secondary",
}

const Button = ({ children, variation }: ButtonProps) => (
  <button variation={variation} type="button">{children}</button>
);

export default Button;
