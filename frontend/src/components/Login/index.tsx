import LogButton from "../LogButton";
import LogInput from "../LogInput";
import LoginContainer from "./styles";

export default function Login() {
  return (
    <LoginContainer>

        <LogInput type="text" name="userName" placeholder="Digite seu nome de usuário" textLabel="Usuário"  />

        <LogInput type="password" name="password" placeholder="Sua Senha" textLabel="Senha" />
        
        <LogButton type="submit" buttonName="Login"/>

    </LoginContainer>
  );
}
