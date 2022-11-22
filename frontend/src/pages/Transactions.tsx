import { AxiosError } from "axios";
import { SortAscending, SortDescending } from "phosphor-react";
import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage } from "../Context/LocalStorage";
import { UserContext } from "../Context/UserContext";
import { axiosTransfer } from "../services/transferApi";
import { TransactionContainer } from "./pageStyles/Transaction";
import CurrencyInput from 'react-currency-input-field';

interface IHistoryToShow {
  debited_account_id: string;
  credited_account_id: string;
  value: number
  id: string
  created_at: string 
  date: string;
  time: string;
  dateTimeToSort: Date;
}

export default function Transactions() {
  const { userData } = useContext(UserContext);
  const [userName, setUserName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [historyToShow, setHistoryToShow] = useState<IHistoryToShow[]>([]);
  const [historyData, setHistoryData] = useState<IHistoryToShow[]>([]);
  const [dateSelected, setDateSelected] = useState<string>('');
  const userAccount = useMemo(() => userData.account, [userData]);
  const navigate = useNavigate();
  
  
  useEffect(() => {
    const debitHistory = userAccount.debitAccountHistory;
    const creditHistory = userAccount.creditAccountHistory;
    const HistoryTransactions = [...debitHistory, ...creditHistory]
      .map(each => {
        const date = `${`0${new Date(each.created_at).getDate()}`.slice(-2)}/${new Date(each.created_at).getMonth()}/${new Date(each.created_at).getFullYear()}`;
        
        const time = `${`0${new Date(each.created_at).getHours() - 3}`.slice(-2)}:${`0${new Date(each.created_at).getMinutes()}`.slice(-2)}:${new Date(each.created_at).getSeconds()}`;

        return {
          ...each,
          dateTimeToSort: new Date(each.created_at),
          date,
          time,
        }
      }).sort((a, b) => b.dateTimeToSort.getTime() - a.dateTimeToSort.getTime())
        
      setHistoryData(HistoryTransactions)
  }, [userAccount])

  useEffect(() => {
    setHistoryToShow(historyData)
  }, [historyData])
  
  const handleFilterCashIn = () => {
    const orderList = historyData.filter(each => each.credited_account_id === userData.account.id);
    setHistoryToShow(orderList)
  }

  const handleFilterCashOut = () => {
    const orderList = historyData.filter(each => each.debited_account_id === userData.account.id);
    setHistoryToShow(orderList)
  }

  const handleClearFilter = () => {
    setHistoryToShow(historyData)
  }

  const handleNearestDateOrder = () => {

    setHistoryToShow((prev) => prev.sort((a, b) => b.dateTimeToSort.getUTCMinutes() - a.dateTimeToSort.getUTCMinutes()))
  }

  const handleOldestDateOrder = () => {
    setHistoryToShow((prev) => prev.sort((a, b) => a.dateTimeToSort.getTime() - b.dateTimeToSort.getTime()))
  }

  const handleFilterByDate = () => {
    setHistoryToShow((prev) => prev.filter(each => {
      console.log(each.date, dateSelected);
      
      return each.date === dateSelected
    }))
  }
  
  const handleToTransfer = async () => {
    const token = getTokenFromLocalStorage('token');
    if (!token) {
      alert('Voce nao possui token de autorização. Faca um login')
      navigate('/login/register')
    }
    
  const transferTry = await axiosTransfer({ userName, amount: Number(amount) || 0 }, token)
    if (transferTry instanceof AxiosError) {
      setUserName('')
      setAmount('')
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
          <label htmlFor="credit"><span>Para o usuário</span>
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              type="text"
              minLength={3}
              maxLength={20}
              name="credit"
            />
          </label>
          <label htmlFor="value"><span>Valor da transferência em R$</span>
            <CurrencyInput
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Ex: R$ 1.485,33"
              
              intlConfig={{ locale: 'pt-br', currency: 'BRL' }}
              />
              
          </label>
          <button
            
            type="button"
            name="transfer"
            onClick={handleToTransfer}
          >
            Enviar
          </button>
        <h3>-</h3>
        </form>

      </div>


      <div className="filter-options">
        <section className="search-by-date">

          <label htmlFor="date"><span>Buscar por data</span>
            <input
              onChange={(e) => setDateSelected(e.target.value.split('-').reverse().join('/'))}
            
              type="date"
              />
            </label>
          <button onClick={handleFilterByDate}>Filtrar por data selecionada</button>
        </section>


        <section className="by-cash-filter">

          <button
            onClick={handleFilterCashIn}
            type="button"
            >
            Entradas (cash-in)
          </button>
          <button 
            onClick={handleFilterCashOut}
            type="button"
            >
            Saídas (cash-out)
          </button>
        
        </section>

        <button 
            className="clear-sort"
            onClick={handleClearFilter}
            type="button"
          >
            Todas Transações
        </button>
        
        <section className="order-by">
          <button 
            onClick={handleNearestDateOrder}
            type="button"
            >
            <SortAscending size={28} />
          </button>
          <button 
            onClick={handleOldestDateOrder}
            type="button"
            >
            <SortDescending size={28} />
          </button>
        </section>
        </div>

        <div className="history">
        <h3>Histórico</h3>
        {historyToShow.some(obj => Object.keys(obj).length) ? historyToShow.map((each, i) => {
          return (
            <div className="transaction-list" key={i}>
              

                  <span className="transfer-date">{`Data da transferência: ${each.date}`}</span>
                  <span className="transfer-date">{`Hora (GMT-0300): ${each.time}`}</span>
                  <span className="amount">{`Valor: ${(each.value / 100).toFixed(2).toString().replace('.', ',')}`}</span>
                  <span
                    style={{color: `${each.debited_account_id === userData.account_id ? 'orange' : 'green'}`}}
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
