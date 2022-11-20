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

        <div className="toggle-login-register">
          <LogButton
            onClick={() => setLoginSelected(true)}
            buttonName="Login"
            type="button" />
          <LogButton
            onClick={() => setLoginSelected(false)}
            buttonName="Criar Conta"
            type="button" />
        </div>

        <div className="form">
          { isLoginSelected ? <Login/> : <Register/> }
        </div>
      </div>
    </LoginRegisterContainer>
  );
}
