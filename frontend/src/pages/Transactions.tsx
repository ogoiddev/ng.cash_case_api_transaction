import { AxiosError } from "axios";
import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage } from "../Context/LocalStorage";
import { UserContext } from "../Context/UserContext";
import { axiosTransfer, ITransferDTOReturns } from "../services/transferApi";
import { TransactionContainer } from "./pageStyles/Transaction";

export default function Transactions() {
  const { userData } = useContext(UserContext)
  const [userName, setUserName] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)
  const userAccount = useMemo(() => userData.account, [userData]);
  const navigate = useNavigate()
  
  const debitHistory = userAccount.debitAccountHistory;
  const creditHistory = userAccount.creditAccountHistory;
    
  const HistoryTransactions = [...debitHistory, ...creditHistory]

  const handleToTransfer = async () => {
    const token = getTokenFromLocalStorage('token');
    if (!token) {
      alert('Voce nao possui token de autorização. Faca um login')
      navigate('/login/register')
    }
    
    const transferTry = await axiosTransfer({ userName, amount }, token)
    if (transferTry instanceof AxiosError) {
      setUserName('')
      setAmount(0)
      console.log(transferTry);
      
      return alert(`'Algo de errado ocorreu. Tente novamente'${transferTry.message}`)
    }



      alert(`Transferência realizada com sucesso:
        de: ${userData.user_name}
        para: ${userName}
        Valor:  ${transferTry.value / 100}
        Data: ${transferTry.created_at}
      `)

    window.location.reload();
  }

  return (
    <TransactionContainer>

      <div className="form-transaction-ctn">
        <form>
          <h3>Faca uma transferência</h3>
          <label htmlFor="credit"><span>Nome do usuário</span>
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              type="text"
              minLength={3}
              maxLength={20}
              name="credit"
            />
          </label>
          <label htmlFor="value"><span>Valor da transferência</span>
            <input
              onChange={(e) => setAmount(Number(e.target.value))}
              value={amount}
              type="number"
              min={0}
              max={7000000000} />
          </label>
          <button
            
            type="button"
            name="transfer"
            onClick={handleToTransfer}
          >
            Enviar
          </button>
        </form>

      </div>


      <div className="history">
        <h3>Histórico</h3>
        {HistoryTransactions.some(obj => Object.keys(obj).length) ? HistoryTransactions.map((each, i) => {
          return (
            <div className="transaction-list" key={i}>
              

                  <span className="transfer-date">{`data: ${each.created_at}`}</span>
                  <span className="amount">{`Valor: ${(each.value / 100).toFixed(2).toString().replace('.', ',')}`}</span>
                  <span
                    style={{color: `${(e: { target: { value: string; }; }) => e.target.value === 'debito' ? 'red' : 'green'}`}}
                    className="transfer-type"
                  >
                    {each.debited_account_id === userData.account_id ? 'debito' : 'credito'}
                  </span>

              
            </div>
          )
        }) : <p key="empty">Voce ainda nao fez nenhuma transferência e nao recebeu nenhum credito ate o momento</p>}
      </div>
    </TransactionContainer>
    );
}
