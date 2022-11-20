import LogButton from "../LogButton";
import LogInput from "../LogInput";
import LoginContainer from "./styles";

export default function Login() {
  
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <LoginContainer onSubmit={handleLogin}>

      <LogInput
        type="text"
        name="userName"
        placeholder="Digite seu nome de usuário"
        textLabel="Usuário"
        minLength={3}
        maxLength={20}
      />

      <LogInput
        type="password"
        name="password"
        placeholder="Sua Senha"
        textLabel="Senha"
        minLength={8}
        maxLength={20}
      />
        
        <LogButton type="submit" buttonName="Login"/>

    </LoginContainer>
  );
}
