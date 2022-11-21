import { AxiosError } from "axios";
import { Bell, Eye, EyeClosed, SignOut } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage } from "../Context/LocalStorage";
import { UserContext } from "../Context/UserContext";
import { loginValidate } from "../services/loginValidate";
import { BalanceCard, HomeContainer, PerfilMenuCard } from "./pageStyles/Home";
import Transactions from "./Transactions";


export default function Home() {
  const [showBalance, setShowBalance] = useState(false);
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      if (!getTokenFromLocalStorage('token')) {
        navigate('/login/register')
      }
    })()
  })

  
  return (
    <HomeContainer>
      <PerfilMenuCard>
        <div className="left-side">
          <span className="user-name">{`Ola, ${userData.user_name}`}</span>
          <span>{`Agencia: ${userData.account.agency}`}</span>
          <span>{`Conta: ${userData.account.number}`}</span>
        </div>

        <div className="right-side">
          {
            showBalance
            ? <span className="icons-header">
                  <EyeClosed weight="regular" size={28} onClick={() => setShowBalance(!showBalance)}/>
                </span>
              : <span className="icons-header">
                  <Eye weight="regular" size={28} onClick={() => setShowBalance(!showBalance)}/>
                </span>
          }
          <span className="icons-header"><Bell weight="regular" size={28}/></span>
          <span className="icons-header">
            <SignOut
              onClick={() => {
                localStorage.removeItem('token')
                navigate('/login/register')
              }}
              weight="regular"
              size={28}
            />
          </span>
        </div>
      </PerfilMenuCard>
      <BalanceCard>
        <span className="balance">{`Saldo em conta: ${ showBalance ? `R$ ${userData.account.balance / 100}` : '******'}`}</span>
        <span>{`Ultima transferência: ${showBalance ? userData.account.debitAccountHistory[-1] || '- - -' : '******'}`}</span>
        <span>{`Ultimo credito em conta: ${showBalance ? userData.account.creditAccountHistory[-1] || '- - -': '******'}`}</span>
      </BalanceCard>

      <Transactions/>
    </HomeContainer>
    );
}
