import LogButton from "../LogButton";
import LogInput from "../LogInput";
import RegisterContainer from "./styles";

export default function Register() {
  return (
    <RegisterContainer>
      <form action="">
        <LogInput type="text" name="userName" placeholder="Digite seu nome" textLabel="Usuário"  />

        <LogInput type="password" name="password" placeholder="Sua Senha" textLabel="Senha" />
        
        <LogButton type="submit" buttonName="Criar minha conta NG.Cash"/>

      </form>
    </RegisterContainer>
  );
}
