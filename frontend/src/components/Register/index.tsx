import { useForm } from "react-hook-form";
import LogButton from "../LogButton";
import LogInput from "../LogInput";
import RegisterContainer from "./styles";

export default function Register() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
  });

  return (
    <RegisterContainer>

      <LogInput
        type="text"
        placeholder="Escolha um nome de usuário"
        textLabel="Usuário"
        minLength={3}
        { ...register('userName', {
                required: 'Required',
                pattern: {
                  value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=^.{8,60}$)/g,
                  message: 'invalid user name',
                },
              }) }
        aria-invalid={ errors.mail ? 'true' : 'false' }
      />

      <span>Seu nome de usuário deve ter no mínimo 3 caracteres e no máximo 20</span>

      <LogInput
        type="password"
        placeholder="Sua Senha"
        textLabel="Senha"
        { ...register('password', {
                required: true,
                minLength: {
                  value: 8,
                  message: 'Sua senha deve ter no mínimo 8 e no máximo 20 caracteres',
                },
              }) }
      />
      
      {errors.password && <p role="alert">{errors.password?.message}</p>}

        <span>Sua senha deve conter:<br/>
          * 8 caracteres no mínimo e 20 máximo;<br/>
          * Pelo menos 1 letra maiúscula;<br/>
          * Pelo menos 1 letra minuscula;<br/>
          * Pelo menos 1 numero.<br/>
        </span>

        <LogButton type="submit" buttonName="Criar minha conta NG.Cash"/>

    </RegisterContainer>
  );
}
