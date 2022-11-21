import { Bell, Eye, EyeClosed } from "phosphor-react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { BalanceCard, HomeContainer, PerfilMenuCard } from "./pageStyles/Home";


export default function Home() {
  const { userData } = useContext(UserContext)
  
  return (
    <HomeContainer>
      <PerfilMenuCard>
        <div className="left-side">
          <span>{userData.user_name}</span>
          <span>{userData.account.agency}</span>
          <span>{userData.account.number}</span>
        </div>

        <div className="right-side">
          <span><Bell size={32}/></span>
          <span><EyeClosed/></span>
          <span><Eye/></span>
        </div>
      </PerfilMenuCard>
      <BalanceCard>
        <span>{userData.account.balance}</span>
        <span>Ultima transferência: {userData.account.[-1]}</span>
        <span>Ultimo debito em conta: {userData.account.debitAccountId[-1]}</span>
      </BalanceCard>
    </HomeContainer>
    );
}
