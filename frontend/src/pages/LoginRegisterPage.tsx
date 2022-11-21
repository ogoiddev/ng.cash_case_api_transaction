import { useState } from "react";
import LogButton from "../components/LogButton";
import Login from "../components/Login";
import Register from "../components/Register";
import { LoginRegisterPageContainer } from "./pageStyles/LoginRegister";

export default function LoginRegisterPage() {
  const [isLoginSelected, setLoginSelected] = useState(true);

  return (
    <LoginRegisterPageContainer>
      <div className="forms-container">
        {isLoginSelected ? <h2>Olá, bora ver como esta sua conta NG.cash</h2> : <h2>Criar conta e aproveitar o mundo com NG.Cash</h2>}
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
    </LoginRegisterPageContainer>
  );
}
