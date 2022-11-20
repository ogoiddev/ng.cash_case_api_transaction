import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textLabel: string
}

export default function LogInput(props: InputProps) {
  return (
    <label htmlFor={props.name}>{props.textLabel}
      <input 
        {...props}      
      />
    </label>
  );
}
