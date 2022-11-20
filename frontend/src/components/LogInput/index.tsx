
interface IProps {
  type: string;
  name: string;
  placeHolder: string;

}

export default function LogInput(props: IProps) {
  return (
    <label htmlFor={props.name}>{props.name}
      <input 
        type={props.type}
        placeholder={props.placeHolder}
      
      />
    </label>
  );
}
