import { ButtonHTMLAttributes } from "react";
import LogButtonContainer from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string;
}

export default function LogButton(props: IButtonProps) {
  return (
    <LogButtonContainer
      {...props}
    >
      {props.buttonName}
    </LogButtonContainer>
  );
}
