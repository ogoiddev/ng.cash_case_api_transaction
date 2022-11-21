import { ButtonHTMLAttributes } from "react";
import LogButtonContainer from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonname: string;
}

export default function LogButton(props: IButtonProps) {
  return (
    <LogButtonContainer
      {...props}
    >
      {props.buttonname}
    </LogButtonContainer>
  );
}
