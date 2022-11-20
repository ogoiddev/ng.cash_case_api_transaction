import LogButtonContainer from "./styles";

interface IProps {
  buttonName: string;
}

export default function LogButton(props: IProps) {
  return (
    <LogButtonContainer
      type="submit"
    >
      {props.buttonName}
    </LogButtonContainer>
  );
}
