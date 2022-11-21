import { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveTokenOnLocalStorage } from "../../Context/LocalStorage";
import { UserContext } from "../../Context/UserContext";
import { loginToToken } from "../../services/loginApi";
import LogButton from "../LogButton";
import LogInput from "../LogInput";
import LoginContainer from "./styles";

export default function Login() {
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

  const handleFormChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.target.name === 'userName') {
      setUserName(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  }

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const userToSaveData = await loginToToken({ userName, password })
    
    if (userToSaveData instanceof AxiosError) {
      console.log(userToSaveData);
      
      return alert(`Sua requisição falhou ==> ${userToSaveData.response?.data.error}`)
    }
    
    setUserData(userToSaveData)
    saveTokenOnLocalStorage('token', userToSaveData.token)

    navigate('/home')
  }

  return (
    <LoginContainer >

      <LogInput
        type="text"
        name="userName"
        placeholder="Digite seu nome de usuário"
        texttolabel="Usuário"
        minLength={3}
        maxLength={20}
        onChange={handleFormChange}
        value={userName}
      />

      <LogInput
        type="password"
        name="password"
        placeholder="Sua Senha"
        texttolabel="Senha"
        minLength={8}
        maxLength={20}
        onChange={handleFormChange}
        value={password}
      />
        
      <LogButton
        onClick={handleLogin}
        disabled={isDisable}
        type="submit"
        buttonname="Login" />

    </LoginContainer>
  );
}
