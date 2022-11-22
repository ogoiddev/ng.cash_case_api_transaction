import { Bell, Eye, EyeClosed, SignOut } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage } from "../Context/LocalStorage";
import { UserContext } from "../Context/UserContext";
import { BalanceCard, HomeContainer, HomeContentContainer, PerfilMenuCard } from "./pageStyles/Home";
import Transactions from "./Transactions";


export default function Home() {
  const [showBalance, setShowBalance] = useState(false);
  const { userData } = useContext(UserContext);
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

      <HomeContentContainer>

        <PerfilMenuCard>
          <div className="left-side">
            <span className="user-name">{`Ola, ${userData.user_name}`}</span>
            <span>{`Agencia: ${userData.account.agency}`}</span>
            <span>{`Conta: ${userData.account.number}`}</span>
          </div>

          <div className="right-side">
            {
              showBalance
                ? <span
                    onClick={() => setShowBalance(!showBalance)}
                    className="icons-header"
                  >
                    <EyeClosed weight="regular" size={28}/>
                  </span>
                : <span
                    onClick={() => setShowBalance(!showBalance)}
                    className="icons-header"
                  >
                    <Eye weight="regular" size={28}/>
                  </span>
            }
            <span
              onClick={() => alert("Desfrute o mundo com NG.Cash. Voce ganhou um presente resgate agora mesmo com o Cupom = 'OGOIDDEV_NGCASH'")}  
              className="icons-header"
            >
              <Bell
                weight="regular"
                size={28}
              />
            </span>
            <span
              onClick={() => {
                localStorage.removeItem('token')
                navigate('/login/register')
              }}
              className="icons-header">
              <SignOut
                weight="regular"
                size={28}
                />
            </span>
          </div>
        </PerfilMenuCard>
        <BalanceCard>
          <span className="balance">{`Saldo em conta: ${ showBalance ? `R$ ${(userData.account.balance / 100).toFixed(2).toString().replace('.', ',')}` : '******'}`}</span>
          <span>{`Ultima transferência: ${showBalance
            ? ((userData.account.debitAccountHistory.at(-1)?.value || 1) / 100).toFixed(2).toString().replace('.', ',') || '- - -'
            : '******'}`}
          </span>
          <span>{`Ultimo credito em conta: ${showBalance
            ? ((userData.account.creditAccountHistory.at(-1)?.value || 1) / 100).toFixed(2).toString().replace('.', ',') || '- - -'
            : '******'}`}</span>
        </BalanceCard>

        <Transactions />
        
      </HomeContentContainer>
      
    </HomeContainer>
    );
}
