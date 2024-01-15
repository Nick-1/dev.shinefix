import { FC } from "react";

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = (props: ButtonProps): FC => {
  const { text, onClick } = props;

  return (
    <button onClick={onClick}>{text}</button>
  );
};

export default Button;
