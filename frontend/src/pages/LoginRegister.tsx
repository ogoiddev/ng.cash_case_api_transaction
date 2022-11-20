import { useState } from "react";
import LogButton from "../components/LogButton";
import Login from "../components/Login";
import Register from "../components/Register";
import { LoginRegisterContainer } from "./pageStyles/LoginRegister";

export default function LoginRegister() {
  const [isLoginSelected, setLoginSelected] = useState(true);

  return (
    <LoginRegisterContainer>
      <div className="forms-container">
        {isLoginSelected ? <h2>Ola, bem vindo a sua conta</h2> : <h2>Criar conta e aproveitar o mundo com NG.Cash</h2>}
        <div className="toggle-login-register">
          <LogButton
            onClick={() => setLoginSelected(true)}
            disabled={isLoginSelected}
            buttonName="Login"
            id="Login"
            type="button"
          />
            
          <LogButton
            onClick={() => setLoginSelected(false)}
            disabled={!isLoginSelected}
            buttonName="Cadastrar"
            
            type="button"
          />
        </div>

        <div className="form-ctn">
          { isLoginSelected ? <Login/> : <Register/> }
        </div>
      </div>
    </LoginRegisterContainer>
  );
}
