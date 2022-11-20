import { InputHTMLAttributes } from "react";
import { LabelInputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textLabel: string
}

export default function LogInput(props: InputProps) {
  return (
    <LabelInputContainer htmlFor={props.name}><p>{props.textLabel}</p>
      <input
        {...props}      
      />
    </LabelInputContainer>
  );
}
