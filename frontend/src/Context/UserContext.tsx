import { createContext, ReactNode, useState } from 'react';

type UserContextProps = {
  children: ReactNode;
}

const IUserDataType = {
  id: '',
  user_name: '',
  password: '',
  role: '',
  account_id: '',
  account: {
    id: '',
    balance: 0,
    agency: '',
    number: '',
    debitAccountId: [{} as ITransaction],
    creditAccountId: [{} as ITransaction],
  },
  token: '',
}

export type ITransaction = {
  debited_account_id: string;
  credited_account_id: string;
  value: number
  id: string
  created_at: string 
}

export type IUserDataType = {
  id: string;
  user_name: string;
  password: string;
  role: string;
  account_id: string;
  account: {
    id: string;
    balance: number;
    agency: string;
    number: string;
    debitAccountId: ITransaction[] | [];
    creditAccountId: ITransaction[] | [];
  },
  token: string
}

type UserContextType = {
  userData: IUserDataType;
  setUserData: React.Dispatch<React.SetStateAction<IUserDataType>>,
}

const initialValue = {
  userData: IUserDataType,
  setUserData: () => {}
}

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [userData, setUserData] = useState(initialValue.userData);

  

  return (
    <UserContext.Provider value={ {userData, setUserData} }>
      {children}
    </UserContext.Provider>
  );
};
