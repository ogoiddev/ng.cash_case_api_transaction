import { InputHTMLAttributes } from "react";
import { LabelInputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  texttolabel: string
}

export default function LogInput(props: InputProps) {
  return (
    <LabelInputContainer htmlFor={props.name}><p>{props.texttolabel}</p>
      <input
        {...props}  
      />
    </LabelInputContainer>
  );
}
