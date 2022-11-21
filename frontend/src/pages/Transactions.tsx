import { useContext, useMemo } from "react";
import { UserContext } from "../Context/UserContext";
import { TransactionContainer } from "./pageStyles/Transaction";

export default function Transactions() {
  const { userData } = useContext(UserContext)
  const userAccount = useMemo(() => userData.account, [userData]);
  
  const debitHistory = userAccount.debitAccountHistory;
  const creditHistory = userAccount.creditAccountHistory;
    
  const HistoryTransactions = [...debitHistory, ...creditHistory]

  return (
    <TransactionContainer>
      <div className="history">
        {HistoryTransactions.some(obj => Object.keys(obj).length) ? HistoryTransactions.map((each, i) => {
          return (
            <div className="transaction-list" key={i}>
              <hr/>
                <div>
                  <span className="transfer-date">{`data: ${each.created_at}`}</span>
                  <span className="amount">{`Valor: ${each.value}`}</span>
                  <span
                    style={{color: `${(e: { target: { value: string; }; }) => e.target.value === 'debito' ? 'red' : 'green'}`}}
                    className="transfer-type"
                  >
                    {each.debited_account_id === userData.account_id ? 'debito' : 'credito'}
                  </span>
                </div>         
              <hr/>
            </div>
          )
        }) : <p key="empty">Voce ainda nao fez nenhuma transferência e nao recebeu nenhum credito ate o momento</p>}
      </div>
    </TransactionContainer>
    );
}
