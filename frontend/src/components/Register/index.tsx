import { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveTokenOnLocalStorage } from "../../Context/LocalStorage";
import { UserContext } from "../../Context/UserContext";
import { loginToToken } from "../../services/loginApi";
import { IUserLogDTO, registerNewUser } from "../../services/registerNewUserApi";
import LogButton from "../LogButton";
import LogInput from "../LogInput";
import RegisterContainer from "./styles";

export default function Register() {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isDisable, setIsDisable] = useState(true);
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();


  useEffect(() => {
    if (password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=^.{8,60}$)/g) && userName.length > 2) {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
  }, [userName, password])

  const handleUserNameChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.target.name === 'userName') {
      setUserName(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataForm = new FormData(e.currentTarget);
    const DTO = {
      userName: dataForm.get('userName'),
      password: dataForm.get('password')
    }

    const data = await registerNewUser(DTO as IUserLogDTO)

    if (data instanceof AxiosError) {
      return alert(`Sua requisição falhou ==> ${data.response?.data.error}`)
    }
    
    const userToSaveData = await loginToToken({ userName: userName, password: password })
    
    setUserData(userToSaveData)
    saveTokenOnLocalStorage('token', userToSaveData.token)

    navigate('/home')
  }


  return (
    <RegisterContainer onSubmit={handleRegister} autoComplete="off">

      <LogInput
        type="text"
        name="userName"
        placeholder="Escolha um nome de usuário"
        textLabel="Usuário"
        minLength={3}
        maxLength={20}
        value={userName}
        onChange={handleUserNameChange}
      />

      <span>Seu nome de usuário deve ter no mínimo 3 caracteres e no máximo 20</span>

      <LogInput
        type="password"
        name="password"
        placeholder="Sua Senha"
        textLabel="Senha"
        minLength={8}
        maxLength={20}
        value={password}
        onChange={handleUserNameChange}
      />
      
        <span>Sua senha deve conter:<br/>
          * 8 caracteres no mínimo e 20 máximo;<br/>
          * Pelo menos 1 letra maiúscula;<br/>
          * Pelo menos 1 letra minuscula;<br/>
          * Pelo menos 1 numero.<br/>
        </span>
        
      <LogButton
        disabled={isDisable}
        type="submit"
        buttonName="Criar minha conta NG.Cash" />


    </RegisterContainer>
  );
}
